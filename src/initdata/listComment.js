import { handlerGetlistUserInteracts } from '~/handler';

const listComment = [
    {
        idBook: 0,
        listComment: [
            {
                idUser: 1,
                idCmt: 0, //scope - cmt in listUserInteracts
                cmtLike(idBook) {
                    const datas = handlerGetlistUserInteracts(1, idBook, this.idUser, undefined, this.idCmt);
                    return datas;
                },
                cmtInChap: 1,
                cmtOutChap: false,
                time: '2022-09-28T07:32:18',
                userReply: [
                    {
                        idUserRep: 2,
                        idUserIndex: 0,
                        like(idBook, scope) {
                            const data = handlerGetlistUserInteracts(
                                3,
                                idBook,
                                this.idUserRep,
                                this.idUserIndex,
                                scope,
                            );
                            return data;
                        },
                        time: '2022-10-31T10:40:36',
                        repCmt: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng.`,
                    },
                    {
                        idUserRep: 3,
                        idUserIndex: 1,
                        like(idBook, scope) {
                            const data = handlerGetlistUserInteracts(
                                3,
                                idBook,
                                this.idUserRep,
                                this.idUserIndex,
                                scope,
                            );
                            return data;
                        },
                        time: '2022-10-31T10:45:36',
                        repCmt: 'Cảm ơn bạn đã trả lời mình!',
                    },
                    {
                        idUserRep: 2,
                        idUserIndex: 2,
                        like(idBook, scope) {
                            const data = handlerGetlistUserInteracts(
                                3,
                                idBook,
                                this.idUserRep,
                                this.idUserIndex,
                                scope,
                            );
                            return data;
                        },
                        time: '2022-11-02T10:40:36',
                        repCmt: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng.`,
                    },
                    {
                        idUserRep: 2,
                        idUserIndex: 3,
                        like(idBook, scope) {
                            const data = handlerGetlistUserInteracts(
                                3,
                                idBook,
                                this.idUserRep,
                                this.idUserIndex,
                                scope,
                            );
                            return data;
                        },
                        time: '2022-11-01T10:40:36',
                        repCmt: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng.`,
                    },
                ],
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng.`,
            },
            {
                idUser: 2,
                idCmt: 1,
                cmtLike(idBook) {
                    const datas = handlerGetlistUserInteracts(1, idBook, this.idUser, undefined, this.idCmt);
                    return datas;
                },
                cmtInChap: 1,
                cmtOutChap: false,
                time: '2022-09-30T09:32:18',
                userReply: [],
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 3,
                idCmt: 2,
                cmtLike(idBook) {
                    const datas = handlerGetlistUserInteracts(1, idBook, this.idUser, undefined, this.idCmt);
                    return datas;
                },
                cmtInChap: 1,
                cmtOutChap: false,
                time: '2022-11-02T10:32:18',
                userReply: [],
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                idCmt: 3,
                cmtLike(idBook) {
                    const datas = handlerGetlistUserInteracts(1, idBook, this.idUser, undefined, this.idCmt);
                    return datas;
                },
                cmtInChap: 1,
                cmtOutChap: false,
                time: '2022-09-30T22:32:18',
                userReply: [],
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                idCmt: 4,
                cmtLike(idBook) {
                    const datas = handlerGetlistUserInteracts(1, idBook, this.idUser, undefined, this.idCmt);
                    return datas;
                },
                cmtInChap: 1,
                cmtOutChap: false,
                time: '2022-10-01T08:32:18',
                userReply: [],
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                idCmt: 5,
                cmtLike(idBook) {
                    const datas = handlerGetlistUserInteracts(1, idBook, this.idUser, undefined, this.idCmt);
                    return datas;
                },
                cmtInChap: 1,
                cmtOutChap: false,
                time: '2022-10-01T09:32:18',
                userReply: [],
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
];

export default listComment;
