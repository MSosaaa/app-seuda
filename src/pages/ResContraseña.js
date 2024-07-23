import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {LoginForm} from '../pages/LoginForm'
import {useState} from 'react'


const ResContraseña = () => {
    const [ password, setPassword ] = useState('')
	const [ repassword, setRepassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	

    
	return (
		<form onSubmit={handleSubmit} >
			<h2>Crea una nueva contraseña</h2>
			<div>
				<input
					type="text"
					name="contraseña"
					placeholder="Nueva contraseña"
					value={setPassword.password}
				/>
			</div>
			<h2>Repetí la nueva contraseña</h2>
			<div>
				<input
					type="text"
					name="contraseña"
					placeholder="Nueva contraseña"
					value={setRepassword.repassword}
				/>
			</div>
            <button type="submit">Actualiza tu contraseña</button>
            <p>
				<Link to="/LoginForm">Luego de actualizarla ya podes ingresar</Link>
			</p>
        </form>

    )


}

export default ResContraseña;