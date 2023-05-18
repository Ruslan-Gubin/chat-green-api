import { LoginCard } from "@/features";

import styles from '../../app/styles/pages/LoginPage.module.scss';

const LoginPage = () => {

  return (
    <div className={styles.root}>
    <LoginCard />
    </div>
  );
};

export default LoginPage;