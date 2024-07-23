import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import '../css/header.css'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Footer from '../components/Footer'


const Home = () => {
	const { user , logout  } = useContext(AuthContext);

	return user ? (
		<>
			<Header />
			<Nav />
			<Slider />
			<Footer />
		
		</>
	) : null;
};

export default Home;
