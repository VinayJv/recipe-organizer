import { useState } from "react";
import { RecipeCard } from "../component/RecipeCard";
import { useDataContext } from "../context/dataContext";

export function Landing() {
    const { recipe, setRecipe } = useDataContext();
    const [filter,setFilter] = useState("Name");
    const [input,setInput] = useState("");

    const filteredRecipe = () => {
        let temp = [];
        if(filter === "Name"){
            temp = recipe.filter((recipe)=>recipe.name.toUpperCase().includes(input.toUpperCase()));
        }
        else if(filter === "Ingredients"){
            if(input.length === 0){
                temp = recipe;
            }
            else {
                temp = recipe.filter((recipe)=> recipe.ingredients.forEach((ingredient)=>{if(ingredient.includes(input)){ return true;} else { return false }}));
            }
        }
        else {
            temp = recipe.filter((recipe)=>recipe.cuisineType.toUpperCase().includes(input.toUpperCase()));
        }
        return temp;
    }

    console.log(filteredRecipe());

    const inputHandler = (event) => {
        setInput(event.target.value);
    };
    
    const changeHandler = (event) => {
        setFilter(event.target.value);
    }

    return (<div className="landing">
        <div className="header-container">
            <input type="search" placeholder="Search the item" onChange={inputHandler} className="input"></input>
            <div>
                <p>Filters: </p>
            </div>
            <div>
                <label>
                    <input type="radio" onChange={changeHandler} defaultChecked value="Name" name="radio"></input>
                    Name
                </label>
                <label>
                    <input type="radio"  onChange={changeHandler} value="Ingredients" name="radio"></input>
                    Ingredients
                </label>
                <label>
                    <input type="radio"  onChange={changeHandler} value="Cuisine" name="radio"></input>
                    Cuisine
                </label>
            </div>
        </div>
        <div className="inner-container">
            {filteredRecipe().map((recipe,index) => <RecipeCard data={recipe} key={index}/>)}</div></div>);
}