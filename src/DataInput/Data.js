import { Button, Card, Form } from "react-bootstrap";
import classes from "./Data.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSliceAction } from "../Redux/DataSlice";

function Data() {
  const [name, setName] = useState("");
  const [benefits, setBenefits] = useState("");
  const [url, setUrl] = useState("");
  const listData = useSelector((state) => state.data.list);
  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (name.length === 0 || benefits.length === 0 || url.length === 0) {
      return;
    }
    let obj = {
      name: name,
      benefits: benefits,
      url: url,
    };
    dispatch(dataSliceAction.add(obj));
    setName("");
    setBenefits("");
    setUrl("");
  };

  return (
    <>
      <Card className={classes.card}>
        <Card.Body>
          <Form onSubmit={SubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Aasana Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Benefits</Form.Label>
              <Form.Control
                type="text"
                value={benefits}
                onChange={(e) => setBenefits(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Posture</Form.Label>
              <Form.Control
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
      <Card className={classes.card1}>
        <Card.Body>
          <ul>
            {listData.map((user) => (
              <li key={user.name}>
                <div className={classes.deco}>
                  <div>
                    <h4>{user.name}</h4>
                    <h6>{user.benefits}</h6>
                    <div>
                      <Button>Update</Button>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </div>
                  </div>
                  <img src={user.url} alt="poses" />
                </div>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
}

export default Data;
