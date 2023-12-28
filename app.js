// Imported all the imprtant elements from our index.html to our script file

const accessKey = "0SDqYEhmWfwvOABAX5Y3LKmIM9pTsz47RnMb0aa87qs";

const formElement = document.querySelector("form");

const inputEl = document.getElementById("search-input");

const searchResults = document.querySelector(".search-results");

const showMore = document.querySelector(".show-more-btn");

let inputData = "";  //inputdata will store all the keywords which the user is typing inside input section 
let page = 1;

// function to search images from unsplash.com

 async function searchImages(){

   inputData = inputEl.value;
        // dynamic url - will fetch images from unsplash if user click on search button

     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    //for doing fetch images and respond method first we need to convert our func into an async function

    const response = await fetch(url);
    const data = await response.json(); //after fetching data we need to convert that data into json format
     const results = data.results; // json conversion into variable 

     if (page === 1){
     
        searchResults.innerHTML = "";

     }


    /// in our results variable thers lot of images that we need to show one by one so thats why we need to map this results var
     /// every time we search new images , we have to genrate new boxes for new images so we will use our pre-built SEARCH-RESULTS templet,
    /// so we have to create some varbls so that we can create all elements of html img templet
     results.map((result) => {
    
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

         const ankertag = document.createElement('a');
         ankertag.href = result.links.html; 
         ankertag.target = "_blank";
         ankertag.textContent = result.alt_description;

        /// Append child 

        imageWrapper.appendChild(image);
         imageWrapper.appendChild(ankertag);
         searchResults.appendChild(imageWrapper);

       


     });

    page++;
     if (results.length > 0) {
    showMore.style.display = "block";
} else {
    showMore.style.display = "none";
}


 }

 formElement.addEventListener("submit",(event)=>
  {
     event.preventDefault();
     page = 1;
     searchImages();
  }


 )

 showMore.addEventListener("click",()=>
 {
  
     searchImages();
  }


 )



//-------------------------------------------------------------------------------------------------------
// async function searchImages() {
//     inputData = inputEl.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const results = data.results;

//     if (page === 1) {
//         searchResults.innerHTML = "";
//     }

//     results.map((result) => {
//         const imageWrapper = document.createElement('div');
//         imageWrapper.classList.add("search-result");
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         image.alt = result.alt_description;

//         const ankertag = document.createElement('a');
//         ankertag.href = result.links.html; // Fix the anchor tag creation
//         ankertag.target = "_blank";
//         ankertag.textContent = result.alt_description;

//         imageWrapper.appendChild(image);
//         imageWrapper.appendChild(ankertag);
//         searchResults.appendChild(imageWrapper);
//     });

//     // Update the page variable for the next fetch
//     page++;

//     // Check if there are more pages to show
//     if (results.length > 0) {
//         showMore.style.display = "block";
//     } else {
//         showMore.style.display = "none";
//     }
// }

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
//     page = 1;
//     searchImages();
// });

// // Add an event listener to the "Show More" button
// showMore.addEventListener("click", () => {
//     searchImages();
// });








