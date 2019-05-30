System.register(["01-validators"], function (exports_1, context_1) {
    "use strict";
    var validators, ccValidtor, urlValidtor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (validators_1) {
                validators = validators_1;
            }
        ],
        execute: function () {
            ccValidtor = new validators.CreditCardValidator();
            urlValidtor = new validators.UrlValidator();
        }
    };
});
//# sourceMappingURL=06-import-all.js.map