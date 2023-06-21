import { useNavigate } from "react-router-dom";
import classes from "./listTab.module.css";

const ListTab=(props)=>{
    const navigate = useNavigate()
    const clickHandler=()=>{
        navigate(props.id.toString())
    }
    return (
        <div className={classes.container} onClick={clickHandler}>
            <p>{props.fname}</p>
            <p>{props.lname}</p>
            <p>{props.email}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default ListTab;