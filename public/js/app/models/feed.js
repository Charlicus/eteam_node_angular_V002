"use strict";
var Feed = (function () {
    // Replace creator by user?
    function Feed(_id, creator, msg, comments) {
        if (_id === void 0) { _id = null; }
        if (creator === void 0) { creator = null; }
        if (msg === void 0) { msg = null; }
        if (comments === void 0) { comments = null; }
        this._id = _id;
        this.creator = creator;
        this.msg = msg;
        this.comments = comments;
    }
    return Feed;
}());
exports.Feed = Feed;
//# sourceMappingURL=feed.js.map