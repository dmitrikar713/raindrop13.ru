import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const PortfolioItems = [
  {
    'PhotoURL' : '../public/Images/Portfolio/akril24.rf.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/angary-main.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/angary-page.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/dodago_logo.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/engiline2.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/flaer.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/getskillsmain.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/kolesa_logo.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/kolesaclub_design_project_1.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/kolesaclub-glavnaya.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/krasnodar-pellet.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/mosgordes.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/okna-etalon.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/palchiki.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/rsz_kamen-sitiru.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/stoleshnitsa.online-main.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },  {
    'PhotoURL' : '../public/Images/Portfolio/loradmitrieva.png',
    'Name' : 'Пальчики',
    'Type' : 'Сайт под ключ',
    'Tools' : 'Tilda',
    'Link' : ''
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log(React.version);
