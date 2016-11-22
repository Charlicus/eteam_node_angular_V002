"use strict";
var FlashMessages = (function () {
    function FlashMessages(style, messages, timeout) {
        if (timeout === void 0) { timeout = null; }
        this.style = style;
        this.messages = messages;
        this.timeout = timeout;
    }
    return FlashMessages;
}());
exports.FlashMessages = FlashMessages;
//# sourceMappingURL=flash-messages.js.map