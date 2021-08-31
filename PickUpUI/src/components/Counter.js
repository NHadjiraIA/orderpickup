import React, { Component } from "react"; 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';


class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  render () {
    return (
      <div>

        <IconButton 
          aria-label="minus-item" 
          onClick={this.decrement}
        >
          <RemoveCircleIcon fontSize='large'/>
        </IconButton>
        {this.state.count}
        <IconButton 
          aria-label="add-item" 
          onClick={this.increment}
        >
          <AddCircleIcon fontSize='large'/>
        </IconButton>
      </div>
    )
  }
}
export default Counter;