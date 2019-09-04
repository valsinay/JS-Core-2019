let assert = require('chai').assert;

class FilmStudio {


    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}

    describe("testing film studio …", function() {
        it("should initialise proper …", function() {
            let filmStudio = new FilmStudio('SU-Studio');
            let expected = 'SU-Studio'
            assert.equal(filmStudio.name, expected)
        });

        it("should initialise proper …", function() {
            let filmStudio = new FilmStudio('SU-Studio');
            let expected = [];
            assert.deepEqual(filmStudio.films, expected)
        });
        it("should initialise proper …", function() {
            let studio = new FilmStudio("Pesho");
        let actual = studio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected = {
            filmName: 'The Avengers',
            filmRoles: [
                {role: 'Iron-Man', actor: false},
                {role: 'Thor', actor: false},
                {role: 'Hulk', actor: false},
                {role: 'Arrow guy', actor: false}]
        };
            assert.equal(actual.toString(),expected.toString())
        });

    
        it('casting shit', function(){
            let studio = new FilmStudio("Gei");
            studio.makeMovie("Mega-Lud",['Ludia-Reporter']);
            let actual =studio.casting("Dani", "Ludia-Reporter");
            let expected = 'You got the job! Mr. Dani you are next Ludia-Reporter in the Mega-Lud. Congratz!';
            assert.equal(actual,expected)
        })
        it('casting can not find a role', function(){
            let studio = new FilmStudio("Gei");
            studio.makeMovie("Mega-Lud",['Ludia-Reporter']);
            let actual =studio.casting("Dani", "NqmamFilm");
            let expected = `Dani, we cannot find a NqmamFilm role...`;
            assert.equal(actual,expected)
        })
        it('no films in studio case', function(){
            let studio = new FilmStudio("Gei");
            
            let actual =studio.casting("Dani", "NqmamFilm");
            let expected = `There are no films yet in Gei.`
            assert.equal(actual,expected)
        })
        it('invalid make movie arguments', function(){
            let studio = new FilmStudio("Gei");
        
            assert.throws(function(){
                studio.makeMovie("Bareti",2)

            },"Invalid arguments")
        })
        it('invalid make movie arguments', function(){
            let studio = new FilmStudio("Gei");
        
            assert.throws(function(){
                studio.makeMovie("Bareti")

            },"Invalid arguments count")
        })

        it('film producer throw error', function(){
            let studio = new FilmStudio("Gei");
            let producer = 

            assert.throws(function(){
                studio.lookForProducer("Nema")
            }, `Nema do not exist yet, but we need the money...`)
        })

        it('film producer func prints', function(){
            let studio = new FilmStudio("Gei");
            studio.makeMovie("Bareti",['Djaro','Ivo']);
            studio.casting("Gadniq",'Djaro');
            studio.casting('Zahari', 'Ivo');

            let expected = 'Film name: Bareti\n';
            expected += 'Cast:\n'
            expected+= "Gadniq as Djaro\n";
            expected+= 'Zahari as Ivo\n';
           let actual = studio.lookForProducer('Bareti');

            assert.equal(actual, expected)
        })
    });
