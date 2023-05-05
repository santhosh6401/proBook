import React from "react";
import "./../assets/style/MainPage.css";
import Header from './Header';
import Nav from './Navbar';
import Search from './Search';

function Profile(){
    return(<div className="MainPage">
        <Header/>
        <Nav/>
        <Search/>
    </div>)
}


export default Profile;