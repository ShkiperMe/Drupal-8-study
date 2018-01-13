import React, { Component } from 'react';

export default class Repo extends Component {
  render () {
    const repo = this.props.repo;
    const index = this.props.index;

    return (
      <li key={repo.name} className='popular-item'>
        <div className='popular-rank'>#{index + 1}</div>
        <ul className='space-list-items'>
          <li>
            <img
              className='avatar'
              src={repo.field_avatar[0].uri}
              alt={'Avatar for ' + repo.title[0].value}
            />
          </li>
          <li><a href={repo.field_html_url[0].uri}>{repo.title[0].value}</a></li>
          <li>@{repo.field_full_name[0].value}</li>
          <li>{repo.field_count_stars[0].value} stars</li>
          <li>{repo.field_forks[0].value} forks</li>
          <li>{repo.field_watchers[0].value} watchers</li>
        </ul>
      </li>
    );
  }
}