const USERS = [
    { id: 1, name: 'User 1', age: 16, },
    { id: 2, name: 'User 2', age: 40, },
    { id: 3, name: 'User 3', age: 21, },
]

const get = (req, res) => {
    let users = USERS

    const params = req.url.searchParams

    const q = params.get('q')
    if (q) {
        users = users.filter(user => user.name.toLocaleLowerCase().startsWith(q.toLocaleLowerCase()))
    }

    const minAge = Number(params.get('minAge'))
    if (minAge) {
        users = users.filter(user => user.age > minAge)
    } 

    res.json(users)
}

const post = () => {
    const user = {
        ...req.body,
        id: Date.now(),
    }
    users.push(user)

    res.json(user)
}

module.exports = {
    get,
    post,
}
