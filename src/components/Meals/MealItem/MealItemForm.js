import classes from "./MealItemForm.module.css";
import Input from '../../UI/Input'
import {useRef,useState} from 'react';
const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState(true);
const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    console.log('from mealItemForm')
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);
    if(enteredAmount.trim().length===null||enteredAmountNumber<1||enteredAmountNumber>5){
      setAmountIsValid(false)
      return;
    }
    console.log("on Submit")
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit = {submitHandler}>
      <Input
        ref = {inputAmountRef}
        label="Amount"
        input={{
          id: "amount"+ props.id,
          type: "number",
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      ></Input>
      <button>+ Add</button>
      {
        !amountIsValid &&<p>please enter valid amount(1-5)</p>
      }
    </form>
  );
};
export default MealItemForm;
