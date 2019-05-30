System.register([], function (exports_1, context_1) {
    "use strict";
    var EmailValidator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            EmailValidator = class EmailValidator {
                isCorrect(email) {
                    throw new Error("Method not implemented.");
                }
            };
            exports_1("EmailValidator", EmailValidator);
            exports_1("MyEmailValidator", EmailValidator);
        }
    };
});
//# sourceMappingURL=03-export-statement.js.map