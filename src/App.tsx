import React from 'react';
import './App.css';
import Banner from './components/Banner';
import SliderShow from './components/SliderShow';
import About from './components/About';
import Practice from './components/Practice';
const App = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('Welcome to the website!');
  };

  const render = (): JSX.Element => (
    <div className="App">
      <header className="App-header">
        <Banner />
        {/* <button onClick={handleClick}>Click Me</button> */}
        <SliderShow />
        <About />
        <Practice />
      </header>
    </div>
  );

  return render();
}

export default App;
