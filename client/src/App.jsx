import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Toolbar from './components/Toolbar';
import SettingBar from './components/SettingBar';
import Canvas from './components/Canvas';

const App = () => {
	return (
		<BrowserRouter	>
			<div className='app'>
				{/* <Routes>
					<Route path='/:id' element={} />
					<Toolbar />
					<SettingBar />
					<Canvas />
					<Navigate replace
						to={`f${(+new Date()).toString(16)}`}
					/>
				</Routes> */}
				<Toolbar />
				<SettingBar />
				<Canvas />
			</div>
		</BrowserRouter>

	);
};

export default App;