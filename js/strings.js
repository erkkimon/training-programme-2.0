// Language detection code is based on Michael Herger's solution. Check
// details: https://groups.google.com/forum/#!topic/phonegap/EkCyEBO8Dj4
// PhoneGap on Android would always return EN in navigator.*language, so
// let's parse userAgent instead.

var lang;

if (navigator && navigator.userAgent && (lang = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i))) 
{
	lang = lang[1];
}

if (!lang && navigator) 
{
	if (navigator.language) 
	{
		lang = navigator.language;
	} 
	else if (navigator.browserLanguage) 
	{
		lang = navigator.browserLanguage;
	} 
	else if (navigator.systemLanguage) 
	{
		lang = navigator.systemLanguage;
	} 
	else if (navigator.userLanguage) 
	{
		lang = navigator.userLanguage;
	}
	lang = lang.substr(0, 2);
}

//lang = "fi";
var string;

if (lang == "fi") /* FINNISH */
{
  string =
  {
		/* training 1 */
		benchpress: "penkki&shy;punnerrus",
		inclinepress: "vino&shy;penkki&shy;punnerrus",
		lyingtricepsextension: "ranskalainen punnerrus",

		/* training 2 */
		cablepulldown: "ylätalja",
		cableseatedrow: "alatalja",
		bicepscurl: "hauiskääntö",

		/* training 3 */
		deadlift: "maastaveto",
		legextension: "jalanojennus",
		legcurl: "jalan&shy;koukistus",

		/* training 4 */
		uprightrow: "pystysoutu",
		shoulderpress: "pysty&shy;punnerrus",
		shrugs: "olankohautus",

		/* training 5 */
		bentoverrow: "kulmasoutu",
		pecdeck: "rintarutistus",
		hammerbicepscurl: "vasarakääntö",

		/* training 6 */
		legpress: "jalkaprässi",
		lunge: "askelkyykky",
		powerclean: "rinnalleveto",

		/* general UI-related strings */
		personalTravis: "personal <b>raineri</b>",
		nextWorkout: "seuraava treeni",
		goals: "haasteet",
		reps: "toistot",
		weight: "paino",
		reached: "saavutettu",
		currentLevel: "nykytaso",
		currentLevelInstructions: "Palaa muokkaamaan painamalla <img src='img/navi-icons/edit.png' class='navi-icon' /> perusnäkymässä.",
		welcome: "Mukavaa, että päätit aloittaa valmennussuhteen Personal Rainerin kanssa! \n\nAloitetaan määrittämällä, millaisia painoja jaksat nostaa nyt. Jos et vielä tiedä, miten paljon jaksat nostaa, voit tallentaa oletusarvot ja palata myöhemmin muokkaustilaan painamalla kynäikonia äplikeissönin perusnäkymässä. \n\nPersonal Raineri on beta- eli testausvaiheessa, joten ohjelmaan saatetaan tehdä härskejäkin muutoksia, jotka voivat aiheuttaa mm. tietojen katoamista.",
		wait: "Odota hetki..."
	}
}
else /* ENGLISH */
{
  string =
  {
		/* training 1 */
		benchpress: "benchpress",
		inclinepress: "incline press",
		lyingtricepsextension: "lying triceps extension",

		/* training 2 */
		cablepulldown: "cable pulldown",
		cableseatedrow: "cable seated row",
		bicepscurl: "biceps curl",

		/* training 3 */
		deadlift: "deadlift",
		legextension: "leg extension",
		legcurl: "leg curl",

		/* training 4 */
		uprightrow: "upright row",
		shoulderpress: "shoulder press",
		shrugs: "shrugs",

		/* training 5 */
		bentoverrow: "bent-over row",
		pecdeck: "pec deck",
		hammerbicepscurl: "hammer biceps curl",

		/* training 6 */
		legpress: "leg press",
		lunge: "lunge",
		powerclean: "power clean",

		/* general UI-related strings */
		personalTravis: "personal <b>travis</b>",
		nextWorkout: "next workout",
		goals: "goals",
		reps: "reps",
		weight: "weight",
		reached: "reached",
		currentLevel: "current level",
		currentLevelInstructions: "Press <img src='img/navi-icons/edit.png' class='navi-icon' /> in main view to come back.",
		welcome: "Great that you decided to make friends with Personal Travis. \n\nLet's find out your level at the moment. If you are unsure about the weights, you can simply save the default values and come back later by clicking the pen icon in the home view of the application. \n\nPersonal Travis is still in beta stage, which means the possibility of major changes in the app. Unfortunately, this might cause e.g. data loss.",
		wait: "Wait, please..."
	}
}
