"use strict";
var Member = (function () {
    function Member(_user, _team, role, admin) {
        if (_user === void 0) { _user = null; }
        if (_team === void 0) { _team = null; }
        if (role === void 0) { role = null; }
        if (admin === void 0) { admin = null; }
        this._user = _user;
        this._team = _team;
        this.role = role;
        this.admin = admin;
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.js.map