import React, { useEffect, useState } from "react";
import Recipe from "./app/Recipe";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    const APP_ID = "f7653df1";
    const APP_KEY = "5d66e07f0f78071472441aa2ab24fe8d";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const getRecipes = async() => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return ( <
        div className = "" >
        <
        div className = "container-fluid" >
        <
        h1 > Catalog Of Recipes < /h1> <
        form onSubmit = { getSearch } >
        <
        div className = "row" >
        <
        div className = "form-group col-10" >
        <
        input className = "form-control"
        type = "text"
        value = { search }
        onChange = { updateSearch }
        /> <
        /div> <
        div className = "form-group col" >
        <
        button className = "btn btn-primary"
        type = "submit" >
        Search <
        /button> <
        /div> <
        /div> <
        /form> <
        /div> <
        div className = "container" > {
            recipes.map(recipe => ( <
                Recipe key = { recipe.recipe.label }
                title = { recipe.recipe.label }
                calories = { recipe.recipe.calories }
                image = { recipe.recipe.image }
                ingredients = { recipe.recipe.ingredients }
                />
            ))
        } <
        /div> <
        /div>
    );
};

export default App;