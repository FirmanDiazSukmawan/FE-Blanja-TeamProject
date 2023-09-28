import { useState } from "react";
import style from "./shipping.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalShipping(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
  };
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button variant="danger" onClick={handleShow} id={style.modalButton}>
        {props.modalName}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h4>Choose Another Address</h4>
          </div>

          <div className="container">
            <div className="row mt-5 d-grid"></div>
            <div className="row mt-3">
              <div className="card">
                <div className="card-body">
                  <h5>Andreas Jane</h5>
                  <p>
                    <span>Perumahan Sapphire Mediterania, </span>
                    <span>Wiradadi, Kec. Sokaraja, </span>
                    <span>Kabupaten Banyumas, Jawa Tengah </span>
                    <span>53181</span>
                  </p>
                  <button type="button" class="btn btn-link" id={style.button}>
                    Change Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalShipping;
