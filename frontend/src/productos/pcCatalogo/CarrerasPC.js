import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function CarrerasPC({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_QFjQ4UMG7TuWkL', nombre: 'JUEGO DE CARRERAS PC 1', precio: 999, imagen: '/imagenes/forza.jpg' },
        { id: 'prod_QFjRmXoOh4Sa5K', nombre: 'JUEGO DE CARRERAS PC 2', precio: 1099, imagen: '/imagenes/f124.jpg' },
       
    ];


    const navigate = useNavigate();

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
        alert("Producto agregado al carrito!");
        navigate('/carrito');
    };

    return (
        <main id="mainP">
        <h1 id="h1P" className="text-center">JUEGOS DE CARRERAS PC</h1>
        <Container>
            <h2 id="h2P" className="text-center mt-4">Catálogo de Productos</h2>
            <hr />
            <Row>
                {productos.map((producto) => (
                    <Col key={producto.id} md={4} className="mb-4">
                        <Card className="h-100 text-center">
                            <Card.Img variant="top" src={producto.imagen} className="imagenProducto" />
                            <Card.Body>
                                <Card.Title className="nombre">{producto.nombre}</Card.Title>
                                <Card.Text className="precio">${producto.precio}</Card.Text>
                                <Button 
                                    className="botonProducto" 
                                    onClick={() => handleClickAgregar(producto)}
                                >
                                    Agregar a Carrito
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    </main>
    );
}

export default CarrerasPC;