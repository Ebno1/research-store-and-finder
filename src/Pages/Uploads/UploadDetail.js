import { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./uploadDetail.module.css"

const UploadDetail = () => {

    const [data, setData] = useState({});
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/file/unapprdetailfile/${id}`)
          .then((res) => {
            return res;
          })
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    const DownloadHandler=()=>{
        const win = window.open(data.file, "_blank");
        win.focus();
    }

    // const approveHandler=()=>{
    //     fetch(`http://127.0.0.1:8000/file/unapprupdate/${id}`,{
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // Include any additional headers if required
    //         },
    //         body: JSON.stringify({ approved : true}),
    //     }).then(res=>{
    //         console.log(res);
    //     })
    // }

    // const disapproveHandler=()=>{
        
    // }

    let filename;
    if(data.file){
        const parts = data.file.split("/");
        const filenameWithExtension = parts[parts.length - 1];
        filename = filenameWithExtension.split(".")[0];
    }

    
    return (
      <div>
        <p>Author : {data.name}</p>
        <p>{data.description}</p>
        <p>File name: {filename}</p>
        <p>Created at : {data.timestamp && data.timestamp.split("T")[0]}</p>
        <div className={classes.buttons}>
            <button onClick={DownloadHandler}>Download File</button>
            {/* <button onClick={approveHandler}>Approve File</button>
            <button onClick={disapproveHandler}>Disapprove File</button> */}
        </div>
      </div>
    );
};

export default UploadDetail;