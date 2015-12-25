import React from 'react'
import request from 'superagent'

class ErrorAlert extends React.Component {
    render() {
        let errorMsg = "Login was invalid, please check our username and password"
        return (
            <div className='row'>
                <div className="alert alert-danger col-sm-3 center-block text-center" role="alert">
                    {errorMsg}
                </div>
            </div>);
    }
}

class LoginInput extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='form-group col-sm-3 center-block'>
                    <label>{this.props.label}</label>
                    <input className='form-control'
                           type={this.props.type}
                           onChange={this.props.handler}
                           value={this.props.value} />
                </div>
            </div>
        );
    }
}

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showError: false};
    }

    isValidLogin(username, password) {
        let url = 'https://api.github.com';
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .auth(username, password)
                .end(function(err, res){
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
        })
    }

    checkLogin(event) {
        event.preventDefault();

        let loginPromise = this.isValidLogin(this.props.username, this.props.password);

        loginPromise.then(
            () => {
                this.props.makeLoginValid();
            }
        ).catch(
            (err) => {
                this.setState({showError: true})
            }
        );
    }


    render() {
        let errorAlert = <div className="alert alert-danger col-xs-3 center-block" role="alert">Login was invalid, please
            check your username and password</div>;

        return (
            <div>
                <form onSubmit={this.checkLogin.bind(this)}>
                    <LoginInput value={this.props.username}
                                handler={this.props.handleUsernameChange}
                                label="Your GitHub username"
                                type="text"/>
                    <LoginInput value={this.props.password}
                                handler={this.props.handlePasswordChange}
                                label="Your GitHub password"
                                type="password"/>
                    {this.state.showError ? <ErrorAlert /> : null}
                    <div className='row'>
                        <button className='btn btn-primary center-block has-spinner' type='submit'>
                            <i className="fa fa-spinner fa-spin"></i>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
