import react from "react-dom";
import classes from "./popup.module.css";
import { deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Backdrop = (props) => {
  return (
    <div onClick={() => props.cancel()} className={classes.backdrop}></div>
  );
};

const DisapproveModal = (props) => {
  const navigate = useNavigate();
  console.log(props.fname, props.email)

  let emailData = {
    to_email: props.email,
    to_name: props.fname,
    message1:
      "But don't feel bad. You can build your resume and apply someother time. Thanks for applying,",
  };

  const deleteHandler = () => {
    deleteDoc(props.docRef)
      .then(() => {
        emailjs
          .send( "service_7ury9mt", "template_0hnb63y", emailData, "fsHxuGZyzlN_OyA4H" )
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        navigate("/pagenotfound");
      });
    props.cancel();
    navigate("../", { replace: true });
  };

  return (
    <div className={classes.modal}>
      <p className={classes.head}>Are you sure?</p>
      <p className={classes.message}>This action is irreversible !!!</p>
      <div className={classes.buttons}>
        <button onClick={() => props.cancel()}>Cancel</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

const DisapprovePopup = (props) => {
  return (
    <div>
      {react.createPortal(
        <DisapproveModal
          fname={props.fname}
          email={props.email}
          docRef={props.docRef}
          cancel={props.show}
          id={props.id}
        />,
        document.getElementById("deletePopup")
      )}
      {react.createPortal(
        <Backdrop cancel={props.show} />,
        document.getElementById("backdrop")
      )}
    </div>
  );
};

export default DisapprovePopup;
