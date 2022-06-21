function checkNumber(event) {
  const number = event.target.value;

  if (!number) return;

  if (number >= 0) {
    alert("Positive");
  } else {
    alert("Negative");
  }
}

function getBiggest(first, second, third) {
  let biggest = first.value;

  if (second.value > biggest) {
    biggest = second.value;
  }
  if (third.value > biggest) {
    biggest = third.value;
  }

  alert(biggest);
}

function checkUntilWeekend(event) {
  const day = event.target.value.toLowerCase();

  switch (day) {
    case "monday":
      alert("5 days");
      break;
    case "tuesday":
      alert("4 days");
      break;
    case "wednesday":
      alert("3 days");
      break;
    case "thursday":
      alert("2 days");
      break;
    case "friday":
      alert("1 day");
      break;
    case "saturday":
      alert("0 days");
      break;
    case "sunday":
      alert("0 days");
      break;
    default:
      alert("Sorry we didn't recognise that day");
      break;
  }
}

function getVegetablePrice(event) {
  const vegetable = event.target.value.toLowerCase();

  switch (vegetable) {
    case "potatoes":
    case "carrots":
      alert("£1 per kg");
      break;
    case "brocolli":
      alert("£2 per kg");
      break;
    case "cabbage":
      alert("£1.20 per kg");
      break;
    case "asparagus":
      alert("£1.50 per kg");
      break;
    default:
      alert("Sorry we don't have that vegetable");
      break;
  }
}
