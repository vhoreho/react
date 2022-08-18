import { useState } from 'react';
import { Form } from './components/Form';
import styles from './App.module.css';


function App() {
  const [cards, setCards] = useState([]);

  function handleAddCards(value) {
    setCards([...cards, value]);
    console.log(cards);
  }

  return (
    <div className={styles.app}>
      <Form handleAdd={handleAddCards} />

      {cards.length && cards.map(card => <div>{card.name}</div>)}
    </div >
  );
}

export default App;
