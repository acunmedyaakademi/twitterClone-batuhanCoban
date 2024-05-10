const tweetInput = document.querySelector("#tweetInput");
const tweetBtn = document.querySelector("#addForm");
const tweetFeed = document.querySelector("#tweetFeed")




tweetBtn.addEventListener("submit", addTweet);



function addTweet(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tweetValue = formData.get("tweet");
    let tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    tweets.push(tweetValue);
    localStorage.setItem("tweets", JSON.stringify(tweets));
    tweetFeed.innerHTML += `
      <div class="tweet">
        <div class="tweet-header">
          <img src="assets/img/resim kopyası.jpg" alt="">
          <div class="tweet-header-content">
            <b>Batuhan Çoban</b> <p>@CobanBatuhan</p>
            <h3>${tweetValue}</h3>
          </div>
        </div>
      </div>`;
  
    // Formu sıfırla
    e.target.reset();
  }
  







// const tweetInput = document.querySelector("#tweetInput");
// const tweetBtn = document.querySelector("#tweetBtn");
// const tweetFeed = document.querySelector("#tweetFeed")

// tweetBtn.addEventListener("click", addTweet);

// function addTweet(e) {
//     e.preventDefault();
//     const tweetValue = tweetInput.value;
//     tweetFeed.innerHTML += `<p>${tweetValue}</p>`
    
//     e.target.reset();
// }
