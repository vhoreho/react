function Content({person}) {
    console.log(person)
    return <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <p>{person.gender}</p>
    </div>
}

export default Content