"use strict";
var Feed = (function () {
    function Feed(_id, _creator, msg, comments, createdAt, updateAt) {
        if (_id === void 0) { _id = null; }
        if (_creator === void 0) { _creator = null; }
        if (msg === void 0) { msg = null; }
        if (comments === void 0) { comments = null; }
        if (createdAt === void 0) { createdAt = null; }
        if (updateAt === void 0) { updateAt = null; }
        this._id = _id;
        this._creator = _creator;
        this.msg = msg;
        this.comments = comments;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
    }
    return Feed;
}());
exports.Feed = Feed;
//# sourceMappingURL=feed.js.map