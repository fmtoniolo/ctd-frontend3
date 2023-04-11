import {Link} from "react-router-dom";
import styles from "./styles.module.css";

const Card = props => {
  return (
    <div className={styles.card}>
      <div className={styles.team_info}>
        <Link to={"/info"}>
          <img src="src/assets/icon-info.png" alt="info" />
        </Link>
      </div>
      <Link className={styles.card_link_container}>
        <img src={props.img} alt={props.name} className={styles.img_card} />
        <p className={styles.team_name}>{props.name}</p>
      </Link>
    </div>
  );
};

export default Card;
