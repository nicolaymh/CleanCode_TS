(()=>{

    //* Apply the Single Responsibility Principle
    //* Prioritize composition over inheritance

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) { }
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea for the new class InputElement

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes
        public inputEvents: InputEvents;

        constructor(id: string, value: string, placeholder: string){

            this.htmlElement = new HtmlElement(id, "input");
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement('Nicolay', 'Enter first name', 'txtName');

    console.log({ nameField });
    console.log(nameField.inputEvents.setFocus());

})()

//! pattern or scheme that the SRP follows when printing:
/*

*    nameField
*    ├── htmlElement: HtmlElement
*    │   ├── id: 'Nicolay'
*    │   └── type: 'input'
*    ├── inputAttributes: InputAttributes
*    │   ├── value: 'Enter first name'
*    │   └── placeholder: 'txtName'
*    └── inputEvents: InputEvents

*/