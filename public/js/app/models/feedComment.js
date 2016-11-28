"use strict";
var FeedComment = (function () {
    function FeedComment(_feedId, _id, _creator, msg) {
        if (_feedId === void 0) { _feedId = null; }
        if (_id === void 0) { _id = null; }
        if (_creator === void 0) { _creator = null; }
        if (msg === void 0) { msg = null; }
        this._feedId = _feedId;
        this._id = _id;
        this._creator = _creator;
        this.msg = msg;
    }
    return FeedComment;
}());
exports.FeedComment = FeedComment;
//# sourceMappingURL=feedComment.js.map