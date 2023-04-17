const Tweet = (prop) => {
    return (
        <div>
            <h1>{prop.username}</h1>
            <h3>{prop.firstName}</h3>
            <h3>{prop.date}</h3>
            <p>{prop.msg}</p>
        </div>
    )
}