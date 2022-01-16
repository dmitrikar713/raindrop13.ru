import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='mainLayout'>
        <Hero />
        <Content PortfolioItems = {props.PortfolioItems} />
      </div>
    </BrowserRouter>
  );
}



export default App;
