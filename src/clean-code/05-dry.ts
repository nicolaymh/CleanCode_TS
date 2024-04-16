
////////////////////////////////////////////////////////////////////////////////////////////*
////////////////////////////////////////////////////////////////////////////////////////////*

//! The DRY (Don't Repeat Yourself) principle

//? The DRY (Don't Repeat Yourself) principle is a software design principle that emphasizes the importance of avoiding code duplication within a system. It is based on the idea that every piece of knowledge in a system should have a single, unambiguous representation within that system. In other words, the DRY principle promotes the reuse of existing code rather than duplicating it.

//? Applying the DRY principle involves identifying and eliminating redundancies in code, refactoring or factoring the code so that common parts can be shared and reused instead of being duplicated in multiple places. This improves code readability, maintainability, and scalability, as it reduces the chance of errors when changing the behavior of a functionality, as changes only need to be made in one place.

//? In summary, the DRY principle is a guideline for writing clean and efficient code that promotes modularity, reusability, and ease of maintenance.

////////////////////////////////////////////////////////////////////////////////////////////*
////////////////////////////////////////////////////////////////////////////////////////////*

type Size = "" | "S" | "M" | "XL";

class Product {
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = ""
    ) { }

    // Checks if all required fields are filled
    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case "string":
                    if ( (<string><unknown>this[key]).length <= 0 ) throw Error (`${ key } is empty`);
                break;

                case "number":
                    if( (<string><unknown>this[key]).length <= 0 ) throw Error (`${ key } is zero`);
                break;

                default:
                    throw Error(`${ typeof this[key] } is not supported`);
            }
        }

        return true;
    }

    toString() {
        //! No Dry
        /* if ( this.name.length <= 0 ) throw Error("name is empty");
        if ( this.price <= 0 ) throw Error("price is zero");
        if ( this.size.length <= 0 ) throw Error("size is empty"); */

        // With Dry
        if ( !this.isProductReady ) return;


        return `${this.name} (${this.price}), ${this.size}`;
    }
}


(() => {
    const bluePants = new Product("Blue Large Pants", 10, "S");
    console.log(bluePants.toString())
})();