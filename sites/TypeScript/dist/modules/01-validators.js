System.register([], function (exports_1, context_1) {
    "use strict";
    var CreditCardValidator, UrlValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CreditCardValidator = class CreditCardValidator {
                validate(value) {
                    return false;
                }
            };
            exports_1("CreditCardValidator", CreditCardValidator);
            UrlValidator = class UrlValidator {
                validate(value) {
                    return false;
                }
            };
            exports_1("UrlValidator", UrlValidator);
        }
    };
});
//# sourceMappingURL=01-validators.js.map