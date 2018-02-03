/*
    variable "log" logs to  to console

    and logger logs to development.log
    file for later inspection

    ===== usage =====

    A logger has 5 different levels of logging in a specific order:

    'fatal', 'error', 'warn', 'info', 'debug'


    log.info('loading an array', [1,2,3], 'now!');
    //=> info [Sat Jun 12 2010 01:12:05 GMT-0400 (EDT)]  loading an array [ 1, 2, 3, [length]: 3 ] now!

    log.debug('this wont be logged');
    //=> false

    log.setLevel('debug');
    log.debug('this will be logged now');

    ==== todo ===

    TODO implement winston as this logger is getting deprecated
 */

var log = require('logger').createLogger();
var logger = require('logger').createLogger('development.log'); // logs to a file

/*
    ===== Sequilize orm ======

    TODO Move to model index for security
*/

var Sequelize = require('sequelize');
var sequelize = new Sequelize('node_boilerplate', 'root', '0000', {host: '127.0.0.1', dialect: 'mysql'});



exports.get_blogs = function(req, res){
    try {
        log.info("success");

        res.status(200).json({
            success: true,
            message: "get blog data",
            data: {
                    title: "lala",
                    description: "mumu"
                }

        })
    } catch(error){
        log.error(error);
        logger.error(error);

        res.status(500).json({
            success: false,
            message: error,
            data: []
        })

    }
}

exports.get_blog = function(req, res){
    try {
        log.info("success");

        res.status(200).json({
            success: true,
            message: "get single blog data for id "+req.params.id,
            data: {
                title: "lala",
                description: "mumu"
            }

        })
    } catch(error){

        log.error(error);
        logger.error(error);

        res.status(500).json({
            success: false,
            message: error,
            data: []
        })

    }

}



exports.post_blog = function(req, res){

    try {
        log.info("success");

        res.status(200).json({
            success: true,
            message: "Post blog data",
            data: {
                title: "lala",
                description: "mumu"
            }

        })
    } catch(error){
        log.error(error);
        logger.error(error);

        res.status(500).json({
            success: false,
            message: error,
        })

    }

}


exports.put_blog = function(req, res){
    try {
        log.info("success");

        res.status(200).json({
            success: true,
            message: "Updated single blog data for id "+req.params.id,
            data: {
                title: "lala",
                description: "mumu"
            }

        })
    } catch(error){

        log.error(error);
        logger.error(error);

        res.status(500).json({
            success: false,
            message: error,
        })

    }


}



exports.delete_blog = function(req, res){
    try {
        log.info("success");

        res.status(200).json({
            success: true,
            message: "get single blog data for id "+req.params.id,
        });

    } catch(error){

        log.error(error);
        logger.error(error);

        res.status(500).json({
            success: false,
            message: error,
        })

    }

}



