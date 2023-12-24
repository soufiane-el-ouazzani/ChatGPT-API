const inputText = document.getElementById("inputText");
const btnSearch = document.getElementsByClassName("btn-search")[0];



//query selector the container to load data
const cards= document.getElementsByClassName("card-container")[0];



// handlle the X and show button 
function chowandHide(lastElement){
    lastElement.addEventListener('click', () => {
      lastElement.parentNode.classList.toggle('active')
    })
}



//handlle the input
async function submitQuestion(){
  btnSearch.addEventListener('click', () => {
    var question=inputText.value;
    sendRequest(question);
    inputText.value = '';
  })
}


//send the request to OPEN AI to get the answer
async function sendRequest(question){
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messages: [
          { role: 'user', content: question }
        ],
      model: "gpt-3.5-turbo",
      max_tokens: 50
    })
  })

  const data = await res.json();
  answer = data.choices[0].message.content;
  submitData(answer, question);

}


//save the data into the server
function submitData(answer, question) {
  fetch('/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, answer }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Data saved on the server:', data);
  })
  addDataInHtml(answer,question)
}



//add the data to HTML
function addDataInHtml(answer,question){
  const div = document.createElement('div');
  div.className="card"
  div.innerHTML=`<h3 class="card-title">
                          ${question}
                  </h3>
                  <p class="card-response">
                      ${answer}
                  </p>
                  <button class="btn-show-x">
                      <img class="x"  src="img/circle-xmark-solid.svg" alt="x">
                      <img class="show" src="img/chevron-down-solid.svg" alt="show">
                  </button>
                `
    cards.appendChild(div);
    let btnExtendClose = document.querySelectorAll('.btn-show-x');
    let lastElement = Array.from(btnExtendClose).pop();
    chowandHide(lastElement);
}





submitQuestion();


