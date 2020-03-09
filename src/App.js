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

  render() {

    return (
      <Main>
        <header>
          <h1>Boris Orders</h1>
        </header>
        <OpenOrders orders={this.state.openOrders}></OpenOrders>
        <ClaimedOrders orders={this.state.claimedOrders}></ClaimedOrders>
      </Main>
    )

  } 
}

export default App;
