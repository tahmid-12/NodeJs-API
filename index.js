const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/images',express.static(__dirname + 'public/images'));

app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index',{text: "This is the index Page"});
})

app.get('/about',(req,res) => {
    res.render('about');
})

app.listen(PORT,console.log(`Server running at port - ${PORT}`));