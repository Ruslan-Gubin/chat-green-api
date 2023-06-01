import { FC, memo } from "react";
import { UserNoImg } from "../viewer-noimage/UserNoImg";
import styles from "./UserAvatar.module.scss";

interface UserAvatarProps {
  image: string | null;
  size?: "sm" | "md";
}

const UserAvatar: FC<UserAvatarProps> = memo(({ image, size = "sm" }) => {
  return (
    <>
      {!image ? (
        <picture className={styles.picture}>
          <UserNoImg size={size} />
        </picture>
      ) : (
        <picture className={styles.picture}>
          <img
            className={`${styles.img} ${styles[size]}`}
            src={image ? image : ""}
            alt="User image"
          />
        </picture>
      )}
    </>
  );
});

UserAvatar.displayName = "UserAvatar";

export { UserAvatar };
