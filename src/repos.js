import React from 'react'
import request from 'superagent'

let repos = ['jondubin/stareact', 'uber/go-torch', 'aharelick/cis555-project'];

function starRepo(usernameRepo, username, password) {
    // usernameRepo should look like username/repo
    //let url = 'https://api.github.com/user/starred/babel/babelify';
    let url = 'https://api.github.com/user/starred/' + usernameRepo;
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

class Repo extends React.Component {

    render() {
        let fullRepoNameSplit = this.props.fullRepoName.split('/');
        let userName = fullRepoNameSplit[0];
        let repoName = fullRepoNameSplit[1];

        return (<li><a href='#'>{userName}</a>/<a href='#'>{repoName}</a></li>);
    }
}

export class RepoList extends React.Component {
    render() {
        let repoComponents = repos.map(function (fullRepoName) {
            return <Repo key={fullRepoName} fullRepoName={fullRepoName}/>;
        });

        return (
            <ul>
                { repoComponents }
            </ul>
        );
    }
}