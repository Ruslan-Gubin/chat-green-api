import { UserAvatar } from "@/entities";
import { useContactSelect } from "@/features";
import { getPhoneContact } from "@/shared";

import styles from "./ChatHeaderConversation.module.scss";

const ChatHeaderConversation = ({}) => {
  const { activeContact } = useContactSelect();

  return (
    <div className={styles.root}>
      {activeContact && (
        <>
          <UserAvatar image={activeContact.avatar} />
          <h2 className={styles.name}>
            {activeContact.name
              ? activeContact.name
              : getPhoneContact(activeContact.id)}
          </h2>
        </>
      )}
    </div>
  );
};

export { ChatHeaderConversation };
