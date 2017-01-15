'use strict';

var md5 = require('md5');

module.exports = function (data) {
  var authors = this.config.authors;
  var author = authors[data.authorId]
    ? authors[data.authorId]
    : authors.default;

  if (author && author.email) {
    author.gravatar = md5(author.email.trim());
  }

  if (!author.gravatar) {
    author.gravatar = '';
  }

  data.author = author;

  return data;
};
