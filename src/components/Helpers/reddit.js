function buildRedditPost(data) {
  return {
    source: 'reddit',
    id: data.id,
    text: data.title,
    date: new Date(data.created * 1E3).toLocaleString(),
    link: 'https://www.reddit.com' + data.permalink,
    author_link: 'https://www.reddit.com/user/' + data.author,
    author_name: data.author,
    author_avatar: 'https://www.reddit.com/favicon.ico',
    media: '[media is not implemented yet]'
  }
}

export default buildRedditPost;
