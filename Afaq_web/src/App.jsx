import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, ConfigProvider } from 'antd'

function App() {
  const [count, setCount] = useState(0)
  const { theme } = useContext(ConfigProvider.ConfigContext); // Access the theme values

  return (
    <>
      <div>
        <Button type="primary">Button</Button>
      <Button type="primary">Primary</Button>
        <Button>Default</Button>
        
            <Button
      type="primary"
      style={{
        backgroundColor: theme.token.primary.main, // Use colorPrimary from theme
        borderRadius: theme.token.borderRadius,    // Use borderRadius from theme
      }}
    >
      Custom Themed Button
    </Button>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
