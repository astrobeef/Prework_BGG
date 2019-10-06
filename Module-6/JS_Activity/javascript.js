
        /*Variables*/
        
        var initialHeight;      //Empty now, but will be stored with the initial height of the box from our html script.  This will later be used to reset the height of the box, if it is changed.
        var initialBGColor;       //Empty now, but will be stored with the initial color of the box from our html script.  This will later be used to reset the color of the box, if it is changed.
        var initialOpacity;     //Empty now, but will be stored with the initial opacity of the box from our html script.  This will later be used to reset the opacity of the box, if it is changed.

        /* Method for button1 */

        document.getElementById("button1").addEventListener("click", function(){
            //Adds a 'click' listener event to the element 'button1'.  On the event that this element is clicked, do the following...

            if(document.getElementById("box") != null)
            //If the element does exist, then...
            {
                if(initialHeight == null)   //If it is null, then we have not changed the height yet.  Set the reference to the initial height.
                    initialHeight = document.getElementById("box").style.height;        //Before we change the height, save the current height of the box so we may reset it later.

                document.getElementById("box").style.height = "200px";      //Change the height of the element 'box' to 200px.  This should be larger than the original height.
                document.getElementById("box").style.width = "200px";       //Change the width of the element 'box' to 200px.  This should be larger than the original width.
            }
            else
            //Else, log that we could not find the element.
            {
                console.log("Could not find element 'box'.");
            }
        });

        /* Method for button2 */

        document.getElementById("button2").addEventListener("click", function(){
            //Adds a 'click' listener event to the element 'button2'.  On the event that this element is clicked, do the following...

            if(document.getElementById("box") != null)
            //If the element does exist, then...
            {
                if(initialBGColor == null)   //If it is null, then we have not changed the color yet.  Set the reference to the initial color.
                    initialBGColor = document.getElementById("box").style.backgroundColor;        //Before we change the color, save the current color of the box so we may reset it later.

                document.getElementById("box").style.backgroundColor = 'blue';      //Change the color of the element 'box' to blue.
            }
            else
            //Else, log that we could not find the element.
            {
                console.log("Could not find element 'box'.");
            }
        })


        /* Method for button3 */

        document.getElementById("button3").addEventListener("click", function(){
            //Adds a 'click' listener event to the element 'button3'.  On the event that this element is clicked, do the following...

            if(document.getElementById("box") != null)
            //If the element does exist, then...
            {
                if(initialOpacity == null)   //If it is null, then we have not changed the opacity yet.  Set the reference to the opacity color.
                    initialOpacity = document.getElementById("box").style.opacity;        //Before we change the opacity, save the current opacity of the box so we may reset it later.

                document.getElementById("box").style.opacity = 0.5;      //Change the opacity of the element 'box' to 50%, or 0.5.
            }
            else
            //Else, log that we could not find the element.
            {
                console.log("Could not find element 'box'.");
            }

        })
        
        /* Method for button4 */

        document.getElementById("button4").addEventListener("click", function(){
            //Adds a 'click' listener event to the element 'button4'.  On the event that this element is clicked, do the following...

            if(document.getElementById("box") != null)
            //If the element does exist, then...
            {
                var iBox = document.getElementById("box");      //Set an instance reference to our 'box' element, since we will be referencing it multiple times in this function.

                if(initialBGColor != null)    //If the var is not empty, then... (The var would be empty if the color has not been changed at all.  The var is only set once the color has been changed)
                    iBox.style.backgroundColor = initialBGColor;        //Set the color of the box element to our initial color.

                if(initialHeight != null)   //If the var is not empty, then...
                {
                    iBox.style.height = initialHeight;      //Set the height of the box element to our initial height.
                    iBox.style.width = initialHeight;       //This only works if the 'box' begins as a square.
                }

                if(initialOpacity != null)   //If the var is not empty, then...
                    iBox.style.opacity = initialOpacity;    //Set the opacity of the box element to our initial opacity.
            }
            else
            //Else, log that we could not find the element.
            {
                console.log("Could not find element 'box'.");
            }

        })

        /* Method for button5 */
        

        document.getElementById("button5").addEventListener("click", function(){
            //Adds a 'click' listener event to the element 'button4'.  On the event that this element is clicked, do the following...

            document.body.style.backgroundColor = 'beige';

        })

        document.getElementById("button6").addEventListener("click", function(){
            //Adds a 'click' listener event to the element 'button4'.  On the event that this element is clicked, do the following...

            document.body.style.fontFamily = 'fantasy';
            document.body.style.font = 'fantasy';
            document.body.style.fontSize = '150%';
            document.body.style.color = 'brown';

        })