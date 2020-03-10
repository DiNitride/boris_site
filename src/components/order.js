import React from 'react'
import styled from 'styled-components'

const Orderbox = styled.div`
  border-radius: 10px;
  background: white;
  color: black;
  padding: 5px;
  margin: 5px 0px;
`

const ActionButton = styled.button`
  border: black 2px solid;
  border-radius: 5px;
  margin-left: 5px;
`

const OrderID = styled.span`
  margin-right: 5px;
`

const OrderDetails = styled.span`
margin-right: 5px`

class Order extends React.Component {

  render() {
    let unclaimButton

    if (this.props.unclaimable) {
      unclaimButton = <ActionButton onClick={this.props.handleUnclaim}>Unclaim</ActionButton>
    } 

    return (
      <Orderbox>
        <OrderID>
          {this.props.order.orderId}
        </OrderID>
        <OrderDetails>
        ${this.props.order.price} - {this.props.order.itemName}
        </OrderDetails>
        {unclaimButton}
        <ActionButton onClick={this.props.handleAction}>{this.props.actionText}</ActionButton>
        
      </Orderbox>
    )
  }
}

export default Order