import BaseTemplate from "../../templates/BaseTemplate";
import styles from "./styles.module.css";

const TeamInfo = () => {
  return (
    <BaseTemplate>
      <div className={styles.info_container}>
        <h1>Team Info</h1>
      </div>
    </BaseTemplate>
  );
};

export default TeamInfo;
