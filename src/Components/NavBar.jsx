import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-text">Grid <p>Clothing Store</p></div>
            <div>
                <NavLink to={"/"} className={({isActive}) => isActive ? "active" : "nav-button"} >Home</NavLink>
                <NavLink to={"/products"} className={({isActive}) => isActive ? "active" : "nav-button"} >Products</NavLink>
                <NavLink to={"/about"} className={({isActive}) => isActive ? "active" : "nav-button"} >About us</NavLink>
            </div>

        </div>
    )
}

export default NavBar;