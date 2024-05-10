import * as React from 'react';
import category from '../data/category';

export const Home = () => {
    return <div className = "categoryContainer">
        {category.map((tile) => {
                return (
                    <div className = "categoryEach" key = {tile.id}>
                        <img className = "tileImg" src = {`../images/${tile.image}`} alt = {tile.name} style= {{height: '16rem', width: '17rem', padding: '20px'}}></img>
                        <p className = "tileName">{tile.name}</p>
                    </div>
                )
            })}
    </div>
}