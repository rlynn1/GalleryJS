var chico = [{description:"One Mile", image:"https://s-media-cache-ak0.pinimg.com/originals/f0/59/91/f05991b07cf711fc57ea858007feac32.jpg", from:"pinterest.com"},
{description:"Upper Park", image:"http://s3.amazonaws.com/dk-production/images/23805/large/Upper_park.jpg?1363627707", from:"dailykos.com"},
{description:"North Rim", image:"http://media4.trover.com/T/4f40899a5dc4e61aaf000107/fixedw_large_4x.jpg", from:"trover.com"},
{description:"Neighborhood", image:"http://www.chicochristian.org/pictures/Elementary%20School/Photo%20Gallery/Elem%20Neighborhood%20Church.jpg", from:"chircochristian.org"},
{description:"Sheridan Ave", image:"https://thumbs.trulia-cdn.com/pictures/thumbs_5/ps.98/5/8/c/3/picture-uh=1936822aa430c5dc71acec35649d4fa-ps=58c39b945ed4232199630bd89f0588e-1415-Sheridan-Ave-9-Chico-CA-95926.jpg", from:"trulia.com"}];
var current;

function shuffleGallery()
{
  do
  {
    var input = Math.floor(Math.random() * chico.length);
  }
  while(current == input);
  document.getElementById("picture").src = chico[input].image;
  document.getElementById("caption").innerHTML = chico[input].description;
  document.getElementById("source").innerHTML = "Image courtesy of: " + chico[input].from;
  current = input;
}
