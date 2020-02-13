export const signup = newUser => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user: newUser }
    })
};

export const login = returningUser => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user: returningUser }
    })
};

export const logout = currentUser => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE',
        data: { currentUser }
    })
};