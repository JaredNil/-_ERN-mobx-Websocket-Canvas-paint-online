import React from 'react';
import toolState from '../store/toolState'

const SettingBar = () => {
	return (
		<div className='setting-bar'>
			<label htmlFor="line-width">Толщина линии</label>
			<input
				id='line-width'
				onChange={e => toolState.setLineWidth(e.target.value)}
				type="number"
				min={1} max={50} defaultValue={1}
				style={{ margin: '0 10px' }}
			/>

			<label htmlFor="stroke-color">Толщина линии</label>
			<input
				id='stroke-color'
				onChange={e => toolState.setScrokeColor(e.target.value)}
				type="color"
				style={{ margin: '0 10px' }}
			/>
		</div>
	);
};

export default SettingBar;