
import {extract, getImageHTML} from '../Helpers/extractor';

function buildTwitterPost(data) {
  var postId = data.id_str;
  var media = ((data['extended_entities'] || {})['media'] || [])[0];
  var url = media && media['media_url_https'];
  var link = 'https://twitter.com/' + data.user.screen_name + '/status/' + postId;

  var mediaHtml = '';
  var setMedia = () => {
    var div = document.getElementById('media-' + postId);
    if (div) div.innerHTML = mediaHtml;
  }

  if (url && url.indexOf('https:') === 0) {
    setTimeout(setMedia, 250);
    mediaHtml = getImageHTML(url, link);
  } else {
    media = ((data['entities'] || {})['urls'] || [])[0];
    url = media && media['expanded_url'];
    extract(url, function(media) {
      if ('image' === media['type']) {
        mediaHtml = getImageHTML(media['url'], link);
      } else if ('youtube' === media['type']) {
        mediaHtml = '<div class="frame"><iframe src="' +
                    media['url'] + '" frameborder="0"></iframe></div>';
      }
      setMedia();
    });
  }

  var text = data.full_text || data.text;
  if (data['retweeted_status'] && text.indexOf('RT @') === 0) {
    text = text.split(': ')[0] + ': ' + data['retweeted_status']['full_text'];
  }

  return {
    source: 'twitter',
    id: postId,
    text: text,
    date: new Date(data.created_at).toLocaleString(),
    link: link,
    author_link: 'https://twitter.com/' + data.user.screen_name,
    author_name: data.user.name,
    author_avatar: data.user.profile_image_url_https,
    media: ''
  }
}

export default buildTwitterPost;
