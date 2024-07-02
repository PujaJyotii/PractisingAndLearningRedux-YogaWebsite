import { Button, Card, Form } from "react-bootstrap";
import classes from "./Data.module.css";

function Data() {
  return (
    <Card className={classes.card}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Aasana Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Benefits</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Posture</Form.Label>
            <Form.Control type="url" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Data;
