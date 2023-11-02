import './LoginSignup.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                    console.log(res)
                }
                else if(res.data==="notexist"){
                    alert("Account added..!!! Welcome")
                    history("/Cart",{state:{id:email}})
                    console.log(res)
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);
        }

    }
  return (
    <div className='login'>
            <div class="container front">
                <div class="top">
                    <span>Sign Up</span>
                </div>
                <div class="form">
                    <form onSubmit={submit}>
                        <div class="inputBox inputBoxFront">
                            <label><i class="fa-solid fa-t"></i></label>
                            <input type="text" placeholder="First Name" class="input" required/>
                        </div>
                        <div class="inputBox inputBoxFront">
                            <label><i class="fa-solid fa-t"></i></label>
                            <input type="text" placeholder="Last Name" class="input" required/>
                        </div>
                        <div class="inputBox inputBoxFront">
                            <label><i class="fa-solid fa-envelope"></i></label>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email id" class="input" required/>
                        </div>
                        <div class="inputBox inputBoxFront">
                            <label><i class="fa-solid fa-lock"></i></label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" class="input" required/>
                        </div>
                        <div class="inputBox inputBoxFront">
                            <label><i class="fa-solid fa-lock"></i></label>
                            <input type="password" placeholder="Confirm Password" class="input" required/>
                        </div>
                        <button type="submit" class="btn_signup" style={{borderRadius:'5px', backgroundColor:'black', color:'white', padding:"5px"}}>Sign Up</button>
                    </form>
                    <br />
            <p style={{textAlign:'center'}}>OR</p>
            <Link  style={{textDecoration:'none', margin:'33px'}} to="/Login"> Already have a Account ? Login</Link>
                </div>
            </div>
   </div>
  )
}

export default Signup