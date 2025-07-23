import React, { useState } from "react";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if(isLogin){
                await signInWithEmailAndPassword(auth, email, password);
                alert(' Logged In!');
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('Account created!');
            }
        } catch (error){
            alert(error.message);
        }
    };

    return (
        // CONTAINER - Centers everything on the page
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            {/* 
                min-h-screen = min-height: 100vh (full viewport height)
                bg-gradient-to-br = background with gradient going to bottom-right
                from-blue-50 to-indigo-100 = gradient colors (light blue to light indigo)
                flex = display: flex
                items-center = align-items: center (vertical centering)
                justify-center = justify-content: center (horizontal centering)
                px-4 = padding-left: 1rem, padding-right: 1rem (horizontal padding)
            */}
            
            {/* FORM CARD - The white container that holds our form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                {/* 
                    bg-white = background-color: white
                    rounded-2xl = border-radius: 1rem (16px) - creates rounded corners
                    shadow-xl = box-shadow with large blur and spread
                    p-8 = padding: 2rem (32px) on all sides
                    w-full = width: 100%
                    max-w-md = max-width: 28rem (448px) - prevents form from getting too wide
                */}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 
                        space-y-6 = margin-top: 1.5rem on all child elements except first
                        This creates consistent spacing between form elements
                    */}
                    
                    {/* HEADER */}
                    <div className="text-center">
                        {/* text-center = text-align: center */}
                        
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {/* 
                                text-3xl = font-size: 1.875rem (30px), line-height: 2.25rem
                                font-bold = font-weight: 700
                                text-gray-900 = color: very dark gray (almost black)
                                mb-2 = margin-bottom: 0.5rem
                            */}
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        
                        <p className="text-gray-600 text-sm">
                            {/* 
                                text-gray-600 = color: medium gray
                                text-sm = font-size: 0.875rem (14px)
                            */}
                            {isLogin ? 'Sign in to your account' : 'Join us today'}
                        </p>
                    </div>

                    {/* EMAIL INPUT */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {/* 
                                block = display: block
                                text-sm = font-size: 0.875rem
                                font-medium = font-weight: 500
                                text-gray-700 = color: dark gray
                                mb-2 = margin-bottom: 0.5rem
                            */}
                            Email Address
                        </label>
                        
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400"
                            /*
                                w-full = width: 100%
                                px-4 = padding-left: 1rem, padding-right: 1rem
                                py-3 = padding-top: 0.75rem, padding-bottom: 0.75rem
                                border = border-width: 1px
                                border-gray-300 = border-color: light gray
                                rounded-lg = border-radius: 0.5rem (8px)
                                focus:ring-2 = on focus, add a 2px ring (outline)
                                focus:ring-blue-500 = ring color is blue
                                focus:border-blue-500 = border color becomes blue on focus
                                transition-colors = smooth color transitions
                                duration-200 = transition duration 200ms
                                placeholder-gray-400 = placeholder text color
                            */
                            required
                        />
                    </div>

                    {/* PASSWORD INPUT */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-gray-400"
                            required
                        />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 transform hover:scale-105"
                        /*
                            w-full = width: 100%
                            bg-blue-600 = background-color: blue
                            text-white = color: white
                            py-3 = padding-top: 0.75rem, padding-bottom: 0.75rem
                            px-4 = padding-left: 1rem, padding-right: 1rem
                            rounded-lg = border-radius: 0.5rem
                            font-medium = font-weight: 500
                            hover:bg-blue-700 = darker blue on hover
                            focus:outline-none = removes default focus outline
                            focus:ring-2 = adds custom focus ring
                            focus:ring-blue-500 = ring color
                            focus:ring-offset-2 = adds space between ring and element
                            transition-colors = smooth color transitions
                            duration-200 = 200ms transition
                            transform = enables transforms
                            hover:scale-105 = slightly enlarges on hover (105% size)
                        */
                    >
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>

                    {/* TOGGLE LINK */}
                    <div className="text-center pt-4 border-t border-gray-200">
                        {/* 
                            text-center = text-align: center
                            pt-4 = padding-top: 1rem
                            border-t = border-top: 1px solid
                            border-gray-200 = light gray border
                        */}
                        
                        <p className="text-sm text-gray-600">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:underline"
                            /*
                                mt-2 = margin-top: 0.5rem
                                text-blue-600 = color: blue
                                hover:text-blue-800 = darker blue on hover
                                font-medium = font-weight: 500
                                text-sm = font-size: 0.875rem
                                transition-colors = smooth color transitions
                                duration-200 = 200ms transition
                                hover:underline = adds underline on hover
                            */
                        >
                            {isLogin ? 'Create an account' : 'Sign in instead'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthForm;