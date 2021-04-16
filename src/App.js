import React from "react";
import "./App.css";


const strTest=(str)=>{
  const __CALCULATE = /^\d[.]\d(?:[+*\*]\d[.]\d)+$/;
  const test = __CALCULATE.test(str);
  return (test ?  true : false);
 }

const number = [
  {
    id: 0,
    text: "AC",
    class: "options",
  },
  {
    id: 1,
    text: "±",
  },
  {
    id: 2,
    text: "%",
  },
  {
    id: 3,
    text: "÷",
  },
  {
    id: 4,
    text: "7",
  },
  {
    id: 5,
    text: "8",
  },
  {
    id: 6,
    text: "9",
  },
  {
    id: 7,
    text: "×",
  },
  {
    id: 8,
    text: "4",
  },
  {
    id: 9,
    text: "5",
  },
  {
    id: 10,
    text: "6",
  },
  {
    id: 11,
    text: "-",
  },
  {
    id: 12,
    text: "1",
  },
  {
    id: 13,
    text: "2",
  },
  {
    id: 14,
    text: "3",
  },
  {
    id: 15,
    text: "+",
  },
  {
    id: 16,
    text: <i class="fas fa-history"></i>,
  },
  {
    id: 17,
    text: "0",
  },
  {
    id: 18,
    text: ".",
  },
  {
    id: 19,
    text: "=",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      result: "",
    };
    this.initialize = this.initialize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  initialize = () => {};

  
  dividedBy = () =>{}

  calculate = () => {
    const value = this.state.result.split('');
    // if(strTest(this.state.result)){
    //   console.log('errorrrrrrrr')
    // }else{
    //   try {
    //   const result = eval(this.state.result);
    //   console.log(result);
    //   this.setState({ data: result });
    // } catch (e) {
    //   this.setState({ data: "error" });
    //   console.log(e);
    // }
    // }
    
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ result: "", data: "" });
    console.log(this.state.result);
    const value = e.target.textContent;
    console.log(value);

    switch (value) {
      case "AC":
        this.setState({ result: "", data: "" });
        break;
      case "=":
        this.calculate();
        break;
      case "±":
        this.setState({result:this.state.result});
      case "÷":
        this.setState({result:this.state.result+"/"});
      case "0":
        break;
      default:
        this.setState({ result: this.state.result + value });
    }
  };

  render() {
    return (
      <div id="calculator">
        <div id="display">
          <Options />
          <Display data={this.state.data} result={this.state.result} />
        </div>
        <div class="main">
          <div id="button-container">
            {number.map((item) => (
              <Number
                text={item.text}
                number={item.id}
                onClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { result, data } = this.props;
    return (
      <form className="form">
        <input name="result" value={result} />
        <input name="entry" value={data} />
      </form>
    );
  }
}

class Number extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, number } = this.props;
    return (
      <a id={number} className="btn" onClick={this.props.onClick}>
        {text}
      </a>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="options">
        <a>
          <i className="fas fa-sun"></i>
        </a>
        <a>
          <i className="fas fa-moon"></i>
        </a>
      </div>
    );
  }
}

export default App;
