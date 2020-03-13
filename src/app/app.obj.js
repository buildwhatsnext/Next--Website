import React from 'react';
import AppRouter from './app.router';
import './app.style.desktop.scss';
import './app.style.mobile.scss';
import './app.style.general.scss';

export default function App() {
  return (
    <div className="app app__theme__blue">
      <AppRouter />
    </div>
  )
}