import React from 'react'
import { render } from 'react-dom'

const style = {
  border: '5px solid tomato',
  textAlign: 'center',
  padding: '100px',
  fontSize: '30px',
  textShadow: '2px 2px 8px grey',
  boxShadow: 'inset 0 -10px 50px tomato'
}

class GetTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return <div style={style}>Current time is: {this.state.date.toLocaleTimeString()}</div>
  }
}

render(<GetTime />, document.querySelector('#app'))
