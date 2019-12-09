import AddArticle from '../Pages/AddArticle';
import EditArticle from '../Pages/EditArticle';
import Message from '../Pages/Message';
import ListArticle from '../Pages/ListArticle';
import Workbench from '../Pages/Workbench';

const routes = [
    { path: '/index', component: Workbench },
    { path: '/article/add', component: AddArticle },
    { path: '/article/edit/:id', component: EditArticle },
    { path: '/article/list', component: ListArticle },
    { path: '/message', component: Message },
];

export default routes;
