// 'use strict';
// (function() {
    $(document).ready(function() {
        let detailsLength = $(".info__detail").length;
        let firstDetail = $('.info__detail').first();
        let showBtn = $('#showBtn');
        let hideBtn = $('#hideBtn');
        let featuresLength = firstDetail.find("tr").length;

        function renderTable() {
            if (detailsLength == 1 || 0) {
                firstDetail.addClass("show");
                return;
            }
            featuresHandler("hide");
            firstDetail.addClass("show");
        }

        function featuresHandler(arg) {
            if (arg == "hide") {
                showBtn.addClass("show")
                hideBtn.removeClass("show")
                $(".info__detail").not(":nth-child(1)").removeClass("show")
                firstDetail.find("tr:nth-child(5)").addClass("blur")
                for (let i = 6; i < firstDetail.find("tr").length + 1; i++) {
                    firstDetail.find("tr:nth-child(" + i + ")").addClass("hide")
                }
            } else {
                showBtn.removeClass("show")
                hideBtn.addClass("show")
                $(".info__detail").addClass("show")
                firstDetail.find("tr:nth-child(5)").removeClass("blur")
                for (let i = 6; i < firstDetail.find("tr").length + 1; i++) {
                    firstDetail.find("tr:nth-child(" + i + ")").removeClass("hide")
                }
            }
        }

        showBtn.on("click", function() {
            featuresHandler("show")
        })

        hideBtn.on("click", function() {
            featuresHandler("hide")
        })

        renderTable()
    })
// }());
