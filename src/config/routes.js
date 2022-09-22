const routes = {
    home: '/',
    profile: '/@:id',
    user: '/user',
    listBook: '/list-book',
    book: '/list-book/:name',
    genreBook: '/list-book/:genre',
    bxh: '/bxh',
    bxhTime: '/bxh/:time',
    bxhRank: `/bxh/:time/:rank`,
};

export default routes;
