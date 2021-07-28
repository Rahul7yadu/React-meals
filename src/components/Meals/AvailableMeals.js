import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import Loading from "../UI/Loader"


const AvailableMeals = () => {
  const [loading,setLoading] = useState(true)
  const [meals, setMeals] = useState([]);
  const [httpError,setHttpError] = useState(null);
   useEffect 
    (() => {
      
        setLoading(false);
        const fetchMeals = async () => {
          const response = await fetch(
            "https://react-http-c6e69-default-rtdb.firebaseio.com/meals.json"
          );
          if(!response.ok){
            throw new Error("something went wrong")
          }
          const responseData = await response.json();
          console.log(responseData);
          console.log("fetchMeals");
          const loadedMeals = [];

          for (const key in responseData) {
            loadedMeals.push({
              id: key,
              name: responseData[key].name,
              price: responseData[key].price,
              description: responseData[key].description,
            });
          }
          setMeals(loadedMeals);
          setLoading(false);
        };
        fetchMeals().catch((error)=>{
          setLoading(false)
          setHttpError(error.message)
        })
      
      

    },
    []);
   if(loading){
     return <Loading></Loading>
   }
   if(httpError){
     return <h1>{httpError}</h1>
   }


  // console.log(meals);
  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));
  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
