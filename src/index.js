var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var request = require('superagent');

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('container')
);

$('button').click(function() {
    let username = $('#username').val();
    let password = $('#password').val();
    let url = 'https://' + username + ':' + password + '@api.github.com/user/starred/babel/babelify';
    console.log(url);
    request
        .put(url)
        .end(function(err, res){
            if (err || !res.ok) {
                alert('Oh no! error');
            } else {
                alert('yay got ' + JSON.stringify(res.body));
            }
        });
});