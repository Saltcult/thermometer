import React from "react";
import ReactDOM  from "react-dom";
import exchangebox from "./components/exchangebox"

class exchangebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        PLN: 0;
        USD: 0;
        }
        
        this.usdtopln = this.usdtopln.bind(this);
    }

    usdtopln(value, scale){
        switch (scale) {
            case "USD"
            this.setState {(PLN : value / 3.93, USD: value)};
            case "PLN"
            this.setState {(USD : value * 3.93,PLN: value)};
            return;
        }
    }
};

