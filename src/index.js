import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Sample from './sample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App title={'Gentes Relevantes'}/> , document.getElementById('root'));
registerServiceWorker();


 