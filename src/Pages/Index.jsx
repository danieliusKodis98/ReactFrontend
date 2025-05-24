import LogoutButton from "../Components/LogoutButton";
import ShowRecepiList from "../Components/RecepiComponents/RecepiList";
import Searchbar from "../Components/Search";
import { createContext, useState } from "react";

function Index(){

    const [value, setValue] = useState('');

    return(
        <>
        <Searchbar value = {value} setValue = {setValue}></Searchbar>
    <LogoutButton></LogoutButton>
    <ShowRecepiList value = {value}></ShowRecepiList>
    </>
    );
}
export default Index