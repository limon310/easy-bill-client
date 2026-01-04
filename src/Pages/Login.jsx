
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc'; // Install react-icons for cleaner code

const Login = () => {
    const { signInUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInUser(email, password);
            toast.success("Welcome back!");
            navigate(location.state || "/");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            toast.success("Logged in with Google");
            navigate(location.state || "/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-base-200 to-base-300 px-4">
            <title>Login | Easy Bill</title>
            
            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
                <div className="card-body p-8">
                    {/* Header Section */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-extrabold tracking-tight">Welcome Back</h1>
                        <p className="text-sm text-base-content/60 mt-2">Please enter your details to sign in</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="name@company.com" 
                                className="input input-bordered focus:input-primary transition-all" 
                                required 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password"
                                placeholder="••••••••" 
                                className="input input-bordered focus:input-primary transition-all" 
                                required 
                            />
                        </div>

                        <button 
                            className={`btn btn-primary w-full mt-4 ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {loading ? "" : "Sign In"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider text-xs text-base-content/40 my-6 uppercase">Or continue with</div>

                    {/* Social Login */}
                    <button 
                        onClick={handleGoogleLogin}
                        className="btn btn-outline gap-3 w-full hover:bg-base-200 border-base-300 font-medium"
                    >
                        <FcGoogle size={20} />
                        Google
                    </button>

                    {/* Footer */}
                    <p className="text-center text-sm mt-8 text-base-content/70">
                        Don't have an account? 
                        <Link to="/register" className="link link-primary font-bold ml-1 no-underline hover:underline">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;