import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios'; // Importa axios para hacer peticiones HTTP
import { useNavigate } from 'react-router-dom';

const textStyle = {
  color: 'white',
  fontFamily: 'Arial, Verdana, sans-serif'
};

function Contacto() {

  const navigate = useNavigate(); // Declara navigate utilizando useNavigate

  const [formulario, setFormulario] = useState({
      nombre: '',
      correo: '',
      celular: '',
      mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://juegosmxbackend.onrender.com/contacto', formulario);
        console.log(response.data); // Imprime la respuesta del servidor en la consola
        // Aquí puedes manejar la respuesta del servidor como desees (por ejemplo, mostrar un mensaje de éxito)
        
        // Redirigir al usuario al componente FormEnviado
        navigate('/formEnviado'); // Cambia '/form-enviado' por la ruta de tu componente FormEnviado
    } catch (error) {
        console.error('Error al enviar formulario:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    }
};


  return (
    <main style={{ textAlign: 'left' }}>
      <Container>
        <h1 className="mt-4" style={textStyle}>Contacto</h1>
        <h4 style={textStyle}>Cualquier duda o comentario envíanos un mensaje!</h4><br />
        <Row className="mt-4 align-items-center">
          <Col md={6} className="mb-4">
            <img alt="" id="imagenContacto" src="./imagenes/forms.jpeg" />
          </Col>
          <Col md={6} className="mb-4">
            <br />
            <br />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nombre">
                <Form.Label style={textStyle}>Nombre:</Form.Label>
                <br />
                <Form.Control type="text" required placeholder="--INSERTAR NOMBRE--" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="correo">
                <Form.Label style={textStyle}>Correo:</Form.Label>
                <br />
                <Form.Control type="email" required placeholder="--INSERTAR CORREO--" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="celular">
                <Form.Label style={textStyle}>Celular:</Form.Label>
                <br />
                <Form.Control type="tel" required placeholder="--INSERTAR CELULAR--" value={celular} onChange={(e) => setCelular(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="mensaje">
                <Form.Label style={textStyle}>Comentarios:</Form.Label>
                <br />
                <Form.Control as="textarea" rows="5" required placeholder="--COMENTARIOS--" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
              </Form.Group><br />

              <Button variant="primary" type="submit">Enviar</Button>
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
    </main>
  );
}

export default Contacto;

