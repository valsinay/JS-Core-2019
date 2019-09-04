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

        //Offers

        this.get('#/create-offer', softController.getAddOffer);
        this.post('#/create-offer', softController.postAddOffer);
        this.get('#/dashboard', softController.dashboard);
        this.get('#/profile-page',softController.getUserProfile);

        this.get('#/offers/details/:id', softController.getOfferDetails);   
         this.get('#/offers/edit-offer/:id', softController.getEditOffer);
          this.post('#/offers/edit-offer/:id', softController.postEditOffer);
          this.get('#/offers/delete-offer/:id', softController.getDeleteOffer);
          this.post('#/offers/delete-offer/:id', softController.deleteOffer);
          this.get(`#/buy`,userController.buy)

    }).run('#/home');
}