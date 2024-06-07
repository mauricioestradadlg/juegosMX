import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Accionxbox({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_QFH4PPI15BbRP2', nombre: 'JUEGO DE ACCION XBOX 1', precio: 999, imagen: '/imagenes/ssktjl.jpg' },
        { id: 'prod_QFH5aVTvw8LbgI', nombre: 'JUEGO DE ACCION XBOX 2', precio: 1099, imagen: '/imagenes/gta5.jpg' },
        { id: 'prod_QFH6F717d2Blau', nombre: 'JUEGO DE ACCION XBOX 3', precio: 1199, imagen: '/imagenes/rdr2.jpg' },
        { id: 'prod_QFH6Tsdfia5hhp', nombre: 'JUEGO DE ACCION XBOX 4', precio: 1299, imagen: '/imagenes/batmanAK.jpg' },
        { id: 'prod_QFH7yWAETK4zli', nombre: 'JUEGO DE ACCION XBOX 5', precio: 1399, imagen: '/imagenes/avengers.jpg' },
    ];

    const navigate = useNavigate();

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
        alert("Producto agregado al carrito!");
        navigate('/carrito');
    };

    return (
        <main id="mainP">
        <h1 id="h1P" className="text-center">JUEGOS DE ACCION XBOX</h1>
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

export default Accionxbox;