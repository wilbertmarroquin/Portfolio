import companyonImage from '../media/Companyon/01.png';
import companyonSecondImage from '../media/Companyon/02.png';
import trafinscoutImage from '../media/Trafinscout/02.png';
import trafinscoutSecondImage from '../media/Trafinscout/01.png';
import tiibImage from '../media/TIIB/01.png';
import tiibSecondImage from '../media/TIIB/02.png';
import wgImage from '../media/WG-Manager/02.png';
import wgSecondImage from '../media/WG-Manager/01.png';

const workList = [
  {
    image: companyonImage,
    title: 'Companyon',
    description: 'Project to generate and manage business visualizations. Visualizations and views creation according ...',
    explanationFirst: 'Project to generate and manage business visualizations. Visualizations and views creation according to design, responsive design, advanced filters implementation in each visualization, API request and render optimization and parallel request implementation.',
    explanationSecond: 'Technologies used: Python, Django, PostgreSQL, CSS, Javascript, Git, Sass, React.js, API REST, Ant Design, React Highcharts.',
    secondImage: companyonSecondImage,
    pageLink: 'https://app.companyon.de/',
  },
  {
    image: tiibImage,
    title: 'TIIB (The Institutional Investor Board)',
    description: 'Platform to give investor the opportunity to analyze investment product ...',
    explanationFirst: 'Platform to give investor the opportunity to analyze investment product using the information of field foundations, insurance companies, pension funds and public sectors.',
    explanationSecond: 'Technologies used: Python, Django, PostgreSQL, CSS, Git, Sass, React.js, TypeScript, GraphQL, Material UI, React Highcharts.',
    secondImage: tiibSecondImage,
    pageLink: 'https://www.tiib.de/',
  },
  {
    image: trafinscoutImage,
    title: 'Trafinscout',
    description: 'Project that supports exporters in export financing. Document upload and ...',
    explanationFirst: 'Project that supports exporters in export financing. Document upload and download implementation, responsive design, step-based document request and document tables creation.',
    explanationSecond: 'Technologies used: Python, Django, PostgreSQL, CSS, Javascript, Git, Sass, React.js, GraphQL, Ant Design.',
    secondImage: trafinscoutSecondImage,
    pageLink: 'https://portal.trafinscout.com/',
  },
  {
    image: wgImage,
    title: 'WG-Manager',
    description: 'Project to manage coliving spaces. Creation of views according to design ...',
    explanationFirst: 'Project to manage coliving spaces. Creation of views according to design, step-based form creation, view limitation according to user profile, third-party applications integration used to sign documents, notification system using websockets and responsive design.',
    explanationSecond: 'Technologies used: Python, Django, PostgreSQL, CSS, jQuery, Javascript, Git, Sass, React.js, API REST, Docusign API, Ant Design.',
    secondImage: wgSecondImage,
    pageLink: 'https://proptiq.com/wgmanager_en/',
  },
];

export default workList;
