

function skere(event) {
    const buttons = $("#grated-bread-presentation-buttons button")
    
    buttons.removeClass()
    buttons.addClass("presentation-button fw-bold me-2")

    event.target.className = "presentation-button-selected fw-bold me-2"

    if (event.target.id === "small-grated-bread-button")
        $("#product-rallado").attr("src","../img/grated-bread-400gr.png");

    if (event.target.id === "medium-grated-bread-button")
        $("#product-rallado").attr("src","../img/grated-bread-5kg.png");

    if (event.target.id === "big-grated-bread-button")
        $("#product-rallado").attr("src","../img/grated-bread-25kg.png");
}

$("#small-grated-bread-button").on("click", skere);
$("#medium-grated-bread-button").on("click", skere);
$("#big-grated-bread-button").on("click", skere);