import { createContext, useContext, useState } from "react";
import { recipes } from "../db/recipe";


const Context = createContext(null);

export function ContextWrapper({children}){
    const [recipe, setRecipe] = useState(recipes);
    return(<Context.Provider value={{recipe, setRecipe}}>
        {children}
    </Context.Provider>);
}

export const useDataContext = () => useContext(Context);