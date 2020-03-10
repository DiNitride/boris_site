import React from 'react'
import styled from 'styled-components'

import OpenOrders from './components/open-orders'
import ClaimedOrders from './components/claimed-orders'

const { REACT_APP_AUTH, REACT_APP_BORIS_API_ENDPOINT } = process.env 

const Main = styled.div`
  background: black;
  color: white;
  margin: 0px;
  padding 20px;
  font-family: 'Ubuntu', sans-serif;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openOrders: [],
      claimedOrders: []
    }
  }
  
  async refresh() {
    // TODO: Use Promises.all for this
    console.log(REACT_APP_BORIS_API_ENDPOINT + "/orders/open")

    const respOpen = await fetch(
      REACT_APP_BORIS_API_ENDPOINT + "/orders/open", 
      {
        headers: new Headers({
          'Authorization': REACT_APP_AUTH
        })
      }
    )
    const jsonOpen = await respOpen.json()
    

    console.log(REACT_APP_BORIS_API_ENDPOINT + "/orders/in-progress")

    const respProgress = await fetch(
      REACT_APP_BORIS_API_ENDPOINT + "/orders/in-progress", 
      {
        headers: new Headers({
          'Authorization': REACT_APP_AUTH
        })
      }
    )

    const jsonProgress = await respProgress.json()

    this.setState({ openOrders: jsonOpen.orders, claimedOrders: jsonProgress.orders })
    console.log(this.state)
  }

  async componentDidMount() {
    await this.refresh()
  }

  async handleClaim(orderId) {
    const respClaim = await fetch(REACT_APP_BORIS_API_ENDPOINT + "/orders/claim/" + orderId,
    {
      method: 'POST',
      headers: new Headers({
        'Authorization': REACT_APP_AUTH
      })
    })
    const jsonClaim = await respClaim.json()
    console.log(jsonClaim)
    await this.refresh()
  }

  async handleUnclaim(orderId) {
    const respUnclaim = await fetch(REACT_APP_BORIS_API_ENDPOINT + "/orders/unclaim/" + orderId,
    {
      method: 'POST',
      headers: new Headers({
        'Authorization': REACT_APP_AUTH
      })
    })
    const jsonUnclaim = await respUnclaim.json()
    console.log(jsonUnclaim)
    console.log(this)
    await this.refresh()
  }

  async handleComplete(orderId) {
    const respComplete = await fetch(REACT_APP_BORIS_API_ENDPOINT + "/orders/complete/" + orderId,
    {
      method: 'POST',
      headers: new Headers({
        'Authorization': REACT_APP_AUTH
      })
    })
    const jsonComplete = await respComplete.json()
    await this.refresh()
  }

  render() {

    return (
      <Main>
        <header>
          <h1>Boris Orders</h1>
        </header>
        <OpenOrders handleClaim={(orderId) => this.handleClaim(orderId)} orders={this.state.openOrders}></OpenOrders>
        <ClaimedOrders handleUnclaim={(orderId) => this.handleUnclaim(orderId)} handleComplete={(orderId) => this.handleComplete(orderId)} orders={this.state.claimedOrders}></ClaimedOrders>
      </Main>
    )

  } 
}

export default App;
