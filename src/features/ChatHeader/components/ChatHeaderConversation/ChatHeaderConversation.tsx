import { useMemo } from "react";
import { UserAvatar } from "@/entities";
import { useAppSelector } from "@/app/hooks/useAppSelector";
import { selectContacts } from "@/features/ChatUserList";
import { getPhoneContact } from "@/app/helpers/getPhoneContact";

import styles from "./ChatHeaderConversation.module.scss";

const ChatHeaderConversation = ({}) => {
  const {  activeContact } = useAppSelector(selectContacts);

  

  return (
    <div className={styles.root}>
      {activeContact && (
        <>
          <UserAvatar image={ activeContact.avatar } />
          <h2 className={styles.name}>{activeContact.name ? activeContact.name : getPhoneContact(activeContact.id)}</h2>
        </>
      )}
    </div>
  );
};

export { ChatHeaderConversation };
