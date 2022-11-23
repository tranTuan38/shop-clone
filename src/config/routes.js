const routes = {
    home: '/',
    profile: '/profile/:id',
    account: '/account/:key',
    author: '/author/:id',
    listBook: '/list-book/',
    book: '/list-book/:name',
    chapter: '/list-book/:name/:chapter',
    bxh: '/bxh/*',
    bxhTime: '/bxh/:time',
    bxhRank: `/bxh/:time/:rank`,
    infoQuestion: '/info/question',
    notFound: '*',
};

export default routes;
