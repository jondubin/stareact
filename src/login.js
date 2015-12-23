import React from 'react'

export class Login extends React.Component {

    checkLogin(username, password) {
        let loginIsValid = true;
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
                <button onClick={this.checkLogin.bind(this)}>Submit</button>
            </div>
        );
    }
}
