import imgs from '~/assets/imgs';

const listBookData = [
    {
        idBook: 0,
        bookmark: 100000,
        like: 456,
        comment: 654,
        timeCreateBook: '2022-09-28T07:42:32',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Xuyên Qua',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img0,
        name: 'Ta Có Một Thế Giới Tu Tiên 1',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 200000,
        rankWeekPrevailing: 45,
        rankWeekNomination: 773,
        view: 100000,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Cơ trí', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Hồn hóa tinh thần',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T01:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 1,
        bookmark: 110000,
        like: 657,
        comment: 896,
        timeCreateBook: '2022-09-27T09:42:32',
        poster: 'Trần Tú',
        status: 'Đang ra',
        reading: true,
        read: 30,
        properties: 'Chất lượng cao',
        character: 'Điềm đạm',
        background: 'Cao võ thế giới',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img1,
        name: 'Ta Chỉ Muốn Làm Nhàn Vương, Ngươi Lại Để Cho Ta Thủ Biên Giới? 2',
        authorName: 'Đương Thì Minh Nguyệt Thanh',
        rankWeekRead: 12000,
        rankWeekPrevailing: 20,
        rankWeekNomination: 451,
        view: 120000,
        tagName: ['Đang ra', 'Huyền Huyễn', 'Điềm đạm', 'Hệ thống', 'Góc nhìn nam'],
        tagCategory: 'huyen-huyen',
        category: 'Huyền Huyễn', // Thể loại
        totalChapter: 101,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Lý Thừa Duyên xuyên qua đến cổ võ thế giới, thành Đại Chu quốc Lục hoàng tử.

        Đúng lúc gặp Hoàng Đế băng hà, tân hoàng đăng cơ.
        
        Lý Thừa Duyên bị buộc rời kinh, có tự mình đất phong, Yến Châu.
        
        Yến Châu là Đại Chu quốc biên cảnh, từ trước là binh gia vùng giao tranh, bây giờ càng là cùng ba quốc gia giáp giới.
        
        Ngụy, Hạ, Lương.
        
        Cái này ba nước đối Yến Châu nhìn chằm chằm, thèm nhỏ dãi đã lâu.
        
        Lý Thừa Duyên vốn chỉ muốn làm cái tiêu dao vương gia, nhưng bất đắc dĩ thân ở vòng xoáy bên trong, hắn không muốn nước chảy bèo trôi, cũng chỉ có thể để cho mình mạnh lên.
        
        Cũng may hắn có kim thủ chỉ.
        
        Có thể để cho hắn thu hoạch được song trọng ban thưởng.
        
        Hắn tại tăng lên thực lực mình đồng thời, Yến Châu thành cũng tại tấn mãnh phát triển.
        
        Rốt cục có một ngày, chiến sự lên, thiên hạ đại loạn.
        
        Toàn bộ Đại Chu quốc cũng rơi vào trong chiến loạn.
        
        Chỉ có Yến Châu thành sừng sững không ngã!`,
        listChapter: [
            {
                nameChapter: 'Chờ mong tại dị giới',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T15:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 2,
        bookmark: 120000,
        like: 257,
        comment: 756,
        timeCreateBook: '2022-09-28T11:42:32',
        poster: 'Trần Tùng',
        status: 'Hoàn thành',
        properties: 'Chất lượng cao',
        character: 'Kiêu ngạo',
        background: 'Tu chân văn minh',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img2,
        name: 'Ta, Godzilla, Great Old One 3',
        authorName: 'Tái Biệt Liễu Khang Kiều',
        rankWeekRead: 9000,
        rankWeekPrevailing: 10,
        rankWeekNomination: 172,
        view: 110000,
        tagName: ['Hoàn thành', 'Khoa Huyễn', 'Kiêu ngạo'],
        tagCategory: 'khoa-huyen',
        category: 'Khoa Huyễn', // Thể loại
        totalChapter: 253,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `---- Dị Thú lưu----
        Khang Kiều từ thế giới ban sơ sinh ra bên trong thức tỉnh, chỉ là hắn lúc này lại trở thành Godzilla ấu thể.
        
        Đây là một đầu Godzilla quyền đánh Old One cự thú, chân đá tín ngưỡng Chúng Thần cố sự.
        
        Ban sơ, Thần được xưng là Mặt Đất cùng Dung Nham tối cổ thần linh;
        
        Sau đó, Thần được xưng là chói lọi ngôi sao cùng ánh sáng tối cổ thần linh;
        
        Cuối cùng, Thần là vũ trụ duy nhất người điều khiển, cũng là siêu thoát vạn vật cuối cùng biểu tượng.`,
        listChapter: [
            {
                nameChapter: 'Cầu Sinh Chi Bắt Đầu Một Nhà Cây Nhỏ',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T14:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 3,
        bookmark: 130000,
        like: 1789,
        comment: 985,
        timeCreateBook: '2022-09-28T12:42:32',
        poster: 'Trần Thắng',
        status: 'Đang ra',
        reading: true,
        read: 428,
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img3,
        name: 'Một Cái Cũng Đừng Nghĩ Chạy Ra Tân Thủ thôn 4',
        authorName: 'Trường Bạch Sơn Thượng Trường Bạch Khách',
        rankWeekRead: 3000,
        rankWeekPrevailing: 9,
        rankWeekNomination: 90,
        view: 112000,
        tagName: ['Đang ra', 'Võng Du'],
        tagCategory: 'vong-du',
        category: 'Võng Du', // Thể loại
        totalChapter: 574,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Thế giới biến thành chư thiên thế giới sân chơi, toàn bộ sinh linh đều số liệu hóa, ngồi đợi chư thiên thế giới người chơi giáng lâm vô số lần giết chết tra tấn.

        Hóa thân Tân Thủ thôn đệ nhất phế quái thỏ Dịch Chính, lựa chọn mang theo một đám con thỏ bắt đầu trên xanh mượt thảo nguyên phi nước đại, nằm ngửa ngồi dậy, nằm đẩy, chèo thuyền, bơi lội. . .
        
        Một năm sau, làm người chơi giáng lâm thời điểm, nhìn thấy không phải một đám tiểu quái, mà là một chi kinh khủng ma quỷ cơ bắp thỏ!
        
        Kia ngồi ngay ngắn ở chỗ cao thỏ vương, quơ cà rốt thả ra ngoan thoại: "Hôm nay bắt đầu, một người cũng đừng hòng đi ra Tân Thủ thôn!"`,
        listChapter: [
            {
                nameChapter: 'Cuối cùng chết hay là ngươi',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T12:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 4,
        bookmark: 140000,
        like: 156,
        comment: 1560,
        timeCreateBook: '2022-09-29T08:42:32',
        poster: 'Trần Toàn',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Lãnh khốc',
        background: 'Đô thị dị năng',
        sect: 'Sau màn',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img4,
        name: 'Bác Sĩ ? Hắn Rõ Ràng Là Quỷ Dị ! 5',
        authorName: 'Bất Xuyên Cước Đích Hài',
        rankWeekRead: 50000,
        rankWeekPrevailing: 22,
        rankWeekNomination: 351,
        view: 114500,
        tagName: ['Đang ra', 'Đô Thị', 'Lãnh Khốc'],
        tagCategory: 'do-thi',
        category: 'Đô Thị', // Thể loại
        totalChapter: 100,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Ác quỷ, Tà Linh, khôi lỗi, ma dược, khoa học kỹ thuật, phùng hợp quái. . .

        Lâm Dật xuyên qua đến bí hiểm thế giới, trở thành hạnh phúc phòng khám bệnh thầy thuốc, cũng may hắn đã thức tỉnh hệ thống.
        
        Đối mặt các loại hung tàn ngang ngược quỷ dị sinh vật, hắn quyết định cẩu đến cấp 100 lại ra khỏi núi.
        
        【 đinh! Ngài chữa trị xong quỷ chết đói chứng bệnh kén ăn, ban thưởng cơ sở điểm kinh nghiệm * 100, quỷ chết đói sợ hãi giá trị + 100, kỹ năng đặc thù: Bạo thực 】
        
        【 đinh! Ngài thay không mặt nam cứ vậy mà làm một tấm võng hồng mặt, ban thưởng cơ sở điểm kinh nghiệm * 500, không mặt nam độ thiện cảm + 100, kỹ năng đặc thù: Dịch dung 】
        
        【 đinh! Ngài thu được sợ hãi thầy thuốc xưng hào, đối người bệnh tạo thành đau đớn giá trị *5 】`,
        listChapter: [
            {
                nameChapter: 'Tối nay yêu gõ tổ sư cửa',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T10:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 5,
        bookmark: 150000,
        like: 300,
        comment: 1230,
        timeCreateBook: '2022-09-30T08:42:32',
        poster: 'Trần Tấn',
        status: 'Đang ra',
        reading: true,
        read: 10,
        properties: 'Chọn lọc',
        character: 'Nhiệt huyết',
        background: 'Hiện đại ma pháp',
        sect: 'Xây dựng thế lực',
        sight: 'Ngôi thứ nhất',
        bookImg: imgs.listImgs.Img5,
        name: 'Bị Grindelwald Vừa Ý Ta Đi Hogwarts 6',
        authorName: 'Tuyệt Vọng Đích Bạch Khai Thủy',
        rankWeekRead: 450000,
        rankWeekPrevailing: 12,
        rankWeekNomination: 222,
        view: 116540,
        tagName: ['Đang ra', 'Đồng Nhân', 'Cơ Trí'],
        tagCategory: 'dong-nhan',
        category: 'Đồng Nhân', // Thể loại
        totalChapter: 100,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Hiệu trưởng: Gellert Grindelwald

        (hiệp hội cải cách phù thủy hội trưởng, Merlin hiệp sĩ đoàn cấp một ma pháp sư)
        
        Đưa Shawn · Wallop tiên sinh.
        
        Chúc mừng, ngài đã được phép ở Nurmengard ma pháp trường học học tập. Theo tin kèm theo cần thiết sách cùng trang bị bảng danh mục.
        
        Học kỳ định ở ngày mùng 1 tháng 9 bắt đầu, thỉnh ở ngày 31 tháng 7 trước gửi về ngài trả lời.
        
        Phó hiệu trưởng (nữ)
        
        Vita · Rosier
        
        Thân ái
        
        Nhìn mình thu được thứ hai phong ma pháp trường học thư thông báo trúng tuyển, Shawn rơi vào trầm tư. . .
        
        Cái này thế giới phép thuật, có vấn đề lớn. . .`,
        listChapter: [
            {
                nameChapter: 'Giằng co - phần 1',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T22:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
            {
                nameChapter: 'Giằng co - phần 2',
                numberChapter: 2,
                idChapter: 1,
                timeCreatChapter: '2022-10-23T20:39:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
            {
                nameChapter: 'Thức tỉnh',
                numberChapter: 3,
                idChapter: 2,
                timeCreatChapter: '2022-10-24T20:39:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 6,
        bookmark: 160000,
        like: 178,
        comment: 1780,
        timeCreateBook: '2022-09-30T16:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        reading: true,
        read: 100,
        properties: 'Chọn lọc',
        character: 'Lãnh khốc',
        background: 'Huyễn tưởng tu tiên',
        sect: 'Chuyển thế',
        sight: 'Góc nhìn nữ',
        bookImg: imgs.listImgs.Img6,
        name: 'Tổng Võ: Ta Dương Quá Vốn Là Không Qua, Sao Là Sửa Về 7',
        authorName: 'Thanh Đồng Dũng Sĩ',
        rankWeekRead: 145600,
        rankWeekPrevailing: 36,
        rankWeekNomination: 355,
        view: 1000000,
        tagName: ['Đang ra', 'Kiếm Hiệp', 'Cơ Trí'],
        tagCategory: 'kiem-hiep',
        category: 'Kiếm Hiệp', // Thể loại
        totalChapter: 169,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Truyền thuyết, vài ngàn năm trước .

        Hạ Vũ đúc cửu đỉnh, trấn Cửu Châu thiên địa, sáng lập Hạ triều .
        
        Hôm nay .
        
        Nam Châu Đại Tống đế quốc .
        
        Dương Quá đem lấy một khối có thể thu hoạch được các loại tin tức không trọn vẹn ngọc bài làm cơ sở, sáng tạo ra sống yên phận nơi .
        
        ( Đông Hải gần nhất thời tiết biến đổi thất thường, khó mà nắm lấy . )
        
        ( Cửu Chỉ Thần Cái Hồng Thất Công chính trước khi đến Thái Hồ vùng nước, ý muốn trừ phỉ . )
        
        ( Đại Minh Bình An hiệu đổi tiền thiếu đông gia Lục Tam Kim, dẫn đầu đội tàu, tại đến Đại Tống nói chuyện làm ăn trên đường . )
        
        ( Mông Nguyên đế sư Bát Tư Ba thu Dương Liễn Chân Già vì đồ . )
        
        ( Đại Minh Tây Môn Xuy Tuyết vì ma luyện vô tình kiếm đạo, đang cùng với một tên tuyệt đỉnh cao thủ liều mạng tranh đấu . )
        
        ( Nguyên Đế tự cảm giác đại nạn sắp tới ... )
        
        ...
        
        Nhận thức một chút, ta gọi Dương Quá, dương liễu quyến luyến Dương, không có chút nào sai lầm Quá .
        `,
        listChapter: [
            {
                nameChapter: '2 cái lão sư đệ',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T20:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 7,
        bookmark: 170000,
        like: 158,
        comment: 300,
        timeCreateBook: '2022-09-30T08:42:30',
        poster: 'Trần Tấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img7,
        name: 'Ta Có Một Thế Giới Tu Tiên 8',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 21000,
        rankWeekPrevailing: 15,
        rankWeekNomination: 164,
        view: 200000,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Tầng kế tiếp',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T07:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 8,
        bookmark: 180000,
        like: 200,
        comment: 2150,
        timeCreateBook: '2022-09-28T21:42:32',
        poster: 'Trần Tú',
        status: 'Đang ra',
        reading: true,
        read: 50,
        properties: 'Chất lượng cao',
        character: 'Điềm đạm',
        background: 'Cao võ thế giới',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img8,
        name: 'Ta Chỉ Muốn Làm Nhàn Vương, Ngươi Lại Để Cho Ta Thủ Biên Giới? 9',
        authorName: 'Đương Thì Minh Nguyệt Thanh',
        rankWeekRead: 312000,
        rankWeekPrevailing: 9,
        rankWeekNomination: 181,
        view: 210000,
        tagName: ['Đang ra', 'Huyền Huyễn', 'Nhiệt Huyết'],
        tagCategory: 'huyen-huyen',
        category: 'Huyền Huyễn', // Thể loại
        totalChapter: 101,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Lý Thừa Duyên xuyên qua đến cổ võ thế giới, thành Đại Chu quốc Lục hoàng tử.

        Đúng lúc gặp Hoàng Đế băng hà, tân hoàng đăng cơ.
        
        Lý Thừa Duyên bị buộc rời kinh, có tự mình đất phong, Yến Châu.
        
        Yến Châu là Đại Chu quốc biên cảnh, từ trước là binh gia vùng giao tranh, bây giờ càng là cùng ba quốc gia giáp giới.
        
        Ngụy, Hạ, Lương.
        
        Cái này ba nước đối Yến Châu nhìn chằm chằm, thèm nhỏ dãi đã lâu.
        
        Lý Thừa Duyên vốn chỉ muốn làm cái tiêu dao vương gia, nhưng bất đắc dĩ thân ở vòng xoáy bên trong, hắn không muốn nước chảy bèo trôi, cũng chỉ có thể để cho mình mạnh lên.
        
        Cũng may hắn có kim thủ chỉ.
        
        Có thể để cho hắn thu hoạch được song trọng ban thưởng.
        
        Hắn tại tăng lên thực lực mình đồng thời, Yến Châu thành cũng tại tấn mãnh phát triển.
        
        Rốt cục có một ngày, chiến sự lên, thiên hạ đại loạn.
        
        Toàn bộ Đại Chu quốc cũng rơi vào trong chiến loạn.
        
        Chỉ có Yến Châu thành sừng sững không ngã!`,
        listChapter: [
            {
                nameChapter: 'Tinh la hoàng gia chiến đội chưởng',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T09:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 9,
        bookmark: 190000,
        like: 174,
        comment: 1245,
        timeCreateBook: '2022-09-28T22:42:32',
        poster: 'Trần Tùng',
        status: 'Đang ra',
        properties: 'Chất lượng cao',
        character: 'Kiêu ngạo',
        background: 'Tu chân văn minh',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img9,
        name: 'Ta, Godzilla, Great Old One 10',
        authorName: 'Tái Biệt Liễu Khang Kiều',
        rankWeekRead: 21020,
        rankWeekPrevailing: 15,
        rankWeekNomination: 300,
        view: 210100,
        tagName: ['Đang ra', 'Khoa Huyễn', 'Kiêu ngạo'],
        tagCategory: 'khoa-huyen',
        category: 'Khoa Huyễn', // Thể loại
        totalChapter: 253,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `---- Dị Thú lưu----
        Khang Kiều từ thế giới ban sơ sinh ra bên trong thức tỉnh, chỉ là hắn lúc này lại trở thành Godzilla ấu thể.
        
        Đây là một đầu Godzilla quyền đánh Old One cự thú, chân đá tín ngưỡng Chúng Thần cố sự.
        
        Ban sơ, Thần được xưng là Mặt Đất cùng Dung Nham tối cổ thần linh;
        
        Sau đó, Thần được xưng là chói lọi ngôi sao cùng ánh sáng tối cổ thần linh;
        
        Cuối cùng, Thần là vũ trụ duy nhất người điều khiển, cũng là siêu thoát vạn vật cuối cùng biểu tượng.`,
        listChapter: [
            {
                nameChapter: 'Xử thi xung phong',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T23:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 10,
        bookmark: 111000,
        like: 1190,
        comment: 137,
        timeCreateBook: '2022-09-29T23:42:32',
        poster: 'Trần Thắng',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img10,
        name: 'Một Cái Cũng Đừng Nghĩ Chạy Ra Tân Thủ thôn 11',
        authorName: 'Trường Bạch Sơn Thượng Trường Bạch Khách',
        rankWeekRead: 140256,
        rankWeekPrevailing: 24,
        rankWeekNomination: 430,
        view: 211000,
        tagName: ['Đang ra', 'Võng Du'],
        tagCategory: 'vong-du',
        category: 'Võng Du', // Thể loại
        totalChapter: 574,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Thế giới biến thành chư thiên thế giới sân chơi, toàn bộ sinh linh đều số liệu hóa, ngồi đợi chư thiên thế giới người chơi giáng lâm vô số lần giết chết tra tấn.

        Hóa thân Tân Thủ thôn đệ nhất phế quái thỏ Dịch Chính, lựa chọn mang theo một đám con thỏ bắt đầu trên xanh mượt thảo nguyên phi nước đại, nằm ngửa ngồi dậy, nằm đẩy, chèo thuyền, bơi lội. . .
        
        Một năm sau, làm người chơi giáng lâm thời điểm, nhìn thấy không phải một đám tiểu quái, mà là một chi kinh khủng ma quỷ cơ bắp thỏ!
        
        Kia ngồi ngay ngắn ở chỗ cao thỏ vương, quơ cà rốt thả ra ngoan thoại: "Hôm nay bắt đầu, một người cũng đừng hòng đi ra Tân Thủ thôn!"`,
        listChapter: [
            {
                nameChapter: 'Thiên hạ bá đao',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T12:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 11,
        bookmark: 112000,
        like: 1009,
        comment: 1278,
        timeCreateBook: '2022-09-28T08:32:32',
        poster: 'Trần Toàn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 12',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 181415,
        rankWeekPrevailing: 28,
        rankWeekNomination: 197,
        view: 212000,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Không có lầm a',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T18:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 12,
        bookmark: 112100,
        like: 1005,
        comment: 1210,
        timeCreateBook: '2022-09-28T16:42:32',
        poster: 'Trần Tú',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 13',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 140770,
        rankWeekPrevailing: 14,
        rankWeekNomination: 182,
        view: 215000,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Mấy triệu chiến công',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T11:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 13,
        bookmark: 113000,
        like: 1007,
        comment: 1209,
        timeCreateBook: '2022-09-28T12:42:32',
        poster: 'Trần Tấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 14',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 200354,
        rankWeekPrevailing: 19,
        rankWeekNomination: 280,
        view: 215500,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Trực tiếp mở lớn',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T06:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 14,
        bookmark: 114000,
        like: 1008,
        comment: 1205,
        timeCreateBook: '2022-09-28T08:15:32',
        poster: 'Trần Thắng',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 15',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 121243,
        rankWeekPrevailing: 16,
        rankWeekNomination: 230,
        view: 215700,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Bộ xương màu đen',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T04:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 15,
        bookmark: 115000,
        like: 1456,
        comment: 1204,
        timeCreateBook: '2022-09-29T12:42:32',
        poster: 'Trần Tùng',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 16',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 121243,
        rankWeekPrevailing: 16,
        rankWeekNomination: 217,
        view: 400000,
        tagName: ['Đang ra', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Bộ xương màu đen',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T04:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 16,
        bookmark: 116000,
        like: 156,
        comment: 172,
        timeCreateBook: '2022-09-30T23:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 17',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 121243,
        rankWeekPrevailing: 16,
        rankWeekNomination: 218,
        view: 415000,
        tagName: ['Đang ra', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Bộ xương màu đen',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T04:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 17,
        bookmark: 117000,
        like: 1000,
        comment: 60,
        timeCreateBook: '2022-09-28T07:42:32',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img0,
        name: 'Ta Có Một Thế Giới Tu Tiên 18',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 200000,
        rankWeekPrevailing: 45,
        rankWeekNomination: 745,
        view: 200145,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Hồn hóa tinh thần',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T01:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 18,
        bookmark: 118000,
        like: 17,
        comment: 1200,
        timeCreateBook: '2022-09-27T09:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        reading: true,
        read: 30,
        properties: 'Chất lượng cao',
        character: 'Điềm đạm',
        background: 'Cao võ thế giới',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img1,
        name: 'Ta Chỉ Muốn Làm Nhàn Vương, Ngươi Lại Để Cho Ta Thủ Biên Giới? 19',
        authorName: 'Đương Thì Minh Nguyệt Thanh',
        rankWeekRead: 12000,
        rankWeekPrevailing: 20,
        rankWeekNomination: 459,
        view: 800500,
        tagName: ['Đang ra', 'Huyền Huyễn', 'Nhiệt Huyết'],
        tagCategory: 'huyen-huyen',
        category: 'Huyền Huyễn', // Thể loại
        totalChapter: 101,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Lý Thừa Duyên xuyên qua đến cổ võ thế giới, thành Đại Chu quốc Lục hoàng tử.

        Đúng lúc gặp Hoàng Đế băng hà, tân hoàng đăng cơ.
        
        Lý Thừa Duyên bị buộc rời kinh, có tự mình đất phong, Yến Châu.
        
        Yến Châu là Đại Chu quốc biên cảnh, từ trước là binh gia vùng giao tranh, bây giờ càng là cùng ba quốc gia giáp giới.
        
        Ngụy, Hạ, Lương.
        
        Cái này ba nước đối Yến Châu nhìn chằm chằm, thèm nhỏ dãi đã lâu.
        
        Lý Thừa Duyên vốn chỉ muốn làm cái tiêu dao vương gia, nhưng bất đắc dĩ thân ở vòng xoáy bên trong, hắn không muốn nước chảy bèo trôi, cũng chỉ có thể để cho mình mạnh lên.
        
        Cũng may hắn có kim thủ chỉ.
        
        Có thể để cho hắn thu hoạch được song trọng ban thưởng.
        
        Hắn tại tăng lên thực lực mình đồng thời, Yến Châu thành cũng tại tấn mãnh phát triển.
        
        Rốt cục có một ngày, chiến sự lên, thiên hạ đại loạn.
        
        Toàn bộ Đại Chu quốc cũng rơi vào trong chiến loạn.
        
        Chỉ có Yến Châu thành sừng sững không ngã!`,
        listChapter: [
            {
                nameChapter: 'Chờ mong tại dị giới',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T15:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 19,
        bookmark: 119000,
        like: 98,
        comment: 124,
        timeCreateBook: '2022-09-28T11:42:32',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chất lượng cao',
        character: 'Kiêu ngạo',
        background: 'Tu chân văn minh',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img2,
        name: 'Ta, Godzilla, Great Old One 20',
        authorName: 'Tái Biệt Liễu Khang Kiều',
        rankWeekRead: 9000,
        rankWeekPrevailing: 10,
        rankWeekNomination: 171,
        view: 180256,
        tagName: ['Hoàn thành', 'Khoa Huyễn', 'Kiêu ngạo'],
        tagCategory: 'khoa-huyen',
        category: 'Khoa Huyễn', // Thể loại
        totalChapter: 253,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `---- Dị Thú lưu----
        Khang Kiều từ thế giới ban sơ sinh ra bên trong thức tỉnh, chỉ là hắn lúc này lại trở thành Godzilla ấu thể.
        
        Đây là một đầu Godzilla quyền đánh Old One cự thú, chân đá tín ngưỡng Chúng Thần cố sự.
        
        Ban sơ, Thần được xưng là Mặt Đất cùng Dung Nham tối cổ thần linh;
        
        Sau đó, Thần được xưng là chói lọi ngôi sao cùng ánh sáng tối cổ thần linh;
        
        Cuối cùng, Thần là vũ trụ duy nhất người điều khiển, cũng là siêu thoát vạn vật cuối cùng biểu tượng.`,
        listChapter: [
            {
                nameChapter: 'Cầu Sinh Chi Bắt Đầu Một Nhà Cây Nhỏ',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T14:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 20,
        bookmark: 121100,
        like: 35,
        comment: 112,
        timeCreateBook: '2022-09-28T12:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        reading: true,
        read: 428,
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img3,
        name: 'Một Cái Cũng Đừng Nghĩ Chạy Ra Tân Thủ thôn 21',
        authorName: 'Trường Bạch Sơn Thượng Trường Bạch Khách',
        rankWeekRead: 3000,
        rankWeekPrevailing: 9,
        rankWeekNomination: 95,
        view: 145879,
        tagName: ['Đang ra', 'Võng Du'],
        tagCategory: 'vong-du',
        category: 'Võng Du', // Thể loại
        totalChapter: 574,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Thế giới biến thành chư thiên thế giới sân chơi, toàn bộ sinh linh đều số liệu hóa, ngồi đợi chư thiên thế giới người chơi giáng lâm vô số lần giết chết tra tấn.

        Hóa thân Tân Thủ thôn đệ nhất phế quái thỏ Dịch Chính, lựa chọn mang theo một đám con thỏ bắt đầu trên xanh mượt thảo nguyên phi nước đại, nằm ngửa ngồi dậy, nằm đẩy, chèo thuyền, bơi lội. . .
        
        Một năm sau, làm người chơi giáng lâm thời điểm, nhìn thấy không phải một đám tiểu quái, mà là một chi kinh khủng ma quỷ cơ bắp thỏ!
        
        Kia ngồi ngay ngắn ở chỗ cao thỏ vương, quơ cà rốt thả ra ngoan thoại: "Hôm nay bắt đầu, một người cũng đừng hòng đi ra Tân Thủ thôn!"`,
        listChapter: [
            {
                nameChapter: 'Cuối cùng chết hay là ngươi',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T12:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 21,
        bookmark: 131000,
        like: 20,
        comment: 5,
        timeCreateBook: '2022-09-29T08:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Lãnh khốc',
        background: 'Đô thị dị năng',
        sect: 'Sau màn',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img4,
        name: 'Bác Sĩ ? Hắn Rõ Ràng Là Quỷ Dị ! 22',
        authorName: 'Bất Xuyên Cước Đích Hài',
        rankWeekRead: 50000,
        rankWeekPrevailing: 22,
        rankWeekNomination: 356,
        view: 325678,
        tagName: ['Đang ra', 'Đô Thị', 'Lãnh Khốc'],
        tagCategory: 'do-thi',
        category: 'Đô Thị', // Thể loại
        totalChapter: 100,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Ác quỷ, Tà Linh, khôi lỗi, ma dược, khoa học kỹ thuật, phùng hợp quái. . .

        Lâm Dật xuyên qua đến bí hiểm thế giới, trở thành hạnh phúc phòng khám bệnh thầy thuốc, cũng may hắn đã thức tỉnh hệ thống.
        
        Đối mặt các loại hung tàn ngang ngược quỷ dị sinh vật, hắn quyết định cẩu đến cấp 100 lại ra khỏi núi.
        
        【 đinh! Ngài chữa trị xong quỷ chết đói chứng bệnh kén ăn, ban thưởng cơ sở điểm kinh nghiệm * 100, quỷ chết đói sợ hãi giá trị + 100, kỹ năng đặc thù: Bạo thực 】
        
        【 đinh! Ngài thay không mặt nam cứ vậy mà làm một tấm võng hồng mặt, ban thưởng cơ sở điểm kinh nghiệm * 500, không mặt nam độ thiện cảm + 100, kỹ năng đặc thù: Dịch dung 】
        
        【 đinh! Ngài thu được sợ hãi thầy thuốc xưng hào, đối người bệnh tạo thành đau đớn giá trị *5 】`,
        listChapter: [
            {
                nameChapter: 'Tối nay yêu gõ tổ sư cửa',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T10:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 22,
        bookmark: 145000,
        like: 70,
        comment: 171,
        timeCreateBook: '2022-09-30T08:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        reading: true,
        read: 10,
        properties: 'Chọn lọc',
        character: 'Nhiệt huyết',
        background: 'Hiện đại ma pháp',
        sect: 'Xây dựng thế lực',
        sight: 'Ngôi thứ nhất',
        bookImg: imgs.listImgs.Img5,
        name: 'Bị Grindelwald Vừa Ý Ta Đi Hogwarts 23',
        authorName: 'Tuyệt Vọng Đích Bạch Khai Thủy',
        rankWeekRead: 450000,
        rankWeekPrevailing: 12,
        rankWeekNomination: 227,
        view: 125654,
        tagName: ['Đang ra', 'Đồng Nhân', 'Cơ Trí'],
        tagCategory: 'dong-nhan',
        category: 'Đồng Nhân', // Thể loại
        totalChapter: 100,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Hiệu trưởng: Gellert Grindelwald

        (hiệp hội cải cách phù thủy hội trưởng, Merlin hiệp sĩ đoàn cấp một ma pháp sư)
        
        Đưa Shawn · Wallop tiên sinh.
        
        Chúc mừng, ngài đã được phép ở Nurmengard ma pháp trường học học tập. Theo tin kèm theo cần thiết sách cùng trang bị bảng danh mục.
        
        Học kỳ định ở ngày mùng 1 tháng 9 bắt đầu, thỉnh ở ngày 31 tháng 7 trước gửi về ngài trả lời.
        
        Phó hiệu trưởng (nữ)
        
        Vita · Rosier`,
        listChapter: [
            {
                nameChapter: 'Giằng co',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T22:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 23,
        bookmark: 128000,
        like: 50,
        comment: 177,
        timeCreateBook: '2022-09-30T16:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        reading: true,
        read: 100,
        properties: 'Chọn lọc',
        character: 'Lãnh khốc',
        background: 'Huyễn tưởng tu tiên',
        sect: 'Chuyển thế',
        sight: 'Góc nhìn nữ',
        bookImg: imgs.listImgs.Img6,
        name: 'Tổng Võ: Ta Dương Quá Vốn Là Không Qua, Sao Là Sửa Về 24',
        authorName: 'Thanh Đồng Dũng Sĩ',
        rankWeekRead: 145600,
        rankWeekPrevailing: 36,
        rankWeekNomination: 312,
        view: 1002000,
        tagName: ['Đang ra', 'Kiếm Hiệp', 'Cơ Trí'],
        tagCategory: 'kiem-hiep',
        category: 'Kiếm Hiệp', // Thể loại
        totalChapter: 169,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Truyền thuyết, vài ngàn năm trước .

        Hạ Vũ đúc cửu đỉnh, trấn Cửu Châu thiên địa, sáng lập Hạ triều .
        
        Hôm nay .
        
        Nam Châu Đại Tống đế quốc .
        
        Dương Quá đem lấy một khối có thể thu hoạch được các loại tin tức không trọn vẹn ngọc bài làm cơ sở, sáng tạo ra sống yên phận nơi .
        
        ( Đông Hải gần nhất thời tiết biến đổi thất thường, khó mà nắm lấy . )
        
        ( Cửu Chỉ Thần Cái Hồng Thất Công chính trước khi đến Thái Hồ vùng nước, ý muốn trừ phỉ . )
        
        ( Đại Minh Bình An hiệu đổi tiền thiếu đông gia Lục Tam Kim, dẫn đầu đội tàu, tại đến Đại Tống nói chuyện làm ăn trên đường . )
        
        ( Mông Nguyên đế sư Bát Tư Ba thu Dương Liễn Chân Già vì đồ . )
        
        ( Đại Minh Tây Môn Xuy Tuyết vì ma luyện vô tình kiếm đạo, đang cùng với một tên tuyệt đỉnh cao thủ liều mạng tranh đấu . )
        
        ( Nguyên Đế tự cảm giác đại nạn sắp tới ... )
        
        ...
        
        Nhận thức một chút, ta gọi Dương Quá, dương liễu quyến luyến Dương, không có chút nào sai lầm Quá .
        `,
        listChapter: [
            {
                nameChapter: '2 cái lão sư đệ',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T20:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 24,
        bookmark: 149000,
        like: 19,
        comment: 140,
        timeCreateBook: '2022-09-30T08:42:30',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img7,
        name: 'Ta Có Một Thế Giới Tu Tiên 25',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 21000,
        rankWeekPrevailing: 15,
        rankWeekNomination: 187,
        view: 100258,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Tầng kế tiếp',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T07:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 25,
        bookmark: 156000,
        like: 18,
        comment: 150,
        timeCreateBook: '2022-09-28T21:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        reading: true,
        read: 50,
        properties: 'Chất lượng cao',
        character: 'Điềm đạm',
        background: 'Cao võ thế giới',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img8,
        name: 'Ta Chỉ Muốn Làm Nhàn Vương, Ngươi Lại Để Cho Ta Thủ Biên Giới? 26',
        authorName: 'Đương Thì Minh Nguyệt Thanh',
        rankWeekRead: 312000,
        rankWeekPrevailing: 9,
        rankWeekNomination: 188,
        view: 123789,
        tagName: ['Đang ra', 'Huyền Huyễn', 'Nhiệt Huyết'],
        tagCategory: 'huyen-huyen',
        category: 'Huyền Huyễn', // Thể loại
        totalChapter: 101,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Lý Thừa Duyên xuyên qua đến cổ võ thế giới, thành Đại Chu quốc Lục hoàng tử.

        Đúng lúc gặp Hoàng Đế băng hà, tân hoàng đăng cơ.
        
        Lý Thừa Duyên bị buộc rời kinh, có tự mình đất phong, Yến Châu.
        
        Yến Châu là Đại Chu quốc biên cảnh, từ trước là binh gia vùng giao tranh, bây giờ càng là cùng ba quốc gia giáp giới.
        
        Ngụy, Hạ, Lương.
        
        Cái này ba nước đối Yến Châu nhìn chằm chằm, thèm nhỏ dãi đã lâu.
        
        Lý Thừa Duyên vốn chỉ muốn làm cái tiêu dao vương gia, nhưng bất đắc dĩ thân ở vòng xoáy bên trong, hắn không muốn nước chảy bèo trôi, cũng chỉ có thể để cho mình mạnh lên.
        
        Cũng may hắn có kim thủ chỉ.
        
        Có thể để cho hắn thu hoạch được song trọng ban thưởng.
        
        Hắn tại tăng lên thực lực mình đồng thời, Yến Châu thành cũng tại tấn mãnh phát triển.
        
        Rốt cục có một ngày, chiến sự lên, thiên hạ đại loạn.
        
        Toàn bộ Đại Chu quốc cũng rơi vào trong chiến loạn.
        
        Chỉ có Yến Châu thành sừng sững không ngã!`,
        listChapter: [
            {
                nameChapter: 'Tinh la hoàng gia chiến đội chưởng 27',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T09:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 26,
        bookmark: 191000,
        like: 90,
        comment: 10,
        timeCreateBook: '2022-09-28T22:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        properties: 'Chất lượng cao',
        character: 'Kiêu ngạo',
        background: 'Tu chân văn minh',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img9,
        name: 'Ta, Godzilla, Great Old One',
        authorName: 'Tái Biệt Liễu Khang Kiều',
        rankWeekRead: 21020,
        rankWeekPrevailing: 15,
        rankWeekNomination: 380,
        view: 987123,
        tagName: ['Đang ra', 'Khoa Huyễn', 'Kiêu ngạo'],
        tagCategory: 'khoa-huyen',
        category: 'Khoa Huyễn', // Thể loại
        totalChapter: 253,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `---- Dị Thú lưu----
        Khang Kiều từ thế giới ban sơ sinh ra bên trong thức tỉnh, chỉ là hắn lúc này lại trở thành Godzilla ấu thể.
        
        Đây là một đầu Godzilla quyền đánh Old One cự thú, chân đá tín ngưỡng Chúng Thần cố sự.
        
        Ban sơ, Thần được xưng là Mặt Đất cùng Dung Nham tối cổ thần linh;
        
        Sau đó, Thần được xưng là chói lọi ngôi sao cùng ánh sáng tối cổ thần linh;
        
        Cuối cùng, Thần là vũ trụ duy nhất người điều khiển, cũng là siêu thoát vạn vật cuối cùng biểu tượng.`,
        listChapter: [
            {
                nameChapter: 'Xử thi xung phong',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T23:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 27,
        bookmark: 185000,
        like: 106,
        comment: 127,
        timeCreateBook: '2022-09-29T23:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img10,
        name: 'Một Cái Cũng Đừng Nghĩ Chạy Ra Tân Thủ thôn 28',
        authorName: 'Trường Bạch Sơn Thượng Trường Bạch Khách',
        rankWeekRead: 140256,
        rankWeekPrevailing: 24,
        rankWeekNomination: 435,
        view: 159357,
        tagName: ['Đang ra', 'Võng Du'],
        tagCategory: 'vong-du',
        category: 'Võng Du', // Thể loại
        totalChapter: 574,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description: `Thế giới biến thành chư thiên thế giới sân chơi, toàn bộ sinh linh đều số liệu hóa, ngồi đợi chư thiên thế giới người chơi giáng lâm vô số lần giết chết tra tấn.

        Hóa thân Tân Thủ thôn đệ nhất phế quái thỏ Dịch Chính, lựa chọn mang theo một đám con thỏ bắt đầu trên xanh mượt thảo nguyên phi nước đại, nằm ngửa ngồi dậy, nằm đẩy, chèo thuyền, bơi lội. . .
        
        Một năm sau, làm người chơi giáng lâm thời điểm, nhìn thấy không phải một đám tiểu quái, mà là một chi kinh khủng ma quỷ cơ bắp thỏ!
        
        Kia ngồi ngay ngắn ở chỗ cao thỏ vương, quơ cà rốt thả ra ngoan thoại: "Hôm nay bắt đầu, một người cũng đừng hòng đi ra Tân Thủ thôn!"`,
        listChapter: [
            {
                nameChapter: 'Thiên hạ bá đao',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T12:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 28,
        bookmark: 196000,
        like: 104,
        comment: 125,
        timeCreateBook: '2022-09-28T08:32:32',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 29',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 181415,
        rankWeekPrevailing: 28,
        rankWeekNomination: 199,
        view: 258456,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Không có lầm a',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T18:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 29,
        bookmark: 163000,
        like: 103,
        comment: 124,
        timeCreateBook: '2022-09-28T16:42:32',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 30',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 140770,
        rankWeekPrevailing: 14,
        rankWeekNomination: 112,
        view: 369159,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Mấy triệu chiến công',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T11:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 30,
        bookmark: 200000,
        like: 102,
        comment: 123,
        timeCreateBook: '2022-09-28T12:42:32',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 31',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 200354,
        rankWeekPrevailing: 19,
        rankWeekNomination: 263,
        view: 159357,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Trực tiếp mở lớn',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T06:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 31,
        bookmark: 147000,
        like: 101,
        comment: 122,
        timeCreateBook: '2022-09-28T08:15:32',
        poster: 'Trần Tuấn',
        status: 'Hoàn thành',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 32',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 121243,
        rankWeekPrevailing: 16,
        rankWeekNomination: 211,
        view: 123357,
        tagName: ['Hoàn thành', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Bộ xương màu đen',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T04:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 32,
        bookmark: 119500,
        like: 10,
        comment: 121,
        timeCreateBook: '2022-09-29T12:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 33',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 121243,
        rankWeekPrevailing: 16,
        rankWeekNomination: 212,
        view: 123753,
        tagName: ['Đang ra', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Bộ xương màu đen',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T04:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
    {
        idBook: 33,
        bookmark: 145600,
        like: 1,
        comment: 12,
        timeCreateBook: '2022-09-30T23:42:32',
        poster: 'Trần Tuấn',
        status: 'Đang ra',
        properties: 'Chọn lọc',
        character: 'Cơ trí',
        background: 'Đông phương huyền huyễn',
        sect: 'Hệ thống',
        sight: 'Góc nhìn nam',
        bookImg: imgs.listImgs.Img11,
        name: 'Ta Có Một Thế Giới Tu Tiên 34',
        authorName: 'Thuần Cửu Liên Bảo Đăng',
        rankWeekRead: 121243,
        rankWeekPrevailing: 16,
        rankWeekNomination: 203,
        view: 145356,
        tagName: ['Đang ra', 'Tiên Hiệp', 'Điềm Đạm', 'Xuyên Qua'],
        tagCategory: 'tien-hiep',
        category: 'Tiên Hiệp', // Thể loại
        totalChapter: 333,
        getTotalFeel() {
            const result = this.listChapter.reduce((acc, item) => {
                const feel = item.feels;
                if (Object.keys(acc).length) {
                    return {
                        love: acc.love + feel.love,
                        like: acc.like + feel.like,
                        fun: acc.fun + feel.fun,
                        sad: acc.sad + feel.sad,
                        angry: acc.angry + feel.angry,
                        attack: acc.attack + feel.attack,
                    };
                }

                return { ...feel };
            }, {});

            return result;
        },
        description:
            'Trần Mạc Bạch, Tiên Môn lớp 12 học sinh, đang cố gắng ôn tập chuẩn bị thi đậu đại đạo viện, lúc đầu hắn đời này mơ ước lớn nhất cũng chính là Trúc Cơ thành công, thẳng đến hắn có thể xuyên qua đến một cái khác thế giới tu tiên, sau đó, mộng tưởng liền thay đổi. . .',
        listChapter: [
            {
                nameChapter: 'Bộ xương màu đen',
                numberChapter: 1,
                idChapter: 0,
                timeCreatChapter: '2022-09-28T04:22:36',
                content: `Khương thôn, một cái giấu ở mênh mông quần sơn trong, chỉ có chừng trăm nhân khẩu thôn xóm nhỏ.

                Giờ này khắc này, trăng tròn treo cao, vạn lại câu tĩnh, tựa hồ thiên địa đều lâm vào ngủ say, mà ở Khương thôn bên trong, lại là có mười mấy tuổi tác khác nhau hài tử chính ngồi xếp bằng, ngũ tâm hướng thiên, mặt hướng trăng tròn, hô hấp miên xa dài lâu, mơ hồ có thể thấy được hoặc đặc hoặc nhạt sương mù vờn quanh tại thân thể của bọn hắn.
                
                Tại đám hài tử này tiền phương, có một người mặc da thú, hình thể khôi ngô nam tử đang chìm âm thanh nói ra: "Đối với chúng ta mà nói, ánh trăng là cực kì quý giá tu hành chi vật, nhất là hôm nay lại là mười lăm, giờ Tý càng là ánh trăng thịnh nhất thời điểm, cho nên đừng sóng tốn thời gian, tận lực nhiều hấp thu ánh trăng, đả thông kinh mạch, tăng lên thực lực của các ngươi."
                
                Nam tử không có đạt được bất kỳ đáp lại, bởi vì vì tất cả hài tử đều đang chuyên tâm toàn tâm toàn ý hấp thu ánh trăng.
                
                Nhưng mà, tại cách bọn họ đại khái mấy chục trượng bên ngoài, lại còn có một thiếu niên mười lăm mười sáu tuổi, lẻ loi trơ trọi ngồi ở chỗ đó, trước mặt bày đầy chí ít trên trăm loại hình thái không đồng nhất cỏ cây xương thú.
                
                Ánh trăng chiếu rọi phía dưới, có thể rõ ràng trông thấy thiếu niên này tướng mạo thanh tú, tóc dài đen nhánh tập kết mấy cây bím tóc tản mát ở đầu vai, dáng người cân xứng, đồng dạng mặc một bộ da thú, mà trần trụi bên ngoài làn da chi bên trên có không ít bất trắc không đồng nhất vết thương.
                
                Thiếu niên kia một đôi thanh tịnh con mắt, mặc dù phần lớn thời giờ đều là chằm chằm lên trước mặt những này cỏ cây, nhưng lại hội (sẽ) thỉnh thoảng ngẩng đầu, nhìn một chút nơi xa đám kia ngồi xếp bằng hài tử, mà mỗi khi lúc này, cái kia hơi có vẻ gương mặt non nớt bên trên tổng sẽ lộ ra một tia hâm mộ.
                
                Thiếu niên tên là Khương Vân, đối ở trước mắt cảnh tượng như vậy, hắn đã là không cảm thấy kinh ngạc, hắn biết rõ, chính mình đám này bạn chơi chính đang hấp thu ánh trăng tu luyện.
                
                Tu luyện, tu chính là bản thân, tu chính là đạo!
                
                Mặc dù mình cũng phi thường khát vọng có thể gia nhập vào ngay trong bọn họ, có thể cùng bọn hắn cùng một chỗ tu luyện, nhưng là gia gia lại là từ nhỏ tựu nói với mình, bởi vì là thể chất của mình cùng bọn hắn khác biệt, sở dĩ không thể tu luyện.
                
                Đối với điểm này, mới đầu Khương Vân là không tin tưởng, cho đến hắn trong âm thầm hỏi qua mấy cái bạn chơi, đồng thời dựa theo bọn hắn giáo phương pháp vụng trộm tu luyện qua mấy lần, phát hiện thân thể của mình thật vô pháp hấp thu bọn hắn trong miệng cái gọi là Nhật Tinh Nguyệt Hoa về sau, mới bất đắc dĩ từ bỏ.
                
                "Bất quá cũng may có thể trở thành một tên Dược Sư, luyện chế ra thích hợp bọn hắn đan dược, trợ giúp tăng cường thực lực của bọn hắn, chí ít cũng là không sai."
                
                Khương Vân trong lòng an ủi chính mình, tiếp tục đem lực chú ý tập trung đến trước mắt những này cỏ cây xương thú phía trên.
                
                "Vân oa tử, đây là cuối cùng một nhóm a nhớ rõ thế nào "
                
                Đúng lúc này, khôi ngô nam tử đi tới Khương Vân bên người, hai tay chắp sau lưng, nhiều hứng thú đánh giá những cái kia cỏ cây xương thú.
                
                Khương Vân ngẩng đầu lên, cười nói: "Đúng vậy, Mục thúc, cơ bản đều nhớ kỹ."
                
                "Tốt!" Khương Mục nhẹ gật đầu, không hoài nghi chút nào Khương Vân, tấm kia thô kệch trên mặt lộ ra vẻ tán thành.
                
                Có lẽ Khương Vân đối với mình có thể nhớ kỹ những này cỏ cây xương thú đặc tính, cũng không cảm thấy có gì đặc biệt hơn người địa phương, nhưng là làm người trưởng thành Khương Mục thế nhưng là lòng dạ biết rõ.
                
                Luyện dược cần vật liệu, mà cơ bản nhất vật liệu liền là các loại động thực vật, nếu muốn trở thành một tên hợp cách Dược Sư, nhất định phải tận khả năng nhiều đi tìm hiểu nắm giữ bọn chúng đặc tính.
                
                Khương thôn chỗ mảnh này dãy núi, xưng là Thập Vạn Mãng Sơn, gần như ngăn cách, trong đó sinh trưởng các loại động thực vật không dưới mấy vạn loại, muốn biết rõ hiểu rõ mỗi một loại thực vật cùng động vật đặc tính, độ khó cực lớn, quá trình càng là cực kì buồn tẻ.
                
                Mà Khương Vân bất quá là cái mới mười sáu tuổi hài tử, tại ngắn ngủi thời gian mười mấy năm bên trong, vậy mà liền đã làm được, cái này chẳng những cần thiên phú, càng cần hơn cứng cỏi tâm tính cùng kiên trì bền bỉ thái độ.
                
                "Đúng vậy!" Khương Mục nhịn không được lần nữa khen ngợi một câu nói: "Vân oa tử, ngày sau ngươi khẳng định sẽ trở thành một tên không tầm thường Đại Dược Sư!"
                
                Đối với Khương Mục khích lệ, Khương Vân cũng không có biểu hiện ra chút nào kích động, chỉ là nhàn nhạt cười một tiếng, kia dáng vẻ lão thành, cùng tuổi của hắn thật sự là có chút không tương xứng.
                
                Khương Mục há có thể không biết Khương Vân ý nghĩ, so với trở thành một tên Dược Sư, hắn càng muốn đi tu luyện, trở thành một người tu sĩ.
                
                Duỗi ra bồ phiến lớn bàn tay, Khương Mục dùng sức vuốt vuốt Khương Vân đầu, có lòng muốn muốn nói thêm gì nữa, nhưng là lời đến khóe miệng vẫn là nuốt trở vào.
                
                Xoay người sang chỗ khác, Khương Mục trong lòng thở dài nói: "Vân oa tử, không phải chúng ta không dạy ngươi phương pháp tu luyện, mà là bởi vì, ngươi không phải ta Khương tộc hài tử a!"
                
                Đúng vậy, Khương Vân cũng không phải là Khương thôn người, mà là lão thôn trưởng Khương Vạn Lý, cũng chính là Khương Vân trong miệng gia gia năm đó nhặt được một cái vứt bỏ.
                
                Đây cũng không phải là bí mật gì, liền Khương Vân chính mình cũng đã sớm biết.
                
                Cứ việc Khương Vân cũng không phải là Khương thôn người, nhưng là tại Khương thôn, nhưng không ai đem hắn xem như ngoại nhân, mười sáu năm cộng đồng sinh hoạt, trong mắt bọn họ, Khương Vân liền là bọn hắn Khương thôn người.
                
                Sau một lúc lâu về sau, Khương Mục ngẩng đầu nhìn một chút thiên thượng trăng tròn, hét lớn một tiếng nói: "Tốt, đám tiểu tể tử, giờ Tý đã qua, tu luyện kết thúc!"
                
                "Phần phật" một tiếng, kia một đám ngồi xếp bằng hài tử lập tức tất cả đều nhảy dựng lên.
                
                Mặc dù bọn họ cũng đều biết tu luyện tầm quan trọng, nhưng dù sao cũng còn con nít, để bọn hắn ngồi đàng hoàng hơn mấy canh giờ, thật sự là loại lớn lao dày vò.
                
                Sát na chi gian, tựu có một thân ảnh nhanh như con báo, vọt tới Khương Vân bên người.
                
                "Vân ca ca, trời sáng ngươi có phải hay không lại sắp đi ra ngoài, trở về thời điểm, cho ta bắt cái Tam Sắc Tước a "
                
                Đây là một cái tiểu nữ hài, tám chín tuổi bộ dáng, trong mi tâm có ba viên to như hạt đậu thải sắc ấn ký, hiện lên hình tam giác sắp xếp, phấn điêu ngọc trác trên khuôn mặt nhỏ nhắn tràn đầy vẻ chờ mong.
                
                Nàng gọi Khương Nguyệt Nhu, là Khương Vạn Lý chân chính tôn nữ, chỉ tiếc xuất sinh không lâu, phụ mẫu vào núi đi săn lúc tựu song song thảm tao ngoài ý muốn, táng sinh miệng thú, lưu nàng lại cùng gia gia sống nương tựa lẫn nhau, cũng xem như Khương Vân một tay đem nó nuôi lớn, cho nên cùng Khương Vân nhất là thân cận.
                
                Mãng sơn bên trong nguy hiểm trùng điệp, sở hữu hài tử chưa đầy mười tám tuổi trước có phải hay không chuẩn rời đi thôn xóm, nhưng là Khương Vân khác biệt.
                
                Vì tốt hơn giải động thực vật đặc tính, hắn mỗi lần trăng tròn về sau ngày thứ hai, đều sẽ cùng theo gia gia tiến vào Mãng sơn chỗ sâu, một đợi liền là hơn nửa tháng, mà trở về thời điểm, đều sẽ cho trong thôn hài tử mang một ít đồ chơi nhỏ, tiểu động vật, cho nên trong thôn hài tử nghĩ muốn chút gì, đều sẽ tới cầu Khương Vân.
                
                "Tốt!" Khương Vân vươn tay ra, sủng nịch nhéo nhéo Khương Nguyệt Nhu khuôn mặt nhỏ nhắn nói: "Chờ ta trở lại, nhất định cho ngươi bắt cái Tam Sắc Tước."
                
                "Vân oa tử, trở về ngâm trong bồn tắm!"
                
                Đúng lúc này, một tiếng nói già nua xa xa truyền đến, mà ngay sau đó Khương Mục cũng là trừng mắt lên hướng về phía những cái kia hài tử hét lớn: "Tốt tốt, oắt con, nhanh đi đi ngủ, Vân oa tử, Nguyệt Nhu cho ta, ngươi đi ngâm trong bồn tắm đi!"
                
                Tất cả hài tử lập tức giải tán lập tức, mà Khương Vân cũng đứng dậy, nhéo nhéo Nguyệt Nhu khuôn mặt, đối Khương Mục lên tiếng chào về sau, lúc này mới quay người đi hướng thôn trang chỗ sâu một tòa phòng nhỏ.
                
                P/s: Mình có review sơ về truyện ở phần giới thiệu, nếu cần thì mọi người xem sơ qua để hiểu rõ hơn về truyện, mình xin cảm ơn
                
                ====================`,
                feels: { love: 1, like: 2, fun: 4, sad: 0, angry: 0, attack: 5 },
            },
        ],
    },
];

export default listBookData;
