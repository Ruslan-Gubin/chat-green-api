import { ChatUserCard } from "./components/ChatUserCard";
import { SearchContact } from "./components/SearchContact";
import { useChatList } from "./libs/hooks/useChatList";

import styles from "./styles/ChatUserList.module.scss";

const ChatUserList = () => {
  const {
    handleCancelSearch,
    activeChats,
    handleActiveContact,
    loading,
    handleClickSearch,
    searchInputRef,
    activeContact,
  } = useChatList();


  return (
    <>
      <SearchContact
        ref={searchInputRef}
        handleClickSearch={handleClickSearch}
        cancelSearch={handleCancelSearch}
      />
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <ul className={styles.root}>
            {activeChats.map((user) => (
              <ChatUserCard
                key={user.chatId}
                clickContact={handleActiveContact}
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
