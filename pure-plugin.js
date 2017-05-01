'use strict';

module.exports = function () {
  return {
    visitor: {
      ClassExpression: function ClassExpression(path) {
        path.addComment('leading', '#__PURE__');
      }
    }
  };
};
