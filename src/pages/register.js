import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import LoggedContext from "../context/loggedContext"
import '../scss/login.scss'
const Register=()=>{
    let navigate=useNavigate()
    let {data ,setData}=useContext(LoggedContext);
    return(
        <div className="login">
            <h3>Register</h3>
        <label htmlFor="user">User Name</label>
        <input type="text" id="user" className="inputs" placeholder="E-mail"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="inputs" placeholder=""/>
       <button className="btn" onClick={(e)=>{
            if(document.querySelector('#user').value!=='' && document.querySelector('#password').value!==''){
                let user=document.querySelector('#user').value
                let password=document.querySelector('#password').value
                setData({
                    ...data,
                    user,
                    password
                })

                navigate('/', {replace:true})
            }else{
                alert('mail and password should be filled')
            }
        }}>Register</button>
    </div>
    )
}

export default Register;
