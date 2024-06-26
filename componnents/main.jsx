import { useState } from "react";
const Main = () => {
    const[image,setimage]=useState(2)
    const change=(a)=>{
        if(a===1){
            setimage(1)
        }
        if(a===2){
            setimage(2)
        }
        if(a===3){
            setimage(3)
        }
    }
    return (
    <>
    <section>
        <div>
            <div className="para"><p>It s not just Coffee It s <span className="star">Starbucks</span></p></div>
            <p>Starbucks is a chain of stores that sell coffee. A chain is many stores owned by 
            the same company. Many of the stores look the same, and all stores sell the same 
            items, often at the same prices. As well as coffee, Starbucks sells beverages and baked goods.
            Starbucks started in Seattle in the United States in 1971. The number of stores has grown quickly. 
            There are over 9,000 Starbucks stores all over the world. Most of these stores are in the United States. 
            Some large cities in the U.S</p>
            <div className="btn">
                <button>Learn More</button>
            </div>
        </div>
        <div className="imgr">
            <img src={`../src/images/img${image}.png`} alt=""/>
        </div>
    </section>
    <ul className="ult">
        <li><img src="../src/images/thumb1.png" onClick={() => change(1)}/></li>
        <li><img src="../src/images/thumb2.png" onClick={() => change(2)}/></li>
        <li><img src="../src/images/thumb3.png" onClick={() => change(3)}/></li>
    </ul>
    <ul className="loh">
        <li><img src="../src/images/facebook.png" alt="" /></li>
        <li><img src="../src/images/instagram.png" alt=""/></li>
        <li><img src="../src/images/twitter.png" alt=""/></li>
        <li></li>
    </ul>
    </> );
}
 
export default Main;