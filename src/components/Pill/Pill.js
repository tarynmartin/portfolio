import styles from './Pill.module.css';

const Pill = ({text, image}) => {
  return (
    <div className={styles.pill}>
      {image}
      <span>{text}</span>
    </div>
  )
}

export default Pill;