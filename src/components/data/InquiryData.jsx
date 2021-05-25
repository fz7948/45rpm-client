const InquiryDataList = [{
        id: 1,
        category: 'genre',
        title: 'shit',
        content: ' 내용입니다.',
        createdAt: new Date().toDateString(),
    },
    {
        id: 2,
        category: 'name',
        title: 'woow',
        content: ' 내용입니다',
        createdAt: new Date().toDateString(),
    },
    {
        id: 3,
        category: 'Lp',
        title: 'hey',
        content: '내용입니다.',
        createdAt: new Date().toDateString(),
    },
    {
        id: 4,
        category: 'name',
        title: 'OMG',
        content: '내용입니다.',
        createdAt: new Date().toDateString(),
    },
    {
        id: 5,

        title: 'OTL',
        content: '내용입니다',
        category: 'name',
        createdAt: new Date().toDateString(),
    },
    {
        id: 6,
        category: 'name',
        title: 'HA',
        content: '내용입니다',
        createdAt: new Date().toDateString(),
    },
];

const getInquiryByNo = (id) => {
    const arr = InquiryDataList.filter((e) => e.id !== id);
    return arr[id - 1];
};
export { InquiryDataList, getInquiryByNo };