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
                if (len === 85) {
                    is4 = true;
                    clearInterval(repeat);
                }
            }, 8);
        }
    }
}

$("document").ready(function () {
    $(window).trigger("orientationchange");
});

$(window).bind("orientationchange", function (e) {
    var pc_device = "win16|win32|win64|mac|macintel";
    // 접속한 디바이스 환경
    var this_device = navigator.platform;
    if (this_device) {
        // MOBILE
        if (pc_device.indexOf(navigator.platform.toLowerCase()) < 0) {
            var orientation = window.orientation;

            if (orientation == 90 || orientation == -90) {
                $(".layer").css("display", "block");
            } else {
                $(".layer").css("display", "none");
            }
        }
    }
});

window.addEventListener("mousewheel", scroolEvt);
