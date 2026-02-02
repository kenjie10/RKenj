document.addEventListener("DOMContentLoaded", function(){
    const words = ["Web Designer","Graphic Designer","Front-end Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    const typingSpeed = 100;
    const erasingSpeed= 50;
    const newWordDelay = 2000;

    function type(){
        if(charIndex < words[wordIndex].length){
            console.log(words[wordIndex].length)
            currentWord += words[wordIndex].charAt(charIndex);
            document.querySelector(".typing-animation").textContent = currentWord;
            charIndex++;
            setTimeout(type, typingSpeed);
        }else{
            setTimeout(erase, newWordDelay);
        }
    }

    function erase(){
        if(charIndex > 0){
            currentWord = currentWord.slice(0, -1);
            document.querySelector(".typing-animation").textContent = currentWord;
            charIndex--;
            setTimeout(erase, erasingSpeed)
        }else{
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    type();
});

const emailInput = document.getElementById('email');
const emailLabel = document.querySelector('label[for="email"]');

function emailValid(){

    const email = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
 }   

emailInput.addEventListener("input", () => {

   emailLabel.classList.toggle('notValid', !emailValid());

})





document.addEventListener("DOMContentLoaded", function () {

emailjs.init({
  publicKey: "1t2jsKbIZvSnbb3dG",
});

console.log("EmailJS:", emailjs);

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('status');

form.addEventListener("submit", function (e){
    e.preventDefault();
    console.log("submit fired")
    emailjs.sendForm(
        "service_3oafl4v",
        "template_15801p4",
        this
    ).then( () => {
        console.log('success')
        formStatus.textContent = "Message sent successfully.";
        formStatus.classList.add("success")
        form.reset();
    }, (error) => {
        formStatus.textContent = "Failed to send";
        
        console.error(error);
    });
});

});