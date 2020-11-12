AOS.init();

new fullpage("#fullpage", {
    afterLoad: function () {
        $(".fp-table.active .aos-init").addClass("aos-animate");
    },
});
