import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* map으로 받아오려면 users를 부포컴포넌트인 App.js에서 props로 내려줘야 함 */}
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age} years old) {/* 괄호는 그냥 텍스트임 */}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
