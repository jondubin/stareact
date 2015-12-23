import React from 'react'
import ReactDOM from 'react-dom'
import {Login} from './login.js'
import {RepoList} from './repos.js'


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
            return <RepoList />;
        } else {
            return <Login username={this.state.username}
                          password={this.state.password}
                          handleUsernameChange={this.handleUsernameChange.bind(this)}
                          handlePasswordChange={this.handlePasswordChange.bind(this)}
                          makeLoginValid={this.makeLoginValid.bind(this)}/>;
        }
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
