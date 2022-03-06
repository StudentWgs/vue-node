var express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
var router = express.Router();



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/index/home', function(req, res, next) {
//   res.send({
//     name:'zs',
//     age:18
//   })
// });

module.exports = router;
