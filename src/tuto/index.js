
import printMe from './print.js';

function getComponent() {


  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    var btn = document.createElement('button');


    if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
    }

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console c: !';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;

    }).catch(error => 'An error occurred while loading the component');

}

    getComponent().then(component => {
       document.body.appendChild(component);


       if (module.hot) {

         module.hot.accept('./print.js', function() {
          console.log('Accepting the updated printMe module!');
          document.body.removeChild(component);
          component = getComponent(); // Re-render the "component" to update the click handler
          document.body.appendChild(component);
         })

       }
    })
