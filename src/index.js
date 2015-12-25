import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from './login.js';
import {RepoList} from './repos.js';
import request from 'superagent';
import reposJson from '../repos.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            validLogin: false,
            validRepos: [],
            errorValidating: false
        };
        this.addRepos();
    }

    addRepos() {
        // will validate and add repos in the url if present,
        // othwerise will add from JSON

        if (false) {

        } else {
            this.state.validRepos = reposJson.repos;
        }

    }

    //getValidRepos(repos) {
    //    repos.forEach((repo) => {
    //        let url = 'https://api.github.com/repos/' + repo;
    //        request
    //            .get(url)
    //            .end((err, res) => {
    //                if (!err && res.ok) {
    //                    if (this.state.validRepos.indexOf(repo) === -1) {
    //                        this.setState((state) => {
    //                                {
    //                                    validRepos: state.validRepos.push(repo)
    //                                }
    //                            }
    //                        );
    //                    }
    //                } else {
    //                    this.setState({errorValidating: true})
    //                }
    //            });
    //    })
    //}

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
            var content =  <RepoList username={this.state.username}
                                     password={this.state.password}
                                     repos={this.state.validRepos}/>;
        } else {
            var content = <Login username={this.state.username}
                                 password={this.state.password}
                                 handleUsernameChange={this.handleUsernameChange.bind(this)}
                                 handlePasswordChange={this.handlePasswordChange.bind(this)}
                                 makeLoginValid={this.makeLoginValid.bind(this)}/>;
        }

        return (
            <div className='container'>
                <div>
                    <div className='row'>
                        <div className='text-center'>
                            <h1>stareact</h1>
                            <br />
                        </div>
                    </div>
                </div>
                {content}
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('mount')
);
