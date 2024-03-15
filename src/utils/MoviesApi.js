
const config = ({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    },
});

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    };
    return Promise.reject(res);
};

export default function getMovies() {
    return fetch(`${config.baseUrl}`)
    .then(checkResponse);
};