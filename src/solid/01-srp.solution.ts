(() => {

    interface Product {
        id:   number;
        name: string;
    }

    //! Applying SRP.

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    class ProductService {

        getProduct( id: number ) {
            console.log('Product: ',{ id, name: 'OLED TV' });
        }

        saveProduct( product: Product ) {
            // Makes a request to save in the database
            console.log('Saving to database', product );
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    class Mailer {

        private masterEmail: string = "nicolay@correo.com"

        sendEmail( emailList: string[], template: "to-clients" | "to-admins" ) {
            console.log('Sending email to clients', template);
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    //! Class to control the other classes applying the single responsibility principle.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        //* Dependency injection.
        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }

        notifyClients() {
            this.mailer.sendEmail(["pinina@correo.com", "linda@correo.com"], "to-clients")
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            // Add to shopping cart
            console.log('Adding to cart ', productId );
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////*
    //////////////////////////////////////////////////////////////////////////////////////////*


    const productService = new ProductService();
    const mailer = new Mailer();

    //* Dependency injection
    const productBloc = new ProductBloc(productService, mailer);

    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();