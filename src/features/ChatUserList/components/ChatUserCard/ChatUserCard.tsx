import { FC, memo } from "react";
import { UserAvatar } from "@/entities";
import { IActiveChats } from "../../libs/types/IActiveChats";
import { getPhoneContact } from "@/app/helpers/getPhoneContact";

import styles from "./ChatUserCard.module.scss";

interface ChatUserCardProps {
  user: IActiveChats;
  active: boolean;
  clickContact: (user: IActiveChats) => void;
}

const ChatUserCard: FC<ChatUserCardProps> = memo((props) => {
  const { user, active, clickContact } = props;
  
  return (
    <li
      onClick={() => clickContact(user)}
      className={active ? `${styles.root} ${styles.active}` : styles.root}
    >
      <UserAvatar image={user.avatar} size="md" />
      <div className={styles.user_info__container}>
        <div className={styles.userInfo}>
          <span className={styles.name}>{user.name ? user.name : getPhoneContact(user.chatId)}</span>
          {/* <span>{user.name ? getPhoneContact(user.id) : ''}</span> */}
        </div>
        <span className={styles.last_message}>{user.name ? getPhoneContact(user.chatId) : ''}</span>
      </div>
    </li>
  );
});

ChatUserCard.displayName = 'ChatUserCard'

export { ChatUserCard };
