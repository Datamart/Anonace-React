import React, { Component } from 'react';
import './style.css';
import jsonp from '../Helpers/jsonp';
import buildTwitterPost from '../Helpers/twitter'
import buildRedditPost from '../Helpers/reddit'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidUpdate(prevProps, prevState) {
    const API_URL = 'https://api.anonace.com/v1/search';
    const interests = this.props.interests
    const sources = this.props.sources;
    const limit = this.props.settings.limit;
    var count = Object.keys(sources).filter(i => sources[i]).length *
                Object.keys(interests).filter(i => interests[i]).length;
    var posts = [];
    var callback = (data) => {
      for (let i = 0; i < data.length; ++i) {
        let item = data[i];
        let post = null;

        if ('retweet_count' in item) {
          post = buildTwitterPost(item);
        } else if (item.kind === 't3') {
          post = buildRedditPost(item.data);
        }

        post && posts.push(post);
      }

      if (--count === 0 && this.state.posts.length !== posts.length) {
        posts.sort(function(a, b) { return b.date - a.date; })
        this.setState({posts});
      }
    };

    for (let source in sources) {
      if (sources[source]) {
        let url = API_URL + '?s=' + source + '&c=' + limit;
        for (let interest in interests) {
          interests[interest] && jsonp(url + '&q=' + interest, callback);
        }
      }
    }
  }

  render() {
    const hasInterests = Object.keys(this.props.interests).filter(key => this.props.interests[key]).length > 0;
    const hasSources = Object.keys(this.props.sources).filter(key => this.props.sources[key]).length > 0;
    const hasResults = this.state.posts.length > 0;

    return (
      <div id="content">
        <div style={{display: hasResults ? 'none' : 'block'}}
             className="box post">
          <h3>Welcome</h3>
          <p>Read your favorite authors, influencers and brands, follow your interests by topics and hashtags.</p>
          <p>Enjoy this app anonymously, securely, free of charge, without sign-up and ads.</p>
          <p>To start using AnonAce, please add at least one @name, #hashtag or keyword to the list of interests.</p>
        </div>
        <div style={{display: hasInterests ? 'none' : 'block'}}
             className="box post">No selected interests</div>
        <div style={{display: hasSources ? 'none' : 'block'}}
             className="box post">No selected sources</div>
        <div style={{display: hasResults ? 'block' : 'none'}}>
          {this.state.posts.map(post =>
            <div className="box post" key={post.id} >
              <div className={'source ' + post.source}><span>{post.source}</span></div>
              <div className="text" data-link={post.link}>{post.text}</div>
              <div className="media" id={'media-' + post.id}>{post.media}</div>
              <table className="footer" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <th width="20"><iframe width="20" frameBorder="0" sandbox=""
                        title={post.id}
                        src={"data:text/html,%3Cstyle%3Ebody{padding:0;margin:0;overflow:hidden;background:url('" + post.author_avatar + "') center%2Fcover no-repeat}%3C%2Fstyle%3E"}></iframe></th>
                    <th><a href={post.author_link} rel="external noopener noreferrer author"
                           className="author" target="_blank">{post.author_name}</a></th>
                    <td><a href={post.link} rel="external noopener noreferrer"
                           className="date" target="_blank">{post.date}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
}
