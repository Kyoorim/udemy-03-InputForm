import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  //every keystroke 마다 새로고침되는 것을 막기 위한 useRef. name, age의 Input에 각각 연결해준다
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // useRef를 씀으로써 삭제할 수 있게 됨!
  //   const [enteredUsername, setEnteredUsername] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value); // 이름칸에 Max를 입력하면 Max가 저장되서 출력됨 => 다시 말하면 useState를 대체할 수 있다는 말!!
    //useRef를 쓰는 이유: 값을 수정할 필요가 없이 단순히  읽기만 해도 되면 useRef를 쓰는 것이 효율적인 코딩방법임
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    //유효성 검사
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    //App.js의 addUserHandler 호출하여 (submit하면) 입력된 이름과 나이 인자 보내주기
    props.onAddUser(enteredName, enteredUserAge);
    // console.log(enteredUsername, enteredAge);
    // setEnteredUsername("");
    // setEnteredAge("");

    // 입력하고 submit하면 input 칸이 초기화됨 => 매우 드문 방법이긴 함. 이 방법이 맘에 안들면 useState를 쓰면 됨
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  //   const usernameChangeHandler = (event) => {
  //     setEnteredUsername(event.target.value);
  //   };

  //   const ageChangeHandler = (event) => {
  //     setEnteredAge(event.target.value);
  //   };

  const errorHandler = () => {
    // null로 해버리면 error 값이 없어지므로 error 조건문이 작동하지 않아 모달창을 없앨 수 있다
    setError(null);
  };

  return (
    <Wrapper>
      {/*<Card>컴포넌트에서 className을 통해 props처럼 Card에 보내주고 있음*/}
      {/* input 값에 value={enteredUsername} || {enteredAge}를 써줘야 addUserHandler에서 set함수로 초기화하는 작업이 실행될 수 있음*/}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
