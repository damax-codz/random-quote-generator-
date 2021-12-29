var theQuotes = [
    "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."
    ,
    
    "If you don\'t have time to read, you don\'t have the time (or the tools) to write. Simple as that."
     ,
    
    "We write to taste life twice, in the moment and in retrospect."
    ,
    
    "Substitute \'damn\' every time you\'re inclined to write \'very;\' your editor will delete it and the writing will be just as it should be."
    ,
    
    "If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it."
    ,
    
    "One day I will find the right words, and they will be simple."
    ,
    
    "Either write something worth reading or do something worth writing."
    ,
    
    "You never have to change anything you got up in the middle of the night to write."
    ,
    
    "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."
    ,
     ]
     var author=[
     "-Madeleine", "-Stephen", "-Anaïs Nin", "-Mark Twain", "-Toni Morrison", "-Jack Kerouac", "-Benjamin Franklin", "-Saul Bellow",  "-Robert Frost",
     ]
            function generator(){
            var o = Math.floor(Math.random()*(theQuotes.length))
            // for(var i = 0; i<theQuotes.length; i++){
                     
                document.getElementById('generate').innerHTML =   theQuotes[o];
                document.getElementById("auth").innerHTML=author[o]
            }
            