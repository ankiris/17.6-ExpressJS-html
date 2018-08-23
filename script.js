var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');


app.use(function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store!');
    next();
});

app.get('/', function (req, res) {
    res.render('first-template');
});

app.get('/auth/google', function (req, res) {
    res.render('google', {
        firstName: req.query.firstName,
        lastName: req.query.lastName
    });
});



app.listen(3000)
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});