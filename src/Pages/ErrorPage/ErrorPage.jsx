import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
      const navigate= useNavigate()
      return (
            <Container fluid>
                  <Row className="justify-content-center align-items-center mt-5">
                        <Col xs={12} sm={10} md={8} lg={6} xl={4} className="text-center">
                              <FaExclamationTriangle size={64} color="red" />
                              <h1 className="mt-3">Oops!</h1>
                              <p className="lead">Something went wrong and we couldn't complete your request. Please try again later.</p>
                              <p>We're sorry for any inconvenience this may have caused.</p>
                              <p>If the problem persists, please contact our support team.</p>
                              <button onClick={ ()=>navigate(-1)} className=' btn btn-danger'>Go Back</button>
                        </Col>
                  </Row>
            </Container>
      );
};

export default ErrorPage;