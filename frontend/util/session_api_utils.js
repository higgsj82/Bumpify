export const signup = newUser => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { newUser }
    })
};

export const login = returningUser => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { returningUser }
    })
};

export const logout = currentUser => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE',
        data: { currentUser }
    })
};