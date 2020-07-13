const { cryptPassword } = require('../../../utils/encryption');

const { getUser, createUser } = require('../../repository/user');

const createNewUser = async (request, response) => {
    const data = request.body;

    const name = data.name.trim();
    const password = data.password.trim();
    const email = data.email.trim().toLowerCase();

    let user = await getUser({ email });
    if (user != null) {
        return response.status(400).json({ message: 'already exist user with this email' });
    }

    await cryptPassword(password, async (hash) => {
        await createUser({
            name,
            email,
            password: hash
        });

        return response.status(200).json({ message: 'user created with sucess' });
    });
}

module.exports = {
    createNewUser
};