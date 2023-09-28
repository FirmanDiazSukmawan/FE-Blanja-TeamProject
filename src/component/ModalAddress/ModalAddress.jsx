import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./address.module.css";

function ModalAddress(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} id={style.modalButton}>
        {props.modalName}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {/* <div className="card">
                <div className="card-body"> */}
            <div className="text-center">
              <h4>Add New Address</h4>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Save address as (ex : home address, office address)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Rumah"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-lg-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Recipient’s name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Recipient's telephone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-lg-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-lg-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  City or Subdistrict
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="form-check mt-2" id={style.checkbox}>
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Default checkbox
              </label>
            </div>

            {/* <button type="button" class="btn btn-link">
              Change Another Address
            </button> */}
          </div>
          {/* </div>
          </div> */}
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

export default ModalAddress;
