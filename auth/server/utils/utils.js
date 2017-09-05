function errorHandler(error){
	if (error) { return next(error)};
}

module.exports = errorHandler;

