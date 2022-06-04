import User from "./User";
import style from "./ListUsers.module.css";

const ListUsers = (props) => {
  return (
    <ul className={style["users-list"]}>
      {props.users.map((user) => (
        <User key={user.id} id={user.id}>
          {user.userName} ({user.age} years old)
        </User>
      ))}
    </ul>
  );
};

export default ListUsers;
