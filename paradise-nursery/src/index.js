import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot for React 18
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root for rendering the app

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
