let is4 = false;

AOS.init();

new fullpage("#fullpage", {
    afterLoad: function () {
        $(".fp-table.active .aos-init").addClass("aos-animate");
    },
});

function scroolEvt() {
    if (!is4) {
        let slideNumber = $(".fp-section.active").index() + 1;
        if (slideNumber === 5) {
            is4 = !is4;
            const lline = document.getElementById("left-line");
            const rline = document.getElementById("right-line");
            let len = 0;
            let repeat;
            repeat = setInterval(() => {
                lline.style.width = `${len}%`;
                rline.style.width = `${len}%`;
                rline.style.marginLeft = `${100 - len}%`;
                len++;
                if (len === 75) {
                    is4 = true;
                    clearInterval(repeat);
                }
            }, 15);
        }
    }
}

window.addEventListener("mousewheel", scroolEvt);
