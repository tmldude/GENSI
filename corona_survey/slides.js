//--------------------------------
// Declaration of slides and boxes
//--------------------------------

// Slide 0

// Catch Internet Explorer users; incompatible browser
if (isIE() || isMobile()) {
  var slide0 = d3.select("svg").append("g")
    .attr("id", "slide0");
  slide0.append("rect")
    .style("fill", "white")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", bodyWidth)
    .attr("height", bodyHeight);
  slide0.append("text")
    .attr("class", "lead")
    .text("Your browser is not supported.")
    .attr("x", center - textWidth / 2)
    .attr("y", title_offset_top);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight)
    .text("Please us a different browser for this survey. ")
    .call(wrap, textWidth);
  document.getElementById("NextDiv").style.display="none";
} else {
  var slide_0 = d3.select("svg").append("g")
  .attr("id", "slide0");
slide_0.append("rect")
  .style("fill", "white")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_0.append("text")
  .attr("class", "lead")
  .text("")
  .attr("x", center - 170)
  .attr("y", title_offset_top);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight)
  .html("Welcome to the questionnaire about social contacts in the corona crisis. Thank you very much for your participation!")  .call(wrap, textWidth);

slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 4)
  .style("font-weight", "bold")
  .text("Who is conducting the research?")
  .call(wrap, textWidth);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 5)
  .text("The research is commissioned by Utrecht University. The research has been approved by the Ethical Review Committee of the Faculty of Social Sciences.")
  .call(wrap, textWidth);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 8)
  .style("font-weight", "bold")
  .text("How is the research conducted?")
  .call(wrap, textWidth);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 9)
  .text("You will be asked to complete a questionnaire about your social contacts during the corona crisis. This will take approximately 10 minutes. Some questions may be sensitive because they address topics that are subject to discussion. Therefore, you may leave each question unanswered if you prefer not to fill it in. You also have the right to stop the survey without giving any reason.")
  .call(wrap, textWidth);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 14)
  .style("font-weight", "bold")
  .text("How do we handle the data?")
  .call(wrap, textWidth);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 15)
  .text("To guarantee your privacy, we work according to a legal protocol. During and after the research, your personal data will not be shared with the researchers. Your answers cannot be traced back to you in any way. The research is therefore complete anonymously. ")
  .call(wrap, textWidth);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 19)
  .style("font-weight", "bold")
  .text("Nadere inlichtingen")
  .call(wrap, textWidth);
slide_0.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + lineHeight * 20)
  .text("For questions or comments about this questionnaire, please contact Dr. Tobias Stark, the project leader: t.h.stark@uu.nl. For independent advice about participating in this study, please contact Dr. Fenella Fleischmann (e- email: f.fleischmann@uu.nl). She knows the background of the research, but has nothing to do with the research itself. For any complaints about this research, please contact the university's complaints committee: complaintsofficial-fetcsocwet@uu .NL.")
  .call(wrap, textWidth);

}

// Slide 1
var slide1 = d3.select("svg").append("g")
  .attr("id", "slide1");
slide1.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide1.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight)
  .style("font-weight", "bold")
  .text("Do you agree to the following to participate in the study?")  .call(wrap, textWidth);
slide1.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide1 .slideText tspan').length + $('#slide1 .slideText').length))
  .text("I have been informed about the study. I have read and understood the written information about the study on the previous page. I know who I can contact to ask questions about the study. I have been given the opportunity to discuss my participation to think about the research and my participation is completely voluntary. I agree to the use of my answers for scientific research.")
  .call(wrap, textWidth);
slide1.style("display", "none");

// Slide 2

var slide2 = d3.select("svg").append("g")
  .attr("id", "slide2");
slide2.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide2.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight)
  .text("You cannot go back to your previous answers, so please check your answers carefully before moving on to the next question. If you accidentally answered a question incorrectly, you can report this at the end of the questionnaire. ")
  .call(wrap, textWidth);

slide2.style("display", "none");

// Slide 3       

var slide3 = d3.select("svg").append("g")
  .attr("id", "slide3");
slide3.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("The following questions are about your social network. By this we mean people you don't live with, but with whom you talk about things that are important to you.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("Please list 8 first names of people you consider to belong to your social network.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "one_at_a_time")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("If you want, you can also give nicknames or initials, as long as you remember who it is about.")
  .call(wrap, textWidth);
var textheight = $('#slide3 .slideText tspan').length + $('#slide3 .slideText').length;
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "first_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .text("If you have a lot of trouble filling the list with 8 names, you can choose to view the contacts list of your (mobile) phone, email, or Facebook.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "second_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Is there another person with whom you discuss important matters? Please enter his or her name or initials.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "final_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Thank you for entering the names. Click \"Continue\".")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.style("display", "none");

// Slide 4

var slide4 = d3.select("svg").append("g")
.attr("id", "slide4");
slide4.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide4.append("text")
.attr("class", "slideText numfri1")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("What is your relationship to these people?")
.call(wrap, textWidth);
slide4.append("text")
.attr("class", "slideText numfri2")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top + lineHeight * ($('#slide4 .slideText tspan').length + $('#slide4 .slideText').length-1))
.style("font-style", "italic")
.text("Drag the dots with your mouse to the different answer options at the bottom of the screen. The dots will change color when they end up in a box.")
.call(wrap, textWidth);
slide4.style("display", "none");

// Slide 5

var slide_5 = d3.select("svg").append("g")
.attr("id", "slide5");
slide_5.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide_5.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("Which of these people are men?")
.call(wrap, textWidth);
slide_5.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top + lineHeight * ($('#slide5 .slideText tspan').length + $('#slide5 .slideText').length-1))
.style("font-style", "italic")
.text("Select these people by clicking on the dot with the mouse.")
.call(wrap, textWidth);
slide_5.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top + lineHeight * ($('#slide5 .slideText tspan').length + $('#slide5 .slideText').length-1))
.style("font-style", "italic")
.text("If this doesn't apply to anyone, click continue.")
.call(wrap, textWidth);
slide_5.style("display", "none");


// Slide 6
var slide_6 = d3.select("svg").append("g")
.attr("id", "slide6");
slide_6.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide_6.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("Are these people younger than you, about the same age or older than you?")
.call(wrap, textWidth);
slide_6.append("text")
.attr("class", "slideText numfri2")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top + lineHeight * ($('#slide6 .slideText tspan').length + $('#slide6 .slideText').length-1))
.style("font-style", "italic")
.text("Drag the dots with your mouse to the different answer options at the bottom of the screen. The dots will change color when they end up in a box.")
.call(wrap, textWidth);
slide_6.style("display", "none");

// Slide 7
var slide_7 = d3.select("svg").append("g")
  .attr("id", "slide7");
slide_7.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("What is the highest education these people have completed?")
  .call(wrap, textWidth);
slide_7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("It's okay if you don't know exactly - please give your best guess.")
  .call(wrap, textWidth);
slide_7.style("display", "none");

// Slide 8
var slide_8 = d3.select("svg").append("g")
  .attr("id", "slide8");
slide_8.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which of these people works in healthcare?")
  .call(wrap, textWidth);
slide_8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide8 .slideText tspan').length + $('#slide8 .slideText').length-1))
  .style("font-style", "italic")
  .text("Select these people by clicking on the dot with the mouse.")
  .call(wrap, textWidth);
slide_8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide8 .slideText tspan').length + $('#slide8 .slideText').length-1))
  .style("font-style", "italic")
  .text("If this doesn't apply to anyone, click continue.")
  .call(wrap, textWidth);
slide_8.style("display", "none");


// Slide 9

var slide_9 = d3.select("svg").append("g")
  .attr("id", "slide9");
slide_9.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How often do you have contact with these people?")
  .call(wrap, textWidth);
slide_9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide9 .slideText tspan').length + $('#slide9 .slideText').length-1))
  .text("By contact we mean all forms of contact, such as meeting each other, calling, texting, e-mail and social media.")
  .call(wrap, textWidth);
slide_9.style("display", "none");

// Slide 10

var slide_10 = d3.select("svg").append("g")
  .attr("id", "slide10");
slide_10.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_10.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How close is your relationship with these people?")
  .call(wrap, textWidth);
slide_10.style("display", "none");

// Slide 11

var slide_11 = d3.select("svg").append("g")
  .attr("id", "slide11");
slide_11.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_11.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which people do you trust to tell you about the coronavirus?")
  .call(wrap, textWidth);
slide_11.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide11 .slideText tspan').length + $('#slide11 .slideText').length-1))
  .style("font-style", "italic")
  .text("Select these people by clicking on the dot with the mouse.")
  .call(wrap, textWidth);
slide_11.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide11 .slideText tspan').length + $('#slide11 .slideText').length-1))
  .style("font-style", "italic")
  .text("If this doesn't apply to anyone, click continue.")
  .call(wrap, textWidth);
slide_11.style("display", "none");

// // Slide 12

var slide_12 = d3.select("svg").append("g")
  .attr("id", "slide12")
slide_12.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_12.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which of these people have regular contact with each other?")
  .call(wrap, textWidth);
// slide_12.append("text")
//   .attr("class", "slideText")
//   .attr("id", "contactMet1")
//   .attr("x", center - (textWidth / 2))
//   .attr("y", text_offset_top + lineHeight * ($('#slide12 .slideText tspan').length + $('#slide12 .slideText').length-1))
//   .text("Als het gaat om ")
//   .call(wrap, textWidth);
slide_12.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet2")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide12 .slideText tspan').length + $('#slide12 .slideText').length-1))
  .text("Who is in contact with? By contact we mean all forms of contact, such as personal contact, contact via (mobile) telephone, post, email, text message, and other means of online and offline communication.")
  .call(wrap, textWidth);
slide_12.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet3")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide12 .slideText tspan').length + $('#slide12 .slideText').length-1))
  .style("font-style", "italic")
  .text("Select the people who are in contact with each other by clicking on the dot with the mouse. A line will appear indicating that the people are in contact with each other. Press the dot again to display the line disappear if the persons have no contact with each other.")
  .call(wrap, textWidth);
slide_12.style("display", "none");

// slide 13
// var slide_13 = d3.select("svg").append("g")
//   .attr("id", "slide13");
// slide_13.append("rect") 
//   .style("fill", "white")
//   .attr("class", "slide")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", bodyWidth)
//   .attr("height", bodyHeight);
// slide_13.append("text")
//   .attr("class", "slideText")
//   .attr("x", center - (textWidth / 2))
//   .attr("y", text_offset_top)
//   .text("Hoe strikt houden de mensen in uw netwerk zich op dit moment aan de coronamaatregelen van de regering?") 
//   .call(wrap, textWidth);
// slide_13.append("text")
//   .attr("class", "slideText")
//   .attr("x", center - (textWidth / 2))
//   .attr("y", text_offset_top + lineHeight * ($('#slide13 .slideText tspan').length + $('#slide13 .slideText').length-1))
//   .text("Sleep de bolletjes met uw muis naar de verschillende antwoordmogelijkheden onderaan het scherm. De bolletjes zullen van kleur veranderen wanneer deze in een vakje terecht zijn gekomen. ")
//   .call(wrap, textWidth);
// slide_13.style("display", "none");

// slide 14
// var slide_14 = d3.select("svg").append("g")
// .attr("id", "slide14");
// slide_14.append("rect") 
// .style("fill", "white")
// .attr("class", "slide")
// .attr("x", 0)
// .attr("y", 0)
// .attr("width", bodyWidth)
// .attr("height", bodyHeight);
// slide_14.append("text")
// .attr("class", "slideText")
// .attr("x", center - (textWidth / 2))
// .attr("y", text_offset_top)
// .text("Hoe strikt hebben deze personen zich de eerste twee maanden (april, mei) aan de coronamaatregelen gehouden?")
// .call(wrap, textWidth);
// slide_14.style("display", "none");

// slide 15
var slide_15 = d3.select("svg").append("g")
.attr("id", "slide15");
slide_15.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide_15.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("To what extent do these people think that the corona measures should be adhered to?")
.call(wrap, textWidth);
slide_15.style("display", "none");

// slide 16
var slide_16 = d3.select("svg").append("g")
.attr("id", "slide16");
slide_16.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide_16.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("To what extent do these people think the current corona measures are exaggerated?")
.call(wrap, textWidth);
slide_16.style("display", "none");

// slide 17
var slide_17 = d3.select("svg").append("g")
.attr("id", "slide17");
slide_17.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide_17.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("To what extent do these people think it is their civic duty to adhere to the corona measures?")
.call(wrap, textWidth);
slide_17.style("display", "none");

// slide 18
var slide_18 = d3.select("svg").append("g")
.attr("id", "slide18");
slide_18.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide_18.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("Suppose you are celebrating your birthday and these eight people are your guests. How likely are you to remind everyone to keep their distance when they are too close to each other?")
.call(wrap, textWidth);
slide_18.style("display", "none");

// slide 19
var slide_19 = d3.select("svg").append("g")
.attr("id", "slide19");
slide_19.append("rect") 
.style("fill", "white")
.attr("class", "slide")
.attr("x", 0)
.attr("y", 0)
.attr("width", bodyWidth)
.attr("height", bodyHeight);
slide_19.append("text")
.attr("class", "slideText")
.attr("x", center - (textWidth / 2))
.attr("y", text_offset_top)
.text("Suppose you are celebrating your birthday and these eight people are your guests. One of the guests says that he/she is not feeling well and has mild complaints. How likely is it that you will ask him/her to leave the birthday party ?")
.call(wrap, textWidth);
slide_19.style("display", "none");

//slide19_1
var slide_19_1 = d3.select("svg").append("g")
  .attr("id", "slide19_1");
slide_19_1.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_19_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("For the next three questions, a new bubble will appear next to the people from your social network: 'Yourself'. With this bubble you can indicate how you think about the questions that are asked to you. ")
  .call(wrap, textWidth);
slide_19_1.style("display", "none");
// slide 20
var slide_20 = d3.select("svg").append("g")
  .attr("id", "slide20");
slide_20.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_20.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which people belong to a risk group for the coronavirus? And yourself?")
  .call(wrap, textWidth);
slide_20.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide20 .slideText tspan').length + $('#slide20 .slideText').length-1))
  .text("It's okay if you don't know exactly - please give your best guess. ")
  .call(wrap, textWidth);
slide_20.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide20 .slideText tspan').length + $('#slide20 .slideText').length-1))
  .style("font-style", "italic")
  .text("Select these people by clicking on the dot with the mouse.")
  .call(wrap, textWidth);
slide_20.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide20 .slideText tspan').length + $('#slide20 .slideText').length-1))
  .style("font-style", "italic")
  .text("If this doesn't apply to anyone, click continue.")
  .call(wrap, textWidth);
  
slide_20.style("display", "none");

// slide 21
var slide_21 = d3.select("svg").append("g")
  .attr("id", "slide21");
slide_21.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_21.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which of these people do you think have been infected with the coronavirus? And yourself?")
  .call(wrap, textWidth);
slide_21.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide21 .slideText tspan').length + $('#slide21 .slideText').length-1))
  .text("It's okay if you don't know exactly - please give your best guess. ")
  .call(wrap, textWidth);
slide_21.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide21 .slideText tspan').length + $('#slide21 .slideText').length-1))
  .style("font-style", "italic")
  .text("Select these people by clicking on the dot with the mouse.")
  .call(wrap, textWidth);
slide_21.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide21 .slideText tspan').length + $('#slide21 .slideText').length-1))
  .style("font-style", "italic")
  .text("If this doesn't apply to anyone, click continue.")
  .call(wrap, textWidth);
slide_21.style("display", "none");

// slide 22
var slide_22 = d3.select("svg").append("g")
  .attr("id", "slide22");
slide_22.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_22.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("There is debate about whether we are being told the whole truth about the coronavirus. Some think that the mainstream media and political elite have a hidden agenda and are withholding the truth about the coronavirus. ")
  .call(wrap, textWidth);
slide_22.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide22 .slideText tspan').length + $('#slide22 .slideText').length-1))
  .text("To what extent do these people agree with this? And yourself?")
  .call(wrap, textWidth);
slide_22.style("display", "none");

// // slide 23
// var slide_23 = d3.select("svg").append("g")
//   .attr("id", "slide23");
// slide_23.append("rect") 
//   .style("fill", "white")
//   .attr("class", "slide")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", bodyWidth)
//   .attr("height", bodyHeight);
// slide_23.append("text")
//   .attr("class", "slideText")
//   .attr("x", center - (textWidth / 2))
//   .attr("y", text_offset_top)
//   .text("Stel u voor dat u op vakantie bent geweest naar Spanje. U weet dat u na terugkeer 10 dagen in thuisquarantaine zou moeten gaan. U heeft echter geen klachten. Hoe waarschijnlijk is het dat u in quarantaine zult gaan? ") 
//   .call(wrap, textWidth);
// slide_23.style("display", "none");

// // slide 24
// var slide_24 = d3.select("svg").append("g")
//   .attr("id", "slide24");
// slide_24.append("rect") 
//   .style("fill", "white")
//   .attr("class", "slide")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", bodyWidth)
//   .attr("height", bodyHeight);
// slide_24.append("text")
//   .attr("class", "slideText")
//   .attr("x", center - (textWidth / 2))
//   .attr("y", text_offset_top)
//   .text("Stel u voor dat u op vakantie bent geweest naar Spanje. U weet dat u na terugkeer 10 dagen in thuisquarantaine zou moeten gaan. U heeft echter geen klachten. Goede vrienden van u vinden dat u alsnog in thuisquarantaine behoort te gaan. Hoe waarschijnlijk is het dat u in quarantaine zult gaan?") 
//   .call(wrap, textWidth);
// slide_24.style("display", "none");

// // slide 25
// var slide_25 = d3.select("svg").append("g")
//   .attr("id", "slide25");
// slide_25.append("rect") 
//   .style("fill", "white")
//   .attr("class", "slide")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", bodyWidth)
//   .attr("height", bodyHeight);
// slide_25.append("text")
//   .attr("class", "slideText")
//   .attr("x", center - (textWidth / 2))
//   .attr("y", text_offset_top)
//   .text("Stel u voor dat u op vakantie bent geweest naar Spanje. U weet dat u na terugkeer 10 dagen in thuisquarantaine zou moeten gaan. U heeft echter geen klachten. Goede vrienden vinden dat u dan ook niet in thuisquarantaine behoort te gaan. Hoe waarschijnlijk is het dat u in quarantaine zult gaan? ") 
//   .call(wrap, textWidth);
// slide_25.style("display", "none");
// slide 26
var slide_26 = d3.select("svg").append("g")
  .attr("id", "slide26");
slide_26.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_26.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Imagine that you have been invited to a birthday. You know that the house is not big enough to keep a distance of 1.5 meters. This makes you doubt whether it is wise to go to the birthday. How likely is it that you will go to the birthday?")
  .call(wrap, textWidth);
slide_26.style("display", "none");
// slide 27
var slide_27 = d3.select("svg").append("g")
  .attr("id", "slide27");
slide_27.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_27.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Imagine that you have been invited to a birthday. You know that the house is not big enough to keep a distance of 1.5 meters. This makes you doubt whether it is wise to go to the birthday. Good friends of yours going to the birthday. How likely is it that you will go to the birthday?")  
  .call(wrap, textWidth);
slide_27.style("display", "none");
// slide 28
var slide_28 = d3.select("svg").append("g")
  .attr("id", "slide28");
slide_28.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_28.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Imagine that you have been invited to a birthday. You know that the house is not big enough to keep a distance of 1.5 meters. This makes you doubt whether it is wise to go to the birthday. Good friends of yours have decided not to go to the birthday because of this. How likely is it that you will go to the birthday?")
  .call(wrap, textWidth);
slide_28.style("display", "none");

var complete = d3.select("svg").append("g")
  .attr("id", "complete");
complete.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
complete.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Thank you for completing the questionnaire! You will now be redirected to the Motivaction website. Do not close this window!")
  .call(wrap, textWidth);
complete.style("display", "none");

var screenout = d3.select("svg").append("g")
  .attr("id", "screenout");
screenout.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
screenout.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("You have not agreed to participate in the survey, you are now being redirected to the Motivaction website. Do not close this window!")
  .call(wrap, textWidth);
screenout.style("display", "none");
