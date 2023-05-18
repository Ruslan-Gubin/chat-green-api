import { LoginForm } from './components';
import styles from './styles/LoginUser.module.scss';

const LoginCard = () => {
 
  return (
    <div className={styles.root}>
      <h2  className={styles.header_link}>{'Введите данные'}</h2>
    <LoginForm />
    </div>
  );
};

export  {LoginCard};