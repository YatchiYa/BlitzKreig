// index.js file
import _ from 'lodash';
// import style from '../static/style/style.css';

function component() {

  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

  var vue = document.createElement('div');  vue.setAttribute("id", "app");  document.body.appendChild(vue);

}
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);


  // var element = document.createElement('div');
  // var button = document.createElement('button');
  // var br = document.createElement('br');


  // Lodash, currently included via a script, is required for this line to work
  // button.innerHTML = 'Click me and look at the console!';
  // element.innerHTML = _.join(['Hello ', 'webpack '], ' ');


  //element.appendChild(br);
  //element.appendChild(button);


// Note that because a network request is involved, some indication
// of loading would need to be shown in a production-level site/app.

// button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //  var print = module.default;
  //  print(" Hello ");
  // });

  // return element;
 //}



 // tell the webpack that when we change printJs changes, we update

  // let element = component(); // Store the element to re-render on print.js changes
  // document.body.appendChild(element);
/**
  if (module.hot) {
    module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element); */
    // element = component(); // Re-render the "component" to update the click handler
     //document.body.appendChild(element);
  //  })

//  }
