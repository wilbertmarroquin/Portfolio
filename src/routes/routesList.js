import routesDictionary from './routesDict';
import asyncComponent from '../HOC/AsyncComponent';

const AsyncHome = asyncComponent(() => import('../views/Home'));
const AsyncWorkList = asyncComponent(() => import('../views/WorkList'));
const AsyncBio = asyncComponent(() => import('../views/Bio'));
const AsyncContact = asyncComponent(() => import('../views/Contact'));
const AsyncWorkSimple = asyncComponent(() => import('../views/WorkSimple'));
const AsyncNotFound = asyncComponent(() => import('../views/404'));

const routes = [
  {
    path: routesDictionary.home,
    component: AsyncHome,
    title: 'Home',
    exact: true,
  },
  {
    path: routesDictionary.contact,
    component: AsyncContact,
    title: 'Contact',
  },
  {
    path: routesDictionary.bio,
    component: AsyncBio,
    title: 'Bio',
  },
  {
    path: routesDictionary.workSimple,
    component: AsyncWorkSimple,
    padding: false,
    title: 'Work: ',
  },
  {
    path: routesDictionary.work,
    component: AsyncWorkList,
    title: 'Work',
  },
  {
    path: routesDictionary.notFound,
    component: AsyncNotFound,
    title: '404',
  },
  {
    path: '*',
    component: AsyncNotFound,
    title: '404',
  },
];

export default routes;
