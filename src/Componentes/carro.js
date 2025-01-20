import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap';
import {listaCarrito} from '../listaCarrito';

class Carro extends React.Component{
    //Metodo constructor, antes de renderizar
    constructor(){
        //metodo super que llama a toda las funciones de la clase que hereda
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
    
        };

        //bind hara que los argumentos recibidos por la clase puedan ser compartidos a los demas metodos de la clase
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
       // console.log(this.props)
       this.setState(prevState =>({
            popoverOpen: !prevState.popoverOpen
       }));
    }

    calcularTotal() {
        return this.state.listaCarrito.reduce((total, producto) => {
            // Convertimos el precio a número si viene como string
            const precio = parseInt(producto.precio.replace(/[^0-9]/g, ''));
            return total + precio;
        }, 0);
    }

    
    render(){
        const total = this.calcularTotal();

        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito,i)=>{
                return(
                    <tr key={i}>
                        <td>{(i+=1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>${listaCarrito.precio}</td>
                    </tr>
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="danger">
                <span class="material-icons">shopping_cart</span>
                    <Badge color="success">{arregloCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Lista de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="2">Total:</th>
                                    <td><strong>${total.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</strong></td>

                                   
                                </tr>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;