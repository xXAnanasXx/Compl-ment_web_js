
$(document).ready(function () {
 
    $("form").submit(function (event) {
        var $form = $(this);
        event.preventDefault(); //stope l'envoi du formulaire

        var formData = $form.serialize(); //récupère les valeurs du formulaire

        $.ajax({
            url: $form.attr("action"), //récupère l'url cible du formulaire
            type: "POST",
            dataType: "json",
            data: formData, // ajoute les valeurs du formulaire à la requête
            success: function (response) {
                console.log(response)
                console.log(response["success"])
                if (response.success) { //remplace le formulaire d'un message de réussite
                    $form.replaceWith('<div style="color:green;">' + response.message + '</div>');
                } else { //précède le formulaire d'un message d'erreur
                    var $errorDiv = $form.prev(".error-msg");
                    if ($errorDiv.length == 0) {
                        $errorDiv = $('<div class="error-msg" style="color:red;">' + response.message + '</div>');
                        $form.before($errorDiv);
                    } else {
                        $errorDiv.text(response.message);
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) { //précède le formulaire d'un message d'erreur
                var $errorDiv = $form.prev(".error-msg");
                if ($errorDiv.length == 0) {
                    $errorDiv = $('<div style="color:red;">' + textStatus + ' : ' + errorThrown + '</div>');
                    $form.before($errorDiv);
                } else {
                    $errorDiv.text(textStatus + ' : ' + errorThrown);
                }
            }
        });
    });

    //bordure rouge dès le chargement de la page
    $("form").find(':input').filter(function () {
        return $(this).val().length === 0;
    }).css('border-color', 'red');

    //bordure rouge quand vide ou >255
    $("form").find(':input').on('input', function () {
        var value = $(this).val();
        if (value.length > 0) {
            $(this).css('border-color', '');
        } else {
            $(this).css('border-color', 'red');
        }
        if (value.length > 255) {
            $(this).css('border-color', 'red');
        }
    });
})
