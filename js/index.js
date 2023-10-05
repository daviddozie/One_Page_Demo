const updateCounter = (counterId, defaultNumber) => {
    let currentNumber = 0.6;
    const counterElement = document.getElementById(counterId);
    const increment = defaultNumber / 150; // Adjust the increment as needed for speed

    const animateCounter = () => {
        if (currentNumber < defaultNumber) {
            currentNumber += increment;
            counterElement.innerText = Math.round(currentNumber);
            requestAnimationFrame(animateCounter);
        }
    };

    animateCounter();
};

// Call updateCounter for each counter
updateCounter("counter1", 65); // Replace 50 with your first default number
updateCounter("counter2", 85); // Replace 75 with your second default number
updateCounter("counter3", 30); // Replace 100 with your third default number
updateCounter("counter4", 20); // Replace 25 with your fourth default number

const swiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'horizontal',
    speed: '1000',

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        },
    }

});