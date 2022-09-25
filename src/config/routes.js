const routes = {
    home: '/',
    profile: '/@:id',
    user: '/user',
    listBook: '/list-book/',
    book: '/list-book/:name',
    bxh: '/bxh/*',
    bxhTime: '/bxh/:time',
    bxhRank: `/bxh/:time/:rank`,
};

export default routes;
