import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/pages/Profile/Profile'
import './App.css'
import Dialogs from './components/pages/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'
import Users from './components/pages/Users/Users'

function App(): React.ReactElement {
	return (
		<div className="app">
			<Header />
			<Navbar />
			<div className="app-pages-content">
					<Routes>
						<Route path="/profile/" element={<Profile />}/>
						<Route path="/dialogs/*" element={<Dialogs />}/>
						<Route path="/users" element={<Users />}/>
					</Routes>
			</div>
		</div>
	);
}

export default App
