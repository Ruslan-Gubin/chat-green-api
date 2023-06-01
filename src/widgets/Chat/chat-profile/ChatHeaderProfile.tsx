import { UserAvatar, useViewer } from "@/entities";
import { useChatHeaderAction,  useChatHeaderSelect } from "@/features";
import { useEffect } from "react";

import styles from "./ChatHeaderProfile.module.scss";


const ChatHeaderProfile = () => {
  const { userAvatar } = useChatHeaderSelect()
  const { fetchUserInfo } = useChatHeaderAction()
  const { wid, ApiTokenInstance, IdInstance } = useViewer()
 

  useEffect(() => {
    if (!IdInstance || !ApiTokenInstance || !wid) return;
    fetchUserInfo({
      instance: IdInstance,
      token: ApiTokenInstance,
      wid,
    })
  }, [] )


  return (
    <div className={styles.root}>
        <UserAvatar image={userAvatar} />
    </div>
  );
};

export { ChatHeaderProfile };
