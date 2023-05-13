import { useState } from 'react'

import PropTypes from 'prop-types'
export const CounterApp = ( { value } ) => {
    
    const [ counter, setCounter ] = useState(value)
    
    const contador = () => {
    //    setCounter(counter + 1);
        setCounter( (c) => c + 1 )
    }
    const restar = () => {
       setCounter(counter - 1);
        // setCounter( (c) => c - 1 )
    }
    const resetear = () => {
    //    setCounter(counter + 1);
        setCounter( value )
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <p>{ counter }</p>


            <button onClick={ contador }>
                +1
            </button>
            <button onClick={ restar }>
                -1
            </button>
            <button onClick={ resetear }>
                Reset
            </button>
        </>
      )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 1
}