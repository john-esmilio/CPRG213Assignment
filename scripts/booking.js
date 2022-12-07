/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let daysSelected = 0;

const mondayBtn = document.getElementById("monday");
const tuesdayBtn = document.getElementById("tuesday");
const wednesdayBtn = document.getElementById("wednesday");
const thursdayBtn = document.getElementById("thursday");
const fridayBtn = document.getElementById("friday");

const fullBtn = document.getElementById("full");
const halfBtn = document.getElementById("half");
const clearBtn = document.getElementById("clear-button");

const calculatedCost = document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function monBtn(e){
  e.preventDefault();
  addClass(mondayBtn);
  if (mondayBtn.classList.contains('blue-hover')) {
    daysSelected += 1;
  }
  mondayBtn.classList.remove("blue-hover");
}

function tuesBtn(e) {
  e.preventDefault();
  addClass(tuesdayBtn);
  if (tuesdayBtn.classList.contains('blue-hover')) {
    daysSelected += 1;
  }
  tuesdayBtn.classList.remove("blue-hover");
}

function wedBtn(e) {
  e.preventDefault();
  addClass(wednesdayBtn);
  if (wednesdayBtn.classList.contains('blue-hover')) {
    daysSelected += 1;
  }
  wednesdayBtn.classList.remove("blue-hover");
}

function thursBtn(e) {
  e.preventDefault();
  addClass(thursdayBtn);
  if (thursdayBtn.classList.contains('blue-hover')) {
    daysSelected += 1;
  }
  thursdayBtn.classList.remove("blue-hover");
}

function friBtn(e) {
  e.preventDefault();
  addClass(fridayBtn);
  if (fridayBtn.classList.contains('blue-hover')) {
    daysSelected += 1;
  }
  fridayBtn.classList.remove("blue-hover");
}

function resetDays() {
  mondayBtn.classList.remove("clicked");
  mondayBtn.classList.add("blue-hover");
  tuesdayBtn.classList.remove("clicked");
  tuesdayBtn.classList.add("blue-hover");
  wednesdayBtn.classList.remove("clicked");
  wednesdayBtn.classList.add("blue-hover");
  thursdayBtn.classList.remove("clicked");
  thursdayBtn.classList.add("blue-hover");
  fridayBtn.classList.remove("clicked");
  fridayBtn.classList.add("blue-hover");
}

function addClass(e) {
  e.classList.add("clicked");
  e.classList.add("blue-hover");
}

mondayBtn.onclick = monBtn;
tuesdayBtn.onclick = tuesBtn;
wednesdayBtn.onclick = wedBtn;
thursdayBtn.onclick = thursBtn;
fridayBtn.onclick = friBtn;

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clrBtn(e){
  e.preventDefault();
  resetDays();
  addClass(clearBtn);
  halfBtn.classList.remove("clicked");
  fullBtn.classList.add("clicked");
  calculatedCost.textContent = 0;
  daysSelected = 0;
}

clearBtn.onclick = clrBtn;

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function hlfBtn(e){
  e.preventDefault();
  costPerDay = 20;
  halfBtn.classList.add("clicked");
  fullBtn.classList.remove("clicked");
  recalculate();
}

halfBtn.onclick = hlfBtn;

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fulBtn(e){
  e.preventDefault();
  costPerDay = 35;
  fullBtn.classList.add("clicked");
  halfBtn.classList.remove("clicked");
  recalculate();
}

fullBtn.onclick = fulBtn;

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
  // calculatedCost.innerHTML = `${costPerDay * daysSelected}`;
  calculatedCost.innerHTML =  costPerDay * daysSelected;
}