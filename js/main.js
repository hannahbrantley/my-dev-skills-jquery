$('#addskill').click(function() {
    var $newSkill = `<tr>
                    <td><button class="remove">X</button></td>
                    <td>${$('input').val()}</td>
                    </tr>`
    $('table').append($newSkill);

    $('.remove').click(function() {
        console.log('x marks the spot');
        $(this).closest('tr').remove();
        console.log($(this));
    })
});