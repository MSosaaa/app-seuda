import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginFetch } from '../api/loginFetch';
import { AuthContext } from '../context/AuthContext';
import { Home } from '../pages/Home'
import { ResContraseña} from '../pages/ResContraseña'

const LoginForm = () => {
	const navigate = useNavigate();
	const { user, setUser , login } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	
	const [error, setError] = useState(null);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { token } = await loginFetch(formData);
			localStorage.setItem('token', token)
			login(token)

			setError('');
			navigate('/Home');
		} catch (error) {
			console.log(error);
			setError('Error de servidor');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<input
					type="password"
					name="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={handleInputChange}
				/>
			</div>
			{error && <p className="alert alert-danger">{error}</p>}
			<button type="submit">Login</button>
			<p>
				¿No tienes una cuenta? <Link to="/">Regístrate</Link>
			</p>
			<p>
				<Link to="/ResContraseña">¿Olvidaste tu contraseña?</Link>
			</p>
		</form>
	);
};

export default LoginForm;
