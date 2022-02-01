
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Components/Hero/Hero';
import Content from './Components/Content/Content';
import { Helmet} from 'react-helmet';

function App() {
  return (
      <div className='mainLayout'>
      <Helmet>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Дмитрий Караханов</title>
          <meta name="description" content="Сайт-портфолио фронтенд разработчика." />
          
      </Helmet>
        <Hero />
        <Content />
      </div>
  );
}



export default App;
