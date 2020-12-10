import HomePage from '../components/HomePage';
import { ArticlePage, ArticleDetail } from '../components/Article';

export const router = {
    HomePage,
    // ArticlePage,
    // AtticleDetail
};

export const routers = [
    {
        name: 'homePage',
        path: '/home',
        component: HomePage
    }, {
        name: 'articlePage',
        path: '/article',
        component: ArticlePage,
        children: [{
            name: 'articleDetail',
            path: '/:id',
            component: ArticleDetail
        }]
    }
];