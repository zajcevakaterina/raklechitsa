export default async function({ route, store }) {
  await store.dispatch('stories/fetchStories');
  // await store.dispatch('stories/fetchStoriesWithId', { id: route.params.id });
  await store.dispatch('statistics/fetchStats');
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('video/fetchVideo');
  await store.dispatch('insta/fetchPhotos');
}
