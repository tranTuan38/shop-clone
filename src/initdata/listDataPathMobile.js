const listDataPathMobiles = {
    true: [
        { id: 0, icon: 'icon-user', title: 'Hồ sơ', path: '/profile' },
        { id: 1, icon: 'icon-book', title: 'Tủ truyện', path: '/account/#books', hash: '#books' },
        { id: 2, icon: 'icon-setting', title: 'Cài đặt', path: '/account/#setting', hash: '#setting' },
        { id: 3, icon: 'icon-layer', title: 'Tài sản', path: '/account/#asset', hash: '#asset' },
        { id: 4, icon: 'icon-candy', title: 'Mua kẹo', noSupport: true },
        { id: 5, icon: 'icon-up', title: 'Nâng cấp', path: '/account/#upgrade', hash: '#upgrade' },
        { id: 6, icon: 'icon-gift', title: 'Nhận thưởng', path: '/account/#bonus', hash: '#bonus' },
        { id: 7, icon: 'icon-bell', title: 'Thông báo', path: '/account/#notice', hash: '#notice' },
        { id: 8, icon: 'icon-chat', title: 'Trợ giúp & Báo lỗi', path: '/account/#help', hash: '#help' },
        { id: 9, icon: 'icon-upload', title: 'Thoát' },
    ],
    false: [
        { id: 0, type: 'login', icon: 'icon-user', title: 'Đăng nhập' },
        { id: 1, type: 'regis', icon: 'icon-user-edit', title: 'Đăng ký' },
    ],
};

export default listDataPathMobiles;
