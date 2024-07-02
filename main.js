async function getData(){
const response= await fetch ("https://forkify-api.herokuapp.com/api/search?q=pizza");
const lists = await response .json();
const recipes=lists.recipes;
const result= recipes.map(function(ele){
console.log(recipes);
return `
<div class='data'>

<img src=" ${ele.image_url}"alt""/>
<h2> ${ele.title} </h2>


</div>

`;

}).join('');
document.querySelector(".list").innerHTML=result;

}

getData();