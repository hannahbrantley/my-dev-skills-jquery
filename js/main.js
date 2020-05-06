$('#addskill').click(function() {
    var $newSkill = `<tr>
                    <td><button class="remove">X</button>${$('input').val()}</td>
                    </tr>`;
    $($newSkill).insertBefore($('.last'));

    $('.remove').click(function() {
        $(this).closest('tr').remove();
    })

    $('input').val('');

});