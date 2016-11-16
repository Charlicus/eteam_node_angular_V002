"use strict";
var User = (function () {
    function User(id, email, username, password, passwordCheck) {
        if (id === void 0) { id = null; }
        if (email === void 0) { email = null; }
        if (username === void 0) { username = null; }
        if (password === void 0) { password = null; }
        if (passwordCheck === void 0) { passwordCheck = null; }
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.passwordCheck = passwordCheck;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map