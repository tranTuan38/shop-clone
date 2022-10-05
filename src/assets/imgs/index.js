import listImgs from './bookImg';
import bgrImgs from './backgroImg';
import logo from '../logo';
import avatarImg from './avatar';

const imgs = {
    logo: logo,
    noImg: require('~/assets/imgs/no-img.png'),
    listImgs: { ...listImgs },
    bgrImgs: [...bgrImgs],
    avatarImg,
};

export default imgs;
