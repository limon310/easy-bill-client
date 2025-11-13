import React from 'react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, setUser, updateUserProfile, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photo.value;
        const password = e.target.password.value;
        console.log("register button Clicked", name, email, photoURL, password)
        const passwordValidation = /^^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        // checked pasword validation
        if (!passwordValidation.test(password)) {
            toast.error("Password must be 6 characters, including uppercase and lowercase letters.")
            return;
        }

        // crete user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile({ displayName, photoURL })
                    .then(() => {
                        setUser(...result.user, displayName, photoURL)
                    })
                    .catch(error => {
                        console.log(error);
                        // setUser(result.user);
                    })
                toast("registration success");
                navigate("/");

            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }

    // sign in with google
    const handleSignInWithGoogle = () => {
        console.log("google login button clicked")
        signInWithGoogle()
            .then(result => {
                console.log(result);
                toast.success("login success");
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
    return (
        <div className='mb-12 mt-16'>
            <title>Easy Bill Register</title>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold mb-5">Register Now</h1>
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            {/* photo url */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="PhotoURL" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    {/* Google */}
                    <button onClick={handleSignInWithGoogle}
                        className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign Up with Google
                    </button>
                    <p>Already have an account? Please <Link className='text-blue-600 underline' to='/login'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;