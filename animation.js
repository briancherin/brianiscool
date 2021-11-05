var foo = document.getElementById('foo');

function animate() {
	 var left = 0

  function frame() {
    
    left++  // update parameters 
    
    foo.style.left = left + 'px' // show frame 

    if (left == 100)  // check finish condition
      clearInterval(id)
  }

  var id = setInterval(frame, 10) // draw every 10ms
}