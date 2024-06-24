export function Age({ age }) {
    return (
        <div>
            {age > 18 ? <p>`La tua età è: {age}`</p> : <p>`Sei molto giovane!`</p>}
        </div>
    )
}

