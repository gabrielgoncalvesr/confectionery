module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
        },
        email: {
            unique: true,
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.TEXT,
        },
    });
    return User;
}


