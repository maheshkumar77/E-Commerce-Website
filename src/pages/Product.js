import React, { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../components/Bredcrums/Bredcrums';
import Productdispaly from '../components/Productdis/Productdispaly';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import Relatedproduct from '../components/Related_product/Relatedproduct';
import './css/product.css';

function Product() {
  const { All_pro } = useContext(Shopcontext);
  const { id } = useParams();
  const prod = All_pro.find((e) => e.id === Number(id));

  // Extract the category from the current product
  const category = prod ? prod.category : '';

  return (
    <div className='product'>
      <Bredcrums product={prod} />
      <Productdispaly product={prod} />
      <DescriptionBox />
      {/* Pass the category to Relatedproduct */}
      <Relatedproduct category={category} />
    </div>
  );
}

export default Product;
