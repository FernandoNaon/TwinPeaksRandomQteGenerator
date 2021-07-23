function getRandomQuote()
{
    var pickQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return pickQuote;
}



function generateQuote()
{
    var getQuote = getRandomQuote();
    var message = '';
    message += '<p class ="quote">' + getQuote.quoteText + '</p>';

    document.getElementById('quoteDisplay').innerHTML = message;
    newColor();
}

var newColor = function randomColor()
{
    document.body.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}