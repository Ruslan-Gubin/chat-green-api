import { LoginForm } from '@/widgets';

import styles from '../../app/styles/pages/LoginPage.module.scss';

const LoginPage = () => {

  return (
    <div className={styles.root}>
      <h2  className={styles.header_link}>{'Введите данные'}</h2>
    <LoginForm />
    </div>
  );
};

export default LoginPage;