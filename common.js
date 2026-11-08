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
	"AHhhhhhHhhHHHhhhhHhhhhhhHHHhhhhhhhhhhhhhhhhhhhhhhh"
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
    
    const urlParams = new URLSearchParams(window.location.search);
    if (document.querySelector('meta[name="page-is-redirect"][content="yes"]') && (urlParams.get("redirect") ?? "") != "no") {
	    document.location.replace(document.querySelector('.redirectText a').href);
	}
});