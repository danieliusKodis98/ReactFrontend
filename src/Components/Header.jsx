import Searchbar from "./HeaderComponents/Search";
import './Header.css';
import LogoutButton from "./HeaderComponents/LogoutButton";
import Home from "./HeaderComponents/Home";
import Upload from "./HeaderComponents/Upload";
import Favorite from "./HeaderComponents/Favorite";
function Header({value, setValue}){

    return(
<div className="header">
    <div className="left">
    <Home></Home>
    </div>
        <div className="middle">
<Searchbar value = {value} setValue = {setValue}></Searchbar>
</div>
<div className="right">
<Upload></Upload>
<Favorite></Favorite>
<LogoutButton></LogoutButton>
</div>
</div>
    );
} export default Header