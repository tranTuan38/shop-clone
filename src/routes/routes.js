import config from '~/config';

import { ListBookLayout, ListRankLayout, NotFoundLayout, ChapterLayout } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Book';
import ListBook from '~/pages/ListBook';
import Book from '~/pages/Book';
import Chapter from '~/pages/Chapter';
import Bxh from '~/pages/Bxh';
import BxhTime from '~/pages/Bxh/BxhTime';
import BxhRank from '~/pages/Bxh/BxhRank';
import NotFound from '~/pages/NotFound';
import Author from '~/pages/Author';

const publishRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.author, component: Author },
    { path: config.routes.listBook, component: ListBook, layout: ListBookLayout },
    { path: config.routes.book, component: Book },
    { path: config.routes.chapter, component: Chapter, layout: ChapterLayout },
    { path: config.routes.bxh, component: Bxh },
    { path: config.routes.bxhTime, component: BxhTime },
    { path: config.routes.bxhRank, component: BxhRank, layout: ListRankLayout },
    { path: config.routes.notFound, component: NotFound, layout: NotFoundLayout },
];

const privateRoute = [];

export { publishRoute, privateRoute };
