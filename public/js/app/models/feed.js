"use strict";
var Feed = (function () {
    // Replace creator by user?
    function Feed(_id, _creator, msg, comments) {
        if (_id === void 0) { _id = null; }
        if (_creator === void 0) { _creator = null; }
        if (msg === void 0) { msg = null; }
        if (comments === void 0) { comments = null; }
        this._id = _id;
        this._creator = _creator;
        this.msg = msg;
        this.comments = comments;
    }
    return Feed;
}());
exports.Feed = Feed;
//# sourceMappingURL=feed.js.map