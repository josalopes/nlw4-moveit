import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/7139440?s=400&u=d5f3d48c8e7ea7d09a6e3ac9131ae07dab2bf97e&v=4" alt="Josafá" />
      <div>
        <strong>Francisco Josafá</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level 1
        </p>
      </div>

    </div>
  )
}