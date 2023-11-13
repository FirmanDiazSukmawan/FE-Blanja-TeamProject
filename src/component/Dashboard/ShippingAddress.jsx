import React from "react";
import { Link } from "react-router-dom";
import SidebarProfile from "../SidebarProfile/index";
import NavbarLogin from "../navbarLogin/navbarLogin";
import "../../asset/css/style.css";
import ModalAddress from "../ModalAddress/ModalAddress";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";

const MyOrder = () => {
const [data,setData]= React.useState([])
const users_id = localStorage.getItem("userId")
const [loading,setLoading] = React.useState(false)

const addres_id = data?.[0]?.addres_id

console.log(addres_id)

React.useEffect(()=>{
  const getAddres = async() => {
  try{
  const res = await axios.get(`${url}/addres/users/${users_id}`)
  setData(res.data.data)
  setLoading(false)
  
  }
  catch(err){
    console.log(err);
    setLoading(true)
  }
}
getAddres()
},[users_id])

const handleDeleteAddres = async() => {
  try {
    await axios.delete(`${url}/addres/${addres_id}`)
    
   setTimeout(() => {
    window.location.reload()
   }, 1000);
  } catch (error) {
    console.log(error)
    
  }
  
}
  
// console.log(data)
  return (
    <>
      <section id="sidebar">
        <NavbarLogin />
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
          <div className="sidebar vh-100 w-25 d-flex">
            <SidebarProfile />
          </div>
          <div className="main-content vh-100">
            <div className="container bg-white h-100">
              <div className="text-start px-3 py-3">
                <h4>Choose Another Address</h4>
                <p>Manage your Shipping Address</p>
              </div>
              <div className="container px-5">
            <div className="row mt-5 d-grid">
            <ModalAddress modalName ="Add Another Address"/>
            </div>
            <div className="row mt-3">
              <div className="card">
                {loading? "Loading...": data?.map((item,index)=>(
                <div className="card-body" key={index}>
                  <h5>{item?.recipients_name}</h5>
                  <p>
                    <span>{item?.addres} </span>
                    <span>{item?.home_addres} </span>
                    <span>{item?.city} </span>
                    <span>{item?.postal_code}</span>
                    <button style={{position:"absolute",right:15,top:"40%"}} onClick={handleDeleteAddres}> <i className="bi bi-trash" style={{fontSize:15}}></i></button>
                  </p>
                  <Link>Change Address</Link>
                  
                </div>
                
                ))}
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
