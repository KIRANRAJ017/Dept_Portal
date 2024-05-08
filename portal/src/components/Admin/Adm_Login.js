import React, { useState } from "react";
import * as Components from './Logincss';
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {

    const history=useNavigate();

    const [password, setpass] = useState('');
    const [email, setemail] = useState('');

     async function handleSubmit(e){
        e.preventDefault();
    
        try{
            await axios.post("http://localhost:8000/admin_login",{
                email,password
            })
            .then(res=>{
                
                if(res.data=="exist"){
                    history('/admin_home')
                }
                else if(res.data=="notexist"){
                    alert("Invalid User");
                    history('/admin_login')
                }
            })
            .catch(e=>{
                alert("Invalid")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
      };

    const con={
        display:'grid',
        gridTemplateColumns:'repeat(2,auto)',
        justifyContent:'center',
        height:'88vh',
        paddingTop:'12vh'
    }
    const [signIn, toggle] = React.useState(true);
     return(
        <div>
            <Navbar/>
        <div style={con}>  
         <Components.Container>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form action="/admin_login" method="post">
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' name="email"  onChange={(e) => setemail(e.target.value)}/>
                      <Components.Input type='password' placeholder='Password'name="password"  onChange={(e) => setpass(e.target.value)}/>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={handleSubmit}><Link to="">Sign In</Link></Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Again!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us{toggle}<br/><br/><b>Admin Login</b>
                       </Components.Paragraph>

                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </div>
         </div>
     )
}

export default Login;