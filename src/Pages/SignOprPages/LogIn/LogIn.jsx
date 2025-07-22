import React, { useState } from 'react'

import "./LogIn.css";
import { NavLink, useNavigate } from 'react-router-dom';

const LogIn = () => {

    const [LogInData,setLogInData]=useState({
        id : "",
        password : "",
    })
    const navigate = useNavigate();

    const handleInputChange=(event)=>{
        const name=event.target.name;
        const val=event.target.value;
        setLogInData({ ...LogInData, [name]: val });
    }
    const [admin,setAdmin]=useState(false);
    const handleAdminEntry = ()=>{
        setAdmin(true);
    }
    const [userData,setUserData]=useState({
        id : "",
        name : "",
        address:"",
        emailId:"",
        phoneNumber:"",
        role:"client"
    }); 
    const handleSubmitBtn=(event)=>{
        event.preventDefault();
            // if(admin===false) {
            //     ClientServices.getClientByIdAndPassword(LogInData).then(Response=>{
            //         setUserData(userData.id = Response.data.id);
            //         setUserData(userData.name=Response.data.name);
            //         setUserData(userData.address=Response.data.address);
            //         setUserData(userData.emailId=Response.data.emailId);
            //         setUserData(userData.phoneNumber=Response.data.phoneNumber);
            //         localStorage.setItem('userData', JSON.stringify(userData));
            //         navigate('/');
            //     })
            // }else{
            //     // (AdminServices).getAdminByIdAndPassword(LogInData).then(Response=>{
            //     //     setUserData(userData.Id=Response.data.adminId);
            //     //     setUserData(userData.name=Response.data.adminName);
            //     //     setUserData(userData.address=Response.data.address);
            //     //     setUserData(userData.emailId=Response.data.emailId);
            //     //     setUserData(userData.phoneNumber=Response.data.contactNumber);
            //     //     setUserData(userData.role="admin");
            //     //     localStorage.setItem('userData', JSON.stringify(userData));
            //     // })
            // }
    }

  return (
    <div className='LogInMainOuterSection'>
        <div className="LogInMainInnerSection">
            <div className="leftOuterLogInMainInnerSection">
                <div className="leftInnerLogInMainInnerSection">
                    <h1 className='h1TagleftInnerLogInMainInnerSection'>LogIn Here</h1>
                    <form className='formOfLoginPage' action="">
                        {(admin===true) ? (
                        <>
                            <input type="number" name='id' onChange={handleInputChange} style={{width:"250px"}} placeholder='UserId' required/><br/>
                        </>) : 
                         (<>
                            <input type="text" name='id' onChange={handleInputChange} placeholder='UserId' required/><br/>
                         </>) 
                        }
                        <input type="password" name='password' onChange={handleInputChange} placeholder='password' required/><br/>
                        <button className='btnLogInPage' onClick={handleSubmitBtn}><NavLink className="navLink" to="/">Submit</NavLink></button>
                    </form>
                    {/* <p>Don't have an Account <NavLink className="navBar" style={{color:"#580097"}} to="/signUp">click Here</NavLink></p>
                    <p style={{display:"flex",justifyContent:"center"}}>SignIn as<pre> </pre> <div onClick={handleAdminEntry} style={{cursor:"pointer", color:"#580097"}}> Admin</div></p> */}
                </div>
            </div>
            <div className="rightOuterLogInMainInnerSection">
                <div className="rightInnerLogInMainInnerSection">
                    <h1 className='h1TagleftInnerLogInMainInnerSection'>Welcome to <br/><span>Taste-Express</span></h1>
                    <p> Bridging Taste to your Hearts.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn
