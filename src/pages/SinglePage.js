import { useParams  } from "react-router";
import { useDataContext } from "../context/dataContext";
import { RecipeCard } from "../component/RecipeCard";

export function SinglePage(){
    const { recipeName } = useParams();
    const { recipe } = useDataContext();

    const clickedRecipe = recipe.find((recipe)=>recipe.name === recipeName);

    return (<div className="landing">
        <RecipeCard data={clickedRecipe} ShowFullCard/>
    </div>)
}