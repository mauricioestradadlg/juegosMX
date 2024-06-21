import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51POmBWFJbxdvSPqZWilfGrTAZGd3L4ARULC8qgTwbgSlu4iVzS6r4S7iiR5z7UDQF662KFUlZAh1JHX3nP2LslhF003HEh0JOJ');

const Carrito = ({ productosEnCarrito, setProductosEnCarrito }) => {
    const [walletConfig, setWalletConfig] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://juegosmxbackend.onrender.com/wallet-config')
            .then(response => {
                setWalletConfig(response.data);
            })
            .catch(error => {
                console.error('Error al obtener la configuración del wallet:', error);
            });
    }, []);

    const vaciarCarrito = () => {
        setProductosEnCarrito([]);
        localStorage.removeItem('productosEnCarrito');
    };

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await axios.post('https://juegosmxbackend.onrender.com/checkout-session', {
            productos: productosEnCarrito,
        });

        const result = await stripe.redirectToCheckout({
            sessionId: response.data.sessionId,
        });

        if (result.error) {
            console.error('Error al iniciar el checkout:', result.error);
            alert('Error al iniciar el checkout');
        } else {
            navigate('/compraExitosa');
        }
    };

    return (
        <>
            <Row>
                <Col sm={12}>
                    <h1 id="h1Inicio">CARRITO DE COMPRAS: </h1><br /><br />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <ul id="carrito">
                        {productosEnCarrito.map((producto, index) => (
                            <li key={index}>
                                {producto.nombre} - ${producto.precio}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <p id="total">Total a pagar: ${productosEnCarrito.reduce((total, producto) => total + producto.precio, 0)}</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Button id="vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                    <Button onClick={handleCheckout}>Comprar Carrito</Button>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default Carrito;

