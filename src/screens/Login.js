import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const { success, loading, user } = useContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (success) {
            navigate("/")
        }
    }, [success])
    return (
            <form className='form'>
            

                <div className='form-group'>
                    <label htmlFor="password">password</label>
                    <input  type="text" className='form-control'
                        placeholder='enter password' value={password} />
                    
                </div>

                <div className='form-group'>
                    <label htmlFor="email">email</label>
                    <input  type="text" className='form-control'
                        placeholder='example@gmail.com' value={email} />
                    
                </div>
                <button type="submit">
                    
                </button>
                <div className="row">
                    I dont have an account
                    <Link to="/register">
                        Register
                    </Link>
                </div>
      
    <div />
    </form>
  )
}

export default Login;