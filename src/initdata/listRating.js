const listRating = [
    {
        idBook: 0,
        rating: [
            {
                idUser: 1,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T06:32:18',
                userReply: [
                    { id: 2, like: 1, time: '2022-10-31T10:40:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                    { id: 3, like: 0, time: '2022-10-31T10:45:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                ],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: true,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 2,
                totalViewChapter: 1,
                rateLike: 1,
                time: '2022-10-01T08:32:18',
                userReply: [
                    { id: 3, like: 2, time: '2022-10-30T10:40:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                    { id: 1, like: 0, time: '2022-10-31T10:30:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                ],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn.`,
            },
            {
                idUser: 3,
                totalViewChapter: 1,
                rateLike: 2,
                time: '2022-09-30T16:32:18',
                userReply: [
                    { id: 2, like: 1, time: '2022-10-31T10:20:36', repCmt: 'Thank bạn đã review' },
                    { id: 3, like: 1, time: '2022-10-31T10:21:36', repCmt: 'Không có gì bạn' },
                ],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: true,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                totalViewChapter: 1,
                rateLike: 0,
                time: '2022-09-29T06:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 2,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                totalViewChapter: 1,
                rateLike: 1,
                time: '2022-09-30T18:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 2,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: true,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                totalViewChapter: 1,
                rateLike: 5,
                time: '2022-10-01T21:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 1,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: true,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 7,
                totalViewChapter: 1,
                rateLike: 2,
                time: '2022-10-01T08:32:18',
                userReply: [
                    { id: 5, like: 2, time: '2022-10-31T09:40:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                    { id: 6, like: 0, time: '2022-10-31T10:10:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                ],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 8,
                totalViewChapter: 1,
                rateLike: 6,
                time: '2022-09-30T16:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 9,
                totalViewChapter: 1,
                rateLike: 4,
                time: '2022-09-29T06:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 2,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 10,
                totalViewChapter: 1,
                rateLike: 5,
                time: '2022-09-30T18:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 2,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 11,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T21:32:18',
                userReply: [
                    { id: 1, like: 0, time: '2022-10-30T08:40:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                    { id: 10, like: 0, time: '2022-10-31T10:40:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                ],
                rateCharacter: 5,
                rateContent: 1,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
    {
        idBook: 1,
        rating: [
            {
                idUser: 1,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T07:32:18',
                userReply: [
                    {
                        id: 2,
                        like: 1,
                        time: '2022-10-31T10:40:36',
                        repCmt: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                        sc;sac;sa;c,;sa,c;sacnasncksankasnvkasnvkhdvhisdhiashiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiing nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra k`,
                    },
                    { id: 3, like: 0, time: '2022-10-31T10:45:36', repCmt: 'Cảm ơn bạn đã trả lời mình!' },
                ],
                rateCharacter: 3,
                rateContent: 5,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 2,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T09:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 3,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T10:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T22:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T08:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T09:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
    {
        idBook: 2,
        rating: [
            {
                idUser: 1,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T10:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 2,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T11:32:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 5,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 3,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T12:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T13:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T14:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 3,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T15:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 2,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
    {
        idBook: 3,
        rating: [
            {
                idUser: 1,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T16:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 2,
                rateBgr: 1,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 2,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T17:32:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 5,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 3,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T18:32:18',
                userReply: [],
                rateCharacter: 4,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T19:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 1,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T20:32:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T21:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
    {
        idBook: 4,
        rating: [
            {
                idUser: 1,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T22:32:18',
                userReply: [],
                rateCharacter: 4,
                rateContent: 5,
                rateBgr: 1,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 2,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T23:32:18',
                userReply: [],
                rateCharacter: 1,
                rateContent: 1,
                rateBgr: 1,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 3,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T06:51:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T06:17:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 3,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T06:19:18',
                userReply: [],
                rateCharacter: 4,
                rateContent: 4,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T06:42:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 3,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
    {
        idBook: 5,
        rating: [
            {
                idUser: 1,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T06:28:18',
                userReply: [],
                rateCharacter: 4,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 2,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T06:36:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 5,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 3,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T06:37:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T06:37:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T15:32:18',
                userReply: [],
                rateCharacter: 2,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T17:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
    {
        idBook: 6,
        rating: [
            {
                idUser: 1,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T21:32:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 2,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T22:32:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 3,
                rateBgr: 3,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: true,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 3,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-09-30T23:32:18',
                userReply: [],
                rateCharacter: 4,
                rateContent: 4,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 4,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T16:38:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 5,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: false,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 5,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T17:37:18',
                userReply: [],
                rateCharacter: 3,
                rateContent: 3,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: true,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
            {
                idUser: 6,
                totalViewChapter: 1,
                rateLike: 3,
                time: '2022-10-01T18:00:18',
                userReply: [],
                rateCharacter: 5,
                rateContent: 5,
                rateBgr: 4,
                getTotalRate() {
                    const totalRate = (this.rateCharacter + this.rateContent + this.rateBgr) / 3;
                    const result = totalRate.toFixed(2);
                    return +result;
                },
                spoli: true,
                comment: `Diễn biến lôi cuốn. Thiết lập nhân vật của từng nhân vật được tôn trọng, nhất là Tom, rất thú vị. Main lý trí, cẩn thận, tạm thời vẫn yếu nhưng có tiềm năng. Bối cảnh hình như là 10 năm trước khi Luffy ra khơi.
                Điểm trừ duy nhất là tới nay có 2 trên 4 nhân vật Đồng Nhân đến từ những bộ rất ko nổi và thậm chí còn ko phải anime. Nếu như toàn cast là những nhân vật mình biết hoặc ít ra là cùng phong cách anime quen thuộc thì cá nhân mình sẽ thích hơn chút.`,
            },
        ],
    },
];

export default listRating;
