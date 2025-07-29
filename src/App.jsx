import './App.css'
import Button from './components/ui/button';

function App() {

  return (
    <>
      <h1 className='text-7xl uppercase text-center text-blue-400'>in job portal</h1>
      <Button onClick={() => alert('HI, I am  Naiyema Hasan. I fallen in love with Naiyem Hasan !')}>Click Me</Button>  
      <Button onClick={() => prompt('Are you sure')}>Click Me</Button>
    </>
  )
}

export default App
