import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { SendMessageSvg } from "@/features";

import styles from "./ChatSendMessage.module.scss";


const ChatSendMessage = () => {
  const [value, setValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textAreaRef.current) return;
    const texarea = textAreaRef.current;

    texarea.style.height = "0px";
    const scrollHeight = texarea.scrollHeight;

    texarea.style.height = scrollHeight + "px";
  }, [textAreaRef, value]);

  const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(() => e.target.value);
  };

  const handleSendMessage = useCallback((callback: (value: string) => void) => {
    if (!textAreaRef.current || textAreaRef.current.value.length === 0) {
      return;
    }

    callback(textAreaRef.current.value);

    setValue(() => '')
    textAreaRef.current.value = "";
    textAreaRef.current.style.height = "40px";
  }, [ textAreaRef ]);

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
        sendMessage={handleSendMessage}
      />
    </div>
  );
};

export { ChatSendMessage };
