import { createContext, useState } from "react";
import '../Header.css'
function Searchbar({value, setValue}){
    
   const [input, setInput] = useState([value]);

   function onClick(){
    setValue(input);
   }
   return (
<>
<div >
      <input className="searchBox"
        type="text"
        /*className={styles.textbox}*/
        placeholder="Search data..."
        value={input}
        onChange={(e) => {
         setInput(e.target.value);
        }}
      />
      
      <button className="searchButton" onClick={ onClick}>Search</button>
    </div>
</>
    );
} export default Searchbar