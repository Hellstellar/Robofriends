import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import { robots } from './Robots';

ReactDOM.render(<div>
					< CardList robots = { robots }/>
				</div>, document.getElementById('root'));
registerServiceWorker();
