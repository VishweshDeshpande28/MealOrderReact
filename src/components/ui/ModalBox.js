import React from 'react'
import ReactDOM from 'react-dom';
import './ModalBox.css';

const BackDrop=(props)=>{
    return <div className='backdrop' onClick={props.onClose}></div>;
}
const ModalOverlay=(props)=>{
    return (
    <div className='modal-Box'>
            <div className='content'>{props.children}</div>
    </div>
    );
}
const portalElement= document.getElementById('Overlay')
 const ModalBox = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
  )
}
export default ModalBox;