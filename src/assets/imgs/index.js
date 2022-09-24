import listImgs from './bookImg';
import bgrImgs from './backgroImg';
import logo from '../logo';

const imgs = {
    logo: logo,
    noImg: require('~/assets/imgs/no-img.png'),
    listImgs: { ...listImgs },
    bgrImgs: [...bgrImgs],
};

export default imgs;
