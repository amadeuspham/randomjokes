import React from 'react';

import './App.css';
import Header from './components/presentations/Header';
import ContainerJokeWindow from './components/containers/ContainerJokeWindow';

function App() {
  return (
    <div className="App">
    	<Header/>
			<ContainerJokeWindow/>
    </div>
  );
}

export default App;
