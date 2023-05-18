import { FC } from "react";

import styles from './MessageDate.module.scss';

interface MessageDateProps {
 date: string;
}

const MessageDate: FC<MessageDateProps> = ({date}) => {

  return (
    <div className={styles.root}>
    <span className={styles.date}>{date}</span>
    </div>
  );
};

export { MessageDate };