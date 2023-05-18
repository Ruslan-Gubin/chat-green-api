import { Message } from './components';
import { useChatContent } from './libs/hooks/useChatContent';

import styles from './styles/ChatContent.module.scss';

const ChatContent = () => {
  const { history } = useChatContent()

  return (
    <ul className={styles.root}>
      {history && history.map(message => 
      <Message
      key={message.idMessage}
      message={message}
      />
      )}
    </ul>
  );
};

export { ChatContent };