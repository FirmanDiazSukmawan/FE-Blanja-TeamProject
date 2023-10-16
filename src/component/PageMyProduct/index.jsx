/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../../asset/css/style.css';
import '../../App.css';

import ModalProduct from '../ModalProduct';
import ModalUpdate from '../ModalUpdateProduct';
import axios from 'axios';
import { url } from '../../redux/baseUrl/url';
import Swal from 'sweetalert2';


const PageMyProduct
 = () => {

  const userId = localStorage.getItem('userId')
  // console.log(userId);
  const [product,setProduct] = useState([])

  useEffect(() => {
    axios
      .get(`${url}/product/users/${userId}`)

      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        return (err);
      });
  }, [userId]);
  
  const handleDelete = async (product_id) => {
    const result = await Swal.fire({
      title: 'Delete Product',
      text: 'Are you sure you want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#dc3545', 
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${url}/product/${product_id}`);
        setProduct(product.filter((item) => item.product_id !== product_id));
        console.log('Product deleted successfully');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
    try {
      

    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <h3 className="title mb-0">My Product</h3>
      {/* navpils */}
      <ul className="nav mb-3" id="pills-tab-product" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-item-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
            All Items
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
            Sold Out
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
            Archived
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-12 p-0">
                {/* <ModalProduct /> */}
                <table className="table table-hover">
                  <thead className="table-dark text-center ">
                    <tr>
                      <th scope="col">Images</th>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item) => {
                      return (
                        <>
                          <tr>
                            <td className="text-center">
                              <img crossOrigin="anonymous" src={item.image_product} className="photo-table" alt="" />
                            </td>
                            <td>{item.name_product}</td>
                            <td className="text-center">{item.size}</td>
                            <td className="text-center">{item.price}</td>
                            <td className="text-center">{item.stock}</td>

                            <td className="text-center">
                            <ModalUpdate item={item} />

                              <button type="button"  onClick={() => handleDelete(item.product_id)} className="btn btn-danger" >
                                <i className="bi bi-trash3-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* sold out */}
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-12 p-0">
                <table className="table table-hover">
                  <thead className="table-dark text-center ">
                    <tr>
                      <th scope="col">Images</th>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* archived */}
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-12 p-0">
                <table className="table table-hover">
                  <thead className="table-dark text-center ">
                    <tr>
                      <th scope="col">Images</th>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal Create*/}
    </>
  );
};

export default PageMyProduct
;
