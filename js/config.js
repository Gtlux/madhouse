/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.10
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Display current map and gamemode?
'true' or 'false'*/
var l_displayMapGamemode = true;

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "MadHouse";

/*Use a video for the background?
Otherwise it will use images
'true' or 'false'*/
var l_bgVideo = false;

/*Default available videos:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add your own video backgrounds
Just make sure they are using webm VP8 format 
(Place the videos in the backgrounds/videos folder)*/
var l_background = "coldnight.webm";

/*(Image-background only)
Enable map-based background image?
If enabled, the background will be an image based on the server current map
You need to have a background image with the same name as the map
Also, the image needs to be in .jpg format
E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
'true' or 'false'*/
var l_bgImageMapBased = false;

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Place the files in the backgrounds/images folder)*/
var l_bgImages = [
	"608333.jpg",
	"7f561da1cae936756060693b1f1a1c19.jpg",
	"anime-boy-psycho-tongue-anime-10566.jpg",
	"bf765e6954e795d246adb231e39a2f16-d6an9d3.png",
	"ynthia-leman-mob-psycho100-gratitude-leman-cynthia-1920-1080.jpg",
	"maxresdefault.jpg",
	"01.jpg",
	"02.jpg",
	"03.jpg",
	"04.jpg",
	"05.jpg",
	"06.jpg",
	"07.jpg",
	"08.jpg",
	"09.jpg"

];

/*(Image-background only)
Random background images order?
'true' or 'false'*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?
'true' or 'false'*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Play music during the loading screen?
'true' or 'false'*/
var l_music = true;

/*Display current music name?
'true' or 'false'*/
var l_musicDisplay = true;

/*Music playlist
Add as many youtube ids or ogg files you want
(Place the ogg files in the music folder)*/
var l_musicPlaylist = [
	{youtube: "DcUShsmww6E", name: "Porcelain Black - Pretty Little Psycho"},
	{youtube: "6-2jNiVK86A", name: "Blue Stahli - ULTRAnumb"},
	{youtube: "8ahN0f0r9JQ", name: "Get Scared Sarcasm Lyric Video Official"},
	{youtube: "pTA0DSfrGZ0", name: "Chaos Chaos (formerly Smoosh) - Do You Feel It?"},
	{youtube: "mb-XCaA2HZs", name: "Rick and Morty - Evil Morty Theme Song (Trap Remix)"},
	{youtube: "cvq7Jy-TFAU", name: "[DnB] - Feint - Snake Eyes (feat. CoMa) [Monstercat Release]"},
	{youtube: "q6-ZGAGcJrk", name: "Spooky Scary Skeletons (Remix) - Extended Mix"},
	{youtube: "z-NuxWkYtlI", name: "Re:Zero ED / Ending 2 Full『Emilia (Rie Takahashi) - Stay Alive』 ENG SUB"},
	{youtube: "tOkdSj8Iz0I", name: "Discord - The Living Tombstone - Lyrics"},
	{youtube: "cZ4Petds3LQ", name: "幼女戦記 ED / Youjo Senki ending Full『Tanya Degurechaff (CV: Aoi Yuki) - Los! Los! Los!』ENG SUB"},
	{youtube: "j6TsX_7xlkU", name: "オーバーロード ED | Overlord Ending - FULL"},
	{youtube: "p-o_bMkzOW0", name: "LUVORATORRRRRY! ver れをる feat.nqrse"},
	{youtube: "yzC4hFK5P3g", name: "きゃりーぱみゅぱみゅ - PONPONPON , Kyary Pamyu Pamyu - PONPONPON"},
	{youtube: "YgGzAKP_HuM", name: "RASPUTIN - Vladimir Putin - Love The Way You Move (Funk Overload) @slocband"},
	{youtube: "F5bIdqZHEOo", name: "DAOKO 『かけてあげる』Music Video［HD］"},
	{youtube: "Y3xehyYXbJw", name: "DAOKO 『水星』 Music Video［HD］"},
	{youtube: "Q0v3ajXh5S0", name: "Tokyo Ghoul: Unravel - Lyrics"},
	{youtube: "gu-u6I2a968", name: "Owari no Seraph Ending FULL - ｢scaPEGoat｣ » 終わりのセラフ ED"},
	{youtube: "2e0Cdi_TLY8", name: "Aimer - Through My Blood『Kabaneri of the Iron Fortress』"},
	{youtube: "HdQCWXh3XXU", name: "Re:Zero kara Hajimeru Isekai Seikatsu Ending FULL - Re：ゼロから始める異世界生活 ED 「STYX HELIX」"},
	{youtube: "sF0QLtk3YH0", name: "EGOIST - Namae No Nai Kaibutsu"},
	{youtube: "irMR7DqMRHA", name: "Fate - Stay Night - Unlimited Blade Works opening2 (60 fps)"},
];

/*Random music order?
'true' or 'false'*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 (quietest) and 100 (loudest)*/
var l_musicVolume = 25;

/*Enable custom messages?
'true' or 'false'*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Спасибо, что вы с нами :)",
	"Наслаждайтесь игрой!",
	"Вы нашли ошибки?  Сообшите Gtlux'у!",
];

/*Random message order?
'true' or 'false'*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
