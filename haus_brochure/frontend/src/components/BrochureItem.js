import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BrochureItem = ({ title }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="danger">İndir</Button>
      </Card.Body>
    </Card>
  );
};

export default BrochureItem;
