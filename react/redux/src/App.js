import React,{Component} from 'react';
import './App.css';
import Cmp from'./Cmp'
import {connect } from 'react-redux'
class App extends Component{
  
  fn(){
    this.props.setName('zhangsan')
  }
  addAge(){
    this.props.addAge(1)
  }
  render(){
    
    return ( <div >
      <input type="button" value="改名" onClick={this.fn.bind(this)}/>
      <input type="button" value="+1" onClick={this.addAge.bind(this)}/>
      {this.props.name}age:{this.props.age}<Cmp/></div>
  );
  }
    
}

export default connect(function(state,props){
  return state.user
},{
  setName(name){
    return {
      type:'set_name',
      name
    }
  },
  addAge(n){
    return {
      type:'add_age',
      n
    }
  }
})(App);