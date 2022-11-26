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



// count


let counter=document.querySelectorAll('.count');
const speed=200;
window.addEventListener('load',(Event)=>{
	let intObserver=new IntersectionObserver(entries=>{
		entries.forEach(entry=>{
			if(entry.isIntersecting){
	 counter.forEach(counter=>{
var updateCount=()=>{
		const target=+counter.getAttribute('data-bs-target');
	const count=+counter.innerText;
	const increments=target/speed;
	console.log(increments)
	if(count<target){
counter.innerText=Math.ceil(count+increments);
setTimeout(updateCount, 30);
	}else{
		counter.innerText=target;
	}
}
updateCount();
})
			}
		})
	})
	counter.forEach((counter)=>{
		intObserver.observe(counter);
	})
})
