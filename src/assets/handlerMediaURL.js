export default (media, key) => {

  if (typeof media === 'string') {
    return media;
  } else if (media instanceof Blob) {
    return URL.createObjectURL(media);
  } else if (typeof media === 'object') {
    return media[key];
  }

  return null;
}