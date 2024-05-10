
const SUPABASE_URL = "https://xvfsvjythumviferwayb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZnN2anl0aHVtdmlmZXJ3YXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNzQwMzIsImV4cCI6MjAzMDk1MDAzMn0.mkXifEtWWvxSfOk4UKafkTbguQ5C-IBK71KEcuugJWI"

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)





const tweetInput = document.querySelector("#tweetInput");
const tweetBtn = document.querySelector("#addForm");
const tweetFeed = document.querySelector("#tweetFeed")

async function getData(){
  const { data, error } = await _supabase.from('comment').select()
  if(error){
      return [];
  }
  return data;
}

tweetBtn.addEventListener("submit", getForm);

async function getForm(e){     
  e.preventDefault();     
  const formData = new FormData(e.target);     
  const formObj = Object.fromEntries(formData);     
  const { error } = await _supabase     
  .from('comment')     
  .insert({         
    tweet: formObj.tweet,       
  })     
  init();
    e.target.reset(); 
  }




async function deleteComment(){
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  for (const btn of deleteBtn) {
      btn.addEventListener('click', async function() {
          const { error } = await _supabase 
              .from('comment')
              .delete()
              .eq('id', Number(this.parentElement.parentElement.parentElement.dataset.commentid)) 
            
              return init();


      })
  }

}

async function init(){     
  const data = await getData();     
  tweetFeed.innerHTML = "";     
  data.forEach(item => {         
    tweetFeed.innerHTML += 
    `
      <div class="tweet" data-commentid=${item.id}>       
        <div class="tweet-header">
            <img src="assets/img/resim kopyası.jpg" alt="">

            <div class="tweet-header-content">
              <b>Batuhan Çoban</b> <p>@CobanBatuhan</p>
              <h3>${item.tweet}</h3>
              <button class="deleteBtn">Parçala</button>
            </div>
        </div>
       </div>
    `
    });      
    deleteComment()
  }


init();





// function addTweet(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const tweetValue = formData.get("tweet");
//     tweetFeed.innerHTML += `
//       <div class="tweet">
//         <div class="tweet-header">
//           <img src="assets/img/resim kopyası.jpg" alt="">
//           <div class="tweet-header-content">
//             <b>Batuhan Çoban</b> <p>@CobanBatuhan</p>
//             <h3>${tweetValue}</h3>
//           </div>
//         </div>
//       </div>`;
  
//     // Formu sıfırla
//     e.target.reset();
//   }
  







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
