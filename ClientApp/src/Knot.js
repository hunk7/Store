import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './custom.css';

export default class Knot extends Component {
  static displayName = Knot.name;

  render() {
    return (
      <Layout>
        <Card>
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Layout>
    );
  }
}
