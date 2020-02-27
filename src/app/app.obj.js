import React from 'react';
import AppRouter from './app.router';
import './app.style.desktop.scss';
import './app.style.mobile.scss';

export default function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}