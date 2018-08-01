import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './Containers/Dashboard';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
