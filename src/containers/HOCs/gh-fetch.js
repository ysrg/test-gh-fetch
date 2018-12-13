import React, { Component } from 'react';

export default fetchGH;

function fetchGH(WrappedComponent, what, url, row, fields) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { [what]: null, error: null };
    }

    componentDidMount() {
      this.fetchData(url);
    }

    fetchData = async url => {
      try {
        let result = await (await fetch(url)).json();
        this.setState({ [what]: result });
      } catch (error) {
        this.setState({ error });
      }
    };

    render() {
      // renders the wrapped component with new data
      // also, we pass through any additional props
      return (
        <WrappedComponent
          data={this.state}
          name={what}
          row={row}
          fields={fields}
          {...this.props}
        />
      );
    }
  };
}
