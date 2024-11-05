<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

<p id="styleDemo">JavaScript can also change styles!</p>
<button type="button" onclick='document.getElementById("styleDemo").style.color = "blue"'>Change Text Color</button>

<p id="multiChange">JavaScript can change multiple properties at once!</p>
<button type="button" onclick='document.getElementById("multiChange").style.color = "green"; document.getElementById("multiChange").style.fontSize = "20px"; document.getElementById("multiChange").innerHTML = "JavaScript is powerful!"'>Change Text and Style</button>

</body>
</html>
