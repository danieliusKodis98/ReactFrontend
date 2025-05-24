import './sidebar.css';
import downLogo from '../assets/down (2).png';
import {useRef, useState, useEffect, useContext} from "react";
function Sidebar(){

    const [clicked, setClicked] = useState(false);

    function CheckIfClicked(){
    setClicked(!clicked)
    }
    return (
<div className='sideBar'>
 
    <div onClick={CheckIfClicked} className="sideElem"> 
    <div>Categories</div>
     <img className="downLogo" src={downLogo}></img>
    </div>

        <div className={clicked ? "showCategories" : "hideCategories"}>
          <div className="catOption">Boiled</div>
          <div className="catOption">Fried</div>
          <div className="catOption">Baked</div>
          <div className="catOption">Cookies</div>
          <div className="catOption">Pancakes</div>
        </div>
   
    <div className="sideElem">
<div>Ingriedients</div>
     <img className='downLogo' src={downLogo}></img>
    </div>

     <div className="sideElem2">
<div>Recently visited</div>
   
    </div>
    
</div>
    );
} export default Sidebar