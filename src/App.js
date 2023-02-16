import { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";


const App = () => {
  const [values, setValues] = useState({
    username: "",
    father:"",
    mother:"",
    birthday:"",
    email: "",
    mobile: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "1st entered your userName!",
      label: "Student Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true, 
      
    },
    {
      id: 2,
      name: "father",
      type: "text",
      placeholder: "father",
      errorMessage: "father name Compulsory!",
      label: "Father Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "mother",
      type: "text",
      placeholder: "mother",
      errorMessage: "Mother name fill it here",
      label: "Mother Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

  
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "mobile",
      type: "tel",
      placeholder: "Contact",
      errorMessage: "It should be a valid Contact details!",
      label: "Contact",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 >Registration Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="btn btn-danger">Submit</button>
      </form>
    </div>
  );
};

export default App;
