const apiKey = process.env.REACT_APP_GIFFY_API;

export default function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  // const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=panda&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(json => {
      const { data = [] } = json;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => image.images.downsized_medium.url);
        return gifs;
      }
    });
}

// fetch(apiURL)
//   .then(response => response.json())
//   .then(json => console.log(json));
