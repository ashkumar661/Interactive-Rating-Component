const ratings =   document.querySelectorAll('.rating-btn');
const onSubmit = document.querySelector('.btn');
const ratingContainer = document.querySelector('.rating');
const thankYouContainer = document.querySelector('.thank-your-container');
const ratingScore = document.querySelector('.score');

// added event listner on submit button and hide rating container upon submit
onSubmit.addEventListener("click", ()=>{
    ratingContainer.style.display = "none";
    thankYouContainer.style.display = "block";
});

//  added event listner on all 5 rating buttons and set the seleceted rating on thank-you container
ratings.forEach(rating =>{
    rating.addEventListener("click", () =>{
        ratingScore.innerHTML = rating.innerHTML;
    })
});