import { Books, Setting, Asset, Upgrade, Bonus, AccountNotice, Help } from '~/pages/Account/component';

const listTapsData = [
    {
        hash: '#books',
        type: ['reading', 'mark'],
        tapsTitle: ['Đang đọc', 'Đánh dấu'],
        tapsPanel: Books,
        tapsIcon: 'icon-setting',
        iconLink: '/account/#setting',
    },
    {
        hash: '#setting',
        type: ['file', 'security', 'config'],
        tapsTitle: ['Hồ sơ', 'Bảo mật', 'Cấu hình'],
        tapsPanel: Setting,
    },
    {
        hash: '#asset',
        type: ['candy', 'flower'],
        tapsTitle: ['Kẹo', 'Hoa'],
        tapsPanel: Asset,
    },
    {
        hash: '#upgrade',
        type: ['upgrade'],
        tapsTitle: ['Nâng cấp tài khoản'],
        tapsPanel: Upgrade,
    },
    {
        hash: '#bonus',
        type: ['every', 'once'],
        tapsTitle: ['Hàng ngày', 'Một lần'],
        tapsPanel: Bonus,
    },
    {
        hash: '#notice',
        type: ['notice'],
        tapsTitle: ['Thông báo'],
        tapsPanel: AccountNotice,
        tapsIcon: 'icon-check',
    },
    {
        hash: '#help',
        type: ['help'],
        tapsTitle: ['Liên hệ hỗ trợ'],
        tapsPanel: Help,
    },
];

export default listTapsData;
