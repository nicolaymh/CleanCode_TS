(() => {

    //! Not SRP.

    interface Product {
        id:   number;
        name: string;
    }

    // Usually, this is a class to control the view displayed to the user
    // Remember that we can have many views that perform this same task.
    class ProductBloc {

        loadProduct( id: number ) {
            // Performs a process to fetch the product and return it
            console.log('Product:', { id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Makes a request to save in the database
            console.log('Saving to the database', product );
        }

        notifyClients() {
            console.log('Sending emails to clients');
        }

        onAddToCart( productId: number ) {
            // Add to cart
            console.log('Adding to cart', productId );
        }

    }

    const productBloc = new ProductBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);

})();

/*

    !Not SRP.

    ? The original code violates the SRP (Single Responsibility Principle) because the `ProductBloc` class assumes multiple responsibilities, including loading and saving products, sending email notifications to clients, and managing the shopping cart. The proposed solution divides these responsibilities into separate classes:

    * - `ProductService`: Responsible for operations related to products, such as fetching and saving product data.
    * - `Mailer`: Handles sending emails, with options for different email templates.
    * - `ProductBloc`: Orchestrates the interaction between `ProductService` and `Mailer`, ensuring adherence to the Single Responsibility Principle. It loads and saves products via `ProductService` and notifies clients via `Mailer`.
    * - `CartBloc`: Manages operations related to shopping cart functionality, specifically adding items to the cart.

    * This solution improves code clarity and maintainability by separating responsibilities into distinct classes, each with a clear and focused purpose.

    ? See example "01-srp.solution.ts".

*/