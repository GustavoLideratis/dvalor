window.LideratisValidation = new Object();

function msj_error(idcampo) {
    /*$('#' + idcampo + '').removeClass('vali-ok');
    $('#' + idcampo + '').addClass('vali-error');*/
    $('#error-' + idcampo + '').css({
        "display": "inline-block"
    });
}

function validar(form) {

    var ok = true;
    //$(".inputvalidation").removeClass('vali-error');

    if (!LideratisValidation.validarCampo('correo', 'correo')) {
        msj_error('correo');
        ok = false;
    }
    return ok;
}


LideratisValidation.validarCampo = function(id, tipo, blank = true) {
    var regex = LideratisValidation.tipoDato(tipo);
    var rtnFlag = false;
    var texto = $("#" + id).val();

    if (regex == '-1') {
        alert("Validar si se ingreso bien el tipo de dato");
        return false;
    }

    if (blank) {
        if (texto != "" && regex.test(texto)) {
            rtnFlag = true;
        }
    } else {
        if (texto.trim() == "" || regex.test(texto)) {
            rtnFlag = true;
        }
    }

    return rtnFlag;
}

LideratisValidation.tipoDato = function(tipo) {
    switch (tipo) {
        case 'texto':
            return /^[a-zA-Z ]+$/;
        case 'telefono':
            return /^[0-9]+$/;
        case 'correo':
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        case 'numerico':
            return /^[0-9]+$/;
        default:
            return '-1';
    }
}
