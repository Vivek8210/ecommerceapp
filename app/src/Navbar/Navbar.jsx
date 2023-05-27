import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  return (
   
   <nav className="navbar navbar-expand-lg navbar-dark"  style={{backgroundColor:"rgb(125, 176, 173)",position:"sticky",top:"0", zIndex:"+2"}}>
    
    <div className="container-fluid">
    <Link className="navbar-brand" to='/fashion'>  <img src="https://codegama.com/assets/img/codegama-logo.png" alt="" style={{width:"190px",height:"40px"}} /></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
    <span class="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" to="/fashion">
              Products
            </Link>
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown"  >
              <ul style={{backgroundColor:"#F8F8FF"}}>
                <li><Link className="dropdown-item" to="/menshirt">Top wear</Link></li>
                <li><Link className="dropdown-item" to="/menformalshirt">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" to="/mencasualshirt">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.8em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
      
             
              </ul>
  
              <ul>
              <li><Link className="dropdown-item" >Top wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>

              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
              <li><Link className="dropdown-item" >Top wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
             
              </ul>
              <ul>
              <li><Link className="dropdown-item" >Top wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
             
              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
              <li><Link className="dropdown-item" >Top wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
               
              </ul>
              <ul>
              <li><Link className="dropdown-item" >Western Wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Top Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
               
       
              </ul>
            </div> */}
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" to="/homeappliance">
             Home Appliances
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <ul>
                <li><Link className="dropdown-item" href="#">Top Wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Top Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
               
             
              </ul>
  
              <ul style={{backgroundColor:"#F8F8FF"}}>
              <li><Link className="dropdown-item" >Western Wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Top Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                       
              </ul>
              <ul>
              <li><Link className="dropdown-item" >Top wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
               
              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
              <li><Link className="dropdown-item" >Western Wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Top Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
              
              </ul>
              <ul >
              <li><Link className="dropdown-item" >Top wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
           
              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
              <li><Link className="dropdown-item" >Western Wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Top Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
               
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" to="/electronics">
             Electronics
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <ul>
              <li><Link className="dropdown-item" to="/kidtopwear">Top wear</Link></li>
                <li><Link className="dropdown-item" to="/kidformalshirt">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" to="/kidcasualshirt">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
       
              </ul>
  
              <ul style={{backgroundColor:"#F8F8FF"}}>
              <li><Link className="dropdown-item" >Top wear</Link></li>
                <li><Link className="dropdown-item" >Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Formal T-Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Jackets</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Western Wear</Link></li>
                <li><Link className="dropdown-item" href="#">Formal Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
                <li><Link className="dropdown-item" href="#">Casual Shirt</Link></li>
         
              </ul>
              <ul>
                <li><Link className="dropdown-item" href="#"> action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}> action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
  
              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
             
              </ul>
              <ul>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
              
              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
    
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" to="/mobile">
            Mobiles
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <ul>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
             
              </ul>
  
              <ul style={{backgroundColor:"#F8F8FF"}}>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
            
              </ul>
              <ul>
                <li><Link className="dropdown-item" href="#"> action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}> action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
          
              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
               
              </ul>
              <ul>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
             
              </ul>
              <ul style={{backgroundColor:"#F8F8FF"}}>
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#" style={{color:"#516beb",fontSize:"0.9em",fontWeight:"bold",textTransform:'uppercase'}}>Action</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
                <li><Link className="dropdown-item" href="#">Mega Menu Link</Link></li>
              
              </ul>
            </div>
          </li>
  
         
        </ul>
        <form className="d-flex" style={{gap:"5px"}}>
        <InputGroup size='md'>
      <Input
        pr='10.5rem'
        background="white"
        placeholder='Search here'
      />
      <InputRightElement width='4.5rem'>
       
        <BsSearch style={{fontSize:"20px"}}/>
       
      </InputRightElement>
      
    </InputGroup>
  
            <Link role="button"
              to="/cart" style={{textAlign:'right',padding:'0px 20px 0px 130px',fontSize:'21px'}}>
             cart
            </Link>
           
        </form>


      </div>

    </div>
  </nav>
  )
}

export default Navbar