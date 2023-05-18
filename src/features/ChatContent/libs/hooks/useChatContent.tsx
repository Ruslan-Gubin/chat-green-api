import { useAppDispatch, useAppSelector } from '@/app/hooks/useAppSelector';
import { selectContacts } from '@/features/ChatUserList';
import { selectAuth } from '@/features/LoginCard';
import  { useEffect, useMemo } from 'react';
import {  selectChatContent } from '../slice/chatContentSlice';
import { chatNotification, fetchChatHistory, fetchDeleteNotification } from '../slice/chatContentThunk';

const useChatContent = () => {
  const { ApiTokenInstance, IdInstance, wid } = useAppSelector(selectAuth)
  const { activeContact } = useAppSelector(selectContacts)
  const {  loading, cache, newMessage, notificationStatus } = useAppSelector(selectChatContent)
  const dispatch = useAppDispatch()


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
        dispatch(chatNotification({
          instance: IdInstance,
          token: ApiTokenInstance,
          wid, 
        }))
    } else {
      dispatch(fetchDeleteNotification({
        instance: IdInstance,
        token: ApiTokenInstance,
        params: newMessage.receiptId,
      }))
    }
 
  }, [ApiTokenInstance, IdInstance, dispatch, newMessage, wid, notificationStatus])

  useEffect(() => {
    if (!ApiTokenInstance || !IdInstance || !activeContact) return;
  
    if (activeContact.chatId in cache) return;
   
      dispatch(fetchChatHistory({
        instance: IdInstance,
        token: ApiTokenInstance,
        body: {
          chatId: activeContact.chatId
        }
      }))
          
  },[activeContact, ApiTokenInstance, IdInstance, dispatch, cache ])


  return {
    history: chatContent, 
    loading,
  }

};

export { useChatContent };