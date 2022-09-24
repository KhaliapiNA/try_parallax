(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".images-parallax_water1");
    // Magic happens here
    function parallax(e) {
        let width = window.innerWidth/2;
        let height = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50 - (mouseX - width) * 0.01}% ${50 - (mouseY - height) * 0.01}%`;
        let x = `${depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();