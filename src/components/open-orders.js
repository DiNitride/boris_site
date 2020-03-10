import React from 'react'

import Order from './order'


class OpenOrders extends React.Component {

  render() {
    return (
      <div>
          <h3>Open Orders</h3>
          {this.props.orders.map((order, index) => (
            <Order handleAction={() => this.props.handleClaim(order.orderId)} actionText='Claim' order={order}></Order>
          ))}
      </div>
    );
  }
}


export default OpenOrders
