import styles from './UserNoImg.module.scss';

interface UserNoImgProps {
  size: 'sm' | 'md'
}

const UserNoImg = ({size}: UserNoImgProps) => {
 
  return (
    <div className={`${styles.root} ${styles[size]}`}> 
    </div>
  );
};

export { UserNoImg };