import './Login.css'
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { CreateUserWithEmailAndPassword, handelGoogleSignIn, handelSignOut, initializeLoginFramework, sendResetEmailLink, SignInWithEmailAndPassword } from './loginManager';

;

initializeLoginFramework();

function Login() {
  const [user, setUser] = useState({ isSignedIn: false, email: '', name: '', url: '', password: '', newUser: false });
  const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
  const  navigate = useNavigate();
  const { state } = useLocation();
  document.title="Login"
  const handelBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === 'name') {
    }
    if (event.target.name === 'email') {
      const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value)
      isFormValid = isEmailValid;
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length >= 6;
      isFormValid = isPasswordValid;
    }
    if (isFormValid) {
      const newUserInfo = { ...user }
      newUserInfo[event.target.name] = event.target.value
      newUserInfo.error = '';
      setUser(newUserInfo)
    }
  }

  const handelSubmit = (e) => {
    console.log(user);
    if (user.newUser && user.name && user.email && user.password) {
     CreateUserWithEmailAndPassword(user.name,user.email,user.password)
     .then(res=> {
      handelResponse(res,true);
     }) 
    }

    if (!user.newUser && user.email && user.password) {
      
      SignInWithEmailAndPassword(user.email,user.password)
      .then(res=> {
       handelResponse(res,true);
       })
    }
    e.preventDefault();
  }
  const googleSignIn=()=>{
    handelGoogleSignIn()
    .then(res=> {
      handelResponse(res,true);
    })
  }
  const signOut=()=>{
    handelSignOut()
    .then(res=> {
      handelResponse(res,false);
    })
  }
  const handelResponse=(res,redirect)=>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){ 
    navigate(state?.path || "/");
    }
  }

  return (
    <div className="Login">
      {!user.isSignedIn ?
        <div>
          <button onClick={googleSignIn}>Continue With Google</button>
          <h3>Continue With Email</h3>
          <input type="checkbox" name="checkUser" id="checkUser" onChange={() => {
            setUser({ newUser: !user.newUser })
          }} />
          <label htmlFor="checkUser">New User?</label>

          <form onSubmit={handelSubmit}>
            {user.newUser && <div> <input type="text" name="name" id="name" placeholder='Name' onBlur={handelBlur} /><br /></div>}
            <input type="text" name="email" id="email" placeholder='Email' autoComplete='username' required onBlur={handelBlur} /><br />
            <input type="password" name="password" id="password" placeholder='Password' autoComplete='current-password' required onBlur={handelBlur} /><br />
            <p onClick={()=>{sendResetEmailLink(user.email)}}> Reset Password?</p>
            <input type="submit" value={user.newUser ? "Sign Up" : "Sign In"} /> 
          </form>

          <p style={{ color: 'red' }}>{user.error}</p>
        </div> :
        <div>
          {<p style={{ color: 'green' }}>User Created Successfully !</p>}
          <button onClick={signOut}>Log-Out</button>
        </div>}
    </div>
  );
}

export default Login;
