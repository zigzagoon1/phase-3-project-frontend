import React from "react";
import {Modal} from 'react-bootstrap'

function AlertMessage({message, show}) {
    return (
        <Modal show={show} className="modal">
            <Modal.Header className="bg-warning">Information Missing!</Modal.Header>
                <Modal.Body>{message}</Modal.Body>
        </Modal>
    )
}

export default AlertMessage;