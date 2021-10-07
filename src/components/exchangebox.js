import React from "react";
import ReactDOM, { render }  from "react-dom";

class exchangebox extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
  return (
    <>
      <p>{this.props.currencyName.toUpperCase()}</p>
      <input
        type="text"
        value={this.props.currencyValue}
        onChange={(event) => {
          this.props.changeCurrency(
            event.target.value,
            this.props.currencyName
          );
        }}
      />
    </>
  );
}
}
export default exchangebox;