import * as React from 'react';
import ordinances from '../data/ordinances';
import { useNavigate } from 'react-router-dom';

export const Academic = () => {
    const navigate = useNavigate();
    return <div>
        <h2 style={{display: 'flex', justifyContent: "center", fontSize: "2.5rem"}}>Programmes</h2>
        <div className = "academicContainer">
            {ordinances.map((ordinance) => {
                return (
                    <div className = "categoryEach1" key = {ordinance.id}  onClick={() => navigate(`./${ordinance.id.toLowerCase()}`)}>
                        <p className = "tileName" style={{fontSize: '2rem'}}>{ordinance.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
}