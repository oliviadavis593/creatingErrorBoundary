import React, { Component } from "react";

class Currency extends Component {
  render() {
    const money = new Intl.NumberFormat(this.props.locacle, {
      style: "currency",
      currency: this.props.currency
    }).format(this.props.value);
    return <div className="currency">{money}</div>;
  }
}

export default Currency;

/*====== Creating error boundaries (#2)====== */
//Add basic component code
//declared a const names money that uses the Intl.NumberFormat object to create a currency amount
// Then simply displayed this money in the JSX output
//Currency.js ===> App.js
