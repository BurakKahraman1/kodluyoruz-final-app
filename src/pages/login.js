import { useNavigate,Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import LoggedContext from "../context/loggedContext"

const Login=()=>{
    let navigate=useNavigate()
    let {data,setWelcome}=useContext(LoggedContext);
    let auth='islogged';
    useEffect(()=>{

        if(localStorage.getItem(auth)){
            setWelcome(true);
            navigate('/home', {replace:true})
        }
    },[])
        
        
    return(
        <div className="login">
            <h3>Login</h3>
        <label htmlFor="user">User Name</label>
        <input type="text" id="user" className="inputs" placeholder="E-mail"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="inputs" placeholder=""/>
       <button className="btn" onClick={(e)=>{
           if(document.querySelector('#user').value===data.user && document.querySelector('#password').value===data.password){
            setWelcome(true)
            localStorage.setItem(auth,JSON.stringify("auth:true") )
            navigate('/home', {replace:true})
        }else if(document.querySelector('#user').value==='' && document.querySelector('#password').value===''){
            alert('mail and password should be filled')
        }else{
            alert('Wrong password or username')
        }
        }}>Login</button>
        <Link to="/register"><p className="font">Don't you have an account?</p></Link>
    </div>
    )
}

export default Login;