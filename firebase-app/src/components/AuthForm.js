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
        <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login' : 'Sign up'}</h2>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">{isLogin? 'Login' : 'Sign up'}</button>
            <p onClick={() => setIsLogin(!isLogin)} style={{cursor: 'pointer', color: 'blue' }}>
                {isLogin? 'Create an account' : 'ALready have an account? Login'}
            </p>
        </form>
    );
}

export default AuthForm;