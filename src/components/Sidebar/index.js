import React, { Component } from 'react';
import './style.css';


export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className={this.props.isOpen ? 'open' : ''}>
        <Interests onChange={this.props.onChange} />
        <Sources onChange={this.props.onChange} />
        <Settings onChange={this.props.onChange} />
        <div className="box links">
          <a href="./terms-of-service/">Terms of service</a> · <a
             href="./privacy-policy/">Privacy policy</a> · <a
             href="./disclaimer/">Disclaimer</a>
        </div>
      </div>
    );
  }
}


class Interests extends Component {
  constructor(props) {
    super(props);

    const interests = localStorage.hasOwnProperty('interests') ?
        JSON.parse(localStorage.getItem('interests')) : {};

    this.state = { interests: interests };

    this.addInterest = this.addInterest.bind(this);
    this.removeInterest = this.removeInterest.bind(this);
    this.toggle = this.toggle.bind(this);

    props.onChange({key: 'interests', type: 'init', data: interests});
  }

  addInterest(e) {
    e.preventDefault();

    const interests = this.state.interests;
    const input = e.target.elements['q'];
    const value = input.value.toLowerCase();

    if (!(value in interests)) {
      interests[value] = 1;
      this.setState({interests: interests});
      localStorage.setItem('interests', JSON.stringify(interests));
    }

    input.value = '';
    this.props.onChange({key: 'interests', type: 'add', data: interests});
  }

  removeInterest(e) {
    e.preventDefault();

    if (window.confirm('Are you sure you want to remove this interest?')) {
      const interests = this.state.interests;
      const interest = e.target.getAttribute('data-interest');
      delete interests[interest];
      this.setState({interests: interests});
      localStorage.setItem('interests', JSON.stringify(interests));
      this.props.onChange({key: 'interests', type: 'remove', data: interests});
    }
  }

  toggle(e) {
    const interests = this.state.interests;
    const interest = e.target.name;
    interests[interest] = +(!interests[interest]);
    this.setState({interests: interests});
    localStorage.setItem('interests', JSON.stringify(interests));
    this.props.onChange({key: 'interests', type: 'toggle', data: interests});
  }

  render() {
    return (
      <div className="box interests">
        <h3>Interests</h3>
        <form onSubmit={this.addInterest} name="interests" autoComplete="off">
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td><input name="q"
                    type="text" placeholder="@name, #hashtag or keyword"
                    title="Enter the @name, #hashtag or keyword without special characters."
                    pattern="[^()/><\]\[;|]+" maxLength="25" size="25"
                    autoComplete="off"
                    aria-label="Keyword" required /></td>
                <td width="20"><button type="submit">Add</button></td>
              </tr>
            </tbody>
          </table>
        </form>
        <table id="interest-list">
          <tbody>
            {Object.keys(this.state.interests).map(entry =>
              <tr key={entry}>
                <td>
                  <label>
                    <input type="checkbox" name={entry}
                           onChange={this.toggle}
                           checked={this.state.interests[entry]} />
                    <span> {entry}</span>
                  </label>
                </td>
                <td align="right">
                  <a href="/" title="Remove" data-interest={entry}
                     onClick={this.removeInterest}>&times;</a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}


class Sources extends Component {
  constructor(props) {
    super(props);

    const sources = localStorage.hasOwnProperty('sources') ?
        JSON.parse(localStorage.getItem('sources')) : {'twitter': 1, 'reddit': 1};

    this.state = { sources: sources };
    this.toggle = this.toggle.bind(this);

    props.onChange({key: 'sources', type: 'init', data: sources});
  }

  toggle(e) {
    const sources = this.state.sources;
    const source = e.target.name;
    sources[source] = +(!sources[source]);
    this.setState({sources: sources});
    localStorage.setItem('sources', JSON.stringify(sources));
    this.props.onChange({key: 'sources', type: 'toggle', data: sources});
  }

  render() {
    return (
      <div className="box sources switches">
        <h3>Sources</h3>
        <table id="source-list">
          <tbody>
            {Object.keys(this.state.sources).map(entry =>
              <tr key={entry} className={entry}>
                <td>
                  <label>
                    <input type="checkbox" name={entry}
                           onChange={this.toggle}
                           checked={this.state.sources[entry]} />
                    <span> {entry}</span>
                  </label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}


class Settings extends Component {
  constructor(props) {
    super(props);

    const settings = localStorage.hasOwnProperty('settings') ?
        JSON.parse(localStorage.getItem('settings')) :
        {'limit': 50, 'retweets': 1, 'darkMode': 0};

    this.state = { settings: settings };

    if (settings.darkMode)
      document.body.classList.add('dark');

    props.onChange({key: 'settings', type: 'init', data: settings});
  }

  toggleDarkMode(e) {
    document.body.classList.toggle('dark');
    this.update(e);
  }

  update(e) {
    const name = e.target.name;
    const settings = this.state.settings;
    const value = e.target.type === 'checkbox' ? !settings[name] : e.target.value;

    settings[name] = value;
    this.setState({settings: settings});

    localStorage.setItem('settings', JSON.stringify(settings));
    this.props.onChange({key: 'settings', type: 'update', data: settings});
  }

  render() {
    return (
      <div className="box settings switches">
        <h3>Settings</h3>
        <table id="settings-list">
          <tbody>
            <tr>
              <td width="20%">Count&nbsp;per&nbsp;interest&nbsp;</td>
              <td align="right">
                <select name="limit" aria-label="Count per interest"
                        value={this.state.settings.limit}
                        onChange={this.update.bind(this)}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </td>
            </tr>
            <tr>
              <td width="20%">Include&nbsp;retweets&nbsp;</td>
              <td align="right">
                <select aria-label="Include retweets" disabled>
                  <option>Yes</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label>
                  <input name="darkMode" type="checkbox"
                         checked={this.state.settings.darkMode}
                         onChange={this.toggleDarkMode.bind(this)} />
                  <span> Dark mode</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
