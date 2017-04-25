var chico = ["One Mile", "Upper Park", "North Rim", "Neighborhood", "Sheridan Ave"];
var current;

function shuffleGallery()
{
  do
  {
    var input = Math.floor(Math.random() * chico.length);
  }
  while(current == input);
  console.log(chico[input]);
  current = input;
}
