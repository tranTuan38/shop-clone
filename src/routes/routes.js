import config from '~/config';

import { ListBookLayout, ListRankLayout } from '~/layouts';

import Home from '~/pages/Home';
import Profile from '~/pages/Book';
import ListBook from '~/pages/ListBook';
// import GenreBook from '~/pages/GenreBook';
import Book from '~/pages/Book';
import Bxh from '~/pages/Bxh';
import BxhTime from '~/pages/Bxh/BxhTime';
import BxhRank from '~/pages/Bxh/BxhRank';

const publishRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.listBook, component: ListBook, layout: ListBookLayout },
    { path: config.routes.book, component: Book },
    { path: config.routes.bxh, component: Bxh },
    { path: config.routes.bxhTime, component: BxhTime },
    { path: config.routes.bxhRank, component: BxhRank, layout: ListRankLayout },
];

const privateRoute = [];

export { publishRoute, privateRoute };
