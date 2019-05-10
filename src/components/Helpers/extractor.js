import jsonp from './jsonp';

export const extract = (url, callback) => {
  const YOUTUBE_PATTERN = /^https?:\/\/(www\.)?((youtu\.be)|youtube\.com)\//;

  if (url) {
    if (YOUTUBE_PATTERN.test(url)) {
      getYouTubeVideo(url, callback);
    } else {
      getImage(url, callback);
    }
  }
}

export const getImageHTML = (image, link) => {
  var theme = 'eee'; // +data['dark-mode'] ? '424242' : 'eee';
  return '<div class="frame">' +
    '<iframe frameborder="0" role="img" class="image" sandbox ' +
    'src="data:text/html,%3Cstyle%3Ebody{padding:0;margin:0;overflow:hidden;background:url(' +
    image + '),url(\'data:image/svg+xml,%253Csvg style=%2527fill:grey;font:13px arial%2527 xmlns=%2527http://www.w3.org/2000/svg%2527%253E%253Ctext x=%252750%25%2527 y=%252750%25%2527 text-anchor=%2527middle%2527%253ENo image%253C/text%253E%253C/svg%253E\');background-color:%23' +
    theme + ';background-position:center;background-repeat:no-repeat;background-size:contain}%3C%2Fstyle%3E"></iframe>' +
    '<a href="' + link + '" rel="external noopener" target="_blank" class="cover"></a></div>';
}

function getYouTubeVideo(url, callback) {
  var videoId = (url.match(/[?&]v=(\w+)/) || [])[1];
  if (!videoId) {
    videoId = (url.match(/https?:\/\/youtu.be\/(\w+)/) || [])[1];
  }

  if (videoId) {
    // https://developers.google.com/youtube/player_parameters
    callback({
      'type': 'youtube',
      'url': 'https://www.youtube.com/embed/' + videoId +
             '?modestbranding=1&origin=' + window.location.hostname
    });
  }
}

function getImage(url, callback) {
  const TAGS_PATTERN = /<(img|image|input|svg|script|link|i?frame|object|form|video|audio)/img;
  const API_URL = 'https://api.anonace.com/v1/proxy?url=';

  jsonp(API_URL + window.encodeURIComponent(url), function(data) {
    let content = (data[0] || '');
    if (content) {
      let element = document.createElement('DIV');
      element.innerHTML = content.replace(
          TAGS_PATTERN, '<br ').replace(
          /background(-image)\s*:/img, 'tmp:'); //.substr(0, 2048);

      var nodes = element.querySelectorAll('meta');
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var name = node.getAttribute('name') ||
            node.getAttribute('property') ||
            node.getAttribute('itemprop') || '';

        if (name === 'twitter:image:src' || name === 'twitter:image' ||
            name === 'og:image' || name === 'image') {
          /** @type {string} */ var src = node.getAttribute('content');
          if (src && src.indexOf('http') === 0) {
            callback({
              'type': 'image',
              'url': src.replace(/^http:/, 'https:')
            });
          }
          break;
        }
      }
      element = null;
    }
  });
}
