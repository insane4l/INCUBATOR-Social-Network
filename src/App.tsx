import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileC from './components/pages/Profile/ProfileC';
import './App.css';
import Dialogs from './components/pages/Dialogs/Dialogs';
import { Navigate, Route, Routes } from 'react-router-dom';
import UsersC from './components/pages/Users/UsersC';
import HeaderC from './components/Header/HeaderC';
import Login from './components/pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './redux/store';
import Music from './components/pages/Music/Music';
import News from './components/pages/News/News';
import Settings from './components/pages/Settings/Settings';
import Spinner from './components/common/Spinner';
import { ititializeApp } from './redux/appReducer';
import { getIsAppInitialized } from './selectors/appSelectors';
import { getAuthUserId } from './selectors/authSelectors';

function App(): React.ReactElement {

	const dispatch = useDispatch();

	const authUserId = useSelector(getAuthUserId);
	const isAppInitialized = useSelector(getIsAppInitialized);

	useEffect(() => {
		dispatch(ititializeApp())
	}, []);


	
	if (!isAppInitialized) return <Spinner />
	// todo: redirect with auth user id <Route path="/profile/*" element={ <Navigate to={`/profile/${authUserId || ''}`}/>} />
	return (
		<div className="app">
			
			<HeaderC />
			<Navbar />
			<div className="app-pages-content">
					<Routes>
						<Route path="/profile/*" element={ <Navigate to={`/profile/${authUserId || 'userIdHere'}`}/>} />
						<Route path="/profile/:userId" element={<ProfileC />}/>
						<Route path="/dialogs/*" element={<Dialogs />}/>
						<Route path="/users" element={<UsersC />}/>
						<Route path="/login" element={<Login />} />
						<Route path="/music" element={<Music />} />
						<Route path="/news" element={<News />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
			</div>
			
		</div>
	);
}

export default App
