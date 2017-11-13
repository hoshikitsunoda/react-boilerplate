import React from 'react'
import { render } from 'react-dom'

// function GetTime(props) {
//   return <div>Current time is: {props.time}</div>
// }

const style = {
  border: '5px solid tomato',
  textAlign: 'center',
  padding: '100px',
  fontSize: '30px',
  color: 'pink',
  textShadow: '2px 2px 8px grey',
  borderRadius: '50%',
  boxShadow: 'inset 10px 10px 50px tomato'
}

class GetTime extends React.Component {
  render() {
    return <div style={style}>Current time is: {this.props.time}</div>
  }
}

function tick() {
  const current = new Date().toLocaleString()
  const time = <GetTime time={current} />

  render(time, document.querySelector('#app'))
}

window.setInterval(tick, 1000)
