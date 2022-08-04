function Header({routes}) {
    console.log(routes)
    return <header style={{
        background: 'red',
        color: 'white'
    }}>
        <nav>
            <ul>
                {routes.map(item => <li key={Math.floor(Math.random()* 10)}>{item}</li>)}
            </ul>
        </nav>
    </header>
}

export default Header