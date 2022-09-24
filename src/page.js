"use strict"

window.onload = function(){
    const parallax = document.querySelector('.parallax');
    if (parallax){
        const content = document.querySelector('.parallax_container');
        const mountains = document.querySelector('.images-parallax_mountains');

        const forMountains = 20;
        const speed= 0.002;

        let positionX = 0;
        let positionY = 0;
        let percentX = 0;
        let percentY = 0;

        function setMouseParallaxStyle() {
            const distX = percentX - positionX;
            const distY = percentY - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //water.style.cssText = `transform:translate(`+(positionX / forWater)+`%,`+(positionY / forWater)+`%);`;
            mountains.style.cssText = `transform:translate(`+(positionX / forMountains)+`%,`+(positionY / forMountains)+`%);`;
            requestAnimationFrame(setMouseParallaxStyle);
        }
    setMouseParallaxStyle();
        let parallaxWidth = parallax.offsetWidth;
        let parallaxHeight = parallax.offsetHeight;
    parallax.addEventListener ("mousemove", function(e){
        const x = e.pageX/ 2;
        const y = e.pageY/ 2;

        percentX = x / parallaxWidth * 100;
        percentY = y / parallaxHeight * 100;
    });
    parallax.onmouseout = function(){
        percentX = 0;
        percentY = 0;
    }

    let thresholdSets = [];
    for(let i=0; i<= 1.0; i += 0.005){
        thresholdSets.push(i);
    }
    function setParallaxItemsStyle(scrollTopPercent){
        //content.style.cssText = 'transform: translate(0%, -${scrollTopPercent / 9}%);';
        content.style.cssText = 'transform: translate(0%,' +(-(scrollTopPercent / 9))+'%);';
    }
    const callback = function (entries, observer){
        const scrollTopPercent = window.pageYOffset / parallax.offsetHeight *100;
        setParallaxItemsStyle(scrollTopPercent);
    };
}
}
