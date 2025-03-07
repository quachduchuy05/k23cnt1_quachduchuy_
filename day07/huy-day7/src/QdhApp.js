import React, { Component } from 'react';
import QdhLoginControl from './components/QdhLoginControl';
import QdhRenderList from './components/QdhRenderList';
import QdhRenderListStudent from './components/QdhRenderlistStudent';
import QdhListComp from './components/QdhListComp';


class QdhApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>nguyen huu tuyen</h1>
          <hr/>
          <QdhLoginControl />

          <QdhRenderList />

     <QdhRenderListStudent/>
     <QdhListComp/>
      </div>
    );
  }
}

export default QdhApp;