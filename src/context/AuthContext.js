import { useState, createContext } from 'react';
import { getMeFetch } from '../api/getMeFetch';
import { useEffect } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect (() => {
        (async () => {
			const token = localStorage.getItem('token')
			await login(token)
			setLoading(null)
		})()

	}, [])

	const login = async (token) => {
		try {
           const user = await getMeFetch(token)
		   delete user.password
		   setUser(user)
		} catch (error) {
           console.log(error)
		}
	}
    
const logout = () => {
	localStorage.clear()
	setUser(null)
}

	const data = {
		user,
		setUser,
		login,
		logout,
	};

	if(loading) return null
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
