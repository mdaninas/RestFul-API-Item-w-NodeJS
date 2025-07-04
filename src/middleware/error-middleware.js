export const errorMiddleware = (err, req, res, next) => {
    console.error("Error Middleware:", err);
  
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
  
    return res.status(statusCode).json({
      status: statusCode,
      errors: [message],
    });
  };
  