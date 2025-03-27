import React from 'react'
import Home from './Pages/Home/Home'
import { Context } from '../../material-ui/src/hooks/Contexts'
import basketReducer, { INITIALIZE } from './hooks/BasketReducer'

export default function App() {

  const [state, dispatch] = React.useReducer(basketReducer, INITIALIZE)

  return (
    <Context.Provider  value={{state , dispatch}}>
      <Home/>
    </Context.Provider>
  )
}
