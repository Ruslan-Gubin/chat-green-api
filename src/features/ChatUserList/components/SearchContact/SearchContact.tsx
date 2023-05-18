import {  forwardRef, ChangeEvent, LegacyRef } from 'react';
import { SearchIcon } from '@/shared/UI/InputRG/components/SearchIcon/SearchIcon';

import styles from './SearchContact.module.scss';

interface SearchContactProps {
    handleClickSearch: () => void
    cancelSearch: () => void
}


const SearchContact = forwardRef(( props: SearchContactProps, searchInputRef: LegacyRef<HTMLInputElement> | undefined ) => {
    const {  handleClickSearch, cancelSearch } = props

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
     
      <div onClick={cancelSearch} className={styles.slose_container}>
      <div className={styles.close}></div>
      </div>
      
    </div>
  );
});

SearchContact.displayName = 'SearchContact'

export { SearchContact };