const errorHandler = (err, req, res, next) => {
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'invalid token' });
    }

    if (err.joi) {
        return res.status(400).send({ message: err.joi.message });
    }

    return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;