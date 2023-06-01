import { useViewer } from "@/entities";
import { useRouters } from "@/shared";
import {
  ChatContent,
  ChatHeaderConversation,
  ChatHeaderProfile,
  ChatSendMessage,
  ChatUserList,
} from "@/widgets";
import { useEffect } from "react";
import styles from "../app/styles/pages/Home.module.scss";

export default function Home() {
  const { ApiTokenInstance, IdInstance } = useViewer();
  const { routerPushPage } = useRouters();

  useEffect(() => {
    if (!ApiTokenInstance || !IdInstance) {
      routerPushPage("/login");
    }
  }, [ApiTokenInstance, IdInstance, routerPushPage]);

  return (
    <section className={styles.root}>
      <section className={styles.header}>
        <ChatHeaderProfile />
        <ChatHeaderConversation />
      </section>
      <section className={styles.body}>
        <div className={styles.aside}>
          <ChatUserList />
        </div>
        <div className={styles.content}>
          <ChatContent />
          <ChatSendMessage />
        </div>
      </section>
    </section>
  );
}
