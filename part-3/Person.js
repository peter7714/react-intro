const Person = (props) => {
    let msg;
    if(props.age < 18){
        msg = 'you must be 18';
    } else {
        msg = 'please go vote!'
    }
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <p>Learn more about this person!</p>
            <h3>{msg}</h3>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}