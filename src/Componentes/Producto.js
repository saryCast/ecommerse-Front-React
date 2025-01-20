import React from 'react';
import {Button, CardText, Col,CardSubtitle, CardImg,CardTitle,CardBody, Card } from 'reactstrap';
import './Producto.css';
import FichaProducto from './fichaProducto';


/*
function Producto(props){
    return(
        <Col sm="4">
            <Card className="Card" body outline color='primary'>
                <CardImg src={props.imagen}/>
                <CardBody>
                    <CardTitle>{props.titulo}</CardTitle>
                    <CardSubtitle><b>Valor : </b>{props.precio}</CardSubtitle>
                    <CardText>{props.descripcion}
                    </CardText>
                    <Button className='Button'>Comprar</Button>
                    <Button className='Button'>Ver Ficha</Button>
                </CardBody>
            </Card>
        </Col>
    );
}
export default Producto;
*/

// En vez de funcion la pasamos a una clase para hacer POO
class Producto extends React.Component{
    render(){
        return(
            <Col sm="4">
                <Card className="Card" body outline color='primary'>
                    <CardImg src={this.props.imagen}/>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Valor : </b>{this.props.precio}</CardSubtitle>
                        <CardText>{this.props.descripcion}
                        </CardText>
                        <FichaProducto 
                        props={this.props} 
                        closeCarro={this.props.closeCarro} 
                        actualizarCantidadCarrito={this.props.actualizarCantidadCarrito}
                        actualizarStock={this.props.actualizarStock}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Producto;