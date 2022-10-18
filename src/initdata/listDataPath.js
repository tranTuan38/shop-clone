const listDataPath = {
    update: { search: ['new_chap_at', 'create_at'] },
    view: {
        search: ['view_day', 'view_week', 'view_month', 'view_count'],
    },
    rate: {
        search: ['review_count', 'review_score'],
    },
    keeper: { search: 'bookmark' },
    like: { search: 'like' },
    nominations: {
        search: ['vote_day', 'vote_week', 'vote_month', 'vote_count'],
    },
    comment: { search: 'comment' },
    chaps: { search: 'chapter' },
};
