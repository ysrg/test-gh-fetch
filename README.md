# [Demo](https://ysrg.github.io/test-gh-fetch/)

Simple React application built following the best practices today -- code reuse and data sharing.

Data fetching is abstracted in a Higher Order Component you can use for any type of data fetching. It uses async/await under the hood. This app was designed initially to easily build a SemanticUI table component based on the retrieved data, but you can easily pull the table component in its own HOC and render anything else instead (eg a graph). If the app grows in size and you find yourself making similar components using the HOC, you can abstract it further and use *render prop* pattern aside your HOC.

```js
function withGH(WrappedComponent) {
   return class extends React.Component {
    render() {
      return (
        <Table render={data => (
          <WrappedComponent {...this.props} data={data} />
        )}/>
      );
    }
  }
}
```

Pass arguments to the HOC of what you want to see on the screen and let React's compositional nature do the rest.

Also, there is a ErrorBoundary wrapper component that catches errors if there are any. You can provide your own error service provider function in `componentDidCatch` lifecycle method from `Error.js` file
