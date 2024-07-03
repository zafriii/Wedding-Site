// import React, {useState} from 'react'
// import './login.css'
// import { FaEye } from "react-icons/fa";
// import { TbEyeClosed } from "react-icons/tb"
// import { NavLink } from 'react-router-dom';

// function Loginform() {

// const [user,setUser] = useState({
//     email:"",
//     password:""

// })

// const [showPassword, setShowPassword] = useState(false);


// const handleInput = (e) => {

//     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
//       ...user,
//       [name]:value 
//     })
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(user)
// }

// const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
// };


//   return (
//     <div>
//             <div className="login">
//                 <div className="login-form">
//                     <h2>Login</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <input
//                                 type='email'
//                                 name='email' 
//                                 placeholder='Enter your email' 
//                                 id='email' 
//                                 required
//                                 autoComplete='off'
//                                 value={user.email} 
//                                 onChange={handleInput}
//                             />
//                             <div className="password">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 name='password' 
//                                 placeholder='Enter your password' 
//                                 id='password' 
//                                 required
//                                 autoComplete='off'
//                                 value={user.password} 
//                                 onChange={handleInput}
//                             />
//                             <span 
//                                 className="toggle-password" 
//                                 onClick={togglePasswordVisibility}
//                             >
//                                 {/* {showPassword ? 'Hide' : 'Show'} */}
//                                 {showPassword ? <TbEyeClosed /> : <FaEye />}
//                             </span>
//                             </div>
//                             <button type='submit'>Login</button>

//                             <div className="signup-sec">
//                             <p>Don't have an account?</p>
//                             <NavLink className='reglink' to="/signup">Signup</NavLink>
//                             </div>

//                             <div className="forgot">
//                             <NavLink className='forgot' to="/forgot_pass">Forgot Password?</NavLink>
//                             </div>
                            
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//   )
// }


// export default Loginform






import React, {useState} from 'react'
import './login.css'
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb"
import { NavLink, useNavigate } from 'react-router-dom';

function Loginform() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const res_data = await response.json();
                alert("Login successful");
                setUser({
                    email: "",
                    password: ""
                });
                navigate("/"); // Navigate to homepage after successful login
            } else {
                alert("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert("Login failed. Please try again later.");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div>
            <div className="login">
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type='email'
                                name='email' 
                                placeholder='Enter your email' 
                                id='email' 
                                required
                                autoComplete='off'
                                value={user.email} 
                                onChange={handleInput}
                            />
                            <div className="password">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password' 
                                placeholder='Enter your password' 
                                id='password' 
                                required
                                autoComplete='off'
                                value={user.password} 
                                onChange={handleInput}
                            />
                            <span 
                                className="toggle-password" 
                                onClick={togglePasswordVisibility}
                            >
                                {/* {showPassword ? 'Hide' : 'Show'} */}
                                {showPassword ? <TbEyeClosed /> : <FaEye />}
                            </span>
                            </div>
                            <button type='submit'>Login</button>

                            <div className="signup-sec">
                            <p>Don't have an account?</p>
                            <NavLink className='reglink' to="/signup">Signup</NavLink>
                            </div>

                            <div className="forgot">
                            <NavLink className='forgot' to="/forgot_pass">Forgot Password?</NavLink>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}


export default Loginform