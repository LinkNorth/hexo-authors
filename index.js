/* global hexo */
'use strict';

hexo.extend.filter.register(
  'before_post_render',
  require('./lib/filters/add-author')
);
