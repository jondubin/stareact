var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var request = require('superagent');

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('container')
);

console.log('helloz');

$('button').click(function() {
    console.log('hello');
    console.log($('#username'));
    let username = $('#username').val();
    let password = $('#password').val();
    let url = 'https://' + username + ':' + password + '@api.github.com/user/starred/babel/babelify';
    console.log(url);
    request.put(url);
});