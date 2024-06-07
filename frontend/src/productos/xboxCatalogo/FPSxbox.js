import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function FPSxbox({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_QFGlwWyZqK72qX', nombre: 'JUEGO DE FPS XBOX 1', precio: 999, imagen: '/imagenes/mw3.jpg' },
        { id: 'prod_QFGmyyOZgJo7v7', nombre: 'JUEGO DE FPS XBOX 2', precio: 1099, imagen: '/imagenes/mw2.jpg' },
        { id: 'prod_QFGnSIs0RKRqwT', nombre: 'JUEGO DE FPS XBOX 3', precio: 1199, imagen: '/imagenes/vanguard.jpg' },
        { id: 'prod_QFGnvs5F1qt9j1', nombre: 'JUEGO DE FPS XBOX 4', precio: 1299, imagen: '/imagenes/cw.jpg' },
        { id: 'prod_QFGoNUPwhWrwec', nombre: 'JUEGO DE FPS XBOX 5', precio: 1399, imagen: '/imagenes/mw1.jpg' },
    ];

    const navigate = useNavigate();

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
        alert("Producto agregado al carrito!");
        navigate('/carrito');
    };

    return (
        <main id="mainP">
            <h1 id="h1P" className="text-center">JUEGOS DE FPS XBOX</h1>
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

export default FPSxbox;