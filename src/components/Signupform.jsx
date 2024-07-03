// import React, { useState } from 'react';
// import './signup.css';
// import { NavLink } from 'react-router-dom';
// import { FaEye } from "react-icons/fa";
// import { TbEyeClosed } from "react-icons/tb";


// function Signupform() {
//     const [user, setUser] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         password: ""
//     });

//     const [errors, setErrors] = useState({});

//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };


//     const handleInput = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;

//         setUser({
//             ...user,
//             [name]: value 
//         });

        
//         if (name === 'username' && value.length < 3) {
//             setErrors({...errors, username: 'Username must be at least 3 characters long'});
//         } else {
//             setErrors({...errors, username: ''});
//         }


//         if (!user.email) {
//                       errors.email = "Email is required";
//                       isValid = false;
//                   } else if (!/\S+@\S+\.\S+/.test(user.email)) {
//                       errors.email = "Invalid email address";
//                       isValid = false;
//                   }

//         if (name === 'password' && value.length < 6) {
//             setErrors({...errors, password: 'Password must be at least 6 characters long'});
//         } else {
//             setErrors({...errors, password: ''});
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(user);
        
      

//         if(response.ok){

//             const res_data = await response.json();
//             storeTokenInLs(res_data.token);
//             alert("Registration successful")
//             setUser({
//                 username: "",
//                 email: "",
//                 phone: "",
//                 password: ""
//             })
//             navigate("/")
//         }

//         else {
//             // If status code is 400, display email already exists message
//             if (response.status === 400) {
//                 alert("Email already exists. Please use a different email.");
//             } else {
//                 alert("Registration failed. Please try again later.");
//             }}

//         }
       
    

//     return (
//         <div>
//             <div className="reg">
//                 <div className="reg-form">
//                     <h2>Sign Up</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <input
//                                 type='text'
//                                 name='username' 
//                                 placeholder='Enter your username' 
//                                 id='username' 
//                                 required
//                                 autoComplete='off'
//                                 value={user.username} 
//                                 onChange={handleInput}
//                                 className={errors.username ? 'error' : ''}
//                             />
//                             {errors.username && <div className="error-message">{errors.username}</div>}

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

//                             <input
//                                 type='number'
//                                 name='phone' 
//                                 placeholder='Enter your phone no' 
//                                 id='phon' 
//                                 required
//                                 autoComplete='off'
//                                 value={user.phone} 
//                                 onChange={handleInput}
//                             />

//                             <div className="pass">

//                             <input
//                                 // type='password'
//                                 type={showPassword ? 'text' : 'password'}
//                                 name='password' 
//                                 placeholder='Enter your password' 
//                                 id='password' 
//                                 required
//                                 autoComplete='off'
//                                 value={user.password} 
//                                 onChange={handleInput}
//                                 className={errors.password ? 'error' : ''}
//                             />
//                             {errors.password && <div className="error-message">{errors.password}</div>}

//                             <span 
//                                 className="toggle-password" 
//                                 onClick={togglePasswordVisibility}
//                             >
                                
//                                 {showPassword ? <TbEyeClosed /> : <FaEye />}
//                             </span>


//                             </div>


//                             <button type='submit'>Register Now</button>

//                             <div className="login-sec">
//                             <p>Already have an account?</p>
//                             <NavLink className='loginlink' to="/login">Login</NavLink>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Signupform








import React, { useState } from 'react';
import './signup.css';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb"; // Corrected import for eye closed icon

function Signupform() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value 
        });

        // Validate username
        if (name === 'username' && value.length < 3) {
            setErrors({...errors, username: 'Username must be at least 3 characters long'});
        } else {
            setErrors({...errors, username: ''});
        }

        // Validate email
        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            setErrors({...errors, email: 'Invalid email address'});
        } else {
            setErrors({...errors, email: ''});
        }

        // Validate password
        if (name === 'password' && value.length < 6) {
            setErrors({...errors, password: 'Password must be at least 6 characters long'});
        } else {
            setErrors({...errors, password: ''});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const res_data = await response.json();
                alert("Registration successful");
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                });
                navigate("/") // Navigate to home page after successful registration
            } else {
                // If status code is 400, display email already exists message
                if (response.status === 400) {
                    alert("Email already exists. Please use a different email.");
                } else {
                    alert("Registration failed. Please try again later.");
                }
            }
        } catch (error) {
            console.error('Error registering:', error);
            alert("Registration failed. Please try again later.");
        }
    };

    return (
        <div>
            <div className="reg">
                <div className="reg-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type='text'
                                name='username' 
                                placeholder='Enter your username' 
                                id='username' 
                                required
                                autoComplete='off'
                                value={user.username} 
                                onChange={handleInput}
                                className={errors.username ? 'error' : ''}
                            />
                            {errors.username && <div className="error-message">{errors.username}</div>}

                            <input
                                type='email'
                                name='email' 
                                placeholder='Enter your email' 
                                id='email' 
                                required
                                autoComplete='off'
                                value={user.email} 
                                onChange={handleInput}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <div className="error-message">{errors.email}</div>}

                            <input
                                type='number'
                                name='phone' 
                                placeholder='Enter your phone no' 
                                id='phone' 
                                required
                                autoComplete='off'
                                value={user.phone} 
                                onChange={handleInput}
                            />

                            <div className="pass">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password' 
                                    placeholder='Enter your password' 
                                    id='password' 
                                    required
                                    autoComplete='off'
                                    value={user.password} 
                                    onChange={handleInput}
                                    className={errors.password ? 'error' : ''}
                                />
                                {errors.password && <div className="error-message">{errors.password}</div>}

                                <span 
                                    className="toggle-password" 
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <TbEyeClosed /> : <FaEye />}
                                </span>
                            </div>

                            <button type='submit'>Register Now</button>

                            <div className="login-sec">
                                <p>Already have an account?</p>
                                <NavLink className='loginlink' to="/login">Login</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signupform;
