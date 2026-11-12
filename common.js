const subs = [
    "Look, ma! I'm Wikipedia!",
    "AAAHHHHhhSJFKAGSFASDKLJ",
    "mediawiki my beloved",
    "Cost-efficient!",
    "localhost:8080",
    "help I'm still in 2025...",
    "Technically community-driven!",
    "ALL 100% FACTUAL",
    "psst... press Ctrl+W... cmon...",
    "hey I dare you to close your computer",
    "hey I dare you to turn off your phone",
    "hmmm... javascript... can I eat it?",
    "I can see you!",
    "Proudly built with MediaWiki!",
    "rip aadenboy.glitch.me 2023-2024",
    "actually rip glitch.com fully oh my god they killed it",
    "rip aadenboy.neocities.org 2024-2025",
    "let's hope this lasts longer than a year!!!",
    "{{RandomSub}}",
    "404 error, I think",
    "What!!!",
    "GIVE ME MONEY ! ! ! !",
    "Add option",
    "uhh...",
    "huh?",
    "whar????!!!!!?",
    "\"Hey isn't wiki software dynamic\"",
    "why must servers cost money...",
    "why must goods and services cost money...wait no bad question actually never mind uhh",
    "SUBTITLEEEEEE",
    "Overqualified!",
    "Underqualified!",
    "Averagequalified!",
    "The third in the series!",
    "NOT on Fandom. NOBODY likes Fandom.",
    "Never with ads!",
    "Thanks, Damian!",
    "uhhh. meow or whatever.",
    "I CURSE THY WITH READING THE PAGE",
    "Set $wgLogos with the URL path to your own logo image",
    "MediaWiki:Tagline",
    "h",
    `<div class="cubeContainer" style="font-size: inherit;">
<div class="rotatingCube">
    <div class="face-1"></div>
    <div class="face-2"></div>
    <div class="face-3"></div>
    <div class="face-4"></div>
    <div class="face-5"></div>
    <div class="face-6"></div>
</div>
</div> Look at this cool cube I found!`,
	"Contribute!",
	"CC BY-SA!",
	"what is this!!",
	"not in the public domain fortunately",
	"Eat a burger. Right now. Go buy one. RIGHT NOW.",
	"EM DASH",
	"SEMICOLON",
	"the html for this caption is not sanitized",
	"From Wikipedia, the frwait nope wrong wiki hold on",
	"psst... Special:RandomPage",
	"KNOWLEDGE!!! FOR FREE!!!",
	"aria-hidden=\"true\"",
	"this is purely decorative keep reading this",
	"LORE EVERYWHERE!?!?!?",
	"thanks GitHub",
	"just wait until 2027 when I add the aadenboy wiki ai to give you the most factual information",
	"Parody current events for a laugh",
	"dude how much art could there possibly be",
	"CATEGORIES CATEGORIES CATEGORIES",
	"in a way, I exist",
	"Sample Text",
	"Lorem ipsum dolor sit amet",
	"how many subtitles could there possibly be?!",
	"hi thanks for not disabling javascript <3",
	"Hey can I track you pleeease I have cookies......",
	"man I don't understand any of what this says",
	"READ IT OUT LOUD!! GOOD IDEA!!",
	"Print this page",
	"I love Vector 2010!",
	"magically sends nostalgia directly to your brain",
	"watch me repeat the same joke ten thousand times",
	"so true go at it",
	"I TYPED ALL OF THIS",
	"none of this is real you're imagining it",
	"what is this... some kind of aadenboy wiki??",
	"just give me five more minutes",
	"javascript:void(0);",
	"the linter really doesn't like the last subtitle",
	"yeah it's just a few cats... just a few...",
	"Watch me come up with a funny subtitle",
	"Watch me come up with another funny subtitle",
	"Watch me come up with a THIRD funny subtitle",
	"Check your posture!",
	"CHECK YOUR BATTERY",
	"Your disk is almost full! Save space by optimizing storage.",
	"the worst statement that you have ever seen in your life",
	"More pretentiousness!!!!!",
	"100th line of code",
	"100th subtitle",
	"[citation needed]",
	"all of this is entirely original research Hhahahaahahaha",
	"Sorry too lazy to come up with a subtitle ZZZZZ.",
	"Terrible Terrible Terrible Terrible Terrible HORRIBLE",
	"mhm. uyea. uhhuh. yep. I get this!!!",
	"So glad the internet archive exists",
	"<span style=\"background-color: #000;position: relative;\"><span style=\"position: absolute; transform: scaleX(0); -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; pointer-events: none;\" unselectable=\"on\">this joke doesn't work with a screen reader unfortunately</span><span aria-hidden=\"true\">you just lost the game lmao</span></span>",  // accessibility my beloved
	"DEPRECATE EVERYTHING. UPDATE EVERY TEN SECONDS.",
	"oh? you're reading this? totally not gonna tell the advertisers... nooooo... definitely not...",
	"I love you Wikipedia",
	"I love you Miraheze",
	"ran out of jokes... sob...",
	"art is amazing!",
	"as seen on somewhere",
	"thanks wget",
	"IF THIS SUBTITLE ISN'T CHANGING EACH TIME PLEASE YELL AT ME",
	"AHhhhhhHhhHHHhhhhHhhhhhhHHHhhhhhhhhhhhhhhhhhhhhhhh",
	"Support me on GitHub!",
	"now tracking your every movement!",
	"I had to press aa flat between two glass panes to make the website background",
	"wait, who are you again?",
	"Not tracking your data, I think!",
	"[tentatively and begrudgingly] thanks google",
	"Here to stay!",
	"<b>Warning:</b> You are editing a page that is used to provide interface text for the software. Changes to this page will affect the appearance of the user interface for other users on this wiki.",
	"powered by google sheets...???",
	"the best static export of a mediawiki wiki to date, probably"
];

$(function () {
    let rs = document.querySelector("#siteSub");
    if (rs) {
        rs.innerHTML = subs[Math.floor(Math.random() * subs.length)];
    }
    rs = document.querySelector("#forceSub");
    if (rs) {
        rs.innerHTML = subs[Math.floor(Math.random() * subs.length)];
    }
    
    const url = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    if (!url.match("index.php") && urlParams.get("action") == "edit") {
        document.location.replace(window.location.origin + window.location.pathname + "%3Faction=edit");
        return;
    }
    if (!url.match("index.php") && document.querySelector('meta[name="page-is-redirect"][content="yes"]') && urlParams.get("redirect") != "no") {
	    document.location.replace(document.querySelector('.redirectText a').href);
	    return;
	}
	if (url.match("index.php")) return;
	
	try {
		const test = "__test";
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
	} catch (e) {
		console.error("Local storage not available");
		return;
	}

	let api = "https://script.google.com/macros/s/AKfycbxI_yTp1bqmfI_tgbT6u4KbM-JuhQz66WeesIX6jcGg9OGMv6tY3MXz0mbTDivYJdvycw/exec";
    const session = JSON.parse(localStorage.getItem("session") || '{"start":0,"pages":{}}');
    const now = Math.floor(Date.now() / 1000);
    if (now - session.start > 5*60) { // 5 mins for visit count increase debounce
    	session.start = now;
    	session.pages = {};
    	localStorage.setItem("session", JSON.stringify(session));
    }
    const title = encodeURIComponent(document.getElementById("firstHeadingTitle").innerText.replace(" ", "_"));
    if (title == "404") return;
    
    api += "?page=" + title;
    if (session.pages[title]) api += "&nocount=true";
    session.pages[title] = true;
    localStorage.setItem("session", JSON.stringify(session));
    
    fetch(api)
	  .then((response) => {
	    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
	    return response.json();
	  })
	  .then((data) => {
	    console.log('Got visits:', data);
	    const counter = document.createElement("nav");
	    counter.classList.add("vector-menu-portal", "vector-menu", "visit-count");
	    counter.innerText = "Visits: " + data.visits;
	    document.getElementById("mw-panel").append(counter);
	  })
	  .catch((error) => {
	    console.error('Could not fetch:', error);
	  });
});
