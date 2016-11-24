"use strict";
var User = (function () {
    function User(_id, email, username, password, confirmPassword) {
        if (_id === void 0) { _id = null; }
        if (email === void 0) { email = null; }
        if (username === void 0) { username = null; }
        if (password === void 0) { password = null; }
        if (confirmPassword === void 0) { confirmPassword = null; }
        this._id = _id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map