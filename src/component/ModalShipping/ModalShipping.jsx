import { useEffect, useState } from "react";
import style from "./shipping.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalAddress from "../ModalAddress/ModalAddress";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";

function ModalShipping(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
  };
  const handleShow = () => setShow(true);
  const users_id = localStorage.getItem("userId")
  console.log(users_id)

  const [data,setData] = useState([])

  useEffect(()=> {
  try{
    const getData = async () => {
    const res = await axios.get(`${url}/addres/users/${users_id}`)
    setData(res.data.data)
  }
  getData()
  }
  catch(err){
    console.log(err);
  }
  
  },[users_id])

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
            <div className="row mt-5 d-grid">
            <ModalAddress modalName ="Add Another Address"/>
            </div>
            <div className="row mt-3">
              {data?.map((item,index)=>(
              <div className="card mb-3" key={index}>
                <div className="card-body">
                <h5>{item?.recipients_name}</h5>
                  <p>
                    <span>{item?.addres} </span>
                    <span>{item?.home_addres} </span>
                    <span>{item?.city} </span>
                    <span>{item?.postal_code}</span>
                  </p>
                  <button type="button" class="btn btn-link" id={style.button}>
                    Change Address
                  </button>
                </div>
              </div>
              ))}
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
