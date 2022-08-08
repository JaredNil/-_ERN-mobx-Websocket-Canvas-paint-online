import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';

const App = () => {
	return (
		<BrowserRouter	>
			<div className='app'>
				<Toolbar />
				<SettingBar />
				<Canvas />
			</div>
		</BrowserRouter>

	);
};

export default App;