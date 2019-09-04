window.onload = () => {
    Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('#/home', homeController.getHome);

        //User
        this.get('#/register', userController.getRegister);
        this.get('#/login', userController.getLogin);

        this.post('#/register', userController.postRegister);
        this.post('#/login', userController.postLogin);
        this.get('#/logout', userController.logout);

        //Events
        this.get('#/cars/create-car', carController.getCreateCar);
        this.post('#/cars/create-car', carController.postCreateCar);
        this.get('#/cars/all', carController.all);

         this.get('#/cars/details/:id', carController.getCarDetails);   
         this.get('#/cars/edit-car/:id', carController.getEditCar);
         this.post('#/cars/edit-car/:id', carController.postEditCar);
         this.get('#/cars/delete-car/:id', carController.deleteCar);


    }).run('#/home');
}