let imgBox=document.querySelector("#imgbox");
let qrimg=document.querySelector("#qrimg");
let qrText=document.querySelector("#qrtext");
function generateQr(){
   if(qrText.value.length>0){
      qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
   }
   else{
      setTimeout(()=>{
         qrText.classList.add("shake");
         qrText.style.border="3px solid red";
      },2000)
      setTimeout(() => {
        qrText.classList.remove("shake"); 
         qrText.style.border="2px solid #494eea";
      }, 3000);
   }
}