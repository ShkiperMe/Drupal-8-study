import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectLanguage } from '../actions/actions';
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
  }

  handleClick(language) {
    this.props.dispatch(selectLanguage(language));
  }

  render () {
    const { repos } = this.props;
    return (
      <div>
        <Languages
                onClick={this.handleClick}
                languages={['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']} />

        {repos.length === 0 &&
        <h2>Loading...</h2>
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
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { selectedLanguage, loadedRepos } = state;

  return {
    selectedLanguage,
    repos: loadedRepos,
  };
}

export default connect(mapStateToProps)(AsyncApp);