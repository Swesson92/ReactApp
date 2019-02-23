import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appen from './Appen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Appen/>, document.getElementById('appen'));
registerServiceWorker();
