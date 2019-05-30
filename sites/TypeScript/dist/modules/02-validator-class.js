System.register([], function (exports_1, context_1) {
    "use strict";
    var PhoneNumberValidator, phoneVal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PhoneNumberValidator = class PhoneNumberValidator {
                validate(value) {
                    return true;
                }
            };
            phoneVal = new PhoneNumberValidator();
            console.log(phoneVal.validate("000-00-00"));
        }
    };
});
//# sourceMappingURL=02-validator-class.js.map