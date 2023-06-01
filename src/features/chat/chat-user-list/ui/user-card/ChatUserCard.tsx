import { FC, memo } from "react";
import { UserAvatar } from "@/entities";
import { getPhoneContact } from "@/shared";
import { IActiveChats, useContactAction } from "../../model";

import styles from "./ChatUserCard.module.scss";

interface ChatUserCardProps {
  user: IActiveChats;
  active: boolean;
}

const ChatUserCard: FC<ChatUserCardProps> = memo(({user, active}) => {
  const { setActiveContact } = useContactAction()
 
  return (
    <li
      onClick={() => setActiveContact(user)}
      className={active ? `${styles.root} ${styles.active}` : styles.root}
    >
      <UserAvatar image={user.avatar} size="md" />
      <div className={styles.user_info__container}>
        <div className={styles.userInfo}>
          <span className={styles.name}>{user.name ? user.name : getPhoneContact(user.chatId)}</span>
        </div>
        <span className={styles.last_message}>{user.name ? getPhoneContact(user.chatId) : ''}</span>
      </div>
    </li>
  );
});

ChatUserCard.displayName = 'ChatUserCard'

export { ChatUserCard };
