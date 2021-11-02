import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByCity } from "../redux/weatherSlice";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { locationActions } from "../redux/index";

const Form = () => {
  let error = "City and Country cannot be left blank";
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    dispatch(getWeatherByCity(location));
  }, [dispatch, location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" || country === "") {
      setShowError(true);
    } else {
      dispatch(locationActions.setLocation({ city, country }));
    }
    e.target.reset();
  };

  const ErrorModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // class='error'
        style={{ color: "#750404", fontSize: "20px", fontWeight: "500" }}
      >
        <Modal.Header closeButton>Please Note!</Modal.Header>
        <Modal.Body>
          <p>{error}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowError(false)}>Got it</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row p-5 justify-content-center">
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="City"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            placeholder="Country"
            onChange={(event) => setCountry(event.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <button id="get-weather">Get Weather</button>
        </div>
      </div>
      <ErrorModal show={showError} onHide={() => setShowError(false)} />
    </form>
  );
};

export default Form;
