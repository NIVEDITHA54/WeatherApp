import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchingActions, weatherActions } from "../redux/index";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import getWeatherData from "../redux/actions";

const Form = () => {
  let error = "City and Country cannot be left blank";
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    if (event.target.id === "city") {
      setCity(event.target.value);
    } else if (event.target.id === "country") {
      setCountry(event.target.value);
    } else {
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" || country === "") {
      setShowError(true);
    } else {
      dispatch(fetchingActions.setFetching(true));
      getWeatherData(city, country, "location");
    }
    e.target.reset();
  };

  const ErrorModal = (props) => {
    dispatch(weatherActions.clearWeatherData);
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // class='error'
        style={{ color: "#eb722c", fontSize: "20px" }}
      >
        <Modal.Header closeButton>Oops!</Modal.Header>
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
    <form onSubmit={(e) => handleSubmit(e)} class="country-city">
      <input
        type="text"
        id="city"
        name="city"
        placeholder="City..."
        onChange={handleChange}
      />
      <input
        type="text"
        id="country"
        name="country"
        placeholder="Country..."
        onChange={handleChange}
      />
      <button id="get-weather">Get Weather</button>
      <ErrorModal show={showError} onHide={() => setShowError(false)} />
    </form>
  );
};

export default Form;
