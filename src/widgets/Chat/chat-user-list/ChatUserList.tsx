import {  useEffect } from "react";
import { useViewer } from "@/entities";
import { ChatUserCard, SearchContact,  useContactAction, useContactSelect } from "@/features";

import styles from "./ChatUserList.module.scss";


const ChatUserList = () => {
  const { ApiTokenInstance, IdInstance } = useViewer()
  const { activeChats, loading, searchContact, activeContact } = useContactSelect();
  const { fetchAllChats } = useContactAction()
  

  useEffect(() => {
    if (!ApiTokenInstance || !IdInstance) return;
    fetchAllChats({
      instance: IdInstance,
      token: ApiTokenInstance,
    })
  }, []);


  const contactsList = searchContact ? [searchContact] : activeChats

  return (
    <>
      <SearchContact />
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <ul className={styles.root}>
            {contactsList.map((user) => (
              <ChatUserCard
                key={user.chatId}
                user={user}
                active={user.chatId === activeContact?.id}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export { ChatUserList };
