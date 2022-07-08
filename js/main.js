function changeGratedBreadPresentationImage(event) {
    const buttons = $("#grated-bread-presentation-buttons button")
    
    buttons.removeClass()
    buttons.addClass("presentation-button fw-bold me-2")

    event.target.className = "presentation-button-selected fw-bold me-2"

    if (event.target.id === "small-grated-bread-button")
        $("#product-rallado").attr("src","./img/grated-bread-400gr.png");

    if (event.target.id === "medium-grated-bread-button")
        $("#product-rallado").attr("src","./img/grated-bread-5kg.png");

    if (event.target.id === "big-grated-bread-button")
        $("#product-rallado").attr("src","./img/grated-bread-25kg.png");

    $(".grated-bread-secondary-image").eq("0").attr("src", "./img/grated-bread-secondary-one.jpg");
    $(".grated-bread-secondary-image").eq("1").attr("src", "./img/grated-bread-secondary-two.jpg");
}

function changeCrumbBreadImage(event) {
    const ppalImage = $("#product-miga").attr("src");
    $("#product-miga").attr("src", $(event.target).attr("src"));
    $(event.target).attr("src", ppalImage);
}

function changeGratedBreadImage(event) {
    const ppalImage = $("#product-rallado").attr("src");
    $("#product-rallado").attr("src", $(event.target).attr("src"));
    $(event.target).attr("src", ppalImage);
}

function changeArabicBreadImage(event) {
    const ppalImage = $("#product-arabe").attr("src");
    $("#product-arabe").attr("src", $(event.target).attr("src"));
    $(event.target).attr("src", ppalImage);
}

$("#small-grated-bread-button").on("click", changeGratedBreadPresentationImage);
$("#medium-grated-bread-button").on("click", changeGratedBreadPresentationImage);
$("#big-grated-bread-button").on("click", changeGratedBreadPresentationImage);

$(".crumb-bread-secondary-image").on("click", changeCrumbBreadImage);
$(".grated-bread-secondary-image").on("click", changeGratedBreadImage);
$(".arabic-bread-secondary-image").on("click", changeArabicBreadImage);