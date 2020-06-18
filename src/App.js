import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Page1 from './components/Page1';

//do not the import statement again if we use code splitting
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

import AsyncComponent from './components/AsyncComponent';



class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null,
    }
  }

  onRouteChange = (route) => {
    //Without  code splitting
    // this.setState({route})
    //With code Splitting
    // if(route === 'page1') {
    //   this.setState({route});
    // } else if(route === 'page2') {
    //   import('./components/Page2').then((Page2) => {
    //     this.setState({route, component: Page2.default});
    //   })
    // } else if(route === 'page3') {
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({route, component: Page3.default});
    //   })
    // }
      //With High Order Component
      this.setState({route});
  }

  render() {
    //Without code splitting
      // if(this.state.route === 'page1') {
      //   return <Page1 onRouteChange={this.onRouteChange} />
      // } else if(this.state.route === 'page2') {
      //   return <Page2 onRouteChange={this.onRouteChange} />
      // } else {
      //   return <Page3 onRouteChange={this.onRouteChange}/>
      // }
      //With Code Splitting
            // if(this.state.route === 'page1') {
            //   return <Page1 onRouteChange={this.onRouteChange} />
            // } else {
            //   return <this.state.component onRouteChange={this.onRouteChange} />
            // }

        //With higher component
        if(this.state.route === 'page1') {
        return <Page1 onRouteChange={this.onRouteChange} />
      } else if(this.state.route === 'page2') {
        const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
        return <AsyncPage2 onRouteChange={this.onRouteChange}/>
      } else {
        const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
        return <AsyncPage3 onRouteChange={this.onRouteChange}/>
      }
  }
}

export default App;