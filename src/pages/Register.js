import React from 'react';

const Register = () => {
    return (
        <div>
            <style>
                {`
                body {
                    font-family: Arial, Helvetica, sans-serif;
                    background-image: url('https://wallpapercave.com/wp/wp2296485.png');
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }

                * {
                    box-sizing: border-box;
                }

                /* Full-width input fields */
                input[type=text], input[type=password] {
                    width: 100%;
                    padding: 15px;
                    margin: 5px 0 22px 0;
                    display: inline-block;
                    border: none;
                    background: #f1f1f1;
                }

                input[type=text]:focus, input[type=password]:focus {
                    background-color: #ddd;
                    outline: none;
                }

                hr {
                    border: 1px solid #f1f1f1;
                    margin-bottom: 25px;
                }

                /* Set a style for all buttons */
                button {
                    background-color: #04AA6D;
                    color: white;
                    padding: 14px 20px;
                    margin: 8px 0;
                    border: none;
                    cursor: pointer;
                    width: 100%;
                    opacity: 0.9;
                }

                button:hover {
                    opacity: 1;
                }

                /* Extra styles for the cancel button */
                .cancelbtn {
                    padding: 14px 20px;
                    background-color: #f44336;
                }

                /* Float cancel and signup buttons and add an equal width */
                .cancelbtn, .signupbtn {
                    float: left;
                    width: 50%;
                }

                /* Add padding to container elements */
                .container {
                    padding: 16px;
                    background-color: white;
                    width: 100%;
                    max-width: 400px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
                }

                /* Clear floats */
                .clearfix::after {
                    content: "";
                    clear: both;
                    display: table;
                }

                /* Change styles for cancel button and signup button on extra small screens */
                @media screen and (max-width: 300px) {
                    .cancelbtn, .signupbtn {
                        width: 100%;
                    }
                }
                `}
            </style>
            <form method="post" style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="username"><b>Username</b></label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        required
                    />

                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                    />

                    <label htmlFor="role"><b>Role</b></label>
                    <input
                        type="text"
                        placeholder="Enter Role"
                        name="role"
                        required
                    />

                    <label>
                        <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: '15px' }} /> Remember me
                    </label>
                    
                    <p>
                        By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.
                    </p>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

// Export the component
export default Register;
