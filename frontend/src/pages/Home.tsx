import * as React from 'react';
import category from '../data/category';
import { useNavigate } from 'react-router-dom';
import DashboardButton from '../component/DashboardButton.tsx';

export const Home = () => {
    const navigate = useNavigate();
    return <div>
        <DashboardButton />
        <div className = "categoryContainer">
            {category.map((tile) => {
                return (
                    <div className = "categoryEach" key = {tile.id}  onClick={() => navigate(`/${tile.id.toLowerCase()}`)}>
                        <img className = "tileImg" src = {`../images/${tile.image}`} alt = {tile.name} style= {{height: '16rem', width: '17rem', padding: '20px'}}></img>
                        <p className = "tileName">{tile.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
}