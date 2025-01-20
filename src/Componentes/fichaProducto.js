import React from 'react'
import {Modal, Container, Button, ModalHeader, ModalBody, ModalFooter, CardImg} from 'reactstrap';
import './fichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';


class FichaProducto extends React.Component{
   //Metodo constructor, antes de renderizar
    constructor(props){
        //metodo super que llama a toda las funciones de la clase que hereda
        super(props);
        this.state={
            modal:false,
            listaCarrito,
            stock: this.props.props.stock
        };

        //bind hara que los argumentos recibidos por la clase puedan ser compartidos a los demas metodos de la clase
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }
    toggle(){
       // console.log(this.props)
       if (!this.state.modal){
        this.props.closeCarro();
       }
       this.setState(prevState =>({
            modal: !prevState.modal
       }));
    }

    agregarCarrito(){
     if(this.props.props.stock>0){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio":this.props.props.precio,
        
        });
        this.props.actualizarCantidadCarrito();
        // Actualizamos el stock localmente 
        this.setState(prevState => ({ 
            stock: prevState.stock - 1 
        }));

        this.props.actualizarStock(this.props.props.titulo, this.state.stock-1);

        this.setState(prevState =>({
            modal: !prevState.modal
       }));
     } else{
        alert("Stock insuficiente");
     }


    }

    //boton de reacstrap
    render(){
        return(
            //metodo toggle o accionador del boton. Modal de bootstrap son capas ocultas de DIV que se muestran cuando se preciona en un enlace o boton. isOpen retorna un verdadero o falso que indica si la ventana emergente se muestra o no
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
                
                <Modal isOpen={this.state.modal}>
                   <ModalHeader>{this.props.props.titulo}</ModalHeader>
                   <ModalBody>
                    <CardImg src={this.props.props.imagen}/>
                    <p>El detalle del producto seleccionado es el siguiente: </p>
                    {this.props.props.descripcion}
                    <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                    <p>Hay <b>{this.state.stock}</b> unidades disponibles.</p>
                   </ModalBody>
                   <ModalFooter className='modalFooter'>
                    <Button color='primary' onClick={this.agregarCarrito}>Agregar al carrito</Button>
                    <Button color='secondary' onClick={this.toggle}>Volver atrás</Button>
                   </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;