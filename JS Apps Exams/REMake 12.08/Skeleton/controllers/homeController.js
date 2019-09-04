const homeController = function () {
    const loggedIn = sessionStorage.getItem('userId') !== null;

    const getHome = function (context) {

        helper.addHeaderInfo(context)
        if (sessionStorage.getItem('userId') != null) {
            const endpoint = `cars`;
            requester.get(endpoint, 'appdata', 'Kinvey')
                .then(helper.handler)
                .then((cars) => {
                    context.cars = cars;
                    context.loadPartials({
                        header: "./views/common/header.hbs",
                        footer: "./views/common/footer.hbs",
                        'single-car': './views/cars/single-car.hbs'
                    }).then(function () {
                        if(context.cars.length == 0) {
                            this.partial('./views/home.hbs');
                        } else {
                            this.partial('./views/cars/all.hbs')
                        }
                    })
                })
        } else {
            context.loadPartials({
                header: "./views/common/header.hbs",
                footer: "./views/common/footer.hbs"
            }).then(function () {
                this.partial('./views/home.hbs');
            })
        }



    }

    return {
        getHome
    }

}();    