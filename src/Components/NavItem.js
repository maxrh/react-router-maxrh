import { NavLink } from 'react-router-dom';

const NavItem = (props) => {

    return ( 
        <NavLink to={props.path} relative="path">{props.title}</NavLink>
    );
    
}
 
export default NavItem;