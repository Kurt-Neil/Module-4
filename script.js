/*
Solution of assignment 4:

Expected output:

Hello Dog
Good Bye Cat
Good Bye Horse
Good Bye Rat
Hello Bird
Hello Fish
Hello Lobster
Hello Penguin
Hello Lemur
Good Bye Donkey
*/

(function() {
    var names = ["Dog", "Cat", "Horse", "Rat", "Bird", "Fish", "Lobster", "Penguin", "Lemur", "Donkey"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
