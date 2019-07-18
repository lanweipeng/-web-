import React,{Component} from 'react';
import './App.css';
import Cmp from'./Cmp'
import {connect } from 'react-redux'
class App extends Component{
  
  fn(){
    this.props.setName('zhangsan')
  }
  render(){
    
    return ( <div >
      <input type="button" value="改名" onClick={this.fn.bind(this)}/>
      {this.props.name}<Cmp/></div>
  );
  }
    
}

export default connect(function(state,props){
  return state
},{
  setName(name){
    return {
      type:'set_name',
      name
    }
  }
})(App);