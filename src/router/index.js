import React, { useContext } from 'react';
import {  Routes , Route } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import Home from '../pages/Home';
import Carrito from '../pages/Carrito';
import Favoritos from '../pages/Favoritos';
import Pagos from '../pages/Pagos';
import Productos from '../pages/Productos';
import { AuthContext } from '../context/AuthContext';
import ResContraseña from '../pages/ResContraseña'




const AppRouter = () => {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<RegisterForm />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="*" element={<LoginForm />} />
			{user ? (
				<>
					<Route path="/home" element={<Home />}/>
					
				</>
			) : null}
			<Route path='/resContraseña' element={< ResContraseña />} />
			<Route path='/favoritos' element={< Favoritos />} />
			<Route path='/carrito' element={ <Carrito />} />
			<Route path='/pagos' element={ <Pagos />} />
			<Route path='/productos' element={ <Productos />} />

		</Routes>
	);
};

export default AppRouter;




