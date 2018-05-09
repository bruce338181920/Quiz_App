
//add upload (adapted for the new form)
function startDataUpload() {
	alert ("start data upload");
//Get the value in the form when upload
	var lattitude = document.getElementById("lat").value;
	var longitude = document.getElementById("long").value;

	alert(lattitude + " "+longitude);
	
	var postString = "lattitude ="+lattitude +"&longitude ="+longitude;
	
		// now get the checkbox values - separate them with a | so that they can be // split later on if necessary
	//var checkString = "";
	//for (var i = 1;i< 5;i++){
		//if (document.getElementById("check"+i).checked === true) {
			//checkString = checkString + document.getElementById("check"+i).value + "||"
		//}
//
	//}
		// now get the select box values
	//var language = document.getElementById("languageselectbox").value;
	//postString = postString + "&language="+language;

	// now get the geometry values
	//var latitude = document.getElementById("lat").value;
	//var longitude = document.getElementById("long").value;
	//postString = postString + "&latitude=" + latitude + "&longitude=" + //longitude;

	//postString = postString + "&modulelist="+checkString;


// now get the radio button values
	if (document.getElementById("check1").checked) {
 		 postString=postString+"&answer=A";
	}
	if (document.getElementById("check2").checked) {
 		 postString=postString+"&answer=B";
	}
	if (document.getElementById("check3").checked) {
 		 postString=postString+"&answer=C";
	}
	if (document.getElementById("check4").checked) {
 		 postString=postString+"&answer=D";
	}
	
	processData(postString);

}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30297/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getEl
	ementById("dataUploadResult").innerHTML = client.responseText;
    }
}