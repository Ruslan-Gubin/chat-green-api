import { FC } from "react";
import { ChatHeaderProfile } from "./components";
import { ChatHeaderConversation } from "./components/ChatHeaderConversation";

import styles from "./styles/ChatHeader.module.scss";


const ChatHeader: FC = () => {
 
  return (
    <section className={styles.root}>
      <ChatHeaderProfile />
      <ChatHeaderConversation />
    </section>
  );
};

export { ChatHeader };
