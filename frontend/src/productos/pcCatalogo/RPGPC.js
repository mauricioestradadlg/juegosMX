import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function RPGPC({ agregarAlCarrito }) {
    const productos = [
        { id: 'prod_QFjgCyWh80aKB7', nombre: 'JUEGO DE RPG PC 1', precio: 999, imagen: '/imagenes/rpg.jpg' },
        { id: 'prod_QFjgzgbWljkJgb', nombre: 'JUEGO DE RPG PC 2', precio: 1099, imagen: '/imagenes/fallout4.jpg' },
        { id: 'prod_QFjhLnfEmuyGqU', nombre: 'JUEGO DE RPG PC 3', precio: 1199, imagen: '/imagenes/cyberpunk2077.jpg' },
        { id: 'prod_QFjhrGJ0EF0fiD', nombre: 'JUEGO DE RPG PC 4', precio: 1299, imagen: '/imagenes/hogwartsLegacy.jpg' },
        { id: 'prod_QFjiJtYYq6gYT3', nombre: 'JUEGO DE RPG PC 5', precio: 1399, imagen: '/imagenes/fallout76.jpg' },
    ];


    const navigate = useNavigate();

    const handleClickAgregar = (producto) => {
        agregarAlCarrito(producto);
        alert("Producto agregado al carrito!");
        navigate('/carrito');
    };

    return (
        <main id="mainP">
        <h1 id="h1P" className="text-center">JUEGOS DE RPG PC</h1>
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

export default RPGPC;