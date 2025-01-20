import React from 'react';
import {NavItem, NavLink, Nav, NavbarBrand, Navbar} from 'reactstrap'
import Carro from './carro'

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color='ligth' light expand="md">
                <NavbarBrand href='/'>{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href='/'>Acerca de</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>React</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>JavaScript</NavLink>
                    </NavItem>
                    <NavItem>
                        <Carro popoverOpen={this.props.popoverOpen} toggleCarro={this.props.toggleCarro} cantidadCarrito={this.props.cantidadCarrito}/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default Navegacion;