let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo-header');
let logoSpan=document.querySelectorAll('.logo');
let navbar=document.querySelector('.navbar');
var array=Array.from(logoSpan);
window.addEventListener('DOMContentLoaded',()=>{
	setTimeout(()=>{
		array.forEach((span, index)=>{
			setTimeout(()=>{
				span.classList.add('active');
			
			},(index+1)*400)
		})
		
		setTimeout(()=>{
		array.forEach((span,index)=>{
				setTimeout(()=>{
					span.classList.remove('active');
					span.classList.add('fade');
				},(index+1)*50);
			})
		},2000)
		setTimeout(()=>{
			intro.style.top='-100vh'
			navbar.style.visibility='visible'

		},2300)
	})
})