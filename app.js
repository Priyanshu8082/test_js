let imgBox=document.querySelector("#imgbox");
let qrimg=document.querySelector("#qrimg");
let qrText=document.querySelector("#qrtext");
function generateQr(){
   if(qrText.value.length>0){
      qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        let utterance = new SpeechSynthesisUtterance(qrText.value);
        utterance.lang = "hi-IN";   // Hindi
        utterance.rate = 1;         // normal speed
        utterance.pitch = 1;        // normal pitch
        speechSynthesis.speak(utterance);
   }
   else{
      setTimeout(()=>{
         qrText.classList.add("shake");
         qrText.style.border="3px solid red";
      },100)
      setTimeout(() => {
        qrText.classList.remove("shake"); 
         qrText.style.border="2px solid #494eea";
        let utterance = new SpeechSynthesisUtterance("chla ja boshdike,nikal lavde");
        utterance.lang = "hi-IN";   // Hindi
        utterance.rate = 1;         // normal speed
        utterance.pitch = 1;        // normal pitch
        speechSynthesis.speak(utterance);
      }, 500);
   }
}