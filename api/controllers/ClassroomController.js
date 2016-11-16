/**
 * ClassroomController
 *
 * @description :: Server-side logic for managing Classrooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    list: function (req, res) {
        Classroom.query('SELECT * FROM classroom')
            , function (err, results) {
                if (err) {
                    res.send(400);
                }
                else {
                    res.send(results);
                }
            }
    }
};