const Logger = require("logplease");
const logger = Logger.create("utils");

const esPar = (num1) => {
    if (num1 % 2 === 0) {
        logger.info(`True`);
    } else {
        logger.error(`False`);
    }
};

module.exports = {
    esPar
}