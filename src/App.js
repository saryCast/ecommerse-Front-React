import React from 'react';
import {Container, Row} from 'reactstrap';
import './App.css';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
import {listaProductos} from './listaProductos.json';

/*
function App() {
  return (
    <Container>
      <Row>
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      <Producto
        titulo="Headphone Purple"
        imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
        descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
        precio="24.390"
      />
      </Row>
    </Container>
  );
}

export default App;
*/
//Cambiamos a POO
console.log(listaProductos);
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      popoverOpen: false,
      listaProductos,
      cantidadCarrito:0
    };
    this.toggleCarro= this.toggleCarro.bind(this);
    this.actualizarCantidadCarrito=this.actualizarCantidadCarrito.bind(this);
    this.actualizarStock=this.actualizarStock.bind(this);
  }

  actualizarCantidadCarrito(){
    this.setState(prevState=>({
      cantidadCarrito: prevState.cantidadCarrito+1
    }));
  }

  toggleCarro(state=null){
    this.setState(prevState =>({
      popoverOpen: state !== null ? state:!prevState.popoverOpen
    }));
  }

  actualizarStock(titulo, nuevoStock) { 
    this.setState(prevState => ({ 
      listaProductos: prevState.listaProductos.map(producto => 
        producto.titulo === titulo ? { ...producto, stock: nuevoStock } : producto ) })); }
/* ELIMINAMOS PARA PASAR LOS DATOS POR JSON
    render(){
    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"/>
        <Row>
          
          <Producto
            titulo="Headphone Purple"
            imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
            descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
            precio="24.390"
          />
          <Producto
            titulo="Headphone Purple"
            imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
            descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
            precio="24.390"
          />
          <Producto
            titulo="Headphone Purple"
            imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
            descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
            precio="24.390"
          />
          <Producto
            titulo="Headphone Purple"
            imagen="https://image.freepik.com/vector-gratis/ilustracion-icono-auriculares_17146-29.jpg"
            descripcion="Audifonos Alta calidad de sonido, HD Sonido Envolvente"
            precio="24.390"
          />
        </Row>
      </Container>
    );
  } */


    render(){
      const arregloComponentes = this.state.listaProductos.map(
        (listaProductos,i)=>{
          return(
            <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            precio={listaProductos.precio}
            stock={listaProductos.stock}
            closeCarro={()=>this.toggleCarro(false)}
            actualizarCantidadCarrito={this.actualizarCantidadCarrito}
            precioTotal={(+listaProductos.precio)}
            actualizarStock={this.actualizarStock}
            />
          )
        }
      );
    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"
        popoverOpen={this.state.popoverOpen} 
        toggleCarro={this.toggleCarro}
        cantidadCarrito={this.state.cantidadCarrito}
        />
        <Row>
          {arregloComponentes}
        
        </Row>
      </Container>
    );
  } 
}
export default App;