"use strict";

$(document).ready(function() {
    var companiesCollection,
        companiesList = $('.block-list-companies'),
        partnersList = $(".partners-list"),
        companyItem = `<li class="block-companies-item" data-key="__key__">__name__</li>`,
        partnerItem = `<li class="partners-item">
                            <span class="partners-item-name">__name__</span>
                            <span class="partners-item-percent">__percent__</span>
                        </li>`;

    $.ajax({
        type: "GET",
        url: '//codeit.pro/codeitCandidates/serverFrontendTest/company/getList',
        success: function(data) {
            companiesCollection = data.list;
            showCompaniesNumber();
            displayCompanies();
            $('.block').removeClass('preloader');
        },
        error: function() {       
            errorHandler("Connection failed");
        }
    });

    companiesList.on('click', '.block-companies-item', function() {
        companiesList.find('li').removeClass('bg-info');
        $(this).addClass('bg-info');
        displayCompanyPartners($(this).data().key);
    });

    function displayCompanyPartners(index) {
        var partnersCollection = companiesCollection[index].partners;
        partnersList.html("");
        partnersCollection = partnersCollection.sort(function(a,b){
            return  b.value - a.value ;
        });
        for ( var i = 0; partnersCollection.length > i; i ++) {
            partnersList.append(partnerItem.replace('__name__', partnersCollection[i].name).replace("__percent__",partnersCollection[i].value));
         }
        $(".partners-wrapper").removeClass('d-none');
    }

    function displayCompanies() {
        for ( var i = 0; companiesCollection.length > i; i ++) {
            companiesList.append(companyItem.replace('__name__', companiesCollection[i].name).replace("__key__",i));
         }
    }

    function showCompaniesNumber(){
        $(".block-companies-number").removeClass("d-none");
        $("#companiesNumber").text(companiesCollection.length);
    }
});