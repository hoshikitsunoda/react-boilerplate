import React from 'react'
import { render } from 'react-dom'

// render(<div>Hi, welcome to React!</div>, document.querySelector('#app'))

// function update() {
//   const date = new Date()
//   const element = (
//     <div>
//       Current time is: {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
//     </div>
//   )
//   render(element, document.querySelector('#app'))
// }
//
// window.setInterval(update, 1000)

function GetTime(props) {
  return <div>Current time is: {props.time}</div>
}

function tick() {
  const current = new Date().toLocaleString()
  const time = <GetTime time={current} />

  render(time, document.querySelector('#app'))
}

window.setInterval(tick, 1000)
