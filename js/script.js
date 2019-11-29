window.addEventListener('load', function () {

    headerBtn.addEventListener('click', function (e) {
        let viewportHeight = document.documentElement.clientHeight;

        let timerId = setInterval(() => {
            if (window.scrollY < viewportHeight) {
                window.scrollTo(0, window.scrollY + 10);
            }
        }, 2);
        setTimeout(() => clearInterval(timerId), 300);
    });

    const goodImgs = document.querySelectorAll('.good-img > img');

    goodImgs.forEach(img => {
        img.addEventListener('mouseover', (e) => {
            let src = e.target.src;
            const ind = src.lastIndexOf('/');
            e.target.src = src.substring(0, ind+2) + src.substring(ind+5, src.length);
        });

        img.addEventListener('mouseout', (e) => {
            let src = e.target.src;
            const ind = src.lastIndexOf('/');
            e.target.src = src.substring(0, ind+2) + '-bw' + src.substring(ind+2, src.length);
        })
    })

});

