var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var cmd = require('./plugins/RendezVousFighting');

describe("Fighter testing", () => {
    var fChatLibInstance;
    var CommandHandler;

    beforeEach(function() {
        fChatLibInstance = {
            sendMessage: function(message, channel){
                console.log("Sent MESSAGE "+message + " on channel "+channel);
            },
            throwError: function(s){
                console.log("Sent ERROR "+s);
            },
            sendPrivMessage: function(character, message){
                console.log("Sent PRIVMESSAGE "+message + " to "+character);
            }
        };
        CommandHandler = new cmd.CommandHandler(fChatLibInstance, "RDVTestChan");
    });

    it("should start the match", function(done){
        CommandHandler.ready("", {character: "Aelith Blanchette", channel: "here"});
        setTimeout(function(){CommandHandler.ready("", {character: "Britta Blixt", channel: "here"});}, 100);

        setTimeout(function() {
            setTimeout(function () {
                CommandHandler.spell("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.spell("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.teleport("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.teleport("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.light("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.light("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.hex("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.hex("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.ranged("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.ranged("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.rip("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rip("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.grab("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.grab("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.grab("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.grab("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.grab("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.grab("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.tackle("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.tackle("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.manaSurge("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.manaSurge("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.ranged("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.ranged("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.focus("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.focus("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.move("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.move("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.magic("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.magic("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.rest("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.mana("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.mana("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.rest("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.rest("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Aelith Blanchette", channel: "here"});
            }, 1000);
            setTimeout(function () {
                CommandHandler.heavy("", {character: "Britta Blixt", channel: "here"});
            }, 1000);

        },4000);
        setTimeout(done, 100000);
    },1000000);

});

jasmine.execute();

//console.log(myFighter.name);