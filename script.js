// ======================================
// FOR YOU PREMIUM SPICES
// script.js
// ======================================


// Smooth scrolling for navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});




// Navbar background while scrolling

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(35,25,15,.95)";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

        navbar.style.padding = "12px 7%";

    }

    else {

        navbar.style.background = "rgba(30,20,10,.45)";

        navbar.style.boxShadow = "none";

        navbar.style.padding = "15px 7%";

    }

});




// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".about, .product-card, .feature, .contact-box"
);

function revealOnScroll() {

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);




// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};




// Gallery Click Zoom

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.className = "popup";

        popup.innerHTML = `

        <span class="close">&times;</span>

        <img src="${img.src}">

        `;

        document.body.appendChild(popup);

        popup.onclick = () => popup.remove();

    });

});




// Loading Animation

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});




// ======================================
// Floating WhatsApp Button
// ======================================

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/918977970909?text=Hello%20FOR%20YOU%20Premium%20Spices,%20I%20would%20like%20to%20know%20more%20about%20your%20products.";

whatsapp.target = "_blank";

whatsapp.className = "whatsapp";

whatsapp.innerHTML = '<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);
const english = {

    home: "Home",

    about: "About",

    products: "Products",

    gallery: "Gallery",

    contact: "Contact",

    title: "FOR YOU",

    subtitle: "PREMIUM SPICES",

    caption: "THE ORIGINAL GUNTUR KARAM",

    desc: "100% Pure • Fresh • Hygienically Packed",

    explore: "Explore Products",

    contactbtn: "Contact Us"

};



const telugu = {

    home: "హోమ్",

    about: "మా గురించి",

    products: "ఉత్పత్తులు",

    gallery: "గ్యాలరీ",

    contact: "సంప్రదించండి",

    title: "ఫర్ యూ",

    subtitle: "ప్రీమియం మసాలాలు",

    caption: "అసలైన గుంటూరు కారం",

    desc: "100% స్వచ్ఛమైనది • తాజాది • పరిశుభ్రంగా ప్యాక్ చేయబడింది",

    explore: "ఉత్పత్తులను చూడండి",

    contactbtn: "సంప్రదించండి"

};



function changeLanguage(lang) {

    document.getElementById("navHome").innerHTML = lang.home;

    document.getElementById("navAbout").innerHTML = lang.about;

    document.getElementById("navProducts").innerHTML = lang.products;

    document.getElementById("navGallery").innerHTML = lang.gallery;

    document.getElementById("navContact").innerHTML = lang.contact;

    document.getElementById("heroTitle").innerHTML = lang.title;

    document.getElementById("heroSubTitle").innerHTML = lang.subtitle;

    document.getElementById("heroCaption").innerHTML = lang.caption;

    document.getElementById("heroDesc").innerHTML = lang.desc;

    document.getElementById("exploreBtn").innerHTML = lang.explore;

    document.getElementById("contactBtn").innerHTML = lang.contactbtn;

}



document.getElementById("englishBtn").onclick = () => changeLanguage(english);

document.getElementById("teluguBtn").onclick = () => changeLanguage(telugu);