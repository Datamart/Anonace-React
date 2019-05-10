import React from 'react';
import './App.css';
import './components/Theme/theme.css';
import './components/Theme/switches.css';
import './components/Theme/assets.css';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasSidebar: localStorage.getItem('sidebar') !== 'false',
      interests: {},
      sources: {},
      settings: {}
    };
  }

  toggleSidebar(e) {
    e.preventDefault();
    const hasSidebar = !this.state.hasSidebar;
    this.setState({hasSidebar: hasSidebar});
    localStorage.setItem('sidebar', hasSidebar);
  }

  reloadContent(e) {
    e.preventDefault();
    alert('Not implemented yet.');
  }

  onChange(e) {
    const state = this.state;
    state[e.key] = e.data
    this.setState(state);
    // console.log('App.onChange: event:', e);
    // console.log('App.onChange: state:', this.state);
  }

  render() {
    return (
      <div className="container">
        <Header toggleSidebar={this.toggleSidebar.bind(this)}
                reloadContent={this.reloadContent.bind(this)} />
        <Sidebar isOpen={this.state.hasSidebar}
                 onChange={this.onChange.bind(this)} />
        <Content interests={this.state.interests}
                 sources={this.state.sources}
                 settings={this.state.settings} />
      </div>
    );
  }
}
