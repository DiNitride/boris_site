import React from 'react'

import Order from './order'


class OpenOrders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: props.orders
    }
  }

  render() {
    return (
      <div>
          <h3>Open Orders</h3>
          {this.state.orders.map((order, index) => (
            <Order actionText='Claim' order={order}></Order>
          ))}
          <Order actionText='Claim' order={{'orderId': '123456', 'price': 20, 'itemName': 'Test'}}></Order>
          <Order actionText='Claim' order={{'orderId': '123455ty3tge6', 'price': 20, 'itemName': 'Test'}}></Order>
          <Order actionText='Claim' order={{'orderId': '1rfwegstgdh23456', 'price': 20, 'itemName': 'Test'}}></Order>
          <Order actionText='Claim' order={{'orderId': '1234grwhstdasrdg56', 'price': 20, 'itemName': 'Test'}}></Order>
      </div>
    );
  }
}


export default OpenOrders
