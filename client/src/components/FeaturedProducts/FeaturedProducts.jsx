import React from 'react';
import './FeaturedProducts.scss';
import img1 from '../../assets/1LB.jpg';
import img2 from '../../assets/palm1.jpg';
import img3 from '../../assets/5.jpg';
import img4 from '../../assets/FR3.jpg';
import Card from '../Card/Card'

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: img1,
      title: 'Joggers',
      isNew: 'true',
      oldPrice: 'N7,000',
      price: 'N5,999',
    },
    {
      id: 2,
      img: img2,
      title: 'palm',
      isNew: 'true',
      oldPrice: 'N7,000',
    },
    {
      id: 3,
      img: img3,
      title: 'Wrist Watch',
      isNew: 'true',
      price: 'N12,000',
    },
    {
      id: 4,
      img: img4,
      title: 'Autumn Sneakers',
      isNew: 'true',
      oldPrice: 'N13,000',
      price: 'N10,000',
    },
  ];

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
      </div>
      <div className='buttom'>
        {data.map((item) => (
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
