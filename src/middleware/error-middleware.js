

export const errorMiddleware = async (err, req, res, next) => {
    if (err) {
        // Jika error memiliki status dan message
        return res.status(err.statusCode).json({
            status:err.statusCode,
            errors: err.message
        });
    }

    // Jika error tidak memiliki status dan message yang tepat
    res.status(500).json({
        errors: 'Internal Server Error'
    });
};

