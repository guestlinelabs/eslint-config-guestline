/**
 * Copyright (c) 2018-present, Guestline, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  extends: ['react-app'],
  rules: {
    'padding-line-between-statements': [
      'error',
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' }
    ]
  }
};
