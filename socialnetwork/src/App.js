import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='mainLayout'>
        <Hero />
        <Content />
      </div>
    </BrowserRouter>
  );
}



export default App;
