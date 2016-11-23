"use strict";
var Flash = (function () {
    function Flash(style, messages, timeout) {
        if (timeout === void 0) { timeout = 0; }
        this.style = style;
        this.messages = messages;
        this.timeout = timeout;
    }
    return Flash;
}());
exports.Flash = Flash;
//# sourceMappingURL=flash.js.map