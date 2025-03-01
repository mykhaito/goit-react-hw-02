// import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem//FriendListItem.jsx";
import styles from './FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.friendCard}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
