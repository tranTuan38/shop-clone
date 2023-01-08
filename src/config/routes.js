const routes = {
    home: '/',
    profile: '/profile/:id',
    account: '/account/',
    author: '/author/:id',
    listBook: '/list-book/',
    book: '/list-book/:name',
    chapter: '/list-book/:name/:chapter',
    bxh: '/bxh/*',
    infoQuestion: '/info/question',
    notFound: '/not-found',
    notFoundAll: '*',
};

export default routes;
