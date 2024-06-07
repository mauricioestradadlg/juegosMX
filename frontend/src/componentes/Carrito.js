import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51POmBWFJbxdvSPqZWilfGrTAZGd3L4ARULC8qgTwbgSlu4iVzS6r4S7iiR5z7UDQF662KFUlZAh1JHX3nP2LslhF003HEh0JOJ');

const Carrito = ({ productosEnCarrito, setProductosEnCarrito }) => {
    const [walletConfig, setWalletConfig] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/wallet-config')
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

        const response = await axios.post('http://localhost:3000/checkout-session', {
            productos: productosEnCarrito,
        });

        const result = await stripe.redirectToCheckout({
            sessionId: response.data.sessionId,
        });

        if (result.error) {
            console.error('Error al iniciar el checkout:', result.error);
            alert('Error al iniciar el checkout');
        }
    };

    return (
        <>
            <h1 id="h1Inicio">CARRITO DE COMPRAS: </h1><br /><br />
            <ul id="carrito">
                {productosEnCarrito.map((producto, index) => (
                    <li key={index}>
                        {producto.nombre} - ${producto.precio}
                    </li>
                ))}
            </ul>
            <p id="total">Total a pagar: ${productosEnCarrito.reduce((total, producto) => total + producto.precio, 0)}</p>
            <button id="vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button onClick={handleCheckout}>Comprar Carrito</button>
        </>
    );
};

export default Carrito;
