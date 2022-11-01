import listImgs from './bookImg';
import bgrImgs from './backgroImg';
import logo from '../logo';
import avatarImg from './avatar';
import selectedArrow from './Selected';

const imgs = {
    logo: logo,
    noImg: require('./no-img.png'),
    listImgs: { ...listImgs },
    bgrImgs: [...bgrImgs],
    avatarImg,
    notFound: require('~/assets/imgs/404-img.png'),
    arrow: selectedArrow,
};

export default imgs;
