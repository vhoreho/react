import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import './App.css';

function App() {
    const Person = {
        name: 'Peter',
        age: 24,
        gender: 'male'
    }
    const routes = ['home', 'about us', 'contact', 'news'];

    return (
        <div className='App'>
            <Header routes={routes} />
            <main>
                <h1>Hello world </h1>
                <Content person={Person} />
            </main>
            <Footer />
        </div>
        )
}

export default App