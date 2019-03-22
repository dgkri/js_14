
// main function, in which i used all the below functions
function timeAdder(value1 = 1, label1 = "second", value2 = 1, label2 = "minute"){
  if(!validInput(value1, label1, value2, label2)){
    console.log("Inputs are Invalid");
    return;
  }

  let sum = (value1*convertToSeconds(label1)) + (value2*convertToSeconds(label2));
  return convertToHigherUnits(sum);

}

//checking wether the whole input is valid or not
function validInput(value1, label1, value2, label2){
  if(validValue(value1) && validValue(value2) && Boolean(validLabel(label1)) && Boolean(validLabel(label2)))
  {
    if((validLabel(label1) === "singular" && value1 === 1) || (validLabel(label1) === "plural" && value1 > 1))
    {
      if((validLabel(label2) === "singular" && value2 === 1) || (validLabel(label2) === "plural" && value2 > 1)){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }else{
    return false;
  }
}

// checking wether the input_values are valid or not and give Boolean output
function validValue(value){
  if(typeof(value)==='number' && value >=0){
    return true;
  }
  else{
    return false;
  }
}

//checking wether the input_labels are valid or not and give String output
function validLabel(label){
  switch(label){
    case "second":
    case "minute":
    case "hour":
    case "day":
      return "singular";
    case "seconds":
    case "minutes":
    case "hours":
    case "days":
      return "plural";
    default:
      return false;
  }
}

// converting other units (like days, day, hours, hour, minutes, minute) to seconds
function convertToSeconds(label){
  switch(label){
    case "days":
    case "day":
      return 86400;
    case "hours":
    case "hour":
      return 3600;
    case "minutes":
    case "minute":
      return 60;
    default:
      return 1;
  }
}

// converting seconds to higher units like(days, day, hours, hour, minutes, minute etc)
function convertToHigherUnits(val){
  if(val % 60 === 0){
    if(val % 3600 === 0){
      if(val % 86400 === 0){
        if(val/86400 !== 1){
          return [val/86400,"days"];
        }
        else{
          return [1,"day"];
        }
      }
      else{
        if(val/3600 !== 1){
          return [val/3600,"hours"];
        }
        else{
          return [1,"hour"];
        }
      }
    }
    else{
      if(val/60 !== 1){
        return [val/60,"minutes"];
      }
      else{
        return [1,"minute"];
      }
    }
  }
  else{
    if(val !== 1){
      return [val,"seconds"];
    }
    else{
      return [val,"second"];
    }
  }
}



/// logging
console.log(timeAdder());// output default values
let output = timeAdder(117,"minutes",3,"minutes") ;// input your values here
console.log(output);
