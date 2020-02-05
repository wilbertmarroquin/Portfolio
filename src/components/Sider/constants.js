import routesDictionary from '../../routes/routesDict';

const menuItems = [
  {
    title: 'Home',
    redirection: routesDictionary.home,
    key: '/',
  },
  {
    title: 'Work',
    redirection: routesDictionary.work,
    key: 'work',
  },
  {
    title: 'Bio',
    redirection: routesDictionary.bio,
    key: 'bio',
  },
  {
    title: 'Contact me',
    redirection: routesDictionary.contact,
    key: 'contact',
  },
];

export default menuItems;
