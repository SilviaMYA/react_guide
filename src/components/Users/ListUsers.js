import User from "./User";
import style from "./ListUsers.module.css"

const ListUsers = (props) => {
console.log('props.users ', props.users);
    return (
        <ul className={style['users-list']}>
          {props.users.map((user) => (
            <User
              key={user.id}
              id={user.id}
            >
              {user.userName} ({user.age} years old)
            </User>
          ))}
        </ul>
      );

}

export default ListUsers;