
//  T Y P I N G   A N I M A T I O N
    const texts = "Hi, I'm Kim Louren Luna";
    let index = 0;
    let isDeleting = false;

    const typeEffect = () => {
    const greet = document.querySelector("#typingGreetings");

    // plain typed text only
    let visibleText = texts.substring(0, index);

    // I-FOFORMAT KAPAG KUMPLETRO NA
    let formatted = visibleText;

    if (formatted.includes("I'm")) {
        formatted = formatted.replace("I'm", `I'm <br class="md:hidden">`);
    }

    if (formatted.includes("Kim Louren Luna")) {
        formatted = formatted.replace(
            "Kim Louren Luna",
            `<span class="text-red-600">Kim Louren Luna</span>`
        );
    }

    greet.innerHTML = formatted + '<span class="cursor animate-pulse">|</span>';

    // typing
    if (!isDeleting) {
        index++;
        if (index === texts.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 10000); // tigil konti
            return;
        }
    } 
    // deleting
    else {
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }

    const speed = isDeleting ? 50 : 120;
    setTimeout(typeEffect, speed);
};

typeEffect();

// F A D I N G   T R A N S I T I O N
const subtitle = document.querySelector("#subtitle");
const stuDev = "Website Developer";
const contCreator = "Content Creator";
let isOriginal = true;

const fadeTransition = () => {
    // Fade out
    subtitle.classList.remove('opacity-100');
    subtitle.classList.add('opacity-0');

    setTimeout(() => {
        // Change text while invisible
        subtitle.innerHTML = isOriginal ? contCreator : stuDev;
        isOriginal = !isOriginal;

        // Fade in
        subtitle.classList.remove('opacity-0');
        subtitle.classList.add('opacity-100');

        // Repeat after a delay
        setTimeout(fadeTransition, 3000); // PALIT EVERY 3 SECONDS
    }, 1000); // Fade out duration
};

fadeTransition();

// S L I D E   I N   A N I M A T I O N   F O R   TEXTS
const aboutImage = document.querySelector(".about-image");
const aboutText = document.querySelector(".about");
const skillText = document.querySelector("#skillText");
const projects = document.querySelector("#projects");
const contacts = document.querySelector("#textContacts");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0)';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.1 });

if (aboutImage) {
    observer.observe(aboutImage);
}

if (skillText) {
    observer.observe(skillText);
}

if (projects) {
    observer.observe(projects);
}

if (contacts) {
    observer.observe(contacts);
}
