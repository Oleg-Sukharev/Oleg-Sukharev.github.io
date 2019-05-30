namespace Sample1 {

    // класс будет доступен за пределами 
    export class MyClass1 {
        public message() {
            console.log("Sample1.MyClass1.message");
        }
    }

    class MyClass2 {
        public message() {
            console.log("Sample1.MyClass2.message");
        }
    }
}

// следующий код находится в глобальной области видимости.

// Использование класса MyClass1 из пространства имен Sample1
let temp1 = new Sample1.MyClass1();
temp1.message();



namespace Shapes {
    
    export namespace Complex {
        export class Image {
            constructor() { console.log("Image"); }
        }
        export class Animation { 
            constructor() { console.log("Animation"); }
        }
    }
}

// создание псевдонима с именем complex для пространства имен Shapes.Complex
import complex = Shapes.Complex;

let img1 = new complex.Image();
// или
let img2 = new Shapes.Complex.Image(); 


/*
 triple slash reference
 используется как директива для компилятора и считается валидной только если определена в начале файла
 данный синтаксис используется для определения зависимостей между файлами. Так как в данном файле используется
 пространство имен Validation, которое находится в файле validation.ts, директива указывает компилятору, что файл validation.ts
 должен использоваться при компиляции текущего файла main.ts
*/

/// <reference path="validator.ts" />

namespace NamespaceFilesSample {

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

    // определение правил проверки объекта
    let config = {
        firstName: "required",
        lastName: "required",
        age: "number",
        email: "email"
    };

    export function run() {
        let validator = new Validation.Validator(config);
        let result: Validation.ValidationResult = validator.validate(data1);
        console.log(result.valid); // true
        console.log(result.errors);

        result = validator.validate(data2);
        console.log(result.valid); // false
        console.log(result.errors);
    }
}

NamespaceFilesSample.run();

/// <reference path="validator-strategies.ts" />

namespace Validation {
    export class ValidatorSelector {
        private static validators: { [id: string]: Validation.ValidationStrategy } = {}

        static initialize() {
            ValidatorSelector.validators["required"] = new RequiresValidator();
            ValidatorSelector.validators["number"] = new NumberValidator();
            ValidatorSelector.validators["email"] = new EmailValidators();

            ValidatorSelector.initialize = () => { }; // для избежания повторной инициализации
        }

        static select(name: string): ValidationStrategy {
            let validator: ValidationStrategy = ValidatorSelector.validators[name];
            if (validator) {
                return validator;
            }
            else {
                throw new Error("Не найден валидатор " + name);
            }
        }
    }
}
namespace Validation {

    // интерфейс для классов валидаторов
    export interface ValidationStrategy {
        validate(value: string): boolean;
        message: string;
    }

    export class RequiresValidator implements ValidationStrategy {
        validate(value: string): boolean {
            return value === "";
        };
        message: string = "Обязательное значение";
    }

    export class NumberValidator implements ValidationStrategy {
        validate(value: string): boolean {
            return !/\d+/.test(value);
        }
        message: string = "Значение должно быть числом"
    };

    export class EmailValidators implements ValidationStrategy {
        validate(value: string): boolean {
            return !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
        }
        message: string = "Значение должно быть email адресом"
    };

}
/// <reference path="validator-selector.ts" />

namespace Validation {
    export class Validator {
        public config: any;

        constructor(config: any) {
            this.config = config;
            ValidatorSelector.initialize();
        }

        public validate(data: any): ValidationResult {
            let messages: string[] = [];

            for (let propertyName in data) {
                if (data.hasOwnProperty(propertyName)) {
                    let validatorName = this.config[propertyName];

                    if (!validatorName) {
                        continue;
                    }
                    
                    let validator = ValidatorSelector.select(validatorName);
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
    };

    export class ValidationResult {
        valid: boolean;
        errors: string[];
    }
}