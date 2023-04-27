writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "I love the variety of wallpaper designs available on this website.There's something for everyone!"
    quotes[1] = "I appreciate how user-friendly this website is. It's easy to navigate and find what you're looking for."; "Amazing!!";
    quotes[2] = "The prices on this website are very reasonable, especially considering the high quality of the wallpapers";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
  writeRandomQuote();