export const foo = 'bar';

// div.slideouticons{
// 	position: relative; /* change position to fixed or absolute if desired */
// 	-webkit-perspective: 1000px;
// 	perspective: 1000px;
// 	z-index: 1000;

// }

// div.slideouticons input{
// 	display: none;
// }


// div.slideouticons label.mainlabel{ /* menu anchor icon style */
// 	position: relative;
// 	display: -webkit-box;
// 	display: -ms-flexbox;
// 	display: flex;
// 	-webkit-box-pack: center;
// 	-ms-flex-pack: center;
// 	justify-content: center;
// 	-webkit-box-align: center;
// 	-ms-flex-align: center;
// 	align-items: center;
// 	cursor: pointer;
// 	font-size: 24px; /* font size, pertains to icon fonts specifically */
// 	width: 50px; /* width of anchor icon */
// 	height: 50px; /* height of anchor icon */
// 	text-align: center;
// 	color: white;
// 	background: #80C5EC;
// 	border-radius: 50%;
// 	outline: none;
// 	z-index: 100000;
// 	-webkit-transition: all 0.3s;
// 	transition: all 0.3s;
// }


// div.slideouticons div.iconswrapper{ /* DIV that flips over to reveal the hidden icons */
// 	position: absolute;
// 	margin: 0;
// 	top: 60px; /* vertical offset of icons wrapper from the top of main container */
// 	-webkit-transform: rotateY(180deg);
// 	transform: rotateY(180deg);
// 	-webkit-backface-visibility: hidden;
// 	backface-visibility: hidden;
// 	-webkit-transform-style: preserve-3d;
// 	transform-style: preserve-3d;
// 	-webkit-transition-delay: 0.5s;
// 	transition-delay: 0.5s;
// }


// div.slideouticons div.iconswrapper ul{
// 	position: relative;
// 	list-style: none;
// 	margin: 0;
// 	padding: 0;
// 	z-index: -1;
// }

// div.slideouticons div.iconswrapper ul li{
// 	margin-bottom: 10px;
// 	position: relative;
// 	opacity: 0;
// 	width: 50px; /* width of social icons */
// 	height: 50px; /* height of social icons */
// 	-webkit-transform: translateY(-100%) rotate(0);
// 	transform: translateY(-100%) rotate(0);
// 	-webkit-transition: all 0.5s;
// 	transition: all 0.5s;
// }


// div.slideouticons div.iconswrapper ul li a{
// 	display: -webkit-box;
// 	display: -ms-flexbox;
// 	display: flex;
// 	color: white;
// 	text-decoration: none;
// 	text-align: center;
// 	font-size: 24px; /* font size, pertains to icon fonts specifically */
// 	width: 100%;
// 	height: 100%;
// 	-webkit-box-align: center;
// 	-ms-flex-align: center;
// 	align-items: center;
// 	-webkit-box-pack: center;
// 	-ms-flex-pack: center;
// 	justify-content: center;
// 	text-align: center;
// 	background: #80C5EC; /* background color of icons */
// 	text-decoration: none;
// 	border-radius: 50%;
// 	-webkit-transition: all 0.3s;
// 	transition: all 0.3s;
// }


// div.slideouticons div.iconswrapper ul li a:hover{
// 	background: #515151; /* background color of icons on hover */
// 	color: white;
// }

// div.slideouticons input:checked ~ label.mainlabel{
// 	background: navy; /* background color of toggler icon when activated */
// }

// div.slideouticons input:checked ~ div.iconswrapper{ /* flip icons wrapper to reveal icons when activated */
// 	-webkit-transform: rotateY(0);
// 	transform: rotateY(0);
// 	-webkit-transition-delay: 0s;
// 	transition-delay: 0s;
// }

// div.slideouticons input:checked ~ div.iconswrapper ul li{ /* rotate and shift icons into view when activated */
// 	opacity: 1;
// 	-webkit-transform: translateY(0) rotate(360deg);
// 	transform: translateY(0) rotate(360deg);
// 	-webkit-transition: all 0.3s;
// 	transition: all 0.3s;
// }

// div.slideouticons input:checked ~ div.iconswrapper ul li:nth-of-type(1){
// 	-webkit-transition-delay: 0;
// 	transition-delay: 0;
// 	z-index: 4;
// }

// div.slideouticons input:checked ~ div.iconswrapper ul li:nth-of-type(2){
// 	-webkit-transition-delay: 0.3s;
// 	transition-delay: 0.3s; /* increment delay by 0.3s for each icon */
// 	z-index: 3; /* decrement z-index by 1 for each icon */
// }

// div.slideouticons input:checked ~ div.iconswrapper ul li:nth-of-type(3){
// 	-webkit-transition-delay: .6s;
// 	transition-delay: .6s;
// 	z-index: 2;
// }

// div.slideouticons input:checked ~ div.iconswrapper ul li:nth-of-type(4){
// 	-webkit-transition-delay: .9s;
// 	transition-delay: .9s;
// 	z-index: 1;
// }


// /* ########## Horizontal Version CSS ########## */

// div.slideouticons.horizontal div.iconswrapper{
// 	top: 0;
// 	left: 60px; /* horizontal offset of icons wrapper from the left of main container */
// }


// div.slideouticons.horizontal div.iconswrapper ul li{
// 	display: inline;
// 	float: left;
// 	margin-bottom: 0;
// 	margin-right: 10px;
// 	-webkit-transform: translateX(-100%) rotate(0);
// 	transform: translateX(-100%) rotate(0);
// }


// div.slideouticons.horizontal input:checked ~ div.iconswrapper ul li{
// 	-webkit-transform: translateX(0) rotate(360deg);
// 	transform: translateX(0) rotate(360deg);
// }

// </style>

// <!--[if lte IE 9]>
// 	<style>
	
// 		div.slideouticons div.iconswrapper{
// 			visibility: hidden;
// 		}
// 		div.slideouticons input:checked ~ div.iconswrapper{
// 			visibility: visible;
// 		}
	
// 	</style>

// <![endif]-->

// <!--[if lte IE 8]>
// 	<style>
	
// 		div.slideouticons{
// 			display: none;
// 		}

// 	</style>


// <![endif]-->

// */