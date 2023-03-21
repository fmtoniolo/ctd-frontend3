import { useState } from 'react';
import Card from '../Card';
import styles from './styles.module.css';

const Button = () => {

    const [cards, setCard] = useState([]);

    const addCard = () => {
        setCard([...cards, cards.length])
    }

    const clearCards = () => {
        setCard([])
    }

    return (
        <>
        <div className="buttons">
        <button onClick={clearCards} className={styles.clear}>Limpar</button>
        <button onClick={addCard} className={styles.button}>
            Adicionar card
        </button>
        </div>
        {cards.map((index) => {
            return <Card key={index} />
        })}
        </>
    )
}

export default Button;