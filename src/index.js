var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

function starRepo(usernameRepo, username, password) {
    // usernameRepo should look like username/repo
    //let url = 'https://api.github.com/user/starred/babel/babelify';
    let url = 'https://api.github.com/user/starred/' + usernameRepo;
    console.log(url);
    request
        .put(url)
        .auth(username, password)
        .end(function(err, res){
            if (err || !res.ok) {
                alert('Oh no! error');
            } else {
                alert('yay got ' + JSON.stringify(res.body));
            }
        });
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            validLogin: false
        }
    }

    makeLoginValid() {
        this.setState({validLogin: true});
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        if (this.state.validLogin) {
            return <h1>Nice</h1>;
        } else {
            return <Login username={this.state.username}
                          password={this.state.password}
                          handleUsernameChange={this.handleUsernameChange.bind(this)}
                          handlePasswordChange={this.handlePasswordChange.bind(this)}
                          makeLoginValid={this.makeLoginValid.bind(this)}/>;
        }
    }
}

class Login extends React.Component {

    checkLogin(username, password) {
        let loginIsValid = false;
        if (loginIsValid) {
            this.props.makeLoginValid();
        } else {
            console.log('hey your login is not valid');
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleUsernameChange} value={this.props.username} id="username" />
                <input type="text" onChange={this.props.handlePasswordChange} value={this.props.password} id="password" />
                <button onClick={this.checkLogin}>Submit</button>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
