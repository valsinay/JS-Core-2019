const softController = function () {

    const dashboard = function (context) {
        helper.addHeaderInfo(context);

        const endpoint = `offers`;
        requester.get(endpoint, 'appdata', 'Kinvey')
        .then(helper.handler)
        .then((offers) => {
            
            const creator = sessionStorage.getItem('userId')
            offers.forEach(i => {
                i.isOwn = i._acl.creator === creator
            })
            context.offers = offers;
            context.loadPartials({
                header: "./views/common/header.hbs",
                footer: "./views/common/footer.hbs",
                'single-offer': './views/offers/single-offer.hbs'
            }).then(function () {
                this.partial('./views/offers/dashboard.hbs');
            })
        })
       
    }
    const getAddOffer = function (context) {

        helper.addHeaderInfo(context)

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/offers/create-offer.hbs');
        })
    }
    const postAddOffer = function (context) {
        
        const payload = {
            product: context.params.product,
            description: context.params.description,
            price: Number(context.params.price),
            pictureUrl: context.params.pictureUrl
            
        };
        requester.post('offers', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/dashboard');
            })
    }

   

    const getEditOffer = function (context) {
        const offerId = context.params.id;

        helper.addHeaderInfo(context);
        requester.get(`offers/${offerId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((offer) => {
                context.offer = offer;
                helper.loadPartials(context)
                    .then(function () {
                        this.partial('./views/offers/edit-offer.hbs');
                });
            })
    }

    const postEditOffer = function (context) {
        const payload = {
            offerId: context.params.id,
            product: context.params.product,
            description: context.params.description,
            price: Number(context.params.price),
            pictureUrl: context.params.pictureUrl
            
        };

        requester.put(`offers/${payload.offerId}`, 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/dashboard`);
            })

    }
    
    const getDeleteOffer = function (context) {
        const offerId = context.params.id;

        helper.addHeaderInfo(context);
        requester.get(`offers/${offerId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((offer) => {
                context.offer = offer;
                helper.loadPartials(context)
                    .then(function () {
                        this.partial('./views/offers/delete-offer.hbs');
                });
            })
    }


    const deleteOffer = function (context) {
        const offerId = context.params.id;
        helper.addHeaderInfo(context);

        requester.del(`offers/${offerId}`, 'appdata', 'Kinvey', offerId)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/dashboard`);
            })
    }

    const getOfferDetails =  function (context) {
        helper.addHeaderInfo(context);
        const offerId = context.params.id;

        

        requester.get(`offers/${offerId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((offerById) => {
                context.offer = offerById;
              
                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs"
                }).then(function () {
                   this.partial('./views/offers/details.hbs')
                })
            })
        

    }

    const getUserProfile = function (context) {

          helper.addHeaderInfo(context)
    
            context.loadPartials({
                header: "./views/common/header.hbs",
                footer: "./views/common/footer.hbs"
            }).then(function(){
                this.partial('./views/offers/profile-page.hbs');
            })
        
        
    }   
        
    return {
        dashboard,
        getAddOffer,
        postAddOffer,
        getEditOffer,
        postEditOffer,
        getDeleteOffer,
        deleteOffer,
        getOfferDetails,
        getUserProfile
        
    }
}();