var titleDiv = "<h1>This is an example title</h1>";
var instructionsHTML = "<div></div><header><h3>Instructions for Research Study:</h3></header></div><div></div><p>In the next portion of the study we will be showing you a series of charts. For each of the charts you will be asked to answer 3 questions about that specific chart. Please answer the questions to the best of your ability.</p><p>After you have a good grasp on the chart on screen, click the button to advance to the questions section. After the questions have been answered, click the button to move on to the next chart.</p></div>";

var chartsDict = {
	"scatter-one-minimal":{"chartType":"scatter", "level":"minimal", "location":"images/scatter-one-minimal.jpg"},
	"scatter-one-medium":{"chartType":"scatter", "level":"medium", "location":"images/scatter-one-medium.jpg"},
	"scatter-one-heavy":{"chartType":"scatter", "level":"heavy", "location":"images/scatter-one-heavy.jpg"},
	"box-one-minimal":{"chartType":'box', 'level':'minimal', 'location':'images/box-one-minimal.jpg'},
	"box-one-medium":{"chartType":'box', 'level':'medium', 'location':'images/box-one-medium.jpg'},
	"box-one-heavy":{"chartType":'box', 'level':'heavy', 'location':'images/box-one-heavy.jpg'},
	"bar-one-minimal":{"chartType":'bar', 'level':'minimal', 'location':'images/bar-one-minimal.jpg'},
	"bar-one-medium":{"chartType":'bar', 'level':'medium', 'location':'images/bar-one-medium.jpg'},
	"bar-one-heavy":{"chartType":'bar', 'level':'heavy', 'location':'images/bar-one-heavy.jpg'},
	"scatter-two-medium":{"chartType":"scatter", "level":"medium", "location":"images/scatter-two-medium.jpg"},
	"scatter-two-heavy":{"chartType":"scatter", "level":"heavy", "location":"images/scatter-three-heavy.jpg"},
	"box-two-medium":{"chartType":"box", "level":"medium", "location":"images/box-two-medium.jpg"},
	"box-two-heavy":{"chartType":"box", "level":"heavy", "location":"images/box-two-heavy.jpg"},
	"bar-two-medium":{"chartType":"bar", "level":"medium", "location":"images/bar-two-medium.jpg"},
	"bar-two-heavy":{"chartType":"bar", "level":"heavy", "location":"images/bar-two-heavy.jpg"},
};

//Uses the Fischer-Yates shuffling algorithim
function ordering(level) {
	charts.push('scatter-one-' + level);
	charts.push('box-one-' + level);
	charts.push('bar-one-' + level);

	function shuffle(array) {
		var currentIndex = array.length, tempValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			tempValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = tempValue;
		}
		return array;
	}

	shuffle(charts);
}
//Custom formatter for links
function parse(str) {
	var args = [].slice.call(arguments, 1),
		i = 0;

	return str.replace(/%s/g, function() {
		return args[i++];
	});
}

function informedConsentDiv() {
	var consentDiv = "<div id='informedConsent'><h3>Informed Consent Form<br>University of Iowa</h3><p>Ben Schroder and Ryan Larson</p></div><p>You are invited to join a research study surrounding the effectiveness of the graphics we use in everyday data visualization. We are curious to see which methods work better for recall.</p><p>We will test your recall/memory/learning abilities to see what methods of data visualization are the most effective. You will be asked to look at a graph projected on a screen. You are to try and memorize and learn the graph. When you are done looking at the image, you will answer the 3 questions provided. This will help to learn the graph. You will then be asked to recall what you saw.</p><p><b>This is being conducted under the supervision of Juan Pablo Hourcade</b><br>Email: juanpablo-hourcade@uiowa.edu</p><p><b>Any risks? </b>None.</p><p><b>Benefits? </b>To further the research and understanding with the most effective forms of data visualization.</p><p><b>Confidentiality </b>We will take steps to keep information about you confidential, and to keep it safe from unauthorized disclosure.</p><p><b>Incentives? </b>Help us to complete our experiment in the best way possible &#9786;</p>";

	$('#mainDiv').html(consentDiv);
	$('#navButton').attr('onclick', 'genDemographicDiv()');
	$('#navButton').text("I agree, show me the charts.");
}

function genDemographicDiv() {
	var demographicDiv = "<h3>Demographics</h3><form>First name <input type='text' id='firstName'></input><br>Last name <input type='text' id='lastName'></input><br>Age <input type='number' id='age'></input><br><br>Ethnicity <br><input type='radio' name='ethnicity' value='white'>white</input> <br><input type='radio' name='ethnicity' value='hispanic'>hispanic</input> <br><input type='radio' name='ethnicity' value='black'>black</input> <br><input type='radio' name='ethnicity' value='asian'>Asian</input> <br><input type='radio' name='ethnicity' value='other'>Other</input> <br><br>Highest level of education <br><input type='radio' name='education' value='highschool'>Highschool</input> <br><input type='radio' name='education' value='ba'>Bachelor of Arts</input> <br><input type='radio' name='education' value='bs'>Bachelor of Science</input> <br><input type='radio' name='education' value='grad'>Graduate school or higher</input> <br><br>Household composition <br><input type='radio' name='household' value='single'>Single</input> <br><input type='radio' name='household' value='married'>Married</input> <br><input type='radio' name='household' value='divorced'>Divorced</input> <br><input type='radio' name='household' value='separated'>Separated</input> <br><br>Proffesional or Employment Status <br><input type='radio' name='employment' value='student'>Student</input> <br><input type='radio' name='employment' value='part time'>Part Time</input> <br><input type='radio' name='employment' value='full time'>Full Time</input> <br><input type='radio' name='employment' value='unemployed'>Unemployed</input> <br><br>Digital Literacy. How comfortable are you with technology? (1 being not at all, and 5 being very comfortable) <br><input type='radio' name='digital' value='1'>1   </input><input type='radio' name='digital' value='2'>2   </input><input type='radio' name='digital' value='3'>3   </input><input type='radio' name='digital' value='4'>4   </input><input type='radio' name='digital' value='5'>5   </input> <br><br>Analytical Literacy. How much exposure to math related fields do you have? Statistics, Math, Science, etc... (1 being none, and 5 being very comfortable with analytics) <br><input type='radio' name='analytical' value='1'>1   </input><input type='radio' name='analytical' value='2'>2   </input><input type='radio' name='analytical' value='3'>3   </input><input type='radio' name='analytical' value='4'>4   </input><input type='radio' name='analytical' value='5'>5   </input> <br><br>";

    $('#mainDiv').html(demographicDiv);
    $('#navButton').attr('onclick', "demographicAnswers()");
    $('#navButton').text('Instructions');
}
function demographicAnswers() {
	//store all of the answers here
	var firstName = document.getElementById('firstName').value,
		lastName = document.getElementById('lastName').value,
		age = document.getElementById('age').value,
		ethnicity = $("input[name = 'ethnicity']:checked").val(),
		education = $("input[name = 'education']:checked").val(),
		household = $("input[name = 'household']:checked").val(),
		employment = $("input[name = 'employment']:checked").val(),
		digital = $("input[name = 'digital']:checked").val(),
		analytical = $("input[name = 'analytical']:checked").val();

	//Add the demographics in
	demographics.push({"first name": firstName});
	demographics.push({"last name": lastName});
	demographics.push({"age": age});
	demographics.push({"ethnicity": ethnicity});
	demographics.push({"education": education});
	demographics.push({"employment": employment});
	demographics.push({"digital": digital});
	demographics.push({"analytical": analytical});

	$('#mainDiv').html(instructionsHTML);
	$('#navButton').attr('onclick', 'instructionsDiv()');
	$('#navButton').text('Start experiment');
}
function instructionsDiv() {
	//Start up the chart section
	buttonPushed();

	$('#navButton').text('Answer questions');
	$('#navButton').attr('onclick', 'buttonPushed()');
}
function genChartDiv(counter) {
	var chartDiv = "<img width='100%' src='images/%s.jpeg'></img>";

	formattedDiv = parse(chartDiv, counter);
    $('#mainDiv').html(formattedDiv);

    //Change toggle
    flipper = "answer";
    $('#navButton').text("Submit answers");
}
function genAnswerDiv() {
    var answerDiv = "<form id='answerDiv'>What are the defining features?<br><textarea id='Question1' class='question'></textarea> <br><br>What are overall trends? <br><textarea id='Question2' class='question'></textarea><br><br>Given both of these, what does the graph mean? Who or what could this be used for?<br><textarea id='Question3' class='question'></textarea> <br><br></form>"
    //Update For answers
    $('#mainDiv').html(answerDiv);

    //Update the button to submit & next chart
    $('#navButton').text("Submit answers and go to next chart");

    //conditional goes here
    flipper = 'update';
}
function updateAnswers() {
    var orderPresented = chartNumber,
        chart = chartTitle,
        chartType = chart.split("-", 1)[0],
        chartLevel = chart.split("-")[2],
        q1 = document.getElementById("Question1").value,
        q2 = document.getElementById("Question2").value,
        q3 = document.getElementById("Question3").value;

    // Add the three rows individually
    answers.push({"order":orderPresented, "chart":chartType, "level":chartLevel, "question": "Q1", "answer":q1});
    answers.push({"order":orderPresented, "chart":chartType, "level":chartLevel, "question": "Q2", "answer":q2});
    answers.push({"order":orderPresented, "chart":chartType, "level":chartLevel, "question": "Q3", "answer":q3});

    // Now update the globals & answer boxes
    chartNumber += 1;
    chartTitle = charts[chartNumber - 1];

    //Conditional to check if all 9 charts have been displayed
    if (chartNumber < 10) {
    	flipper = 'chart';
    } else {
    	flipper = 'final';
    }

    buttonPushed();
    return;
}
function recallDiv() {
	//Update the div for questions
	var finalDiv = "<header><h3>Chart Recall Instructions</h3></header><p>For the next section we will ask you to recall some information from what you have observed/learned from 3 of the charts.This will help us to determine which of the charts worked the best. This will give us important information/answers asked by our research study.</p><h3>Questions</h3><form id='answerDiv'>Recall the scatter plot about Car's efficiency and power. Which car maker had the most models?<br><textarea id='Question1' class='question'></textarea> <br><br>Recall the box and whisker plot about flower species, how many species were displayed? <br><textarea id='Question2' class='question'></textarea><br><br>Recall one of the bar charts you saw about the number of assaults in 10 states. Which state had the most assaults?<br><textarea id='Question3' class='question'></textarea> <br><br></form>";
	$('#mainDiv').html(finalDiv);

	//Update the button for function
	$('#navButton').attr('onclick', 'writeToJSON()');

	//Update button text to indicate you're done
	$('#navButton').text("Finish");
}

function final() {
}

function writeToJSON() {
	var json = {'demographics':demographics, 'answers':answers};
	json = JSON.stringify(json);

	//Send it off!
	$.post("https://openws.herokuapp.com/hciExperiment?apiKey=API_KEY_HERE", json).done(function(data) {
		alert("And you're done! We've saved your data, thanks for participating!");
		console.log("Product saved successfully");});
}
