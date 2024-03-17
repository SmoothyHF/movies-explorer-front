// const baseUrl = process.env.REACT_APP_API_URL

const baseUrl = 'http://localhost:3000';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    };
    return Promise.reject(res);
};

function register(name, email, password) {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password }),
    }).then(checkResponse);
}

function login(email, password) {
    return fetch(`${baseUrl}/signin`, {
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
    return fetch(`${baseUrl}/users/me`, {
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
    return fetch(`${baseUrl}/users/me`, {
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
    return fetch(`${baseUrl}/movies`, {
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
            fetch(`${baseUrl}/movies/${movie.movieId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include',
        }).then(checkResponse)
        :
        fetch(`${baseUrl}/movies`, {
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