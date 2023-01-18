import React from 'react';
import './App.css';
import DataComponent from './component/DataComponent';
import ErrorComponent from './component/ErrorComponent';
import LoadComponent from './component/LoadComponent';

function App() {
    return (
			<div>
				<DataComponent url={'http://localhost:7070/data'}/>
				<LoadComponent url={'http://localhost:7070/loading'} />
				<ErrorComponent url={'http://localhost:7070/error'} />
			</div>
		);
}

export default App;
