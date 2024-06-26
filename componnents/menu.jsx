import Header from "./header";
const Menu = () => {
    return (<>
    <Header/>
    <div className="menu">
        <div className="list1">
            <div className="item">
                <img src="../src/images/menu1.webp" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eos corrupti obcaecati itaque deserunt iusto. Laudantium iure odit non.
                <h5>7£</h5>
                </p>
                <button className="btn">Buy It</button>
            </div>
            <div className="item">
                <img src="../src/images/menu2.webp" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor ipsa unde ut! Maiores ab voluptatibus vero mollitia perferendis?
                <h5>8£</h5>
                </p>
                <button className="btn">Buy It</button>   
            </div>
            <div className="item">
                <img src="../src/images/menu3.webp" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis tempora sequi deleniti, voluptate dolore necessitatibus. Architecto, est perspiciatis?
                <h5>9£</h5>
                </p>
                <button className="btn">Buy It</button>
            </div>
        </div>
        <div className="list1">
            <div className="item">
                <img src="../src/images/menu4.webp" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eos corrupti obcaecati itaque deserunt iusto. Laudantium iure odit non.
                <h5>8£</h5>
                </p>
                <button className="btn">Buy It</button>
            </div>
            <div className="item">
                <img src="../src/images/menu5.webp" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolor ipsa unde ut! Maiores ab voluptatibus vero mollitia perferendis?
                    <h5>6£</h5>
                </p>
                <button className="btn">Buy It</button>
            </div>
            <div className="item">
                <img src="../src/images/menu6.webp" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis tempora sequi deleniti, voluptate dolore necessitatibus. Architecto, est perspiciatis?
                <h5>9£</h5>
                </p>
                <button className="btn">Buy It</button>
            </div>
        </div>
    </div>
    </>);
}
 
export default Menu;