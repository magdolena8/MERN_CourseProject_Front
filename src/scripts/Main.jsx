import React from "react";

//styles
import styles from '../styles/Main.module.css'


const textStyles = {
  left: {
    backgroundImage: 'radial-gradient(125.88% 357.56% at 100% 100%, #DEABAB 53.08%, #FF0075 100%)',
    
  },
  right:{
    backgroundImage: 'radial-gradient(169.98% 789.43% at -69.98% 112.3%, #DEABAB 51.97%, #ED1779 100%)',

  }

}

function Main() {
  return (
    <div className={styles.main_block}>

      <div className={styles.text_block} style={textStyles.left}>
        Have you ever thought about what our reality would be if the progress took a
        different path?</div>
      <div className={styles.text_block} style={textStyles.right}>
        if yes, then we invite you to plunge into the world of an unfulfilled future,
        the world of neon, synthetic music and an eternal journey!
      </div>
    </div>
  )

}

export default Main;
