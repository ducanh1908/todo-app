import React from "react";

import styles from "../pragraph/pragraph.module.css";
console.log(styles);
Pragraph.propTypes = {};

function Pragraph(props) {
  return (
    <p className={styles.pragraph}>
      lorem ipsum dolor sit amet, consectetur adip
    </p>
  );
}

export default Pragraph;
