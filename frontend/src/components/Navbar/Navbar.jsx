import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
      const [menu,setMenu] = useState('Shop');
      const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("Shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Men")}><Link style={{textDecoration:'none'}} to='/Men'>Men</Link>{menu==='Men'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Women")}><Link style={{textDecoration:'none'}} to='/Women'>Women</Link>{menu==='Women'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("Kids")}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link>{menu==='Kids'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart' >
        <li><Link to='/Signup'><button onClick={()=>setMenu("Signup")}>Sign Up</button></Link>{menu==='Signup'?<></>:<></>}</li>
        <li><Link to='/Login'><button>Login</button></Link>{menu==='Login'?<></>:<></>}</li>
        <div className='cart-logo'>
            <li><Link style={{textDecoration:"none"}} to='/Cart'><i class="fa-solid fa-cart-shopping cart"></i></Link>{menu==='Kids'?<></>:<></>}</li>
            <li><Link style={{textDecoration:"none"}} to='/Cart'><div className='nav-cart-count'>{getTotalCartItems()}</div></Link>{menu==='Kids'?<></>:<></>}</li>
            
        </div>
        
      </div>
    </div>
  )
}

export default Navbar

