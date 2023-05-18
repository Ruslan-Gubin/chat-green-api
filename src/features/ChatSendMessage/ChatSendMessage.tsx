import { SendMessageSvg } from "./components";
import { useSendMessage } from "./libs/hooks/useSendMessage";

import styles from "./styles/ChatSendMessage.module.scss";

const ChatSendMessage = () => {
  const { handleChangeValue, handleSendMessage, value, textAreaRef } =
    useSendMessage();

  return (
    <div className={styles.root}>
      <textarea
        className={styles.textarea}
        id="review-text"
        onChange={handleChangeValue}
        placeholder="Введите сообщение"
        ref={textAreaRef}
        rows={1}
        value={value}
      />
      <SendMessageSvg
        active={value.length > 0}
        sendActive={handleSendMessage}
      />
    </div>
  );
};

export { ChatSendMessage };
