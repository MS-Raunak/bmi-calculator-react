import { useState } from "react";

function BmiCalc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value >= 0) {
      if (name === "weight") {
        setWeight(value);
      } else if (name === "height") {
        setHeight(value);
      }
    } else {
      alert("Please enter number only");
    }
  };

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight >0 && height >0 ) {
      const bmi = (weight / (height * height)).toFixed(2);
      setBmi(bmi);
      if (bmi < 18.5) {
        setMessage("Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("Normal weight");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    } else {
      setBmi("");
      setMessage("Please enter valid input");
    }
  };

  const getMessageColor = (message) => {
    switch (message) {
      case "Underweight":
        return "blue";
      case "Normal weight":
        return "green";
      case "Overweight":
        return "orange";
      case "Obesity":
        return "red";
      default://when input is invalid like input is zero
        return "red";
    }
  };

  return (
    <>
      <div className="form-conatiner">
        <h2>This is BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Enter weight (kg)"
                    name="weight"
                    onChange={handleInputChange}
                    value={weight}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Enter height (m)"
                    name="height"
                    onChange={handleInputChange}
                    value={height}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn" type="submit">Calculate</button>
        </form>
        <h2>{bmi} </h2>
        <p style={{ color: getMessageColor(message) }}>{message}</p>
      </div>
    </>
  );
}

export default BmiCalc;
