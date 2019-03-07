
//creating object for storing metadata
var my_favourite_song = {};

//metadata song title
var song_title = "Despacito";

//metadata song writer
var song_writer = ["Luis Rodrigues" , "Erika Ender" , "Ramon Ayala"];

//metadata producer
var producers = ["Andres Torres" , "Mauricio Rengifo"];

//metadata singer and rapper
var singer = "Luis Fonsi";
var rapper = "Daddy Yankee";

//metadata song genre
var genre = "Reggaeton-pop";

/*Initializing the Object(my_favourite_song), by adding keys
 and giving corresponding values*/
my_favourite_song['songTitle'] = song_title;
my_favourite_song.songWriter = song_writer;
my_favourite_song._producers = producers;
my_favourite_song._singer = singer;
my_favourite_song._rapper = rapper;
my_favourite_song._genre = genre;

//logging
console.log("My Favourite Songs Description:");

//Title
console.log("Title: " + my_favourite_song.songTitle);

//Writers
console.log("There were " + my_favourite_song.songWriter.length + " Writers:");
console.log(" 1. " + my_favourite_song.songWriter[0] + " 2. " + my_favourite_song.songWriter[1] + " 3. " + my_favourite_song.songWriter[2]);

//Producers
console.log("There were "+ my_favourite_song._producers.length + " Producers:");
console.log(" 1. " + my_favourite_song._producers[0] + " 2. " + my_favourite_song._producers[1]);

//Singer
console.log("Singer: " + my_favourite_song._singer);

//Rapper
console.log("Rapper: " + my_favourite_song._rapper);

//Genre
console.log("Genre: " + my_favourite_song._genre);

//Metadata Object
console.log("The metadata object looks like this:");
console.log(my_favourite_song);
