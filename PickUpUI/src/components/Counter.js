import React, { Component } from "react"; 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';

//qty = quantity
class Counter extends Component {
  
  constructor(props) {
    super(props)
    // this.state = {
    //   count: props.qty
    // }
  }

  
  render () {
    return (
      <div>

        <IconButton 
          aria-label="minus-item" 
          onClick={() => this.props.decrement(this.props.index)}
        >
          <RemoveCircleIcon fontSize='large'/>
        </IconButton>
          <h2>{this.props.qty}</h2>
        <IconButton 
          aria-label="add-item" 
          onClick={() => this.props.increment(this.props.index)}
        >
          <AddCircleIcon fontSize='large'/>
        </IconButton>
      </div>
    )
  }
}
export default Counter;