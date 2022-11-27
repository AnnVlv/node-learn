import db from '../db.js'


class UserServise {
    constructor() { }

    async getAll() {
        const data = await db.query(`SELECT * FROM users`)
        const users = data.rows
        return users
    }

    async getById(id) {
        const data = await db.query(`
            SELECT * FROM users
            WHERE
                user_id = $1
        `, [id])
        const [user] = data.rows
        return user
    }

    async create(user) {
        const { username, age } = user

        return await db.query(`
            INSERT INTO 
                users (username, age)
            VALUES
                ($1, $2);
        `, [username, age])
    }

    async update(user) {
        const { user_id, username, age } = user

        return await db.query(`
            UPDATE users
            SET
                username = $2,
                age = $3
            WHERE
                user_id = $1;
        `, [user_id, username, age])
    }

    async delete(id) {
        return await db.query(`
            DELETE FROM users
            WHERE
                users.user_id = $1;
        `, [id])
    }
}


export default new UserServise()
