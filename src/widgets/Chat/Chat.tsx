import { useAppSelector } from "@/app/hooks/useAppSelector";
import { useRouters } from "@/app/hooks/useRouter";
import * as features from "@/features";
import { useEffect } from "react";

import styles from "./styles/Chat.module.scss";


const Chat = () => {
  const { ApiTokenInstance, IdInstance } = useAppSelector(features.selectAuth)
  const { routerPushPage } = useRouters()
  
  useEffect(() => {
    if (!ApiTokenInstance || !IdInstance) {
      routerPushPage('/login')
    }
  
  }, [ApiTokenInstance, IdInstance, routerPushPage])

  return (
    <section className={styles.root}>
      <features.ChatHeader />
      <section className={styles.body}>
        <div className={styles.aside}>
          <features.ChatUserList />
        </div>
        <div className={styles.content}>
          <features.ChatContent />
          <features.ChatSendMessage />
        </div>
      </section>
    </section>
  );
};

export { Chat };
