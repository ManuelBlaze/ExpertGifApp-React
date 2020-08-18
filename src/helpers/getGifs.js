
export const getGifs = async( category ) => {
    
    const apiKey = "BuqwNxQxuIdZlcYxZN5pfgQybnanpgOx";

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${apiKey}`;
    const res = await fetch( url );
    const {data} = await res.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
};