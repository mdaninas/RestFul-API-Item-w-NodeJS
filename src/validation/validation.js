const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  });
  if (result.error) {
    throw new Error(result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
