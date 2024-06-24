import { useState, useEffect } from 'react'
import CounterDisplay from './CounterDisplay'
function Counter({ initialValue, incrementValue }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log(`Il valore del contatore ora è: ${counter}`)
    }, [counter])

    const handleClickAdd = () => {
        setCounter(counter + incrementValue)
    }

    const handleClickRemove = () => {
        setCounter(counter - incrementValue)
    }

    const handleClickReset = () => {
        setCounter(counter == initialValue)
    }
    return (
        <>
            <CounterDisplay counter={counter}></CounterDisplay>
            <button onClick={handleClickAdd}>Aggiungi 1 unità</button>
            <button onClick={handleClickRemove}>Rimuovi 1 unità</button>
            <button onClick={handleClickReset}>Reset al valore iniziale</button>

        </>

    )
}

export default Counter