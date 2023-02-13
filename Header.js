import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Header() {
  return (
    <div className="header">
        <img
        className="headerlogo" 
        src="https://i.etsystatic.com/37373551/c/500/397/250/252/il/deec97/4185383806/il_340x270.4185383806_prxi.jpg" alt=""/>
        
        <div className="headerSearch">
            <input className="headerSearchInput" type="text" placeholder=' search your burger'/>
            <SearchIcon className="headerSearchIcon" />
        </div>
        <div className="headerNavbar">
            <div className="headeroption1">
                <span className="headeroffersIcon">
                    <LocalOfferIcon/>
                </span>
            </div>
            <div className="headeroption">
                <span className="headeroffersText">Offers</span>

            </div>
            <div className="headeroption1">
            <span className="headerLoginIcon">
                <PersonIcon/>
            </span>
            </div>      
                <div className="headeroption">
                <span className="headerLoginText">Login</span>
            </div>
            <div className="headeroption1">
            <span className="headerCartIcon">
                <LocalMallIcon/>0
            </span>
            </div>
            <div className="headeroption">
                <span className="headerCartText">Cart</span>
            </div>

        </div>
            
    </div>
  )
}

export default Header
