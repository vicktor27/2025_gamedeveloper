import Inputs from "./Inputs";
function Form(props) {
  return (
    <>
      <form action="">
        <Inputs p1={props.name}></Inputs>
        <Inputs p1={props.age}></Inputs>
        <Inputs p1={props.email}></Inputs>
      </form>
    </>
  );
}

export default Form;
