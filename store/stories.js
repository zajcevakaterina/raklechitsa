export const state = () => ({
  stories: [
    {
      id: 1,
      photoUrl: '/images/stories/story-photo1.jpg',
      // TODO: уменьшить размеры фотографий
      author: 'Владимир Тен',
      text:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
    },
    {
      id: 2,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Владимир Познер',
      text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: 3,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 4,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 5,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 6,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 7,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 8,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 9,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 10,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 11,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: 12,
      photoUrl:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
      author: 'Александр Тарханов',
      text: 'Я не могу победить свою пунктуальность в отличии от рака.',
    },
  ],
});

export const mutations = {};

export const getters = {
  getStories(state) {
    return state.stories;
  },
};
