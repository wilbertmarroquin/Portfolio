import routesDictionary from '../../routes/routesDict';

const menuItems = [
  {
    title: 'Home',
    redirection: routesDictionary.home,
    key: '',
  },
  {
    title: 'Work',
    redirection: routesDictionary.work,
    key: 'work',
  },
  {
    title: 'Contact me',
    redirection: routesDictionary.contact,
    key: 'contact',
  },
];

export default menuItems;
