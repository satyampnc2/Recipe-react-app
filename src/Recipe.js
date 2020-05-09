import  React from 'react';
import './recipe.css';
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className="recipe">
            <h1 >{title}</h1>
            <p>{calories}</p>
            <img className="item-images" src = {image} alt = ""></img>
            <ul className="listings">
                {ingredients.map(item => (
                    <li>{item.text}</li>
                ))};   
            </ul>
            
        </div>
    );
}

export default Recipe;