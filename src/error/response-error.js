export class ResponseError extends Error {
  constructor(statusCode = 500, message = "Internal Server Error") {
    super(message);
    this.name = "ResponseError";
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor); // Membersihkan stack trace
  }
}
