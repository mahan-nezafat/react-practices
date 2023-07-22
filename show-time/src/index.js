import React from 'react';
import { creatRoot } from 'react-dom/client'
import App from './app';

const root = creatRoot(document.getElementById('root'));

root.render(<App />);