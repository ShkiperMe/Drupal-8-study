import React, { Component, PropTypes } from 'react';

export default class Languages extends Component {
  render () {
    const { onClick, languages } = this.props;

    return (
      <ul className='languages'>
        <li key={0}>
          <a
            href='#'
            onClick={e => {
              e.preventDefault()
              onClick('All')
            }}
          >
            {'All'}
          </a>
        </li>
        { languages.map(lang => (
        <li key={lang.tid[0].value}>
          <a
            href='#'
            onClick={e => {
              e.preventDefault()
              onClick(lang.name[0].value)
            }}
          >
            {lang.name[0].value}
          </a>
        </li>
        ))}
      </ul>
    );
  }
}

Languages.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
};