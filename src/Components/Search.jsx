import { createContext, useState } from "react";

function Searchbar({value, setValue}){
    
   

   return (
<>
<div >
      <input
        type="text"
        /*className={styles.textbox}*/
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      
      <button onClick={ ()=>setValue("")}>clear</button>
    </div>
</>
    );
} export default Searchbar