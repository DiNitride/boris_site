import React from 'react'

import Order from './order'

class ClaimedOrders extends React.Component {

  render() {
    return (
      <div>
          <h3>Claimed Orders</h3>
          {this.props.orders.map((order, index) => (
            <Order unclaimable={true} handleUnclaim={() => this.props.handleUnclaim(order.orderId)} handleAction={() => this.props.handleComplete(order.orderId)} actionText='Complete' order={order}></Order>
          ))}
      </div>
    );
  }
}


export default ClaimedOrders
