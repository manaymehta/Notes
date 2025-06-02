import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { validateEmail } from '../../utils/helper';

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setError("Please enter a valid email address");
			return;
		}
		if (!password) {
			setError("Please enter password");
			return;
		}
		setError("");

		//Login API
	}
	return <>
		<Navbar />
		<div className='flex items-center justify-center mt-30'>
			<div className='border rounded bg-white w-96 px-7 py-10'>
				<form onSubmit={handleLogin}>
					<h4 className='text-2xl mb-7'>Login</h4>
					<input
						className='input-box'
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<PasswordInput
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					{error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

					<button className='btn-primary' type='submit'>Login</button>

					<p className='text-sm text-center mt-4'>
						Not registered yet?{" "}
						<Link to='/signup' className='text-primary font-medium underline'>Create an accout</Link>
					</p>
				</form>
			</div>
		</div>
	</>;
}

export default Login
