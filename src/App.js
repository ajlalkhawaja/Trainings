import React from 'react';
import './App.scss';
import Main from './Main';

// function App() {
//   return (
//     <div>
//       <Main name="Ajlal" />
//       <button></button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ajlal',
      date: new Date(),
      showTime: true,
      showName: false,
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName() {
    this.setState({
      // String
      // name: 'Saad',

      // Object
      // name: {
      //   firstName: 'Khawaja',
      //   lastName: 'Haider',
      // },

      // Array
      // name: ['Ajlal', 'Haider', 'Khawaja'],

      showTime: false,
      showName: true,
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  // updateName = () => {
  //   this.setState({
  //     name: 'Saad',
  //   });
  // };

  render() {
    const timehtml = this.state.showTime ? null : (
      <h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
    );
    const nameToShow = this.state.showName ? 'Ajlal' : 'Khawja';
    return (
      <div className="App">
        <Main name={this.state.name} />
        {/* <h3>{timehtml}</h3>
        <p>{nameToShow}</p>
        <button className="btn btn-primary" onClick={this.updateName}>
          Click here to Show Time
        </button> */}
      </div>
    );
  }
}

export default App;

/* Class components
has its own state
has its own lifecycle
handles complexity

Functional components
presentational components
we have to use HOOKS for state and lifecycle



*/
