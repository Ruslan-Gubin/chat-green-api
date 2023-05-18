import { FC, memo } from "react";

import styles from './ChatInput.module.scss';

interface ChatInputProps {
  value: string;
  change: (value: string) => void
  placeholder: string
}

const ChatInput: FC<ChatInputProps> = memo(({change, value, placeholder}) => {
  return (
    <div className={styles.root}>
      <input
      placeholder={placeholder}
      className={styles.input} 
      type="text" 
      value={value} 
      onChange={(e) => change(e.target.value)} 
      />
    </div>
  );
});

ChatInput.displayName = 'ChatInput'

export { ChatInput };