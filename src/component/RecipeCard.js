import { NavLink } from "react-router-dom";

export function RecipeCard({ data : {name, ingredients, instructions, cuisineType}, ShowFullCard }){
    return (
        ShowFullCard ? <div>
            <h1 style={{textAlign: "center"}}>{name}</h1>
            <div className="card-2">
                <img src="https://source.unsplash.com/random?food" className="image-2"></img>
                <div style={{padding: "1rem", maxWidth: "30rem", padding: "2rem"}}>
                    <p style={{fontSize: "1.4rem"}}>Cuisine Type: {cuisineType}</p>
                    <div style={{margin: "2rem"}}></div>
                    <p>Ingredients</p>
                    <div style={{margin: "0.5rem"}}></div>
                    <ol>{ingredients}</ol>
                    <div style={{margin: "2rem"}}></div>
                    <p>Instructions</p>
                    <div style={{margin: "0.5rem"}}></div>
                    <ol>{instructions}</ol>
                </div>
            </div>
        </div> : 
        
        <div className="card">
        <img src="https://source.unsplash.com/random?food" className="image"></img>
        <div style={{marginLeft: "0.4rem", padding: "1rem"}}>
            <p style={{fontSize: "1.2rem", fontWeight: "bolder"}}>{name}</p>
        <div style={{margin: "1rem"}}></div>
        <div className="text">
            <p style={{fontWeight: "bolder"}}>Cuisine Type: </p>
            <p style={{fontWeight: "normal"}}>{cuisineType}</p>
        </div>
        <div className="text">
            <p style={{fontWeight: "bolder"}}>Ingredients:</p>
            <NavLink to={`/${name}`} style={{fontWeight: "normal"}}>{`See Recipe >`}</NavLink>
        </div>
        <div className="text">
            <p style={{fontWeight: "bolder"}}>Instructions:</p>
            <NavLink to={`/${name}`} style={{fontWeight: "normal"}}>{`See Recipe >`}</NavLink>
        </div>
        </div>
    </div>
    );
}