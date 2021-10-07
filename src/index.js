import React from "react";
import ReactDOM  from "react-dom";
import exchangebox from "./components/exchangebox.js"

class money extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        PLN: 0,
        USD: 0
        }

        this.usdtopln = this.usdtopln.bind(this);
    }

    usdtopln(value, scale) {
        switch (scale) {
            case "USD":
             this.setState({ PLN : value / 3.93, USD: value });
             return;
            case "PLN":
            this.setState({ USD : value * 3.93,PLN: value });
            return;
        }
    }

render() {
    return (
      <main>
        <exchangebox
          currencyName="USD"
          currencyValue={this.state.USD}
          usdtopln={this.usdtopln}
        />

        <exchangebox
          currencyName="PLN"
          currencyValue={this.state.PLN}
          usdtopln={this.usdtopln}
        />
      </main>
    );
  }
};
ReactDOM.render(<money />, document.getElementById("root"));
