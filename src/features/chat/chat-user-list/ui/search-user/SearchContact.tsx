import { useRef, useEffect, useCallback } from 'react';
import { SearchIcon } from '@/shared/UI/InputRG/components/SearchIcon/SearchIcon';
import { useViewer } from '@/entities';
import { filterPhone } from '../../libs/helpers/filterPhone';
import {  useContactAction } from '../../model';

import styles from './SearchContact.module.scss';


const SearchContact = () => {
    const { ApiTokenInstance, IdInstance } = useViewer()
    const searchInputRef = useRef<HTMLInputElement>(null)
    const {  cancelSearchContact, fetchGetContact } = useContactAction()

    const handleCancelSearch = () => {
      if (!searchInputRef.current) return;
      searchInputRef.current.value = ''
      cancelSearchContact()
    }
 
    const inputChange = useCallback((e: Event) => {
      if (searchInputRef.current?.value.length === 0) {
        cancelSearchContact()
      }
    },[cancelSearchContact])


    const handleClickSearch = useCallback(() => {
      if (!searchInputRef.current || !ApiTokenInstance || !IdInstance) return;
      
      const phone = filterPhone(searchInputRef.current.value)
      
      if (phone.length < 8) return;
  
      const searchContactId = `${phone}@c.us`
  
      fetchGetContact({
        instance: IdInstance,
        token: ApiTokenInstance,
        body: { chatId: searchContactId } 
      })
  
    },[searchInputRef, ApiTokenInstance, IdInstance, fetchGetContact])

    const searchPressEnter = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleClickSearch()
      }
    },[handleClickSearch])
  

    useEffect(() => {
      if (!searchInputRef.current) return;
      const node = searchInputRef.current
  
      node.addEventListener('keydown', searchPressEnter)
      node.addEventListener('input', inputChange)
      
      return () => {
        node.removeEventListener('keydown', searchPressEnter)
        node.removeEventListener('input', inputChange)
      }
    },[inputChange, searchPressEnter ])


  return (
    <div className={styles.root}>
      <input 
      placeholder='Поиск или новый чат'
      type="string" 
      ref={searchInputRef} 
      className={styles.input}
      />
      <div className={styles.search}>
      <SearchIcon 
      onClick={handleClickSearch}
      />
      </div>
     
      <div onClick={handleCancelSearch} className={styles.slose_container}>
      <div className={styles.close}></div>
      </div>
      
    </div>
  );
};

SearchContact.displayName = 'SearchContact'

export { SearchContact };