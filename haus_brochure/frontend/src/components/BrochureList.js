import React from 'react';
import BrochureItem from './BrochureItem';
import { Container, Row, Col } from 'react-bootstrap';

const brochures = [
  "Çevre Uygulamaları E Serisi Broşürü",
  "Gıda Uygulamaları F Serisi Broşürü",
  "Endüstri Uygulamaları I Serisi Broşürü",
  // Diğer broşürler...
];

const BrochureList = () => {
  return (
    <Container>
      <Row>
        {brochures.map((title, index) => (
          <Col key={index} xs={12} md={4}>
            <BrochureItem title={title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrochureList;
