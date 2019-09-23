import React, {memo, useState} from 'react'

const A = memo((props) => {
  console.log('A render')
  return (
    <div>
      {props.children}
      <p>A</p>
    </div>
  )
})

const B = memo((props) => {
  console.log('B render')
  return (
    <div>
      <p>B</p>
    </div>
  )
})

const C = memo((props) => {
  console.log('C render')
  return (
    <div>
      {props.children}
      <p>C</p>
    </div>
  )
})

function App() {
  const [state, setState] = useState(0)
  return (
    <div>
      <button onClick={() => {setState(state + 1)}}>{state}</button>
      <A>
        <p>App state: {state}</p>
      </A>
      <hr/>
      <A>
        <p>App</p>
      </A>
      <hr/>
      <B>
        <p>App state: {state}</p>
      </B>
      <hr/>
      <C/>
    </div>
  );
}

export default App
