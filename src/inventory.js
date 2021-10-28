//parallel arrays
item =['logitechG201','finalmouseUltralight', 'ledLightStrip', 'duckyOne2Keyboard', 'MonsterEnergy(12 pack)']
price=[30,126,29,90,25]
qty=[5,2,10,4,5]
priceTqty =[150,252,290,360,125]

//alert(item[0]);
//TABLE
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < 5; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 4; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);

        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
    tbl.style.backgroundColor = "#bd93f9";
  }

  //sort table
  function sorted_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < 5; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 4; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);

        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
    tbl.style.backgroundColor = "#8be9fd";
  }








