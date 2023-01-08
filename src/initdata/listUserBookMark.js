const listUserBookMarks = [
    {
        idUser: 1,
        read: [
            { idBook: 5, readTime: '2022-10-10T08:42:52', chapter: [{ number: 1, time: '2022-10-10T08:42:52' }] },
            { idBook: 7, readTime: '2022-10-09T08:42:52', chapter: [] },
            { idBook: 9, readTime: '2022-10-08T08:42:52', chapter: [] },
        ],
    },
    {
        idUser: 2,
        read: [{ idBook: 10, readTime: '2022-10-11T08:42:52', chapter: [{ number: 1, time: '2022-10-11T08:42:52' }] }],
    },
    {
        idUser: 3,
        read: [
            { idBook: 5, readTime: '2022-10-11T08:42:52', chapter: [{ number: 1, time: '2022-10-11T08:42:52' }] },
            { idBook: 15, readTime: '2022-10-10T08:42:52', chapter: [{ number: 1, time: '2022-10-10T08:42:52' }] },
        ],
    },
];

export default listUserBookMarks;
