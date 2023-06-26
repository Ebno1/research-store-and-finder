import React, { useState, useEffect } from "react";
import classes from "./upload.module.css";
import PlagPopup from "./PlagPopup";
import react from "react-dom";

const AlertPopup = () => {
  return (
    <>
      {react.createPortal(
        <div className={classes.alert}>
          Your document is successfully uploaded.
        </div>,
        document.getElementById("successPop")
      )}
    </>
  );
};

function Upload() {
  const [author, setAuthor] = useState("");
  const [description, setdescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [plagiarismArr, setPlagiarismArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", author);
    formData.append("file", selectedFile, selectedFile.name);
    formData.append("description", description);

    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/file/upload/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const data = await res.json();

      if (data.message === "uploading_Err") {
        setPlagiarismArr(data.files);
      } else {
        setShowSuccessAlert(true);
      }
    } catch (err) {
      console.log(err.message);
      //redirect to something went wrong
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (showSuccessAlert) {
      const timeout = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showSuccessAlert]);

  return (
    <div className={classes.all}>
      {plagiarismArr.length !== 0 && (
        <PlagPopup datArr={plagiarismArr} cancelPop={setPlagiarismArr} />
      )}

      {showSuccessAlert && <AlertPopup />}

      <div className={classes.uploadContainer}>
        <h2>Upload Project/Thesis</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={handleAuthorChange}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handledescriptionChange}
              required
            />
          </div>

          <div>
            <div>
              <label className={classes.filInp}>
                <input type="file" onChange={handleFileChange} />
              </label>
            </div>
            <p>--or--</p>
            <div
              className={classes.dropArea}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <p>Drag and drop files here</p>
            </div>
            {selectedFile && (
              <div>
                <h4>Selected File:</h4>
                <p>{selectedFile.name}</p>
              </div>
            )}
          </div>
          <button
            className={`${classes.button} ${isLoading ? classes.loading : ""}`}
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
