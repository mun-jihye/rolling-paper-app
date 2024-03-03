import tempImg from 'assets/images/cardList/tempImg.jpg';

const mockData = {
  name: 'Chanyong',
  backgroundColor: 'beige',
  backgroundImageURL: null,
  messageCount: 4,
  recentMessages: [
    { profileImageURL: tempImg },
    { profileImageURL: tempImg },
    { profileImageURL: tempImg },
    { profileImageURL: tempImg },
  ],
  topReactions: [{}, {}, {}, {}],
};

const mockDatas = Array.from({ length: 13 }, () => mockData);

export default mockDatas;
