const apiKey = process.env.REACT_APP_GIFFY_API;

export default function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(json => {
      const { data = [] } = json;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        });
        return gifs;
      }
    });
}

