import style from './User.module.css';

const User = (props) => {
  return <li className={style['user-item']}>{props.children}</li>;
};

export default User;
