import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {

    const handleClick = (name)=>{
        console.log("Hello "+name)
    }


    const [name, SetName] = useState("Shubham");
    const [Age, SetAge] = useState(22);

    const clickToChange = ()=>{
        SetName("Kunal");
        SetAge("20");
    }


    return ( 
        <nav className="Navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
               <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">New Blog</Link></li>
               </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;