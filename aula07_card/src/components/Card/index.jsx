import { useState } from 'react';
import styles from './styles.module.css'

const Card = () => {
    const [count, setCount] = useState(0);

    const counter = () => {
        return setCount(count++);
    }

    return (
        <div className={styles.card}>
            <p>Card {counter}</p>
        </div>
    )
}

export default Card;