import listImgs from './bookImg';
import bgrImgs from './backgroImg';
import logo from '../logo';
import avatarImg from './avatar';
import selectedArrow from './Selected';
import imgAdver from './advertisement';
import imgsGuide from './guide';
import imgSupport from './support';

const imgs = {
    logo: logo,
    noImg: require('./no-img.png'),
    listImgs: { ...listImgs },
    bgrImgs: [...bgrImgs],
    avatarImg,
    notFound: require('~/assets/imgs/404-img.png'),
    arrow: selectedArrow,
    imgAdver: imgAdver,
    imgsGuide: imgsGuide,
    imgSupport: imgSupport,
};

export default imgs;
