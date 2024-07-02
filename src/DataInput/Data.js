import { Button, Card, Form } from "react-bootstrap";
import classes from "./Data.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSliceAction } from "../Redux/DataSlice";

function Data() {
  const [name, setName] = useState("");
  const [benefits, setBenefits] = useState("");
  const [url, setUrl] = useState("");
  const listData = useSelector((state) => state.data.list);
  const dispatch = useDispatch();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (name.length === 0 || benefits.length === 0 || url.length === 0) {
      return;
    }
    let obj = {
      name: name,
      benefits: benefits,
      url: url,
    };
    try {
      let resp = await fetch(
        "https://movie-project-28d8c-default-rtdb.firebaseio.com/asanas.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!resp.ok) {
        throw new Error("Post Error");
      }
      let data = await resp.json();
      obj.id = data.name;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    dispatch(dataSliceAction.add(obj));
    setName("");
    setBenefits("");
    setUrl("");
  };

  useEffect(() => {
    let gettingData = async () => {
      try {
        let response = await fetch(
          "https://movie-project-28d8c-default-rtdb.firebaseio.com/asanas.json"
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        let data = await response.json();
        let res = [];
        for (let key in data) {
          res.push({
            id: key,
            ...data[key],
          });
        }
        dispatch(dataSliceAction.set(res));
      } catch (err) {
        console.log(err);
      }
    };
    gettingData();
  }, [dispatch]);

  const DeleteHandler = async (id) => {
    try {
      let resp = await fetch(
        `https://movie-project-28d8c-default-rtdb.firebaseio.com/asanas/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      let data = await resp.json();
      console.log(data);
      dispatch(dataSliceAction.delete(id));
    } catch (err) {
      console.log(err);
    }
  };

  const EditHandler = async (item) => {
    setName(item.name);
    setBenefits(item.benefits);
    setUrl(item.url);
    try {
      let resp = await fetch(
        `https://movie-project-28d8c-default-rtdb.firebaseio.com/asanas/${item.id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      let data = await resp.json();
      console.log(data);
      dispatch(dataSliceAction.delete(item.id));
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateHandler = async (user) => {
    if (name.length === 0 || url.length === 0 || benefits.length === 0) {
      return;
    }

    let updatedItem = {
      name: name,
      url: url,
      benefits: benefits,
    };
    try {
      let response = await fetch(
        `https://movie-project-28d8c-default-rtdb.firebaseio.com/asanas/${user.id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedItem),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      dispatch(dataSliceAction.update({ ...updatedItem, id: user.id }));
    } catch (err) {
      console.log(err);
    }
    setName("");
    setBenefits("");
    setUrl("");
  };

  return (
    <>
      <Card className={classes.card}>
        <h3 style={{ textAlign: "center", padding: "0", margin: "0" }}>
          Add Asanas
        </h3>
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
              <li key={user.id}>
                <div className={classes.deco}>
                  <div>
                    <h4>{user.name}</h4>
                    <h6>{user.benefits}</h6>
                    <div>
                      <Button onClick={() => UpdateHandler(user)}>
                        Update
                      </Button>
                      <Button onClick={() => EditHandler(user)}>Edit</Button>
                      <Button onClick={() => DeleteHandler(user.id)}>
                        Delete
                      </Button>
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
