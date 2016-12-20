"use strict";
var Team = (function () {
    function Team(_id, name, sport) {
        if (_id === void 0) { _id = null; }
        if (name === void 0) { name = null; }
        if (sport === void 0) { sport = null; }
        this._id = _id;
        this.name = name;
        this.sport = sport;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map