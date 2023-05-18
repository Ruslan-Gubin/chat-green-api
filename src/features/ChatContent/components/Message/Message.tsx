import { FC, memo } from "react";
import { formattedRuTime } from "../../libs/helpers/dateFormated";
import { IChatHistory } from "../../libs/types/IChatHistory";

import styles from './Message.module.scss';

interface MessageProps {
  message: IChatHistory
}

const Message: FC<MessageProps> = memo(({message}) => {


  return (
    <div className={styles.root}>
    <li className={message.type === 'outgoing' ? `${styles.message} ${styles.mymessage}` : styles.message}>
      <p>{message.textMessage}</p>
      <span className={styles.date}>{formattedRuTime.format(message.timestamp * 1000)}</span>
     </li>
    </div>
  );
});

Message.displayName = 'Message'

export { Message };