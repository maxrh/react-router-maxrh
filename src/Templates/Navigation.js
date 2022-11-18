import NavItem from "../Components/NavItem";

const Navigation = (props) => {
    console.log(props)
    return ( 
        <nav>
            <ul>

                <li><NavItem path="/" title="Hjem" /></li>
                <li><NavItem path="/kontakt" title="Kontakt" /></li>    
                <li><NavItem path="/omos" title="Om os" /></li>    

            </ul>
        </nav>
     );
}
 
export default Navigation;