
let assert = require('chai').assert;

class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = { rate: 0, votes: 0, songs: [] }
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if (songs.length > 0) {
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if (arr.length > 0) {

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

let instance = new SoftUniFy();
instance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
instance.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

        console.log(Object.keys(instance.allSongs).length)

describe("testing ", function () {
    it("test constructor", function () {
        let softu = new SoftUniFy();
        assert.deepEqual(softu.allSongs, {})
    })
    it('checks if song list is empty', function () {
        let songs = new SoftUniFy().songsList;
        assert.equal(songs, "Your song list is empty")
    })
    it('checks download method ', function () {
        let instance = new SoftUniFy();
        instance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        instance.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

        assert.equal(Object.keys(instance.allSongs).length, 1)
    })

    it('check if downloaded songs are in correct format', function() {
        let instance = new SoftUniFy();
        instance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        let songFormat = 'Venom - Knock, Knock let the devil in...';
        assert.equal(instance.songsList,songFormat)
    })

    it('checks all already downloaded songs ', function(){
        let instance = new SoftUniFy();
        instance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        let expected = "Eminem:\nVenom - Knock, Knock let the devil in...\n";

        assert.equal(instance.playSong("Venom"),expected)
    })
    it('checks if the searched song is not in the list', function(){
        let instance = new SoftUniFy();
        instance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        assert.equal(instance.playSong("Kuche"),`You have not downloaded a Kuche song yet. Use SoftUniFy's function downloadSong() to change that!`)
    })
    it('checks if songList method returns correct', function(){
        let instance = new SoftUniFy();
        
        assert.equal( instance.rateArtist('Eminem', 50),"The Eminem is not on your artist list.")
    })
    
})
