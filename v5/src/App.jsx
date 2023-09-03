import React from 'react';
import AOS from 'aos';

import Hero from './components/hero/Hero';
import About from './components/about/About';
import Theme1 from './themes/theme1';
import Work from './components/work/Work';
import './App.css';
import Projects from './components/projects/Projects';

function App() {

  AOS.init();

  const [darkMode, setDarkMode] = React.useState(window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches);

  React.useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setDarkMode(e.matches));

    setDarkMode(window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches);

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="App">
      {/* <ScrollingColorBackground
        selector='.js-color-stop[data-background-color]'
        colorDataAttribute='data-background-color'
        initialRgb='rgb(0, 0, 0)'
      /> */}
      <div
        // className='js-color-stop'
        // data-background-color={`${darkMode ? Theme1.DarkSurface1 : Theme1.Surface1}`}
        style={{
          color: darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
          backgroundColor: darkMode ? Theme1.DarkSurface1 : Theme1.Surface1
        }}>
        <Hero darkMode={darkMode} />
      </div>
      <div
        // className='js-color-stop'
        // data-background-color={`${darkMode ? Theme1.DarkSurface2 : Theme1.Surface2}`}
        style={{
          color: darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
          backgroundColor: darkMode ? Theme1.DarkSurface1 : Theme1.Surface1
        }}>
        <About darkMode={darkMode} />
      </div>
      {/* <div
        // className='js-color-stop'
        // data-background-color={`${darkMode ? Theme1.DarkSurface3 : Theme1.Surface3}`}
        style={{
          color: darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
          backgroundColor: darkMode ? Theme1.DarkSurface1 : Theme1.Surface1
        }}>
        <Experience darkMode={darkMode} />
      </div>
      <div
        // className='js-color-stop'
        // data-background-color={`${darkMode ? Theme1.DarkSurface3 : Theme1.Surface3}`}
        style={{
          color: darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
          backgroundColor: darkMode ? Theme1.DarkSurface1 : Theme1.Surface1
        }}>
        <Projects darkMode={darkMode} />
      </div> */}
      <div
        // className='js-color-stop'
        // data-background-color={`${darkMode ? Theme1.DarkSurface2 : Theme1.Surface2}`}
        style={{
          color: darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
          backgroundColor: darkMode ? Theme1.DarkSurface1 : Theme1.Surface1
        }}>
        <Work darkMode={darkMode} />
      </div>
      <div
        // className='js-color-stop'
        // data-background-color={`${darkMode ? Theme1.DarkSurface3 : Theme1.Surface3}`}
        style={{
          color: darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
          backgroundColor: darkMode ? Theme1.DarkSurface1 : Theme1.Surface1
        }}>
        <Projects darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
