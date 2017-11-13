import React from 'react'
import { render } from 'react-dom'

function GetTime(props) {
  return <div>Current time is: {props.time}</div>
}

function tick() {
  const current = new Date().toLocaleString()
  const time = <GetTime time={current} />

  render(time, document.querySelector('#app'))
}

window.setInterval(tick, 1000)
