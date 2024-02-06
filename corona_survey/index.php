<?php header("Content-Type: text/html; charset=utf-8"); ?>

<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
    <!--<link rel="stylesheet" href="bootstrap.min.css">-->
    <script src="jquery.min.js"></script>
  </head>
  <body>
    <script src="d3.v3.min.js" charset="utf-8"></script>
    <script src="jquery-1.11.0.js"></script>
    <script type="text/javascript">

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      

      // Prevent window close
      var hook = true;
      window.onbeforeunload = function() {
        if (hook) {       
          return "Are you sure that you want to end this survey? All of your answers will be lost.";
        }
      }
      function unhook() {
        hook=false;
      }
      var in_between_0 = Math.floor(Math.random() * 3);
      
      console.log(in_between_0);
      

      var bodyWidth = $(document).width();
      var bodyHeight = $(document).height() - 20;
      if (bodyWidth < 800) bodyWidth = 800;
      if (bodyHeight < 750) bodyHeight = 750;
      var center = bodyWidth / 2;
      var middle = bodyHeight / 200;
      
      var textWidth = 800;
      // var textWidth = .8 * bodyWidth;
      var keys = [];

      var text_offset_top = 180;
      var title_offset_top = 70;
      var lineHeight = 26;
      var nodeLine = 520;
      
      var q_window_width = 100,
          q_window_height = 100,
          backdrop_width = 500;

      // left and top values for individual questions
      var question_lnum = center - (textWidth / 2);
      var string_l = question_lnum.toString();
      var string_t = "150px";
      var string_radio = "250px";
      var string_r_t = "45%",
          q_margin_top = 200,
          q_margin_top_str = q_margin_top.toString();

      // bar with boxes for answers
      var boxbar_margin = 10,
          boxbar_label_margin = 3,
          bar_target_height = 100,
          bar_target_width = ((bodyWidth - (boxbar_margin * 4) - 20) / 5),
          bar3_target_width = ((bodyWidth - (boxbar_margin * 2) - 20) / 3),
          bar4_target_width = ((bodyWidth - (boxbar_margin * 3) - 20) / 4),
          bar5_target_width = ((bodyWidth - (boxbar_margin * 4) - 20) / 5),
          bar6_target_width = ((bodyWidth - (boxbar_margin * 5) - 20) / 6),
          bar_label_height = 25,
          boxbar_offset_x = 10,
          boxbar_offset_y = bodyHeight - bar_target_height;

      var currSlide = 0;
      var currQuestion = 1;
      var numAlters = 0;
      var askedAbout = 0;
      var lastAskedAbout = 0;
      var numAsked = 1;
      var lastAnswered = 0;
      var numOther = 0;
      var checked = false;
      var altered = false;
      var skipped = false;
      var currNode = null;
      var nodeColor = '#9CD4D4',
          selfColor = '#589191'
          maleColor = '#a8a4ff',
          friendsColor = '#42f477',
          kidsColor = '#ffc1d8',
          kinderwensColor = '#ce88ae',
          kinderloosColor = '#c0d183',
          kinderhulpColor = '#c8b6db',
          kinderpraatColor = '#ef8f8f',
          answerColor = '#abff48',
          answerColors = ['#ffffff', '#c4f1be', '#a2c3a4', '#869D96', '#525b76', '#999'];

          

      var startTime;
      var answers = [];
    </script>
    <script src="ie.js"></script>
    <script src="nodefunctions.js"></script>
    <script src="graph.js"></script>
    <script src="elementmanipulation.js"></script>    
    <script src="slides.js"></script>
    <script src="multiplechoiceelements.js"></script>
    <script src="shownext.js"></script>
    <script src="keypress.js"></script>

    <div class="header"><img src="Universiteit_Utrecht_Logo.png" alt="Universiteit Utrecht" class="logo" /></div>

    <div class="input-group radio_slide" display="none" id="self_strictness" method="get">
      <form id="self_strictness_form" display="none">
        <span class="slideText" style="">How strictly are you currently adhering to the government's corona measures?? </span><br><br>
        <div class="radio" onclick="$('#self_strictness_radio_0').prop('checked', true)"><label class="container"><input type="radio" id="self_strictness_radio_0" name= "self_strictness_radio" value=1><span class="checkmark"></span></label><span class="questionText">Not at all</span></div>
        <div class="radio" onclick="$('#self_strictness_radio_1').prop('checked', true)"><label class="container"><input type="radio" id="self_strictness_radio_1" name= "self_strictness_radio" value=2><span class="checkmark"></span></label><span class="questionText"> A little</span></div>
        <div class="radio" onclick="$('#self_strictness_radio_2').prop('checked', true)"><label class="container"><input type="radio" id="self_strictness_radio_2" name= "self_strictness_radio" value=3><span class="checkmark"></span></label><span class="questionText"> Pretty good</span></div>
        <div class="radio" onclick="$('#self_strictness_radio_3').prop('checked', true)"><label class="container"><input type="radio" id="self_strictness_radio_3" name= "self_strictness_radio" value=4><span class="checkmark"></span></label><span class="questionText"> Strict</span></div>
        <div class="radio" onclick="$('#self_strictness_radio_4').prop('checked', true)"><label class="container"><input type="radio" id="self_strictness_radio_4" name= "self_strictness_radio" value=5><span class="checkmark"></span></label><span class="questionText"> Very strict</span></div>
      </form>
    </div>


    <div class="input-group radio_slide" display="none" id="slide23_0" method="get">
      <span class="slideText" style="">Imagine you have been on holiday to Spain. You know that you must go into home quarantine for 10 days after your return. However, you have no complaints. How likely are you to quarantine?
 </span><br><br>
    </div>
    <div class="input-group radio_slide" display="none" id="slide23_1" method="get">
      <span class="slideText" style="">Imagine you have been on holiday to Spain. You know that you must go into home quarantine for 10 days after your return. However, you have no complaints. Good friends of yours believe that you should still go into home quarantine. How likely are you to quarantine?
 </span><br><br>
    </div>
    <div class="input-group radio_slide" display="none" id="slide23_2" method="get">
      <span class="slideText" style="">Imagine you have been on holiday to Spain. You know that you must go into home quarantine for 10 days after your return. However, you have no complaints. Good friends believe that you should not go into home quarantine. How likely are you to quarantine?
</span><br><br>
    </div>
    <div class="input-group radio_slide" display="none" id="slide23" method="get" style="">
      <form id="between_subject_radio_0" display="none">
        <span class="slideText">  </span><br><br>
        <div class="radio" onclick="$('#between_subject_radio_0_0').prop('checked', true)"><label class="container"><input type="radio" id="between_subject_radio_0_0" name="between_subject_radio_0" value=1><span class="checkmark"></span></label><span class="questionText">  Not at all likely</span></div>
        <div class="radio" onclick="$('#between_subject_radio_0_1').prop('checked', true)"><label class="container"><input type="radio" id="between_subject_radio_0_1" name="between_subject_radio_0" value=2><span class="checkmark"></span></label><span class="questionText">  Not likely</span></div>
        <div class="radio" onclick="$('#between_subject_radio_0_2').prop('checked', true)"><label class="container"><input type="radio" id="between_subject_radio_0_2" name="between_subject_radio_0" value=3><span class="checkmark"></span></label><span class="questionText">  Quite likely</span></div>
        <div class="radio" onclick="$('#between_subject_radio_0_3').prop('checked', true)"><label class="container"><input type="radio" id="between_subject_radio_0_3" name="between_subject_radio_0" value=4><span class="checkmark"></span></label><span class="questionText">  Probably</span></div>
        <div class="radio" onclick="$('#between_subject_radio_0_4').prop('checked', true)"><label class="container"><input type="radio" id="between_subject_radio_0_4" name="between_subject_radio_0" value=5><span class="checkmark"></span></label><span class="questionText">  Very likely</span></div>
      </form>
    </div>



    <div class="input-group radio_slide" display="none" id="slide24_0" method="get">
        <span class="slideText" style="">Imagine that you have been invited to a birthday party. You know that the house is not big enough to keep a distance of 1.5 meters. You are therefore unsure whether it is wise to go to the birthday party. How likely are you to go to the birthday? </span><br><br>
    </div>
    <div class="input-group radio_slide" display="none" id="slide24_1" method="get">
        <span class="slideText" style="">Imagine that you have been invited to a birthday party. You know that the house is not big enough to keep a distance of 1.5 meters. You are therefore unsure whether it is wise to go to the birthday party. Good friends of yours have decided not to go to the birthday party. How likely are you to go to the birthday?</span><br><br>
    </div>
    <div class="input-group radio_slide" display="none" id="slide24_2" method="get">
        <span class="slideText" style="">Imagine that you have been invited to a birthday party. You know that the house is not big enough to keep a distance of 1.5 meters. You are therefore unsure whether it is wise to go to the birthday party. However, good friends of yours will go to the birthday party. How likely are you to go to the birthday?</span><br><br>
    </div>

    <div class="input-group" display="none" id="moral_obligations" method="get">
      <table class = 'questionTable'>
        <thead>
          <tr>
            <td width = "25%">   </td>
            <th width = "15%" class = "tableHeaderValues"> Strongly disagree </th>
            <th width = "15%" class = "tableHeaderValues"> Disagree </th>
            <th width = "15%" class = "tableHeaderValues"> Agree somewhat </th>
            <th width = "15%" class = "tableHeaderValues"> Agree </th>
            <th width = "15%" class = "tableHeaderValues"> Totally agree </th>
          </tr>
        </thead>
        <tbody>
          
          <tr class="radio">
          <span class="slideText" style="width: 60%;">Do you agree or disagree with the following statements?</span><br><br><br>

<form id="tableRow1">
  <div class="radio">
    <th width="25%">
      <div class="tableHeaderCol">
        <span style = "text-align: left;">
          For me it is self-evident that people should adhere to the corona measures.
        </span>
                  </div>
                </th>
                <td width = "15%" onclick="$('#expected_compliance_0').prop('checked', true)">
                  <div class = "tableCell">
                      <label class="container">
                      <input type="radio" id="expected_compliance_0" name="expected_compliance" value=1 /> 
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#expected_compliance_1').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="expected_compliance_1" name="expected_compliance" value=2 /> 
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#expected_compliance_2').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="expected_compliance_2" name="expected_compliance" value=3 />  
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#expected_compliance_3').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="expected_compliance_3" name="expected_compliance" value=4 />  
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#expected_compliance_4').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="expected_compliance_4" name="expected_compliance" value=5 /> 
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
            
              </div>
            </form>
            
          </tr>
          <div class="radio">
            <tr class="radio">
              <form id = "tableRow2">
                <th>
                  <div class = "tableHeaderCol">
                    <span>
                    If stricter corona measures are introduced, people should adhere to them.

                    </span>
                  </div>
                </th>
                <td width = "15%" onclick="$('#future_compliance_0').prop('checked', true)">
                  <div class = "tableCell">
                  <label class="container">
                    <input type="radio" id="future_compliance_0" name="future_compliance" value=1 />
                    <span class="checkmark"></span>
                  </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#future_compliance_1').prop('checked', true)">
                  <div class = "tableCell">
                  <label class="container">
                    <input type="radio" id="future_compliance_1" name="future_compliance" value=2 />
                    <span class="checkmark"></span>
                  </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#future_compliance_2').prop('checked', true)">
                  <div class = "tableCell">
                  <label class="container">
                    <input type="radio" id="future_compliance_2" name="future_compliance" value=3 />
                    <span class="checkmark"></span>
                  </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#future_compliance_3').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="future_compliance_3" name="future_compliance" value=4 />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#future_compliance_4').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="future_compliance_4" name="future_compliance" value=5 />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
              </form>
            </tr>
          </div>
          <div class="radio">
            <tr class="radio">
              <form id = "tableRow1">
                <th>
                  <div class = "tableHeaderCol">
                    <span>
                    I blame others when they do not adhere to the corona measures.
                    </span>
                  </div>
                </th>
                <td width = "15%" onclick="$('#accountibility_0').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="accountibility_0" name="accountibility" value=1 class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#accountibility_1').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="accountibility_1" name="accountibility" value=2 class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#accountibility_2').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="accountibility_2" name="accountibility" value=3 class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#accountibility_3').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="accountibility_3" name="accountibility" value=4 class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#accountibility_4').prop('checked', true)">
                  <div class = "tableCell">    
                    <label class="container">      
                      <input type="radio" id="accountibility_4" name="accountibility" value=5 class = "radio"/> 
                      <span class="checkmark"></span>
                    </label>       
                  </div>
                </td> 
              </form>
            </tr>
          </div>
        </tbody>
          
      </table>
    </div>


    <div class="input-group" display="none" id="civil_obligations" method="get">
    <span class="slideText" style="">Do you agree or disagree with the following statements?</span><br><br><br>
      <table class = 'questionTable'>
        <thead>
          <tr>
            <td width = "25%"> </td>
            <th width = "15%" class = "tableHeaderValues"> Strongly disagree </th>
            <th width = "15%" class = "tableHeaderValues"> Disagree </th>
            <th width = "15%" class = "tableHeaderValues"> Agree somewhat </th>
            <th width = "15%" class = "tableHeaderValues"> Agree </th>
            <th width = "15%" class = "tableHeaderValues"> Totally agree </th>
          </tr>
        </thead>
        <tbody>
          <div class="radio">
            <tr class = "radio">
              <form id = "tableRow1">
                <th width = "25%">
                  <div class = "tableHeaderCol">
                    <span style = "text-align: left;">
                    I feel responsible not to infect other people with the coronavirus.
                    </span>
                  </div>
                </th>
                <td width = "15%" onclick="$('#self_responsibility_0').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="self_responsibility_0" name="self_responsibility" value="1" /> 
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#self_responsibility_1').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="self_responsibility_1" name="self_responsibility" value="2" /> 
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#self_responsibility_2').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="self_responsibility_2" name="self_responsibility" value="3" /> 
                      <span class="checkmark"></span>
                    </label> 
                  </div>
                </td> 
                <td width = "15%" onclick="$('#self_responsibility_3').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="self_responsibility_3" name="self_responsibility" value="4" />  
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#self_responsibility_4').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="self_responsibility_4" name="self_responsibility" value="5" /> 
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
              </form>
            </tr>
          </div>
          <div class="radio">
            <tr class = "radio">
              <form id = "tableRow2">
                <th>
                  <div class = "tableHeaderCol">
                    <span>
                    I believe it is my civic duty to adhere to the corona measures. </span>
                  </div>
                </th>
                <td width = "15%" onclick="$('#civil_duty_0').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="civil_duty_0" name="civil_duty" value="1" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#civil_duty_1').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="civil_duty_1" name="civil_duty" value="2" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#civil_duty_2').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="civil_duty_2" name="civil_duty" value="3" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#civil_duty_3').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="civil_duty_3" name="civil_duty" value="4" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#civil_duty_4').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="civil_duty_4" name="civil_duty" value="5" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
              </form>
            </tr>
          </div>
          <div class="radio">
            <tr class = "radio">
              <form id = "tableRow1">
                <th>
                  <div class = "tableHeaderCol">
                    <span>
                    Only if we all work together will we get the coronavirus under control. </span>
                  </div>
                </th>
                <td width = "15%" onclick="$('#cooperation_effectiveness_0').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="cooperation_effectiveness_0" name="cooperation_effectiveness" value="1" class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#cooperation_effectiveness_1').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="cooperation_effectiveness_1" name="cooperation_effectiveness" value="2" class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#cooperation_effectiveness_2').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="cooperation_effectiveness_2" name="cooperation_effectiveness" value="3" class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#cooperation_effectiveness_3').prop('checked', true)">
                  <div class = "tableCell">
                    <label class="container">
                      <input type="radio" id="cooperation_effectiveness_3" name="cooperation_effectiveness" value="4" class = "radio"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td> 
                <td width = "15%" onclick="$('#cooperation_effectiveness_4').prop('checked', true)">
                  <div class = "tableCell">  
                    <label class="container">        
                      <input type="radio" id="cooperation_effectiveness_4" name="cooperation_effectiveness" value="5" class = "radio"/> 
                      <span class="checkmark"></span>
                    </label>       
                  </div>
                </td> 
              </form>
            </tr>
          </div>
        </tbody>
          
      </table>
    </div>

    <div class="input-group radio_slide" display="none" id="gravity_situation" method="get">
      <form id="gravity_situation_form" display="none">
      <span class="slideText" style="">How bad do you think the current corona situation is in the Netherlands?</span><br><br>
        <div class="radio" onclick="$('#gravity_situation_radio_0').prop('checked', true)"><label class="container"><input type="radio" id="gravity_situation_radio_0" name="gravity_situation_radio" value=1><span class="checkmark"></span></label><span class="questionText">  Helemaal niet erg</span></div>
        <div class="radio" onclick="$('#gravity_situation_radio_1').prop('checked', true)"><label class="container"><input type="radio" id="gravity_situation_radio_1" name="gravity_situation_radio" value=2><span class="checkmark"></span></label><span class="questionText">  Niet erg</span></div>
        <div class="radio" onclick="$('#gravity_situation_radio_2').prop('checked', true)"><label class="container"><input type="radio" id="gravity_situation_radio_2" name="gravity_situation_radio" value=3><span class="checkmark"></span></label><span class="questionText">  Een beetje erg</span></div>
        <div class="radio" onclick="$('#gravity_situation_radio_3').prop('checked', true)"><label class="container"><input type="radio" id="gravity_situation_radio_3" name="gravity_situation_radio" value=4><span class="checkmark"></span></label><span class="questionText">  Erg</span></div>
        <div class="radio" onclick="$('#gravity_situation_radio_4').prop('checked', true)"><label class="container"><input type="radio" id="gravity_situation_radio_4" name="gravity_situation_radio" value=5><span class="checkmark"></span></label><span class="questionText">  Heel erg</span></div>
      </form>
    </div>

    <div class="input-group radio_slide" display="none" id="personal_impact_infection" method="get">
      <form id="personal_impact_infection_form" display="none">
      <span class="slideText" style="">How dangerous does it seem to you if you become infected by the coronavirus?</span><br><br>
        <div class="radio" onclick="$('#personal_impact_infection_radio_0').prop('checked', true)"><label class="container"><input type="radio" id="personal_impact_infection_radio_0" name="personal_impact_infection_radio" value=1><span class="checkmark"></span></label><span class="questionText">  Helemaal niet gevaarlijk</span></div>
        <div class="radio" onclick="$('#personal_impact_infection_radio_1').prop('checked', true)"><label class="container"><input type="radio" id="personal_impact_infection_radio_1" name="personal_impact_infection_radio" value=2><span class="checkmark"></span></label><span class="questionText">  Niet gevaarlijk</span></div>
        <div class="radio" onclick="$('#personal_impact_infection_radio_2').prop('checked', true)"><label class="container"><input type="radio" id="personal_impact_infection_radio_2" name="personal_impact_infection_radio" value=3><span class="checkmark"></span></label><span class="questionText">  Een beetje gevaarlijk</span></div>
        <div class="radio" onclick="$('#personal_impact_infection_radio_3').prop('checked', true)"><label class="container"><input type="radio" id="personal_impact_infection_radio_3" name="personal_impact_infection_radio" value=4><span class="checkmark"></span></label><span class="questionText">  Gevaarlijk</span></div>
        <div class="radio" onclick="$('#personal_impact_infection_radio_4').prop('checked', true)"><label class="container"><input type="radio" id="personal_impact_infection_radio_4" name="personal_impact_infection_radio" value=5><span class="checkmark"></span></label><span class="questionText">  Heel gevaarlijk</span></div>
      </form>
    </div>
    
    <div class="input-group radio_slide" display="none" id="slide13">
      
    <span class="slideText" style="">How strictly do these people <b>currently</b> adhere to the government's corona measures?</span><br><br>
        
        </div>
        <div class="input-group radio_slide" display="none" id="slide14">
          
            <span class="slideText" style="">How strictly did these people adhere to the corona measures during <b>the first two months (April, May)</b>?</span><br><br>
            
        </div>
    
        <div class="input-group radio_slide" display="none" id="feedback" method="get">
          <form id="feedback_form" display="none">
            <span class="slideText" style="">This is the end of the questionnaire. Do you have any comments about the questionnaire? If you accidentally entered something incorrectly, you can also report it here.</span><br><br>
            <textarea rows = "10" cols = "60" name = "feedback_field"></textarea>
          </form>
    </div>


    <div class="input-group" id="name_input" method="get" onsubmit="addAlter()">
      <input type="text" id="alterName" class="form-control" placeholder="Name" size="10">
      <button type="submit" id="alterSubmit" class="btn btn-default" position="inline" value="Enter" onclick="addAlter()">add</button>
    </div>


    
    <div class="popop_box" id="nonresponse_box">
      <div class="popup_box" id="popup">
      <p class="popup_text">You haven't fully answered the question yet! It would be good for the investigation if you answered the question completely. If you want to go to the next question, you can click “Continue” again.</p>
            <button class="btn btn-default" onclick="closePopup()">Close</button>
      </div>
    </div>

    <div class="popop_box" id="onlyone_box">
      <div class="popup_box" id="onlyOnePopup">
      <p class="popup_text">Enter a name.</p>
            <button class="btn btn-default" onclick="closeOnlyOnePopup()">Close</button>
      </div>
    </div>
    <div class="popop_box" id="fewAlters_box">
      <div class="popup_box" id="alterPopup">
      <p class="popup_text">You haven't mentioned 8 names yet. We would really appreciate it if you would mention 8 names. If you have trouble naming names, you may want to consult your contacts book on your phone, or your email, or via Facebook or a similar website. If you really can't think of any more names, you can continue with the questionnaire.</p>
            <button class="btn btn-default" onclick="closeAlterPopup()">Close</button>
      </div>
    </div>
    
    <div class="popop_box" id="reminderAlters_box">
      <div class="popup_box" id="reminderPopup">
            <p class="popup_text">If you have trouble naming names, you may want to consult your contacts book on your phone, or your email, or via Facebook or a similar website.</p>
            <button class="btn btn-default" onclick="closeReminderPopup()">Close</button>
      </div>
    </div>

    <div id="NextDiv">
      <input type="button" 
        class="btn btn-default" 
        value="Continue"
        id="Next"
        onclick="showNext(); pauseShowNext();" />
    </div>

    <div id="JaDiv">
      <input type="button" 
        class="btn btn-default" 
        value="Yes, I agree to participate"
        id="Ja"
        onclick="showNext(); pauseShowNext();" />
    </div>
    <div id="NeeDiv">
      <input type="button" 
        class="btn btn-default" 
        value="No, I do not agree to participate"
        id="Nee"
        onclick="currSlide = 100; showNext(); pauseShowNext();" />
    </div>


    
    <div id="submitForm">
      <form method="POST" action="<?php echo $_POST['returnpage']; ?>">
        <input type="hidden" name="nomem" value="<?php echo $_POST['nomem']; ?>">
        <input type="hidden" name="sh" value="<?php echo $_POST['sh']; ?>">
        <input type="hidden" name="lsi" value="<?php echo $_POST['lsi']; ?>">
        <input type="hidden" name="pli" value="<?php echo $_POST['pli']; ?>">
        <input type="hidden" name="spi" value="<?php echo $_POST['spi']; ?>">
        <input type="hidden" name="aqi" value="<?php echo $_POST['aqi']; ?>">
        <input type="hidden" name="cqi" value="<?php echo $_POST['cqi']; ?>">
        <input type="hidden" name="<?php echo $_POST['varname1']; ?>" value=""> <!-- Value leeg laten. --> 
        <input type="hidden" name="<?php echo $_POST['statusvarname1']; ?>" value="<?php echo $_POST['statusvarvalue1']; ?>">

        <input type="submit" name="<?php echo $_POST['nextvarname']; ?>" value="LISS" class="btn btn-default" /><!-- Value kan ook Volgende zijn, net wat past in jouw vragenlijst. -->
      </form>
    </div>
    
    <script type="text/javascript">
        $("#Next").css("left", center + 50 + textWidth / 2);
        console.log()
        $("#submitButton").css("left",window.innerWidth * .8);
    </script>
  </body>
</html>
