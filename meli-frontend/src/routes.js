import HomePage from './shared/pages/HomePage/HomePage';
import SearchPage from './shared/pages/SearchPage/SearchPage';
import ItemPage from './shared/pages/ItemPage/ItemPage';

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/items",
    component: SearchPage,
    exact: true
  },
  {
    path: "/items/:id",
    component: ItemPage,
    exact: true
  }
];

export default routes;
