import Header from "../Components/Header";
import LogoutButton from "../Components/HeaderComponents/LogoutButton";
import ShowRecepiList from "../Components/RecepiComponents/RecepiList";
import Searchbar from "../Components/HeaderComponents/Search";
import { createContext, useState } from "react";
import Sidebar from "../Components/Sidebar";
import './Index.css';
import { SelectedIngredientProvider } from "../Context/SelectedIngredientContext";
function Index(){

    const [value, setValue] = useState('');

    return(
       
        <SelectedIngredientProvider>
             <>
        <Header value = {value} setValue = {setValue}></Header>
        
        <Sidebar></Sidebar>
       
        <Searchbar value = {value} setValue = {setValue}></Searchbar>
    <LogoutButton></LogoutButton>

    <ShowRecepiList value = {value}></ShowRecepiList>
   
    </>
    </SelectedIngredientProvider>
    );
}
export default Index