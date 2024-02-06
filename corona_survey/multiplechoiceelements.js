// Boxes indicating frequency into which nodes are dragged (3, 4, 5 or 6 categories)
var threeBar = d3.select("svg").append("g")
  .attr("id", "threeBar")
  .style("display", "none")

threeBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "one")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y)
  .attr("width", bar3_target_width)
  .attr("height", bar_target_height);

threeBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "one_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar3_target_width)
  .attr("height", bar_label_height);

threeBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "two")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar3_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y)
  .attr("width", bar3_target_width)
  .attr("height", bar_target_height);

threeBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "two_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar3_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar3_target_width)
  .attr("height", bar_label_height); 

threeBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "three")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar3_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y)
  .attr("width", bar3_target_width)
  .attr("height", bar_target_height);

threeBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "three_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar3_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar3_target_width)
  .attr("height", bar_label_height);
      
var fourBar = d3.select("svg").append("g")
  .attr("id", "fourBar")
  .style("display", "none");

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "several")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);

fourBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "one_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar4_target_width)
  .attr("height", bar_label_height);

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "daily")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar4_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);

fourBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "two_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar4_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar4_target_width)
  .attr("height", bar_label_height); 

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "multiple")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar4_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);
  
fourBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "three_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar4_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar4_target_width)
  .attr("height", bar_label_height);

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "weekly")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar4_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);

fourBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "three_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar4_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar4_target_width)
  .attr("height", bar_label_height);

var fiveBar = d3.select("svg").append("g")
  .attr("id", "fiveBar")
  .style("display", "none");

fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "one")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y)
  .attr("width", bar5_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "one_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);


fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "two")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y)
  .attr("width", bar5_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "two_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height); 


fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "three")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y)
  .attr("width", bar5_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "three_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);


fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "four")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y)
  .attr("width", bar5_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "four_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "five")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y)
  .attr("width", bar5_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "five_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

var sixBar = d3.select("svg").append("g")
  .attr("id", "sixBar")
  .style("display", "none");

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "one")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "one_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);


sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "two")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar6_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "two_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar6_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height); 


sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "three")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "three_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);


sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "four")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "four_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "five")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "five_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "six")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 5)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "six_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 5)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);


// Boxes with labels
var relationship_labels = d3.select("svg").append("g")
  .attr("id", "relationship_labels")
  .style("display", "none")
relationship_labels.append("text")
  .attr("class", "bar_text")
  .text("Partner")
  .attr("x", boxbar_offset_x + (bar6_target_width / 2) - ("Partner".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);
relationship_labels.append("text")
  .attr("class", "bar_text")
  .text("A friend")
  .attr("x", boxbar_offset_x + bar6_target_width + boxbar_margin + (bar6_target_width / 2) - ("Een vriend/vriendin".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);
relationship_labels.append("text")
  .attr("class", "bar_text")
  .text("Family member")
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 2 + (bar6_target_width / 2) - ("Familielid".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);
relationship_labels.append("text")
  .attr("class", "bar_text")
  .text("Neighbor")
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 3 + (bar6_target_width / 2) - ("Buurtgenoot".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);
relationship_labels.append("text")
  .attr("class", "bar_text")
  .text("Colleague")
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 4 + (bar6_target_width / 2) - ("Collega".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);
relationship_labels.append("text")
  .attr("class", "bar_text")
  .text("Other")
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 5 + (bar6_target_width / 2) - ("Anders".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var relative_age_labels = d3.select("svg").append("g")
  .attr("id", "relative_age_labels")
  .style("display", "none")

relative_age_labels.append("text")
  .attr("class", "bar_text")
  .text("Much younger")
  .attr("x", boxbar_offset_x + (bar5_target_width / 2) - ("Veel jonger".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

relative_age_labels.append("text")
  .attr("class", "bar_text")
  .text("Younger")
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin + (bar5_target_width / 2) - ("Jonger".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

relative_age_labels.append("text")
  .attr("class", "bar_text")
  .text("About the same age")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + (bar5_target_width / 2) - ("Ongeveer even oud".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

relative_age_labels.append("text")
  .attr("class", "bar_text")
  .text("Parent")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + (bar5_target_width / 2) - ("Ouder".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

relative_age_labels.append("text")
  .attr("class", "bar_text")
  .text("Much older")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + (bar5_target_width / 2) - ("Veel ouder".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var education_labels = d3.select("svg").append("g")
  .attr("id", "education_labels")
  .style("display", "none")

education_labels.append("text")
  .attr("class", "bar_text")
  .text("Primary/high school")
  .attr("x", boxbar_offset_x + (bar3_target_width / 2) - ("Basisschool/middelbare school".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

education_labels.append("text")
  .attr("class", "bar_text")
  .text("MBO")
  .attr("x", boxbar_offset_x + bar3_target_width + boxbar_margin + (bar3_target_width / 2) - ("MBO".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

education_labels.append("text")
  .attr("class", "bar_text")
  .text("HBO/university")
  .attr("x", boxbar_offset_x + (bar3_target_width + boxbar_margin) * 2 + (bar3_target_width / 2) - ("HBO/universiteit".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var frequency_labels = d3.select("svg").append("g")
  .attr("id", "frequency_labels")
  .style("display", "none")

frequency_labels.append("text")
  .attr("class", "bar_text")
  .text("Less than once a week")
  .attr("x", boxbar_offset_x + (bar5_target_width / 2) - ("Minder dan een keer per week".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

frequency_labels.append("text")
  .attr("class", "bar_text")
  .text("Once a week")
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin + (bar5_target_width / 2) - ("Een keer per week".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

frequency_labels.append("text")
  .attr("class", "bar_text")
  .text("Several times a week")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + (bar5_target_width / 2) - ("Meerdere keren per week".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

frequency_labels.append("text")
  .attr("class", "bar_text")
  .text("Every other day")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + (bar5_target_width / 2) - ("Om de dag".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

frequency_labels.append("text")
  .attr("class", "bar_text")
  .text("Daily")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + (bar5_target_width / 2) - ("Dagelijks".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var closeness_labels = d3.select("svg").append("g")
  .attr("id", "closeness_labels")
  .style("display", "none")

closeness_labels.append("text")
  .attr("class", "bar_text")
  .text("Not at all tight")
  .attr("x", boxbar_offset_x + (bar5_target_width / 2) - ("Helemaal niet hecht".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

closeness_labels.append("text")
  .attr("class", "bar_text")
  .text("Not attached")
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin + (bar5_target_width / 2) - ("Niet hecht".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

closeness_labels.append("text")
  .attr("class", "bar_text")
  .text("A bit tight")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + (bar5_target_width / 2) - ("Een beetje hecht".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

closeness_labels.append("text")
  .attr("class", "bar_text")
  .text("close")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + (bar5_target_width / 2) - ("Hecht".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

closeness_labels.append("text")
  .attr("class", "bar_text")
  .text("Very close")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + (bar5_target_width / 2) - ("Heel hecht".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var compliance_labels = d3.select("svg").append("g")
  .attr("id", "compliance_labels")
  .style("display", "none")

compliance_labels.append("text")
  .attr("class", "bar_text")
  .text("Not at all")
  .attr("x", boxbar_offset_x + (bar5_target_width / 2) - ("Helemaal niet".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

compliance_labels.append("text")
  .attr("class", "bar_text")
  .text("A little")
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin + (bar5_target_width / 2) - ("Een beetje".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

compliance_labels.append("text")
  .attr("class", "bar_text")
  .text("Pretty good")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + (bar5_target_width / 2) - ("Best wel".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

compliance_labels.append("text")
  .attr("class", "bar_text")
  .text("Strict")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + (bar5_target_width / 2) - ("Strikt".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

compliance_labels.append("text")
  .attr("class", "bar_text")
  .text("Very strict")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + (bar5_target_width / 2) - ("Heel strikt".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var norms_labels = d3.select("svg").append("g")
  .attr("id", "norms_labels")
  .style("display", "none")

norms_labels.append("text")
  .attr("class", "bar_text")
  .text("Not at all")
  .attr("x", boxbar_offset_x + (bar5_target_width / 2) - ("Helemaal niet".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

norms_labels.append("text")
  .attr("class", "bar_text")
  .text("Not")
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin + (bar5_target_width / 2) - ("Niet".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

norms_labels.append("text")
  .attr("class", "bar_text")
  .text("A little")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + (bar5_target_width / 2) - ("Een beetje".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

norms_labels.append("text")
  .attr("class", "bar_text")
  .text("Very")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + (bar5_target_width / 2) - ("Erg".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

norms_labels.append("text")
  .attr("class", "bar_text")
  .text("Very much")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + (bar5_target_width / 2) - ("Heel erg".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var social_sanctions_labels = d3.select("svg").append("g")
  .attr("id", "social_sanctions_labels")
  .style("display", "none")

social_sanctions_labels.append("text")
  .attr("class", "bar_text")
  .text("Not at all likely")
  .attr("x", boxbar_offset_x + (bar5_target_width / 2) - ("Helemaal niet waarschijnlijk".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

social_sanctions_labels.append("text")
  .attr("class", "bar_text")
  .text("Not likely")
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin + (bar5_target_width / 2) - ("Niet echt waarschijnlijk".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

social_sanctions_labels.append("text")
  .attr("class", "bar_text")
  .text("Somewhat probably")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + (bar5_target_width / 2) - ("Een beetje waarschijnlijk".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

social_sanctions_labels.append("text")
  .attr("class", "bar_text")
  .text("Probably")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + (bar5_target_width / 2) - ("Waarschijnlijk".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

social_sanctions_labels.append("text")
  .attr("class", "bar_text")
  .text("Very likely")
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + (bar5_target_width / 2) - ("Zeer waarschijnlijk".length * 3))
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

restart();