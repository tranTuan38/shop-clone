import Home from '~/pages/Home';
import Production from '~/pages/Production';
import Profile from '~/pages/Production';
import ListProduction from '~/pages/ListProduction';

const publishRoute = [
    { path: '/', component: Home },
    { path: '/list-production', component: ListProduction },
    { path: '/list-production/production', component: Production },
    { path: '/profile', component: Profile },
];

const privateRoute = [];

export { publishRoute, privateRoute };
