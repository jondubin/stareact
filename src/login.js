import React from 'react'

export class Login extends React.Component {

    checkLogin(event) {
        let loginIsValid = true;
        if (loginIsValid) {
            this.props.makeLoginValid();
        } else {
            console.log('hey your login is not valid');
        }
        event.preventDefault();
        return false;
    }

    render() {
        return (
            <form onSubmit={this.checkLogin.bind(this)}>
                <div className='row'>
                    <div className='three columns'>
                    <label >Your GitHub username</label>
                    <input className='u-full-width'
                           type='text'
                           onChange={this.props.handleUsernameChange}
                           value={this.props.username} />
                    </div>
                </div>
                <div className='row'>
                    <div className='three columns'>
                        <label >Your GitHub password</label>
                        <input className='u-full-width'
                               type='password'
                               onChange={this.props.handlePasswordChange}
                               value={this.props.password} />
                    </div>
                </div>
                <button className='button-primary' type='submit'>Login</button>
            </form>
        );
    }
}
