import React from 'react';
import request from 'superagent';
import async from 'async';
var classNames = require('classnames');


class GoldAlert extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className="alert alert-warning col-sm-3 center-block text-center" role="alert">
                    {this.props.message}
                </div>
            </div>);
    }
}


class Repo extends React.Component {

    render() {
        let fullRepoNameSplit = this.props.fullRepoName.split('/');
        let userName = fullRepoNameSplit[0];
        let repoName = fullRepoNameSplit[1];

        let style = {
            paddingRight: 10
        };

        let liClass = classNames({
            'list-group-item': true,
            'list-group-item-warning': this.props.isStarred
        });
        //
        let userLink = 'https://github.com/' + userName;
        let repoLink = userLink + '/' + repoName;
        return (
            <li className={liClass}>
                <span className="octicon octicon-repo" style={style}></span>
                <a target="_blank" href={userLink}>{userName}</a>/<a target="_blank" href={repoLink}>{repoName}</a>
                {this.props.isStarred ? <span className="octicon octicon-star pull-right"></span> : null}
            </li>
        );
    }
}

class StarringProgress extends React.Component {
    // todo links should work, open in new tabs

    render() {
        let styles = {
            width: this.props.progress
        };

        let barClass = classNames({
            'progress-bar': true,
            'progress-bar-warning': true,
            'progress-bar-striped': true,
            'active': !this.props.isCompleted
        });

        return (
            <div className='row'>
                <div className='col-sm-4 center-block'>
                    <div className="progress">
                        <div className={barClass} role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={styles}>
                            { this.props.isCompleted ? "All the repos have been starred!" : null }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class RepoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            starredRepos: [],
            starAllClicked: false
        }
    }

    getProgress() {
        let totalRepos = this.props.repos.length;
        let starredRepos = this.state.starredRepos.length;
        return (100 * starredRepos/totalRepos) + '%';
    }

    addToStarredRepos(repo) {
        this.setState((state) => {
                {starredRepos: state.starredRepos.push(repo)}
            }
        );
    }

    isAllStarred() {
        return this.state.starredRepos.length == this.props.repos.length;
    }

    starAllRepos() {
        function starRepo(repos, index, username, password) {
            let repo = repos[index];
            console.log(repos);
            console.log(index);
            let url = 'https://api.github.com/user/starred/' + repo;
            console.log(url);
            request
                .put(url)
                .auth(username, password)
                .end((err, res) => {
                    if (!err && !res.ok) {
                        //
                    } else {
                        this.addToStarredRepos(repo);
                    }

                    if (index < repos.length - 1) {
                        setTimeout(starRepo.bind(this, repos, index + 1, username, password), 750);
                    }
                })
        }
        this.setState({starAllClicked: true});
        starRepo.call(this, this.props.repos, 0, this.props.username, this.props.password);
    }

    isRepoStarred(repo) {
        return this.state.starredRepos.indexOf(repo)  > -1;
    }

    render() {
        let repoComponents = this.props.repos.map((repo) => {
            return <Repo key={repo} isStarred={this.isRepoStarred(repo)} fullRepoName={repo}/>;
        });

        return (
            <div className='row'>
                {
                    (() => {
                        if (this.props.repos.length == 0) {
                            return <GoldAlert message="No repos available to be starred."/>
                        } else if (this.state.starAllClicked) {
                            return <StarringProgress isCompleted={this.isAllStarred()} progress={this.getProgress()}/>
                        } else {
                            return <button className='btn btn-warning center-block' onClick={this.starAllRepos.bind(this)}>Star all</button>
                        }
                    })()
                }
                <br />
                <div className='col-sm-4 center-block'>
                    <ul className='list-group'>
                        { repoComponents }
                    </ul>
                </div>
            </div>
        );
    }
}