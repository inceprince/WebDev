// const orginal=['Sachin Tendulkar', 'West Indies', 'Sachin Tendulkar', '264', 'Muttiah Muralitharan']
const orginal={
q1:"Sachin Tendulkar",
q2:"West Indies",
q3: "Sachin Tendulkar",
q4:"264",
q5:"Muttiah Muralitharan"
}


const form=document.querySelector('form');
form.addEventListener('submit',(event)=>{
   const data=new FormData(form);
   event.preventDefault();
   // const answer=Array.from(data.values())
  
   // let result=0;
   // for(let i=0;i<answer.length;i++){
   //    if(answer[i]===orginal[i]){
   //       result++;
   //    }
   // }
   let result=0;
   let out=[]
   for(let [key,value] of data.entries()){
      if(value===orginal[key]){
         result++
         out.push(value)
      }
   }

   const screen = document.querySelector(".screen");
   screen.innerText = `${result} out of 5 is Correct.\nCorrect Answers: ${out.join(", ")}`;
  
   

})
 
