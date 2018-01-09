import React, { PropTypes, Component } from 'react';
import Repo from './Repo'

export default class Repos extends Component {
  render () {
    return (
			<ul className='popular-list'>
				{this.props.repos.map((repo, i) => (
					<Repo key={i} index={i} repo={repo} />
				))}
			</ul>
    );
  }
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};