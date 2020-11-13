import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { store } from './redux';
import { Popup, Section, StickyContainer } from './components';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header></header>
        {/* <BrowserRouter>
          <Switch> */}
        <div style={{ minWidth: '256px', gridColumnStart: '2', gridColumnEnd: '3' }}>
          <StickyContainer top={'12.5vh'} className='side-section'>
            <Section>Content</Section>
            <Section>Content</Section>
          </StickyContainer>
        </div>
        <div className='main-section' style={{ minWidth: '640px', gridColumnStart: '3', gridColumnEnd: '4' }}>
          <Section >Content</Section>
          <Popup><Section >Content</Section></Popup>
          <Section >Content</Section>
          <Section >Content</Section>
          <Section >Content</Section>
        </div>
        <div style={{ minWidth: '256px', gridColumnStart: '4', gridColumnEnd: '5' }}>
          <StickyContainer top={'12.5vh'} className='side-section'>
            <Section>Content</Section>
            <Section>Content</Section>
          </StickyContainer>
        </div>

        {/* </Switch>
        </BrowserRouter> */}
      </div>
    </Provider>
  );
}

export default App;
