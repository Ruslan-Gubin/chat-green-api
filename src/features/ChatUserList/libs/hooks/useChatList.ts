import {  useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/useAppSelector";
import { selectAuth } from "@/features/LoginCard";
import { filterPhone } from "../helpers/filterPhone";
import { contactsAction, selectContacts } from "../slice/contactsSlice";
import { fetchAllChats,  fetchGetContact } from "../slice/contactsThunk";
import { IActiveChats } from "../types/IActiveChats";

const useChatList = () => {
  const { ApiTokenInstance, IdInstance } = useAppSelector(selectAuth);
  const { activeChats, loading, searchContact, activeContact } = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null)
  

  useEffect(() => {
    if (!ApiTokenInstance || !IdInstance) return;
      
    dispatch(fetchAllChats({
      instance: IdInstance,
      token: ApiTokenInstance,
    }))
  }, [ApiTokenInstance, IdInstance, dispatch]);

  const handleCancelSearch = () => {
    if (!searchInputRef.current) return;
    searchInputRef.current.value = ''
    cancelInputRef()
  }

  const cancelInputRef = useCallback(() => {
    dispatch(contactsAction.cancelSearchContact())
  },[ dispatch])

  const inputChange = useCallback((e: Event) => {
    if (searchInputRef.current?.value.length === 0) {
      cancelInputRef()
    }
  },[cancelInputRef])


  

  const handleClickSearch = useCallback(() => {
    if (!searchInputRef.current || !ApiTokenInstance || !IdInstance) return;
    
    const phone = filterPhone(searchInputRef.current.value)
    
    if (phone.length < 8) return;

    const searchContactId = `${phone}@c.us`

    dispatch(fetchGetContact({
      instance: IdInstance,
      token: ApiTokenInstance,
      body: { chatId: searchContactId } 
    }))

  },[searchInputRef, ApiTokenInstance, IdInstance, dispatch])

  const searchPressEnter = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClickSearch()
    }
  },[handleClickSearch])

  const handleActiveContact = useCallback((user: IActiveChats) => {
    dispatch(contactsAction.activeContact(user));
  }, [dispatch]);

  useEffect(() => {
    if (!searchInputRef.current) return;
    const node = searchInputRef.current

    node.addEventListener('keydown', searchPressEnter)
    node.addEventListener('input', inputChange)
    
    return () => {
      node.removeEventListener('keydown', searchPressEnter)
      node.removeEventListener('input', inputChange)
    }
  },[inputChange, searchPressEnter, ])


  return {
    searchContact,
    handleClickSearch,
    activeChats: searchContact ? [searchContact] : activeChats,
    loading,
    handleActiveContact,
    searchInputRef,
    handleCancelSearch,
    activeContact,
  };
};

export { useChatList };
