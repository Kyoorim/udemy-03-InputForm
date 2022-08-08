import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  ); // props.type이 지정되지 않으면 built in 버튼 타입을 쓰겠다는 말
};

export default Button;
