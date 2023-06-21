import React, { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import classes from './ApplicationForm.module.css';

const ApplicationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [educationFields, setEducationFields] = useState([
    { educationLevel: "", university: "" },
  ]);
  const [isStudent, setIsStudent] = useState(false);
  const [universityName, setUniversityName] = useState('');
  const [department, setDepartment] = useState('');
  const [batchNumber, setBatchNumber] = useState('');

  const studentApplicationSnapshot = collection(db, "studentApplication");
  const individualApplicationSnapshot = collection(db, "individualApplication");

  const navigate = useNavigate()

  const studentChecker=(e)=>{
    if(!e.target.checked){
      setEducationFields([{ educationLevel: "", university: "" },])
      setUniversityName('')
      setDepartment('')
      setBatchNumber('')
    }else{
      setEducationFields([])
    }
    setIsStudent(e.target.checked)
  }

  const handleAddFields = () => {
    setEducationFields([
      ...educationFields,
      { educationLevel: "", university: "" },
    ]);
  };

  const handleEducationLevelChange = (index, value) => {
    const updatedFields = [...educationFields];
    updatedFields[index].educationLevel = value;
    setEducationFields(updatedFields);
  };

  const handleUniversityChange = (index, value) => {
    const updatedFields = [...educationFields];
    updatedFields[index].university = value;
    setEducationFields(updatedFields);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    try {
      if(isStudent){
        addDoc(studentApplicationSnapshot, {
          firstName,
          lastName,
          email,
          phoneNumber,
          universityName,
          department,
          batchNumber,
          created_At: serverTimestamp(),
          isActive: true,
        })
      }else{
        addDoc(individualApplicationSnapshot, {
          firstName,
          lastName,
          email,
          phoneNumber,
          educationFields,
          created_At: serverTimestamp(),
          isActive: true,
        })
      }
    }
    catch (e) {
      navigate("/pagenotfound", {replace: true})
    }

    navigate("/success", {replace: true})
  }

  return (
    <div className={classes.container}>
      <h3>Application form</h3>
      <form className={classes.formCont} onSubmit={handleFormSubmit}>
        <div className={classes.fieldGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={classes.fieldGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className={classes.fieldGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.fieldGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        {educationFields.map((field, index) => (
          <div key={index} className={classes.fieldGroup}>
            <label htmlFor={`educationLevel${index}`}>
              Education Level {index + 1}:
            </label>
            <select
              id={`educationLevel${index}`}
              value={field.educationLevel}
              onChange={(e) => handleEducationLevelChange(index, e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
            </select>
            <label htmlFor={`university${index}`}>
              University Name {index + 1}:
            </label>
            <select
              id={`university${index}`}
              value={field.university}
              onChange={(e) => handleUniversityChange(index, e.target.value)}
              required
            >
              <option>Select an option</option>
              <option>Adama science and technology university</option>
              <option>Addis Ababa university</option>
              <option>Gondor university</option>
              <option>Hawassa university</option>
              <option>Bahir Dar university</option>
              <option>Addis Ababa science and technology university</option>
            </select>
          </div>
        ))}

        {!isStudent && <button className={classes.addButton} type="button" onClick={handleAddFields}>
          Add
        </button>}
        
        <div className={classes.checkboxGroup}>
          <label>Are you a student?</label>
          <input
              type="checkbox"
              checked={isStudent}
              onChange={studentChecker}
            />
        </div>
        {isStudent && (
          <div className={classes.additionalFields}>
            <label htmlFor="universityName">University Name:</label>
            <input
              type="text"
              id="universityName"
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
              required
            />
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
            <label htmlFor="studentNumber">Batch Number:</label>
            <input
              type="number"
              id="batchNo"
              min="0"
              max="8"
              value={batchNumber}
              onChange={(e) => setBatchNumber(e.target.value)}
              required
            />
          </div>
        )}
        <button className={classes.submitButton} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;