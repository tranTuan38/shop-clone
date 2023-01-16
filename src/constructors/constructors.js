import { removeVietnameseTones, handlerGetlistUserInteracts } from '~/handler';

export const readingData = function (idChapter, numberChapter, book) {
    const timer = new Date().getTime();
    const bookName = book.bookName || book.name;

    this.idChapter = idChapter;
    this.numberChapter = numberChapter;
    this.numBerFormat = `chuong-${numberChapter}`;
    this.bookImg = book.bookImg;
    this.time = timer;
    this.idBook = book.idBook;
    this.bookName = bookName;
    this.nameFormat = removeVietnameseTones(bookName);
};

export const UserRating = function (rate) {
    const time = new Date().getTime();

    this.idUser = rate.idUser;
    this.totalViewChapter = rate.totalViewChapter;
    this.rateLike = function (idBook) {
        const data = handlerGetlistUserInteracts(0, idBook, this.idUser);
        return data;
    };
    this.time = time;
    this.userReply = [];
    this.rateCharacter = rate.rateCharacter;
    this.rateContent = rate.rateContent;
    this.rateBgr = rate.rateBgr;
    this.getTotalRate = function () {
        const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
        const result = totalRate.toFixed(2);
        return +result;
    };
    this.spoli = rate.spoli;
    this.comment = rate.comment;
};

export const UserComment = function (data) {
    this.idUser = data.idUser;
    this.idCmt = data.idCmt;
    this.cmtLike = function (idBook) {
        const datas = handlerGetlistUserInteracts(1, idBook, this.idUser, undefined, this.idCmt);
        return datas;
    };
    this.cmtInChap = data.cmtInChap;
    this.cmtOutChap = data.cmtOutChap;
    this.time = data.time;
    this.userReply = data.userReply;
    this.comment = data.comment;
};

export const UserNavRate = function (data) {
    this.id = data.id;
    this.idReplyIndex = data.idReplyIndex;
    this.like = function (idBook, scope) {
        const data = handlerGetlistUserInteracts(2, idBook, this.id, this.idReplyIndex, scope);
        return data;
    };
    this.time = data.time;
    this.repCmt = data.repCmt;
};

export const UserNavComment = function (data) {
    this.idUserRep = data.idUserRep;
    this.idUserIndex = data.idUserIndex;
    this.like = function (idBook, scope) {
        const data = handlerGetlistUserInteracts(3, idBook, this.idUserRep, this.idUserIndex, scope);
        return data;
    };
    this.time = data.time;
    this.repCmt = data.repCmt;
};

export const UserInteract = function (data) {
    this.idUser = data.idUser;
    this.interacts = { rate: data.rate, comment: data.comment, navRate: data.navRate, navComment: data.navComment };
};
