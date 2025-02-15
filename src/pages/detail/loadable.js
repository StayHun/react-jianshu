import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: () => <div>Loading...</div>
});

export default LoadableComponent;