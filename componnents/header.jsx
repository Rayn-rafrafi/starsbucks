import { Link } from "react-router-dom";
const Header = () => {
    return (
    <>
    <nav className="home_nav">
        <div className="logo">
            <img src="../src/images/logo.png" alt="" />
        </div>
        <div className="liste">
            <Link to="/"><a href="#">Home</a></Link>
            <Link to="/Menu"><a href="#">Menu</a></Link>
            <a href="/new">What s New</a>
            <a href="/contact">Contact</a>
        </div>
    </nav>
    </>);
}
 
export default Header;