import AddArticle from '../Pages/AddArticle';
import Message from '../Pages/Message';
import ListArticle from '../Pages/ListArticle';
import Workbench from '../Pages/Workbench';

const routes = [
    { path: '/index', component: Workbench },
    { path: '/article/add', component: AddArticle },
    { path: '/article/list', component: ListArticle },
    { path: '/message', component: Message },
];

export default routes;
