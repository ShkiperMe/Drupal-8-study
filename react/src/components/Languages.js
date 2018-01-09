import React, { Component, PropTypes } from 'react';

export default class Languages extends Component {
  render () {
    const { onClick, languages } = this.props;

    return (
      <ul className='languages'>
        { languages.map(lang => (
        <li key={lang}>
          <a
            href='#'
            onClick={e => {
              e.preventDefault()
              onClick(lang)
            }}
          >
            {lang}
          </a>
        </li>
        ))}
      </ul>
    );
  }
}

Languages.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
};