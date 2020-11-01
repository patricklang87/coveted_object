// constructs a second array with input boxes from an initial array
const sampleArray = ["weather adjective", "female name", "adverb", "farm implement", "chore", , "intransitive verb", "intransitive verb 2", "body part", "emotion noun", "male name", "speaking verb", "farm crop", "landscape feature", "an object",
"celebrity 1", "celebrity 2", "walking verb", "bird type", "pejorative", "a number", "exclaimation or sound", "adjective", "destruction verb", "body part 2", "womanly feature"];
const constructArray =[];
for (var i in sampleArray) {
  constructArray.push(sampleArray[i], `<input type="text" id="${sampleArray[i].split('').filter(e => e.trim().length).join('')}">`);
};

//places the secondary array into a table format
var perrow = 2,
count = 2,
table = document.createElement("table"),
row = table.insertRow();

for (var i of constructArray) {
  var cell =row.insertCell();
  cell.innerHTML = i;
  count++;
  if (count%perrow==0) {
    row = table.insertRow();
  }
}
//these print the secondary array (just as a sample) and the secondary array as a table
document.getElementById('container').appendChild(table);

//below I construct an output array from the data entered in the boxes.
var libButton = document.getElementById('lib-button');
var outputArray = [];
var libIt= function() {
  var storyDiv = document.getElementById("story");

//here I say, for each odd element in my array (the input boxes), i create a variable named for that box
for (var i in sampleArray) {
    outputArray.push(`var ${sampleArray[i]} = document.getElementById(${sampleArray[i]})`);
}
// Need to examine this. I don't know why it won't print the entire paragraph. seems to work until the word "astutely"
storyDiv.innerHTML = `It was a ` + weatheradjective.value + ` day when ` + femalename.value + ` called me out into the front yard. She was seated ` + adverb.value + ` beside the ` + farmimplement.value + `, ` + chore.value + `ing astutely. <br><br> As always, my heart ` + intransitiveverb.value + `ed and my stomach ` + intransitiveverb2.value + `ed when I saw her. I had to bite my ` + bodypart.value + ` to hide my emotion. But something was wrong. Her aura was listless and face betrayed a hint of ` + emotionnoun.value + `. <br><br>“` + malename.value + `,” she ` + speakingverb.value + `, “you say you love me, don’t you?” I did love her, but I hesitated to respond. She had never fully requited, though she often hinted at when she needed a favor. I looked away, glancing down the dale and past the acres of swaying ` + farmcrop.value + ` to the ` + landscapefeature.value + ` in the distance.<br><br> “` + malename.value + `, while fetching water from the well this morning, something horrible happened. You know how much I love my ` + anobject.value + `?” <br><br>I did know how much she loved her ` + anobject.value + `. I think she loved her ` + anobject.value + ` more than any being on the planet. I think she loved it more than ` + celebrity1.value + `. I think she loved it even more than ` + celebrity2.value + `. <br><br>“Well, I was carrying it with me as I `+ walkingverb.value + ` down to the well. As I lowered the bucket down the shaft, a ` + pejorative.value + birdtype.value + `, about ` + anumber.value + ` times the size of a normal ` + birdtype.value + `, dove down from above and let out a loud ` + exclaimationorsound.value + `right behind my ears! I was startled and I dropped my precious ` + anobject.value + ` into the ` + adjective.value + ` depths of the well.” <br><br>I knew where this was going and I did not like it. “` + malename.value + `, be a dear and fetch my ` + anobject.value + ` from those ` + adjective.value + ` depths. Won’t you? If you do, I’ll be forever in your debt.” <br><br>I did not want to go down the well. I knew that do so would risk me ` + destructionverb.value + ` my ` + bodypart2.value + `. I also didn’t care much for her `+ anobject.value + `. Her love of her ` + anobject.value + ` often bordered on insanity. But I also knew that it was pointless to resist. ` + femalename.value + `had me wrapped around her ` + womanlyfeature.value + `. <br><br>I stared down the dale and past the ` + farmcrop.value + `. This was going to be a long day.`;
};

libButton.addEventListener('click', libIt);