import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import TableComponent from './Table';
import Spinner from '../utils/Spinner';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { issues: [] };
  }

  componentDidMount() {
    const url = 'https://api.github.com/repos/facebook/react/issues';
    this.fetchData(url);
  }

  fetchData = async url => {
    try {
      let issues = await (await fetch(url)).json();
      this.setState({ issues });
    } catch (exception) {
      console.error(`Failed to retrieve the issues: (${exception})`);
    }
  };

  render() {
    const { issues } = this.state;
    return (
      <Grid centered columns={1}>
        <Grid.Column>
          {issues.length ? <TableComponent issues={issues} /> : <Spinner />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
