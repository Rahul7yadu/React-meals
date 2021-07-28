import classes from './Modal.module.css';
import {Fragment} from 'react';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onClick}></div>
}
const ModalOverlay = (props) => {

    return <div className={classes.modal}>
    <div className={classes.contend}>{props.children}</div>
    </div>
}


const Modal = (props) => {
const portalElement = document.getElementById("overlay");
    
return <Fragment>
{ReactDOM.createPortal(<Backdrop onClick = {props.onClick}></Backdrop>,portalElement)}
{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}


</Fragment>
}

export default Modal;