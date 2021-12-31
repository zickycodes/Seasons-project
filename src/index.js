import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


const Spinner = (props) => {
  return (
    <div className = "ui active dimmer"> 
      <div className = "ui big text loader">
        {props.message}
      </div>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {lat: null, errMessage: ""}
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  helperFunc () {
    if(!this.state.lat && !this.state.errMessage) {
      return <div><Spinner message = "Accept Location Request!"/></div>
    }

    if(this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat = {this.state.lat}/>
    }

    if(!this.state.lat && this.state.errMessage) {
      return <div>{this.state.errMessage}</div>
    }
  }

  render () {
    return (
      this.helperFunc()
    ) 
  }

}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
