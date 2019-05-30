var Sample1;
(function (Sample1) {
    class MyClass1 {
        message() {
            console.log("Sample1.MyClass1.message");
        }
    }
    Sample1.MyClass1 = MyClass1;
    class MyClass2 {
        message() {
            console.log("Sample1.MyClass2.message");
        }
    }
})(Sample1 || (Sample1 = {}));
let temp1 = new Sample1.MyClass1();
temp1.message();
var Shapes;
(function (Shapes) {
    let Complex;
    (function (Complex) {
        class Image {
            constructor() { console.log("Image"); }
        }
        Complex.Image = Image;
        class Animation {
            constructor() { console.log("Animation"); }
        }
        Complex.Animation = Animation;
    })(Complex = Shapes.Complex || (Shapes.Complex = {}));
})(Shapes || (Shapes = {}));
var complex = Shapes.Complex;
let img1 = new complex.Image();
let img2 = new Shapes.Complex.Image();
var NamespaceFilesSample;
(function (NamespaceFilesSample) {
    let data1 = {
        firstName: "Ivan",
        lastName: "Ivaonv",
        age: 25,
        email: "ivanov@example.com"
    };
    let data2 = {
        firstName: "Ivan",
        lastName: "",
        age: "qwe",
        email: "example"
    };
    let config = {
        firstName: "required",
        lastName: "required",
        age: "number",
        email: "email"
    };
    function run() {
        let validator = new Validation.Validator(config);
        let result = validator.validate(data1);
        console.log(result.valid);
        console.log(result.errors);
        result = validator.validate(data2);
        console.log(result.valid);
        console.log(result.errors);
    }
    NamespaceFilesSample.run = run;
})(NamespaceFilesSample || (NamespaceFilesSample = {}));
NamespaceFilesSample.run();
var Validation;
(function (Validation) {
    class ValidatorSelector {
        static initialize() {
            ValidatorSelector.validators["required"] = new Validation.RequiresValidator();
            ValidatorSelector.validators["number"] = new Validation.NumberValidator();
            ValidatorSelector.validators["email"] = new Validation.EmailValidators();
            ValidatorSelector.initialize = () => { };
        }
        static select(name) {
            let validator = ValidatorSelector.validators[name];
            if (validator) {
                return validator;
            }
            else {
                throw new Error("Не найден валидатор " + name);
            }
        }
    }
    ValidatorSelector.validators = {};
    Validation.ValidatorSelector = ValidatorSelector;
})(Validation || (Validation = {}));
(function (Validation) {
    class RequiresValidator {
        constructor() {
            this.message = "Обязательное значение";
        }
        validate(value) {
            return value === "";
        }
        ;
    }
    Validation.RequiresValidator = RequiresValidator;
    class NumberValidator {
        constructor() {
            this.message = "Значение должно быть числом";
        }
        validate(value) {
            return !/\d+/.test(value);
        }
    }
    Validation.NumberValidator = NumberValidator;
    ;
    class EmailValidators {
        constructor() {
            this.message = "Значение должно быть email адресом";
        }
        validate(value) {
            return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
        }
    }
    Validation.EmailValidators = EmailValidators;
    ;
})(Validation || (Validation = {}));
(function (Validation) {
    class Validator {
        constructor(config) {
            this.config = config;
            Validation.ValidatorSelector.initialize();
        }
        validate(data) {
            let messages = [];
            for (let propertyName in data) {
                if (data.hasOwnProperty(propertyName)) {
                    let validatorName = this.config[propertyName];
                    if (!validatorName) {
                        continue;
                    }
                    let validator = Validation.ValidatorSelector.select(validatorName);
                    let invalid = validator.validate(data[propertyName]);
                    if (invalid) {
                        let message = "Не правильное значение для " + propertyName + ", " + validator.message;
                        messages.push(message);
                    }
                }
            }
            return {
                valid: messages.length == 0,
                errors: messages
            };
        }
    }
    Validation.Validator = Validator;
    ;
    class ValidationResult {
    }
    Validation.ValidationResult = ValidationResult;
})(Validation || (Validation = {}));
//# sourceMappingURL=namespaces.js.map