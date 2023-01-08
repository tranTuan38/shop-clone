const listUserInteracts = [
    {
        idUser: 1,
        interacts: {
            rate: [{ idBook: 0, data: [{ id: 2, time: '2022-12-30T10:09:36' }] }], // liked
            comment: [],
            navRate: [
                {
                    idBook: 0,
                    data: [
                        { id: 2, idIndex: 0, time: '2022-12-30T11:09:36', scope: 1 },
                        { id: 3, idIndex: 1, time: '2022-12-30T12:09:36', scope: 1 },
                        { id: 3, idIndex: 1, time: '2022-12-30T12:09:36', scope: 3 },
                    ],
                },
            ],
            navComment: [],
        },
    },
    {
        idUser: 2,
        interacts: {
            rate: [{ idBook: 0, data: [{ id: 1, time: '2022-11-30T09:09:36' }] }], // liked
            comment: [],
            navRate: [],
            navComment: [],
        },
    },
    {
        idUser: 3,
        interacts: {
            rate: [{ idBook: 0, data: [{ id: 1, time: '2022-11-30T10:09:36' }] }], // liked
            comment: [],
            navRate: [],
            navComment: [],
        },
    },
];

export default listUserInteracts;
