let dvdPlayer = {
 height: 3,
 width: 18,
 depth: 88,
 weight: 300,
 color:  'blue',
 dvdName: 'Ninja',
  printDVDName: function(){
    console.log(this.dvdName)
 }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();