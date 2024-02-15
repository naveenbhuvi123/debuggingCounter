//  B:1 component class is written wrongly
import {Component} from 'react'

import './index.css'

//  class component written incorrectly
class Counter extends Component {
  state = {count: 0}

  //    B:2 onDecrement the value is directly assigned to the count
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  //    B:3 onIncrement the value is directly assigned to the count
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    //  Destructuring the count is done wrongly

    const {count} = this.state
    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
