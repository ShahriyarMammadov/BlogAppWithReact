import './index.scss'
import { Link, NavLink } from "react-router-dom";

const HeaderComp = () => {
    return (
        <header>
            <h1>The Blog WebSite</h1>

            <div className="navlink">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/blog'}>New Blog</NavLink>
            </div>
        </header>
    )
}

export default HeaderComp