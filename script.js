function generate()
{
    var quotes = {
        "- Dumbledore" : `"It is not our abilities that show what we truly are… it is our choices."`,
        "- Vishwanath S J" : `"The past was "built", the present is "assembled" & the future - "programmed"!"`,
        "- Chris Gardner" : `"This part of my life, this little part is called “happiness.”"`,
        "- Andy Dufresne" : `"Hope is a good thing, maybe the best of things. And no good thing ever dies!"`,
        "- Jordan Belfort" : `"I've got the guts to die. What I want to know is, have you got the guts to live?"`
    }
    
    var authors = Object.keys(quotes)

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author]

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}