"use strict";
var Feed = (function () {
    function Feed(_id, creator, msg) {
        if (_id === void 0) { _id = null; }
        if (creator === void 0) { creator = null; }
        if (msg === void 0) { msg = null; }
        this._id = _id;
        this.creator = creator;
        this.msg = msg;
    }
    return Feed;
}());
exports.Feed = Feed;
//# sourceMappingURL=feed.js.map