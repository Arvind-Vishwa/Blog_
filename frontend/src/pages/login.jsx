import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/login',
                { username, email, password }
            )
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <button
        onClick={()=>{navigate('/')}}>
            Home
        </button>
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.title}>Sign In</h2>
                <p style={styles.subtitle}>Enter your details to access your account</p>
                
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        placeholder='Username'
                        required
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        placeholder='Email Address'
                        required
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        placeholder='Password'
                        required
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <button type='submit' style={styles.button}>Continue</button>
                </form>
                
                <p style={styles.footer}>
                    Don't have account? <span style={styles.link}>
                        <button
                        onClick={()=>{navigate('/register')}}
                        >
                            Sign Up
                        </button>
                    </span>
                </p>
            </div>
        </div>
        </>
    )
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff', // Pure white background
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    loginBox: {
        width: '100%',
        maxWidth: '360px',
        padding: '20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#111827',
        margin: '0 0 8px 0',
    },
    subtitle: {
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '32px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    input: {
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        backgroundColor: '#f9fafb',
        fontSize: '14px',
        outline: 'none',
        color: '#111827',
        transition: 'border-color 0.2s ease',
    },
    button: {
        marginTop: '8px',
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#111827', // Clean black button
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
    },
    footer: {
        marginTop: '24px',
        fontSize: '13px',
        color: '#6b7280',
    },
    link: {
        color: '#2563eb',
        cursor: 'pointer',
        fontWeight: '500',
    }
}

export default Login
