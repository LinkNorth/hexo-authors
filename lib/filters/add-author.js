/* global hexo */
'use strict';

var md5 = require('md5');

module.exports = function (data) {
  if (data.authorId) {
    var author = hexo.config[data.authorId];

    if (author.email) {
      author.gravatar = md5(author.email.trim());
    }

    data.author = author;
  }

  return data;
};
