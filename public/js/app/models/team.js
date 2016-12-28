"use strict";
var Team = (function () {
    function Team(name, sport, url, _creator) {
        if (name === void 0) { name = null; }
        if (sport === void 0) { sport = null; }
        if (url === void 0) { url = null; }
        if (_creator === void 0) { _creator = null; }
        this.name = name;
        this.sport = sport;
        this.url = url;
        this._creator = _creator;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map