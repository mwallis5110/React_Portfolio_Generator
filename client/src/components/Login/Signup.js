import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

function SignUp () {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUp, {error}] = useMutation(ADD_USER);
    const handleSignUp = async () => {
        let {user} = await signUp(username, email, password);

        // let {user} = await signUp(firstName, lastName, email, password);
        console.log(user);
    }


    return (
        <form>
            <h3>Sign Up</h3>

            {/* <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" onChange={(e) => {setLastName(e.target.value)}}/>
            </div> */}
            <div className="form-group">
                <label>Username</label>
                {/* <input type="text" className="form-control" placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}}/> */}
                <input type="text" className="form-control" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>

            <button type="button" className="btn btn-primary btn-block" onClick={handleSignUp}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    );
}


export default SignUp;