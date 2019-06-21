import {registerApplication, start} from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'react',
  // Our loading function
  () => import('./src/react/react.app.js'),
  // Our activity function
  () => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/react')
);
registerApplication(
  // Name of our single-spa application
  'vueapp',
  // Our loading function
  () => import('./src/vueapp/vueapp.app.js'),
    pathPrefix('/vueapp')
);


registerApplication(
  'navigation',
  () => import('./src/navigation/navigation.app.js').
  then(module => module.navigation),
  () => true
);


function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

start()
