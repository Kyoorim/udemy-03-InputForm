import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  ); // props.children 은 Card 컴포넌트 사이에 있는 태그들의 컨텐츠를 풀어줄 것임
  // AddUser의 <Card> 컴포넌트에서 className으로 보내고 있는 내용을 props.className으로 받고있음
};
export default Card;
