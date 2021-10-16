import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function AddMeal(props) {
      
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add {props.meal}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                    <Form.Group className="mb-3" controlId="mealData">
                        <Form.Label>What meal would you like to add?</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={props.handleChange} />
                    </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={props.saveMeal}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          
        );
      }  