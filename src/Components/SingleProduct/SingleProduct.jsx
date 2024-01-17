import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/Productcontext';
import PageNavigation from '../PageNavigation/PageNavigation ';
import MyImage from '../SingleProduct/MyImage';
import '../SingleProduct/SingleProduct.css';
import FormatPrice from '../Helpers/FormatPrice';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { TbReplaceFilled } from 'react-icons/tb';
import { FaShieldAlt } from 'react-icons/fa';

import Star from '../Star/Star';
import AddToCart from '../AddToCart/AddToCart';

const API = 'https://api.pujakaitem.com/api/products';
const SingleProduct = () => {
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductContext();

  // console.log(singleProduct);

  const { id } = useParams();

  const {
    id: nocie,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className='page_loading'>.........Loading</div>;
  }

  return (
    <div className='single-product-container'>
      <PageNavigation title={name} />
      <div className='single_page_container'>
        <div className='single_page'>
          <div className='product_image'>
            <MyImage imgs={image} />
          </div>

          {/* product data */}
          <div className='product_data'>
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className='product_data_price'>
              MRP:
              <del>
                <FormatPrice price={price + 25000} />
              </del>
            </p>
            <p className='product-data-price product-data-real-price'>
              Dealof the day: <FormatPrice price={price} />
            </p>
            <p className='description'>{description}</p>
            <div className='benifits'>
              <div className='benifit-data'>
                <TbTruckDelivery className='benifit-icon' />
                <p>Free Delivery</p>
              </div>
              <div className='benifit-data'>
                <RiSecurePaymentFill className='benifit-icon' />
                <p>Secure Payment</p>
              </div>
              <div className='benifit-data'>
                <TbReplaceFilled className='benifit-icon' />
                <p>7 Days Replace Policy</p>
              </div>
              <div className='benifit-data'>
                <FaShieldAlt className='benifit-icon' />
                <p>1 Year Warrant</p>
              </div>
            </div>
            <div className='product-stock'>
              <p>Available: {stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <p className='id'>ID: {id}</p>
            <p className='brand'>Brand: {company}</p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
