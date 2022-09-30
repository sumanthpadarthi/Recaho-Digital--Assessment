import React ,{useState} from 'react'
import './App.css' 
import Facebook from './facebook.svg'
import Insta from './instagram.svg'
import Youtube from './youtube.svg'
import linkdin from './linkedin.svg'
import Mail from './envelope-solid.svg'
import Phone from './phone-solid.svg'
import Logo from './tmbill-logo.svg'

//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const App = ()=> {
  const [isActive, setIsActive] = useState(false);
  
  const onclickButton =()=>{
    setIsActive(current => !current);
  }
  




  return(
    <div>
      <nav className='navContainer'>
        
        <div className='mailcontainer'>
          
        <img alt="mail" src={Mail} height="30" width="auto"/>
        <p className='mailid'>contact@tmbl.com</p>
        </div>

        <div className='mailcontainer'>
        <img alt="mail" src={Phone} height="30" width="auto"/>
        <p className='mailid'>91+9876543256</p>
        
        </div>
        
        <div className='socialmediacontainer'>
          <img className='socialIcon' alt="face" src={Facebook} height="30" width="auto"/>
          <img className='socialIcon' alt="face" src={Insta} height="30" width="auto"/>
          <img  className='socialIcon' alt="face" src={Youtube} height="30" width="auto"/>
          <img  className='socialIcon'alt="face" src={linkdin} height="30" width="auto"/>
          </div>
          <div className='buttoncontainer'>
            <button className='button'>Download</button>
          </div>
        </nav>
        <nav className='imageContainer'>
        <img alt="face" src={Logo} height="100" width="auto"/>
        
          <p onMouseOver={onclickButton} 
          style={{
            
            color: isActive ? 'rgb(132, 198, 33)' : '',
          }}className='details'>Home</p>
          <p className='details'>Product</p>
          <select className='details2'>
            <option className='outletdropdown'>OutletType </option>
            <option className='outletdropdown'>QSR </option>
            <option className='outletdropdown'>Dine-in </option>
            <option className='outletdropdown'>Cafes </option>
            <option className='outletdropdown'>Cloud-Kitchens </option>
            <option className='outletdropdown'>FoodTrucks</option>
            <option className='outletdropdown'>IceCream </option>
            <option className='outletdropdown'>Pubs&Bars</option>
          </select>

          <select className='details2'>
            <option className='outletdropdown'>WhyBILL </option>
            <option className='outletdropdown'>For MultioleOutlets </option>
            <option className='outletdropdown'>For Owner </option>
            <option className='outletdropdown'>For Staff </option>
            </select>
          <p className='details'>Our Presence</p>
          <p className='details'>Became A Partner</p>
          <p className='details'>ContactUs</p>
        </nav>
        <div className='aboutResturant'>
          <div className='detailsofResturant'>
          <h1 className='heading'>Reopen Restaurants <br/> with <span className='technology'>Technology!</span> </h1>
          <p className='description'>Unlock Your Restaurant With Digital Ordering !</p>
          <div>
          <button className='button1'>Take Free Demo</button>
          <button className='button2'>Read Our story</button>
          </div>
          
          </div>
          <div>
            <img width='auto' height="500" alt="tab" src="https://tmbill.com/img/tmbill_all_in_one_restaurant_pos.png"/>
          </div>
       </div>

       <div className='resturantOperating'>
        <div>
        <img height={500} alt="resturant" src="https://tmbill.com/img/tmbill_restaurant_operating_system.png"/>
        </div>
        <div>
          <h1>Restaurant Operating System</h1>
          <p className='description2'>TMBill is a leading cloud-based end-to-end technology solutions for the Restaurants, Bars, Cafés, QSRs, Ice-cream Shops, Bakeries, and Cake Shops.
            TMBill helps all types of food businesses, from a standalone food outlets to a large food chain, manage functions like billing, QR Code Ordering Platform, CRM, 
            Customer Loyalty, Aggregators integrations, Analytics, Inventory, Recipe, and Wastage Management, Centralized Menu Management, Vendor Management and more. We have
             successfully registered a global presence, with more than 5000+ customers in over 350+ cities and 21+ countries.
            We are the first company to provide a complete online cloud POS solution for restaurants on Desktop and Mobile Devices.</p>



        </div>




       </div>

















    </div>
  )
}
export default App