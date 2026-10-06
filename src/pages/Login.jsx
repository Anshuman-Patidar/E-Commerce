import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState({ email: '', password: '' })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert(`Logging in as ${form.email}`)
    }

    return (
        <main className='login-main dflex'>
            <div className='login-card'>
                <div className='login-header'>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account to continue shopping</p>
                </div>

                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <div className='input-wrapper'>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                placeholder='you@example.com'
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter your password'
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type='button'
                                className='toggle-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <button type='submit' className='login-btn'>
                        Sign In
                    </button>
                </form>

                <div className='login-footer'>
                    <p>Don't have an account? <Link to='signin' className='signin-link'>Create one</Link></p>
                </div>
            </div>
        </main>
    )
}
