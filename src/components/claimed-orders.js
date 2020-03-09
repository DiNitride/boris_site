import React from 'react'

import Order from './order'

class ClaimedOrders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: props.claimedOrders
    }
  }

  async handleUnclaim(orderId) {
    console.log('Unclaim' + orderId)
  }

  async handleComplete(orderId) {
    console.log('Complete' + orderId)
  }

  render() {
    return (
      <div>
          <h3>Claimed Orders</h3>
          {this.state.orders.map((order, index) => (
            <Order unclaimable={true} handleUnclaim={() => this.handleUnclaim(order.orderId)} handleComplete={() => this.handleComplete(order.orderId)} actionText='Complete' order={order}></Order>
          ))}
          <Order unclaimable={true} actionText='Complete' order={{'orderId': '123456', 'price': 20, 'itemName': 'Test'}}></Order>
          <Order unclaimable={true} actionText='Complete' order={{'orderId': '123455ty3tge6', 'price': 20, 'itemName': 'Test'}}></Order>
          <Order unclaimable={true} actionText='Complete' order={{'orderId': '1rfwegstgdh23456', 'price': 20, 'itemName': 'Test'}}></Order>
          <Order unclaimable={true} actionText='Complete' order={{'orderId': '1234grwhstdasrdg56', 'price': 20, 'itemName': 'Test'}}></Order>
      </div>
    );
  }
}


export default ClaimedOrders
