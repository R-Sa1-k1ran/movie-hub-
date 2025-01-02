
async function fetchingdata(){
  let res= await fetch('./movie.json')

  let data = await res.json();
  displaycards(data);
}
fetchingdata();

 function displaycards(m){
  for(let i of m){
    let imgsrc= i.movieImg;
    let movietitle=i.movieTitle;
    let moviedirector=i.movieDirector;

    let image = document.createElement('img');
    image.src = imgsrc;
    cardsContainer.appendChild(image);

    let name = document.createElement('h2');
    name.innerHTML=movietitle;
    cardsContainer.appendChild(name);

    let director = document.createElement('h4');
    director.innerHTML=moviedirector;
    cardsContainer.appendChild(director);



  }
 }