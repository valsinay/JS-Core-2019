const carController = function () {

    const all = function (context) {
        helper.addHeaderInfo(context);

        const endpoint = `cars`;
        requester.get(endpoint, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((cars) => {
                context.cars = cars;

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs",
                    'single-car': './views/cars/single-car.hbs',
                }).then(function () {
                    if (context.cars.length == 0) {
                        this.partial('./views/home.hbs');
                    } else {
                        this.partial('./views/cars/all.hbs')
                    }
                })
            })

    }

    const getCreateCar = function (context) {
        helper.addHeaderInfo(context);
        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
        }).then(function () {

            this.partial('./views/cars/create-car.hbs');
        })

    }


    const postCreateCar = function (context) {
        helper.addHeaderInfo(context);
        const payload = {
            title: context.params.title,
            description: context.params.description,
            imageUrl: context.params.imageUrl,
            brand: context.params.brand,
            model: context.params.model,
            fuel: context.params.fuelType,
            year: context.params.year,
            price: context.params.price,
            seller : sessionStorage.getItem('username')

        };

        requester.post('cars', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/cars/all');
            })
    }

     const getCarDetails= function (context) {
        helper.addHeaderInfo(context);
        const carId = context.params.id;

        requester.get(`cars/${carId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((carById) => {
                context.car = carById;

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs"
                }).then(function () {
                    
                   this.partial('./views/cars/details.hbs')
                })
            })
        
    }

    const getEditCar = function (context) {
        const carId = context.params.id;

        helper.addHeaderInfo(context);
        requester.get(`cars/${carId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((car) => {
                context.car = car;
                helper.loadPartials(context)
                    .then(function () {
                        this.partial('./views/cars/edit-car.hbs');
                    });
            })
    }

    const postEditCar = function (context){ 

        requester.get(`cars/${context.params.id}`, 'appdata', 'Kinvey')
        .then(helper.handler)
        .then((carById) => {
            const payload = {
                carId: context.params.id,
                title: context.params.title,
                description: context.params.description,
                imageUrl: context.params.imageUrl,
                brand: context.params.brand,
                model: context.params.model,
                fuel: context.params.fuelType,
                year: context.params.year,
                price: context.params.price,
                seller : sessionStorage.getItem('username')

            };


            requester.put(`cars/${payload.carId}`, 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/cars/all`);
            })
        })

        

    }

    const deleteCar = function (context) {
        const carId = context.params.id;
        helper.addHeaderInfo(context);

        requester.del(`cars/${carId}`, 'appdata', 'Kinvey', carId)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/cars/all`);
            })
    }



    return {
        all,
        getCreateCar,
        postCreateCar,
        getCarDetails,
        getEditCar,
        postEditCar,
        deleteCar
    }

}();    