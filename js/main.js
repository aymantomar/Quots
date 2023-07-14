function getQuotes() {
  var msg = document.querySelector("#quotes");

  /* array of object   */
  var quotes = [
    {
      quoteAuthor: "― Oscar Wilde",
      quoteText: "Be yourself; everyone else is already taken.",
      quoteAuthorImg: "./image/1.jpg",
    },
    {
      quoteAuthor: "― Marilyn Monroe",
      quoteText: "Be yourself; everyone else is already taken.",
      quoteAuthorImg: "./image/2.jpg",
    },
    {
      quoteAuthor: "― Albert Einstein",
      quoteText:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      quoteAuthorImg: "./image/3.jpg",
    },
    {
      quoteAuthor: "― Frank Zappa",
      quoteText: "So many books, so little time.",
      quoteAuthorImg: "./image/4.jpg",
    },
  ];

  var lastNumber = 0;
  let num = Math.floor(Math.random() * quotes.length);

  if (num != lastNumber) {
    msg.innerHTML = `<div>${quotes[num].quoteText}</div>
    <div>${quotes[num].quoteAuthor} 
    <div class="quoteImg">
    <img class="img-fluid quoteImg" src="${quotes[num].quoteAuthorImg}"/> </div>
    </div> `;
  } else {
    getQuotes();
  }
}
