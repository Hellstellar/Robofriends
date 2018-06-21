import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
//import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greeting = { 'Hello' + 'World' }/>, document.getElementById('root'));
registerServiceWorker();
