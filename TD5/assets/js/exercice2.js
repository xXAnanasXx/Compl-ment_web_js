
$(document).ready(function () {
    let listProd = [1, 2, 3];
    for (let i = 1; i <= 3; i++) {
        $.ajax({
            url: `https://dummyjson.com/products/${i}`,
            type: 'GET',
            success: function (data) {
                var $template = $('.product-template').clone();
                $template.removeClass('product-template');
                $template.addClass('product-' + i);
                $('body').append($template);

                $template.find('.img').attr('src', data.images[0]).attr('alt', data.title);
                $template.find('.title').text(data.title);
                $template.find('.brand').text("(" + data.brand + ")");
                $template.find('.price').text(`${data.price} €`);
                $template.find('.old-price').text(Math.floor(data.price * ((data.discountPercentage / 100) + 1)) + ` €`);
                $template.find('.stock').text(data.stock);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(`Error for product ${i}:`, errorThrown);
            }
        });
    }

    document.getElementById("product-generation").addEventListener("click", function () {
        if (listProd.length >= 100) {
            $(this).prop("disabled",true);
        } else {
            let rdmId = 1;
            do {
                rdmId = Math.floor(Math.random() * 100)+1;
            } while (listProd.includes(rdmId));
            listProd.push(rdmId);
            $.ajax({
                url: `https://dummyjson.com/products/${rdmId}`,
                type: 'GET',
                success: function (data) {
                    var $template = $('.product-template').clone();
                    $template.removeClass('product-template');
                    $template.addClass('product-' + rdmId);
                    $('body').append($template);

                    console.log(rdmId)
                    $template.find('.img').attr('src', data.images[0]).attr('alt', data.title);
                    $template.find('.title').text(data.title);
                    $template.find('.brand').text("(" + data.brand + ")");
                    $template.find('.price').text(`${data.price} €`);
                    $template.find('.old-price').text(Math.floor(data.price * ((data.discountPercentage / 100) + 1)) + ` €`);
                    $template.find('.stock').text(data.stock);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error(`Error for product ${rdmId}:`, errorThrown);
                }
            });
        }
    });
})
