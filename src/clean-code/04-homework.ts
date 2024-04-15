(() => {

    ////////////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////////////*

    // Resolve without the triple conditional inside the if
    // includes? arrays?
    /* function isRedFruit( fruit: string ): boolean {

        if ( fruit === 'apple' || fruit === 'cherry' || fruit === 'plum' ) {
            return true;
        } else {
            return false;
        }
    } */

    // Better
    function isRedFruit( fruit: string ): boolean {

        const redFruits = [
            "apple",
            "cherry",
            "plum"
        ]

        return redFruits.includes(fruit);
    }

    ////////////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////////////*

    // Simplify this function
    // switch? Object literal? validate possible colors
    /* function getFruitsByColor( color: string ): string[] {

        if ( color === 'red' ) {
            return ['apple','strawberry'];
        } else if ( color === 'yellow') {
            return ['pineapple','banana'];
        } else if ( color === 'purple') {
            return ['blackberries','grapes']
        } else {
            throw Error('the color must be: red, yellow, purple');
        }
    } */

    // Better
    type FruitColor = 'red' | 'yellow' | 'purple';

    function getFruitsByColor( color: FruitColor ): string[] {

        const fruitsByColor = {
            'red': ['apple', 'strawberry'],
            'yellow': ['pineapple', 'banana'],
            'purple': ['blackberries', 'grapes']
        };

        if( !Object.keys( fruitsByColor ).includes(color) ) {
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitsByColor[color];
    }

    ////////////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////////////*

    // Simplify this function
    /* let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }
    } */

    // Better
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps(): string {

        if( !isFirstStepWorking ) 'First step broken.'

        if( !isSecondStepWorking ) 'Second step broken.'

        if( !isThirdStepWorking ) 'Third step broken.'

        return isFourthStepWorking ? "Fourth step broken." : 'Working properly!';
    }
    ////////////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////////////*

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cherry'), fruit: 'cherry' }); // true
    console.log({ isRedFruit: isRedFruit('pineapple'), fruit: 'pineapple' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['apple', 'strawberry']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['pineapple', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['blackberries', 'grapes']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Change the values on line 31 and await the results

    ////////////////////////////////////////////////////////////////////////////*
    ////////////////////////////////////////////////////////////////////////////*

})();
