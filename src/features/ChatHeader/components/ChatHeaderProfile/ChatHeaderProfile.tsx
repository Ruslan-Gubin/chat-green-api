import { FC } from "react";
import { UserAvatar } from "@/entities";
import { useGetAuthInfo } from "../../libs/hooks/useGetAuthInfo";

import styles from "./ChatHeaderProfile.module.scss";


const ChatHeaderProfile: FC = () => {
  const { userAvatar } = useGetAuthInfo()
  
  return (
    <div className={styles.root}>
        <UserAvatar image={userAvatar} />
    </div>
  );
};

export { ChatHeaderProfile };
