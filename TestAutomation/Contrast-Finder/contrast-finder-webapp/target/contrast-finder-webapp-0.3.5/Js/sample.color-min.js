var $foregroundRed=document.querySelector("#foreground-red"),$foregroundGreen=document.querySelector("#foreground-green"),$foregroundBlue=document.querySelector("#foreground-blue"),$foregroundInput=document.querySelector("#foreground-input"),$foregroundSample=document.querySelector("#foreground-sample"),$foregroundSampleInvalid=document.querySelector("#foreground-sample-invalid"),$backgroundRed=document.querySelector("#background-red"),$backgroundGreen=document.querySelector("#background-green"),$backgroundBlue=document.querySelector("#background-blue"),$backgroundInput=document.querySelector("#background-input"),$backgroundSample=document.querySelector("#background-sample"),$backgroundSampleInvalid=document.querySelector("#background-sample-invalid"),foregroundRGBInputs=[$foregroundRed,$foregroundGreen,$foregroundBlue],backgroundRGBInputs=[$backgroundRed,$backgroundGreen,$backgroundBlue];$(document).ready(function(){changeBackgroundSample();changeForegroundSample();$foregroundInput.onchange=function(){changeForegroundSample()};$backgroundInput.onchange=function(){changeBackgroundSample()};for(var a=0;a<foregroundRGBInputs.length;a++){foregroundRGBInputs[a].onchange=function(){updateForegroundHexColor()}}for(var a=0;a<backgroundRGBInputs.length;a++){backgroundRGBInputs[a].onchange=function(){updateBackgroundHexColor()}}});function changeForegroundSample(){var a=$foregroundInput.value;a=isValidateColor(a.toString());if(a!=="false"){$foregroundSample.style.backgroundColor=a;$foregroundSample.classList.add("color-sample");$foregroundSample.classList.add("sample-bordered");$foregroundSampleInvalid.style.display="none";$foregroundInput.classList.remove("error");for(var b=0;b<foregroundRGBInputs.length;b++){foregroundRGBInputs[b].classList.remove("error")}changeForegroundRGBValues()}else{$foregroundSample.style.backgroundColor="rgba(0,0,0,0)";$foregroundSample.classList.remove("color-sample");$foregroundSample.classList.remove("sample-bordered");$foregroundSampleInvalid.style.display="inherit";$foregroundInput.classList.add("error");$foregroundRed.value="";$foregroundGreen.value="";$foregroundBlue.value=""}}function changeBackgroundSample(){var a=$backgroundInput.value;var c=document.getElementById("background-sample");a=isValidateColor(a.toString());if(a!=="false"){$backgroundSample.style.backgroundColor=a;$backgroundSample.classList.add("color-sample");$backgroundSample.classList.add("sample-bordered");$backgroundSampleInvalid.style.display="none";$backgroundInput.classList.remove("error");for(var b=0;b<backgroundRGBInputs.length;b++){backgroundRGBInputs[b].classList.remove("error")}changeBackgroundRGBValues()}else{$backgroundSample.style.backgroundColor="rgba(0,0,0,0)";$backgroundSample.classList.remove("color-sample");$backgroundSample.classList.remove("sample-bordered");$backgroundSampleInvalid.style.display="inherit";$backgroundInput.classList.add("error");$backgroundRed.value="";$backgroundGreen.value="";$backgroundBlue.value=""}}function isValidateColor(a){if(a.match(/^#[a-fA-F0-9]{6}$/i)!==null||a.match(/^#[a-fA-F0-9]{3}$/i)!==null){return a}else{if(a.match(/^#?([a-fA-F0-9]{6})$/)!==null||a.match(/^#?([a-fA-F0-9]{3})$/)!==null){a=setValidColor(a);return a}else{return"false"}}}function setValidColor(b){var a=b.splice(0,0,"#");return a}String.prototype.splice=function(a,c,b){return(this.slice(0,a)+b+this.slice(a+Math.abs(c)))};function changeForegroundRGBValues(){var a=$foregroundSample.style.backgroundColor.split("rgb(")[1].split(")")[0];$foregroundRed.value=parseInt(a.split(",")[0]);$foregroundGreen.value=parseInt(a.split(",")[1]);$foregroundBlue.value=parseInt(a.split(",")[2])}function changeBackgroundRGBValues(){var a=$backgroundSample.style.backgroundColor.split("rgb(")[1].split(")")[0];$backgroundRed.value=parseInt(a.split(",")[0]);$backgroundGreen.value=parseInt(a.split(",")[1]);$backgroundBlue.value=parseInt(a.split(",")[2])}function componentToHex(a){var b=a.toString(16);return b.length==1?"0"+b:b}function updateForegroundHexColor(){if(validTextRGBValues()){var d=componentToHex(parseInt($foregroundRed.value)),c=componentToHex(parseInt($foregroundGreen.value)),a=componentToHex(parseInt($foregroundBlue.value)),b="#"+d+c+a;$foregroundInput.value=b;$foregroundSample.style.backgroundColor=b;$foregroundInput.classList.remove("error");$foregroundSample.classList.add("color-sample");$foregroundSample.classList.add("sample-bordered");$foregroundSampleInvalid.style.display="none"}else{$foregroundInput.classList.add("error");$foregroundSample.style.backgroundColor="rgba(0,0,0,0)";$foregroundSample.classList.remove("color-sample");$foregroundSample.classList.remove("sample-bordered");$foregroundSampleInvalid.style.display="inherit"}}function updateBackgroundHexColor(){if(validBackgroundRGBValues()){var d=componentToHex(parseInt($backgroundRed.value)),c=componentToHex(parseInt($backgroundGreen.value)),a=componentToHex(parseInt($backgroundBlue.value)),b="#"+d+c+a;$backgroundInput.value=b;$backgroundSample.style.backgroundColor=b;$backgroundInput.classList.remove("error");$backgroundSample.classList.add("color-sample");$backgroundSample.classList.add("sample-bordered");$backgroundSampleInvalid.style.display="none"}else{$backgroundInput.classList.add("error");$backgroundSample.style.backgroundColor="rgba(0,0,0,0)";$backgroundSample.classList.remove("color-sample");$backgroundSample.classList.remove("sample-bordered");$backgroundSampleInvalid.style.display="inherit"}}function validTextRGBValues(){if($foregroundRed.value!==""){if(isNaN($foregroundRed.value)||$foregroundRed.value<0||$foregroundRed.value>255){console.log("test");$foregroundRed.classList.add("error");$foregroundRed.setAttribute("aria-invalid",true);return false}}if($foregroundGreen.value!==""){if(isNaN($foregroundGreen.value)||$foregroundGreen.value<0||$foregroundGreen.value>255){$foregroundGreen.classList.add("error");$foregroundGreen.setAttribute("aria-invalid",true);return false}}if($foregroundBlue.value!==""){if(isNaN($foregroundBlue.value)||$foregroundBlue.value<0||$foregroundBlue.value>255){$foregroundBlue.classList.add("error");$foregroundBlue.setAttribute("aria-invalid",true);return false}}for(var a=0;a<foregroundRGBInputs.length;a++){foregroundRGBInputs[a].classList.remove("error");foregroundRGBInputs[a].setAttribute("aria-invalid",false)}return true}function validBackgroundRGBValues(){if($backgroundRed.value!==""){if(isNaN($backgroundRed.value)||$backgroundRed.value<0||$backgroundRed.value>255){$backgroundRed.classList.add("error");$backgroundRed.setAttribute("aria-invalid",true);return false}}if($backgroundGreen.value!==""){if(isNaN($backgroundGreen.value)||$backgroundGreen.value<0||$backgroundGreen.value>255){$backgroundGreen.classList.add("error");$backgroundGreen.setAttribute("aria-invalid",true);return false}}if($backgroundBlue.value!==""){if(isNaN($backgroundBlue.value)||$backgroundBlue.value<0||$backgroundBlue.value>255){$backgroundBlue.classList.add("error");$backgroundBlue.setAttribute("aria-invalid",true);return false}}for(var a=0;a<backgroundRGBInputs.length;a++){backgroundRGBInputs[a].classList.remove("error");backgroundRGBInputs[a].setAttribute("aria-invalid",false)}return true};