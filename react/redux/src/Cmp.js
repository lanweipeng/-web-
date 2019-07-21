import React, { Component } from 'react'
import { connect } from 'react-redux'
class Cmp extends Component {
    constructor(...args) {
        super(...args)
    }
    render() {
        return ( 
        <div> { this.props.name } </div>
        )
    }
}
export default connect((state, props) => {
    return state.company
})(Cmp)