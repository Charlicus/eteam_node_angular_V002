"use strict";
var User = (function () {
    function User(_id, email, username, password, confirmPassword, createdAt, updateAt) {
        if (_id === void 0) { _id = null; }
        if (email === void 0) { email = null; }
        if (username === void 0) { username = null; }
        if (password === void 0) { password = null; }
        if (confirmPassword === void 0) { confirmPassword = null; }
        if (createdAt === void 0) { createdAt = null; }
        if (updateAt === void 0) { updateAt = null; }
        this._id = _id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map