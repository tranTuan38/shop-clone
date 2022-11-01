const routes = {
    home: '/',
    profile: '/@:id',
    author: '/tac-gia/:id',
    listBook: '/list-book/',
    book: '/list-book/:name',
    chapter: '/list-book/:name/:chapter',
    bxh: '/bxh/*',
    bxhTime: '/bxh/:time',
    bxhRank: `/bxh/:time/:rank`,
    notFound: '*',
};

export default routes;
