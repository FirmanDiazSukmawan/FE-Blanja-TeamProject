/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import "../Dashboard/selling.css"
import React from "react";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import SidebarProfile from "../../component/SidebarProfile/index";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import { useEffect } from "react";
import { createProduct } from "../../redux/reducer/productSlice";

const SellingProduct = () => {
  const users_id = localStorage.getItem('userId');
  console.log(users_id);
  const dispatch = useDispatch()
  const [saveImage,setSaveImage] = useState("")
  const [showImage,setShowImage] = useState("")
  const [category,setCategory] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [data,setData] = useState({
    name_product: "",
    price:"",
    color:"",
    size:"",
    stock:"",
    condition:"",
    image_product:"",
    description:"",
    users_id:users_id,
    category_id:selectedCategoryId
  })
  
  
  const handleChange = (e) => {
    setData({
       ...data,
       [e.target.name]: e.target.value,
     });
     console.log(data)
   };

   const handleUpload =(e) => {
    const uploader = e.target.files[0];
    const reader  = new FileReader();
    reader.onload = () =>{
      setShowImage(reader.result);
    }
    reader.readAsDataURL(uploader)
    setSaveImage(e.target.files[0]);
  }

  console.log(saveImage)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      dispatch (createProduct({data,saveImage}));
    }
    catch (err) {
      throw err
    }
  }

  useEffect(() => {
    axios.get(`${url}/category`)
    .then((response) =>{
      setCategory(response.data.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  }

const categoryArray = Array.isArray(category) ? category : [];


console.log(data)


  return (
    <section id="sidebar">
      <NavbarLogin />
      <div className="container-fluid p-0 d-flex align-items-start vh-100">
        <div className="sidebar vh-100 w-25 d-flex">
          <SidebarProfile />
        </div>
        <div className="main-content vh-100 vw-100">
          <div className="container">
            <div className="wrapper-card py-2">
              <h5>Inventory</h5>
              <div className="border-top"/>
              
              <div className="mb-3 py-2">
                <label htmlFor="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Name Of Goods
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '20.5vw' }}
                  value={data.name_product}
                  onChange={handleChange}
                  name="name_product"
                />
              </div>
            </div>
            
            <div className="wrapper-card py-2 mt-4">
              <h5>Items Detail</h5>
              <div className="border-top"/>
              <div className="mb-3 py-2">
                <label for="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Unit Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '20.5vw' }}
                  value={data.price}
                  onChange={handleChange}
                  name="price"
                />
                
              </div>
              <div className="mb-3 py-2">
                <label for="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '20.5vw' }}
                  value={data.color}
                  onChange={handleChange}
                  name="color"
                />
                
              </div>
              <div className="mb-3 py-2">
                <label for="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  size
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '20.5vw' }}
                  value={data.size}
                  onChange={handleChange}
                  name="size"
                />
                
              </div>
              
              <select
  className="form-select form-select-sm"
  aria-label="Small select example"
  onChange={(e) => {
    handleCategoryChange(e.target.value);
    setData({
      ...data,
      category_id: e.target.value,
    });
  }}
  style={{ width: '20.5vw' }}
  value={selectedCategoryId}
>
  <option disabled selected>
    Open this select menu
  </option>
  {categoryArray?.map((item) => (
    <option key={item.category_id} value={item.category_id}>
      {item.name_category}
    </option>
  ))}
</select>
              <div className="mb-3 py-2">
                <label htmlFor="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '20.5vw' }}
                  value={data.stock}
                  onChange={handleChange}
                  name="stock"
                />
                <div className="mt-4">
                <label htmlFor="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Condition
                </label>
                  
                  <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '20.5vw' }}
                  value={data.condition}
                  onChange={handleChange}
                  name="condition"
                />
                
                </div>
              </div>
            </div>
            <div className="wrapper-card py-2 mt-4">
              <h5>Photo Of Goods</h5>
              <div className="border-top"/>
              <div className="mb-3 py-2">
                <div id="myDIV">
                  
                  <form encType="multipart/form-data">
                    <div className="mb-3">
                      <label htmlFor="fileInput" className="form-label">Pilih Gambar</label>
                      <input type="file" className="form-control" id="image" name="image_product" onChange={handleUpload} />
                      {showImage && <img src={showImage}  style={{width:"20vh", height:"13vh", objectFit:"contain"  }} alt="Uploaded" />}
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
            <div className="wrapper-card py-2 mt-4">
              <h5>Description</h5>
              <div className="border-top"/>
              <div className="mb-3 py-2">
                <label htmlFor="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Description
                </label>
                <div className="form-outline mb-4">
                  <textarea className="form-control" id="form6Example7" rows="4" value={data.description} name="description"
                  onChange={handleChange}> </textarea>
                  <label className="form-label" for="form6Example7"></label>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 col-2 mx-auto">
            <button class="btn btn-danger rounded-pill" type="button" onClick={handleSubmit}>Jual</button>
          </div>
        </div>
      </div>
      </section>
  );
};

export default SellingProduct;
