import { useEffect, useMemo } from 'react';
import { useViewer } from '@/entities';
import { Message, useChatContentAction, useChatContentSelect, useContactSelect } from '@/features';

import styles from './ChatContent.module.scss';

const ChatContent = () => {
  const { ApiTokenInstance, IdInstance, wid } = useViewer()
  const { activeContact } = useContactSelect()
  const {  loading, cache, newMessage, notificationStatus } = useChatContentSelect()
  const { chatNotification, deleteNotification, getChatHistory } = useChatContentAction()


  const chatContent = useMemo(() => {
    if (!activeContact) return;
    if (activeContact.chatId in cache) {
      return cache[activeContact.chatId]
    } else {
     return [] 
    }
  }, [activeContact, cache])


  useEffect(() => {
    if (!ApiTokenInstance || !IdInstance || !wid || notificationStatus) return;
   
      if (!newMessage) {
        chatNotification({
          instance: IdInstance,
          token: ApiTokenInstance,
          wid, 
        })
    } else {
      deleteNotification({
        instance: IdInstance,
        token: ApiTokenInstance,
        params: newMessage.receiptId,
      })
    }
 
  }, [ApiTokenInstance, IdInstance,  newMessage, wid, notificationStatus, chatNotification, deleteNotification])

  useEffect(() => {
    if (!ApiTokenInstance || !IdInstance || !activeContact) return;
  
    if (activeContact.chatId in cache) return;
   
    getChatHistory({
        instance: IdInstance,
        token: ApiTokenInstance,
        body: {
          chatId: activeContact.chatId
        }
      })
          
  },[])

  return (
    <>
    {loading && <div>Loading...</div>}
    <ul className={styles.root}>
      {chatContent && chatContent.map(message => 
      <Message
      key={message.idMessage}
      message={message}
      />
      )}
    </ul>
      </>
  );
};

export { ChatContent };