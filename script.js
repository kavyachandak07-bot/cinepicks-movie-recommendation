const movies = [
{
id:1,
title:"Inception",
genre:"action",
year:2010,
rating:"8.8/10",
image:"images/Inception.webp",
description:"A skilled thief who steals corporate secrets through dream-sharing technology."
},

{
id:2,
title:"Forrest Gump",
genre:"drama",
year:1994,
rating:"8.8/10",
image:"images/Forrest Gump.jpg",
description:"The life story of a man with low IQ but good intentions."
},

{
id:3,
title:"Interstellar",
genre:"scifi",
year:2014,
rating:"8.6/10",
image:"images/Interstellar.jpg",
description:"A team of explorers travel through a wormhole in space."
},

{
id:4,
title:"The Dark Knight",
genre:"action",
year:2008,
rating:"9.0/10",
image:"images/Dark Knight.jpg",
description:"Batman faces off against a clown-themed criminal mastermind."
},

{
id:5,
title:"Psycho",
genre:"thriller",
year:1960,
rating:"8.4/10",
image:"images/Psycho.jpg",
description:"A woman on the run encounters a motel owner with secrets."
},

{
id:6,
title:"The Shawshank Redemption",
genre:"drama",
year:1994,
rating:"9.3/10",
image:"images/Shawshank Redemption.jpg",
description:"Two prisoners form an unbreakable bond over decades."
},

{
id:7,
title:"Pulp Fiction",
genre:"action",
year:1994,
rating:"8.9/10",
image:"images/Pulp Fiction.jpg",
description:"Multiple interconnected stories of Los Angeles criminals."
},

{
id:8,
title:"Blade Runner 2049",
genre:"scifi",
year:2017,
rating:"8.0/10",
image:"images/Blade Runner.jpg",
description:"A detective searches for a missing woman in a dystopian future."
},

{
id:9,
title:"Se7en",
genre:"thriller",
year:1995,
rating:"8.6/10",
image:"images/Se7en.jpg",
description:"Two detectives hunt a serial killer with a twisted agenda."
}
];


// Initialize
document.addEventListener("DOMContentLoaded",()=>{
renderMovies(movies);
setupFilterButtons();
});

// Render Movies
function renderMovies(list){
const grid=document.getElementById("moviesGrid");
grid.innerHTML="";

list.forEach((movie,index)=>{

const card=document.createElement("div");
card.className="movie-card";
card.style.animationDelay=(index*0.1)+"s";

card.innerHTML=`
<div class="poster-wrapper">
<img src="${movie.image}" class="movie-poster">

<div class="rating-overlay">
⭐ ${movie.rating}
</div>
</div>

<div class="movie-content">
<h3 class="movie-title">${movie.title}</h3>

<div class="movie-meta">
<span class="badge genre-badge">${movie.genre.toUpperCase()}</span>
<span class="badge year-badge">${movie.year}</span>
</div>

<p class="movie-description">${movie.description}</p>
</div>
`;

card.style.opacity="0";
grid.appendChild(card);

setTimeout(()=>{
card.style.opacity="1";
},50);

});
}

// Filter Buttons
function setupFilterButtons(){
const buttons=document.querySelectorAll(".filter-btn");

buttons.forEach(btn=>{
btn.addEventListener("click",function(){

buttons.forEach(b=>b.classList.remove("active"));
this.classList.add("active");

const genre=this.dataset.filter;

if(genre==="all"){
renderMovies(movies);
}
else{
renderMovies(movies.filter(m=>m.genre===genre));
}

});
});
}
