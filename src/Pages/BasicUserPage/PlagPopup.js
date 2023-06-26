import react from "react-dom";
import classes from "./plagpopup.module.css";

const Popup = (props) => {
    const cancelHandler=()=>{
        props.cancelPop([])
    }
  return (
    <div className={classes.modal} >
        <p className={classes.head}>Your document is plagiarised!!!</p>
      {props.datArr.map((dat, index) => (
        <div key={index}>
          <p>{`Your document is ${dat[1].toFixed(2)}% similar to ${dat[0]}`}</p>
        </div>
      ))}
      <p className={classes.message}>Fix your document and submit again.</p>
      <button className={classes.button} onClick={cancelHandler}>cancel</button>
    </div>
  );
};

const Backdrop = (props) => {
    return (
      <div onClick={() => props.cancelPop([])} className={classes.backdrop}></div>
    );
};

const PlagPopup = (props) => {
  return (
    <>
      {react.createPortal(
        <Popup datArr={props.datArr} cancelPop={props.cancelPop} />,
        document.getElementById("plagiarismPop")
      )}
      {react.createPortal(
        <Backdrop cancelPop={props.cancelPop} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default PlagPopup;
