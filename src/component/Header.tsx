import * as React from 'react';
import nith_logo from '../images/nith_logo.png'
import avatar from '../images/avatar.jpg'

export const Header = () => {
    return <header style={{backgroundColor: "#336c95"}}>
        <div>
            <img src = {nith_logo} alt = "NITH Logo" style={{height: '10rem', width: '100'}}/>
        </div>
        {/* <div className='loginSection'>
            <img src = {avatar} alt = "Avatar" style={{height: '50px', width: '50px', borderRadius: '50%'}}/>
            <h3 style = {{color: "#d3d3d3"}}>Sahil Lagwal</h3>
        </div> */}
    </header>
}