import React, { Component } from "react";
import Currency from "./Currency";
import CurrencyError from "./CurrencyError";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="USD" />
          USA: <Currency value={21} locale="en-US" currency="USD" />
          {/* USA: <Currency value={21} locale="en-US" currency="US"/> creates an error*/}
        </CurrencyError>
      </div>
    );
  }
}

export default App;

/*====== Creating error boundaries (#1)====== */
//Objective: Display a currency in various locales and currencies
//How to do this:
//Can use Intl.NumberFormat object to format a given number as a currency (USD, JPY, EUR etc...)
//For Example: display 21 US dollars in Germany:
//<Currency value={21} locale="de-DE" currency="USD"/>
//App.js ===> Currency.js

/*====== Creating error boundaries (#3)====== */
//Invoking the Currency component
//What if happens if the currency selected is not valid?
//Error:
//RangeError: Invalid currency codes: US
//Solution:
//create an error boundary
//App.js ===> CurrencyError.js

/*====== Creating error boundaries (#7)====== */
//Now that we have an error boundary we can use it in the component tree at whichever point we choose
//We'll start by wrapping the 2 currencies in the error boundary
//Now when theres an error it will populate on the browser for the user
