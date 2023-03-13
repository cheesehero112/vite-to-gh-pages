import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a
          href='https://vitejs.dev'
          target='_blank'
        >
          <img
            src='/vite-to-gh-pages/vite.svg'
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://reactjs.org'
          target='_blank'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Successful Deployment!</h1>
      <section className='stack-list'>
        <h3>Website Stack: </h3>
        <p>React</p>
        <p>Vite</p>
        <p>TypeScript</p>
        <p>CICD Pipeline</p>
        <p>GitHub Pages</p>
        <p>GitHub Actions</p>
      </section>
      <section className='medium-article'>
        <h3>Learn how to deploy this site: </h3>
        <a src=''>Medium Article by Chihiro & Justin</a>
      </section>

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <footer>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        <p>Template deployed by Chihiro & Justin Snider @2023</p>
      </footer>
    </div>
  );
}

export default App;
