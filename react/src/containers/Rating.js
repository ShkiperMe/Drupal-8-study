import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectLanguage, preloadLanguages } from '../actions/actions';
import Languages from '../components/Languages';
import Repos from '../components/Repos';

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(selectLanguage('All'));
    dispatch(preloadLanguages());
  }

  handleClick(language) {
    this.props.dispatch(selectLanguage(language));
  }

  render () {
    const { repos, languages } = this.props;
    return (
      <div>

        {languages.length === 0 &&
          <h2>Loading languages...</h2>
        }

        {languages.length > 0 &&
          <Languages
            onClick={this.handleClick}
            languages={languages} />
        }

        {repos.length === 0 &&
          <h2>Loading repos...</h2>
        }

        {repos.length > 0 &&
          <div style={{ opacity: 1 }}>
            <Repos repos={repos} />
          </div>
        }
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { selectedLanguage, loadedRepos, loadedLanguages } = state;

  return {
    selectedLanguage,
    repos: loadedRepos,
    languages: loadedLanguages,
  };
}

export default connect(mapStateToProps)(AsyncApp);