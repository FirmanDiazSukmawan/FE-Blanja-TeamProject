import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingSelector,
  sellerSelector,
  updateSeller,
} from "../../redux/reducer/sellerSlice";

function ModalProfile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState("");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const seller = useSelector(sellerSelector);
  const isLoading = useSelector(isLoadingSelector);

  let [data, setData] = useState({
    store_name: "",
    email: "",
    phone: "",
    store_description: "",
    image: saveImage,
  });

  useEffect(() => {
    setData({
      store_name: seller?.store_name,
      email: seller?.email,
      phone: seller?.phone,
      store_description: seller?.store_description,
      image: saveImage,
    });
  }, [seller, saveImage]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
    // console.log(uploader);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateSeller({ userId, data, saveImage }));
      handleClose();
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };
  //   console.log(userId);

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
              left: 40,
              bottom: 0,
              color: "black",
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
            placeholder="store_name"
            className="my-3"
            name="store_name"
            value={data?.store_name}
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
            placeholder="phone"
            className="my-3"
            name="phone"
            value={data?.phone}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="store_description"
            className="my-3"
            name="store_description"
            value={data?.store_description}
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

export default ModalProfile;
