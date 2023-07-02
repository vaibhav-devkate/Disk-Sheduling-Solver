

function mod(x){
  if(x>0){
return x;
    }
    else {
      return x/-1;
    }
}

function sumArrayElements(arr) {
  
  var temp =[];
  for(var i =0;i<arr.length - 1;i++){
    let j=i+1;
    temp[i]=mod(arr[i]-arr[j]);
  }

  var sum = 0;
  for (var i = 0; i < temp.length; i++) {
    sum += temp[i];
  }
  return sum;
}

function fcfs(size,head) {
  
    var newArray = [...numbers];
    newArray.unshift(head);

    return newArray;
}


function sstf(size,head) {
    
    var newArray = [...numbers];
    var fc =[];
    for(var i =0;i<newArray.length;i++){
     
      fc[i]=mod(head-newArray[i]);
    }

    let minValue = fc[0];
    let minIndex = 0;
  
    for (let i = 1; i < fc.length; i++) {
      if (fc[i] < minValue) {
        minValue = fc[i];
        minIndex = i;
      }
    }

    var ascending=[];
    var descending=[];

   for(let i=0;i<newArray.length;i++){
    if(newArray[i]<head){
      
      descending.push(newArray[i]);
    }
    else{
      ascending.push(newArray[i]);
    }
   }

   ascending.sort((a, b) => a - b);
   descending.sort((a, b) => b - a);
   var mergedArray=[];
   if(newArray[minIndex]<head){
    mergedArray = descending.concat(ascending);
   }
   else{
    mergedArray = ascending.concat(descending);
   }
   mergedArray.unshift(head); 

    return mergedArray;
   
}


function scan(size,head,direction) {
  var newArray = [...numbers];

  let minValue = newArray[0];
  let minIndex = 0;
  let maxValue = newArray[0];
  let maxIndex = 0;

  for (let i = 1; i < newArray.length; i++) {
    if (newArray[i] > maxValue) {
      maxValue = newArray[i];
      maxIndex = i;
    }
    if (newArray[i] < minValue) {
      minValue = newArray[i];
      minIndex = i;
    }
  }

  var ascending=[];
  var descending=[];
  
 for(let i=0;i<newArray.length;i++){
  if(newArray[i]<head){
    
    descending.push(newArray[i]);
  }
  else{
    ascending.push(newArray[i]);
  }
 }

 ascending.sort((a, b) => a - b);
 descending.sort((a, b) => b - a);

 var mergedArray=[];

  if(direction===1){

   descending.push(0);
   mergedArray = descending.concat(ascending);
   
  }
  else{
    ascending.push(size-1);
    mergedArray = ascending.concat(descending);
  }

  mergedArray.unshift(head); 

  return mergedArray;
}



function look(size,head,direction) {

  var newArray = [...numbers];

  let minValue = newArray[0];
  let minIndex = 0;
  let maxValue = newArray[0];
  let maxIndex = 0;

  for (let i = 1; i < newArray.length; i++) {
    if (newArray[i] > maxValue) {
      maxValue = newArray[i];
      maxIndex = i;
    }
    if (newArray[i] < minValue) {
      minValue = newArray[i];
      minIndex = i;
    }
  }

  var ascending=[];
  var descending=[];
  
 for(let i=0;i<newArray.length;i++){
  if(newArray[i]<head){
    
    descending.push(newArray[i]);
  }
  else{
    ascending.push(newArray[i]);
  }
 }

 ascending.sort((a, b) => a - b);
 descending.sort((a, b) => b - a);

 var mergedArray=[];

  if(direction===1){

   mergedArray = descending.concat(ascending);
   
  }
  else{
    mergedArray = ascending.concat(descending);
  }

  mergedArray.unshift(head); 

  return mergedArray;

}


// Initialize an empty array
var numbers = []; 
 // Get the table body element
var tableBody = document.querySelector("#myTable tbody");

// Create a table row
var row = document.createElement("tr");


// Add the row to the table body
tableBody.appendChild(row);
 
document.addEventListener('DOMContentLoaded', function() {
  var inputElement = document.getElementById('numInput');

  inputElement.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
     
      addToArray();
    }
  });  
});

function addToArray() {
  var input = document.getElementById("numInput");
  var value = parseInt(input.value);

 
  if (!isNaN(value)) {
    numbers.push(value); // Add the value to the array
    input.value = ""; // Clear the input field
  }

  var cellCount = row.cells.length;

  // Delete cells starting from the last one
  for (var i = cellCount - 1; i >= 0; i--) {
    row.deleteCell(i);
  }


 // Loop through the array and generate table cells
 for (var i = 0; i < numbers.length; i++) {
   var cell = document.createElement("td");
   cell.textContent = numbers[i];
   row.appendChild(cell);
 }
}

const mySelect = document.getElementById('selector');
const extraOptionContainer = document.getElementById('extraOptionContainer');

mySelect.addEventListener('change', function() {
  const selectedValue = mySelect.value;
  
  if (selectedValue === 'scan' || selectedValue === 'look') {
    extraOptionContainer.style.display = 'block';
  } else {
    extraOptionContainer.style.display = 'none';
  }
});
 

//var xArray = [50,82,170,43,140,24,16,190];
//var yArray = [0,1,2,3,4,5,6,7];

function y_array_value(xarray){
  var yArray=[];
  for(var i =0;i<xarray.length;i++){
  
    yArray[i]=i;
  }
  return yArray;
}



function dataentry(size1){

// Define Layout
  var layout = {
    //xaxis: {range: [0, 200], title: "Square Meters"},
    //yaxis: {range: [7,0], title: "Price in Millions"},  
   // title: "Graph Representation",
    xaxis: {
      title: "Disk Requests",
      range: [0, size1],
      autorange: false,
      showgrid: false,
      zeroline: false,
    },
    yaxis: {
     // title: "Square Meters",
      range: [numbers.length+2,0],
      autorange: false,
      showgrid: false,
      //zeroline: false,
    },
  };

  return layout;
}


let btn = document.getElementById("btn");
btn.addEventListener("click", () => {

  const size1 = document.getElementById("size").value;
  const head = document.getElementById("head").value;

  

  let x=[];

  if (document.getElementById('selector').value == "fcfs") {
      x=fcfs(Number(size1),Number(head));
    }
  if (document.getElementById('selector').value == "sstf") {
      x=sstf(Number(size1),Number(head));
    }  
  if (document.getElementById('selector').value == "scan") {
   var a= document.getElementById('extraOption').value;
      x=scan(Number(size1),Number(head),Number(a));
    }
  if (document.getElementById('selector').value == "look") {
    var b= document.getElementById('extraOption').value;
      x=look(Number(size1),Number(head),Number(b));
    }  
  
  document.getElementById("demo").innerHTML = "Seek Time: "+sumArrayElements(x);
   
  // Define Data
  var data = [{
  x: x,
  y: y_array_value(x),
  mode:"lines+markers",
  line: {
    color: 'rgb(55, 128, 191)',
    width: 3
  },
  marker: {
    color: 'rgb(219, 64, 82)',
    size: 10
  }
 }];

  layout = dataentry(Number(size1)); 

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

}

)


let rst = document.getElementById("rst");
rst.addEventListener("click", () => {
  location.reload();
})
