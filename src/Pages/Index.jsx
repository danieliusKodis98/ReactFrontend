import Header from "../Components/Header";
import LogoutButton from "../Components/HeaderComponents/LogoutButton";
import ShowRecepiList from "../Components/RecepiComponents/RecepiList";
import Searchbar from "../Components/HeaderComponents/Search";
import { createContext, useState } from "react";
import Sidebar from "../Components/Sidebar";
import './Index.css';
function Index(){

    const [value, setValue] = useState('');

    return(
        <>
        <Header value = {value} setValue = {setValue}></Header>
        <Sidebar></Sidebar>
        <Searchbar value = {value} setValue = {setValue}></Searchbar>
    <LogoutButton></LogoutButton>
    <ShowRecepiList value = {value}></ShowRecepiList>
    </>
    );
}
export default Index