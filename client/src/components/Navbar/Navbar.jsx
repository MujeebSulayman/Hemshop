import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <Link className='storename' to='/'>
              <img src="/img/commerce.png" alt="" className='storename'/>
            </Link>
          </div>
        </div>
        <div className='center'>
          <div className='item'>
            <Link className='link' to='/'>
              Shop
            </Link>
          </div>
        </div>
        <div className='right'>
          <div className='item'></div>
          <div className='icons'>
            <div className='cartIcon'>
              <ShoppingCartOutlinedIcon />
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
