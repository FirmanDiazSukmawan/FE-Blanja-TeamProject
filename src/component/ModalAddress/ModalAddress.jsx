import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./address.module.css";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";

function ModalAddress(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user_id = localStorage.getItem("userId")
  const [addres,setAddres] = useState([])
  const [loading,setLoading] = useState(false);

  const [data,setData] = useState({
    home_addres:"",
    recipients_name:"",
    phone:"",
    addres:"",
    postal_code:"",
    city:"",
    users_id:user_id,
  })
  console.log(data)

  const handleChange = (e) => {
    e.preventDefault();
    
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const handleCreate = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post(`${url}/addres`,data)
      console.log(response)
      handleClose()

      setTimeout(() => {
        window.location.reload()
      }, 1500);
      // getData()
    }
    catch(err){
      console.log(err)
    }
  }


//   const getData = async () => {
//     try{
//     const res = await axios.get(`${url}/addres`)
//     setAddres(res.data.data)
//     console.log(res.data.data)
//     setLoading(false)
//   }
//   catch(err){
//     console.log(err)
//     setLoading(true)
//   }
// }
  

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
                  name="home_addres"
                  value={data?.home_addres}
                  onChange={handleChange}
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
                  name="recipients_name"
                  value={data?.recipients_name}
                  onChange={handleChange}
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
                  name="phone"
                  value={data?.phone}
                  onChange={handleChange}
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
                  name="addres"
                  value={data?.addres}
                  onChange={handleChange}
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
                  name="postal_code"
                  value={data?.postal_code}
                  onChange={handleChange}
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
                  name="city"
                  value={data?.city}
                  onChange={handleChange}
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
          <Button variant="primary" onClick={handleCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddress;
