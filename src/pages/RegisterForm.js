import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerFetch } from '../api/registerFetch';


const RegisterForm = () => {
	
	const [formData, setFormData] = useState({
		firstname: 'Nombre',
		lastname: 'Apellido',
		email: 'email@test.com',
		password: 'Contraseña',
	});

	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await registerFetch(formData);
			console.log(res);
			setError('');
			setSuccess(true);
		} catch (error) {
			console.log(error);
			setError('Error de servidor');
			setSuccess(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Registrate</h2>
			<div>
				<input
					type="text"
					name="firstname"
					placeholder="Nombre"
					value={formData.firstname}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<input
					type="text"
					name="lastname"
					placeholder="Apellido"
					value={formData.lastname}
					onChange={handleInputChange}
				/>
			</div>
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
			<button type="submit">Registrate</button>
			{success && <p className="alert alert-success">Registro Completado</p>}
			<p>
				¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
			</p>
		</form>
	);
};

export default RegisterForm;
