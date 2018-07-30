# Check your object usage in your app!

Migrating App from RESt to GraphQL and wanted to prune the REST api's objects to take advantage of graphQL.

Intercept the object you want to check with the tracer object. See what parts of the object are actually being used by checking `window.objectNodeCheck`;

```
import { tracePropAccess } 'objectNodeCheck'';

export default function higherOrderComponent(WrappedComponent) {
  class HigherOrderPLPComponent extends Component {
    render() {
      const traceableProps = tracePropAccess(this.props.display);

      return <WrappedComponent {...this.props} display={traceableProps} />;
    }
  }

  HigherOrderPLPComponent.propTypes = {};

  return HigherOrderPLPComponent;
}
```

WIP ~~

TODO:

- Run on portal in live application that reads off window
