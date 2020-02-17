import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


function handleError(error) {
  return error.toString()
}


class App extends Component {
  state = {
    info: {},
    error: ''
  }
  // with FETCH
  // componentDidMount() {
  //   fetch('https://api.github.com/users/marclloasdasdpis')
  //     .then((response) => {
  //       console.log(response)
  //       // You need to "force" an error on the fetch since any status code
  //       // is rendered as ok. If the response is not ok, we throw an error
  //       if (!response.ok) {
  //         throw new Error(`There was a problem with your request. Error code: ${response.status}, ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => this.setState({info:data}))
  //     .catch((error) => {
  //       let errorString = `Your fetch request didn't work, it returned the following: ${error.toString()}`
  //       this.setState({
  //         error: errorString
  //       });
  //     });
  // }

  // WITH AXIOS
  async componentDidMount() {
    // 1st way with Try and Catch
    // try {
    //   const {data} = await axios('https://api.github.com/users/marcasdallopis')
    //   this.setState({info: data})
    // }
    // catch(error) {
    //   let errorString = `Your fetch request didn't work, it returned the following: ${error.toString()}`
    //   this.setState({
    //     error: errorString
    //   });
    // }
    // ---------------------------
    // 2n way just with a .catch after axios call
    const data = await
      axios('https://api.github.com/users/marsdsdcllopis').catch(error =>
        this.setState({
          error: handleError(error)
        })
      )
    if (data) {
      this.setState({
        info: data.data
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {
          this.state.error
            ? this.state.error
            : this.state.info.name
        }
      </div >
    );
  }
}


export default App;
