import client from './client';

const login = (username, password, remember) => {
    return client.post('/account/login',{
        username,
        password,
        remember
    }).then(res => res.data)
}
const logout = () => {
    return client.post('/account/logout').then(res => res.data)
}

const getUser = () => {
    return client.get('/api/v1/user/').then(res => res.data);
}

const changePassword = (old_password, password) => {
    return client.post('/api/v1/user/change_password',{
        old_password,
        password
    }).then(res => res.data)
}
export default {
    getUser,
    login,
    logout,
    changePassword
}