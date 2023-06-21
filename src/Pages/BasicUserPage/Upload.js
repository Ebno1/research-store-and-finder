import React, { useState } from "react";
import classes from "./upload.module.css";

function Upload() {
  const [author, setAuthor] = useState("");
  const [project, setProject] = useState("");
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selectedFile.name)
    let formData = new FormData();
    formData.append("name", author);
    formData.append("file", selectedFile, selectedFile.name);
    formData.append("description", department);

    fetch("http://127.0.0.1:8000/file/upload/", {
      method: 'POST',
      body: formData,
      // headers: {
      //   "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      // },
    })
  }

  return (
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
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="project">Project Name:</label>
          <input
            type="text"
            id="project"
            value={project}
            onChange={handleProjectChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="university">University:</label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={handleUniversityChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={handleDepartmentChange}
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
        <button className={classes.button} type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
