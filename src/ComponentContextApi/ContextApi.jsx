import React from 'react'
import {ThemeContext} from './CommonContext'

function ContextApi() {
  return (
    <div className='App'>
        <h1>Context Api</h1>
        <ThemeContext.Provider>
            <h1>Complete and easy example for context Api</h1>
        </ThemeContext.Provider>

    </div>
  )
}

export default ContextApi