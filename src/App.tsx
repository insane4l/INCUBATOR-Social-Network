import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileC from './components/pages/Profile/ProfileC';
import './App.css';
import Dialogs from './components/pages/Dialogs/Dialogs';
import { Navigate, Route, Routes } from 'react-router-dom';
import UsersC from './components/pages/Users/UsersC';
import HeaderC from './components/Header/HeaderC';
import Login from './components/pages/Login/Login';

function App(): React.ReactElement {
	return (
		<div className="app">
			<HeaderC />
			<Navbar />
			<div className="app-pages-content">
					<Routes>
						<Route path="/profile/*" element={ <Navigate to={`/profile/2`}/>} /> {/*todo: redirect with auth user id */}
						<Route path="/profile/:userId" element={<ProfileC />}/>
						<Route path="/dialogs/*" element={<Dialogs />}/>
						<Route path="/users" element={<UsersC />}/>
						<Route path="/login" element={<Login />} />
					</Routes>
			</div>
		</div>
	);
}

export default App
