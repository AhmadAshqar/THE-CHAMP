let slideIndex = 1;

function currentDiv(n) {
    showDivs(n);
}

function showDivs(n) {
    let i;
    const x = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".gallery");

    slideIndex = n > x.length ? 1 : n < 1 ? x.length : n;

    x.forEach(slide => {
        slide.style.display = "none";
    });

    dots.forEach(dot => {
        dot.className = dot.className.replace(" active", "");
    });

    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
