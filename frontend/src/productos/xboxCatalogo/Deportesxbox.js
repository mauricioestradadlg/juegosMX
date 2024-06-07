import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Deportesxbox({ agregarAlCarrito }) {
    const productos = [
        { id: '1', nombre: 'JUEGO DE DEPORTES XBOX 1', precio: 999, imagen: '/imagenes/fc24.jpg' },
        { id: '2', nombre: 'JUEGO DE DEPORTES XBOX 2', precio: 1099, imagen: '/imagenes/nba2k24.jpg' },
        { id: '3', nombre: 'JUEGO DE DEPORTES XBOX 3', precio: 1199, imagen: '/imagenes/madden24.jpg' },
        { id: '4', nombre: 'JUEGO DE DEPORTES XBOX 4', precio: 1299, imagen: '/imagenes/wwe2k23.jpg' },
        { id: '5', nombre: 'JUEGO DE DEPORTES XBOX 5', precio: 1399, imagen: '/imagenes/ufc5.jpg' },
    ];

    const navigate = useNavigate();

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
        alert("Producto agregado al carrito!");
        navigate('/carrito');
    };

    return (
        
        <main id="mainP">
        <h1 id="h1P" className="text-center">JUEGOS DE DEPORTES XBOX</h1>
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

export default Deportesxbox;