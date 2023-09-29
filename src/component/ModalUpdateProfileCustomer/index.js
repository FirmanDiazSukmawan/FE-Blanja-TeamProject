import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  customerSelector,
  thisLoadingSelector,
  updateCustomer,
} from "../../redux/reducer/customerSlice";

function ModalUpdateCustomer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState("");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const customer = useSelector(customerSelector);
  const isLoading = useSelector(thisLoadingSelector);
  console.log(customer);

  let [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
    birthday: "",
    image: saveImage,
  });

  useEffect(() => {
    setData({
      name: customer?.name,
      email: customer?.email,
      phone_number: customer?.phone_number,
      gender: customer?.gender,
      birthday: customer?.birthday,
      image: saveImage,
    });
  }, [customer, saveImage]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
    console.log(uploader);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateCustomer({ userId, data, saveImage }));
      handleClose();
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };
  // console.log(userId);

  return (
    <>
      <div>
        <div className="dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              position: "absolute",
              right: 0,
              bottom: 15,
              color: "#EFC81A",
            }}
            onClick={handleShow}
          >
            <path
              d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z"
              stroke="#EFC81A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="file" onChange={handleUpload} name="image" />

          <Form.Control
            type="text"
            placeholder="name"
            className="my-3"
            name="name"
            value={data?.name}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="email"
            className="my-3"
            name="email"
            value={data?.email}
            onChange={handleChange}
            disabled
          />
          <Form.Control
            type="text"
            placeholder="phone_number"
            className="my-3"
            name="phone_number"
            value={data?.phone_number}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="gender"
            className="my-3"
            name="gender"
            value={data?.gender}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="birthday"
            className="my-3"
            name="birthday"
            value={data?.birthday}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "save changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateCustomer;
