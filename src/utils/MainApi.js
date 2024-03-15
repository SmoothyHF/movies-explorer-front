const getConfig = (token) => ({
    baseUrl: 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

const token = localStorage.getItem('jwt');
const config = getConfig(token);

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    };
    return Promise.reject(res);
};

function register(name, email, password) {
    return fetch(`${config.baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password }),
    }).then(checkResponse);
}

function login(email, password) {
    return fetch(`${config.baseUrl}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkResponse)
        .then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                return data;
            } else {
                return;
            }
        })
}

function updateUserData({ email, name }, token) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email, name }),
        credentials: 'include',
    }).then(checkResponse);
}

function getContent(token) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
    }).then(checkResponse);
}

function getSavedMovies(token) {
    return fetch(`${config.baseUrl}/movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
    }).then(checkResponse);
}

function SavedMovieStatus(movie, isSaved, token) {
    return isSaved ?
            fetch(`${config.baseUrl}/movies/${movie.movieId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include',
        }).then(checkResponse)
        :
        fetch(`${config.baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(movie),
            credentials: 'include',
        }).then(checkResponse);
};

export {
    register,
    login,
    updateUserData,
    getContent,
    getSavedMovies,
    SavedMovieStatus,
}