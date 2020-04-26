import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    console.log("inside constructor-  method is called before anything else, when the component is initiated");
    this.state = {
      pearson:[]
      
    }
  }

  componentWillReceiveProps(newProps) {    
    console.log('Component WILL RECIEVE PROPS!', newProps);
 }

 componentDidUpdate(prevProps, prevState) {
  console.log('Component DID UPDATE!')
}

  componentWillMount(){
    console.log("inside componentWillMount: method is called right before the render method:");
  }
  
  componentDidMount(){
    console.log("inside componentDidMount: method is called after the component is rendered(to mount the details)");
    Axios.get("http://jsonplaceholder.typicode.com/users")
    .then(res => {
      console.log(res);
      this.setState({pearson: res.data})
    })
  }
  render() {
    console.log("inside render: method is required, and is the method that actual outputs HTML to the DOM.");
    return (
      <div>
        {this.state.pearson.map(pearson =>
        <li>id: {pearson.id}<br/>
        name: {pearson.name}<br/>
        {/* email: {pearson.email}<br/>
        phone: {pearson.phone}<br/> */}
        </li>
        )}
      </div>
    );
  }
}

export default App;
