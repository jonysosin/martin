var direcciones = []
direcciones['vasos'] = {
    menor: {
        telefono: '11111111',
        direccion: 'Av. Vasos 123',
    },
    mayor: {
        telefono: '22222',
        direccion: 'Av Mayor',
    }
}
direcciones['tapitas'] = { // Direcciones Tapitas
    menor: {
        telefono: '33333333',
        direccion: 'Av. Tapitas',
    },
    mayor: {
        telefono: '44444444 ',
        direccion: 'Av. Tapitas',
    }
}
direcciones['cajas'] = { // Direcciones cajas
    menor: {
        telefono: '5555555',
        direccion: 'Av. Cajas',
    },
    mayor: {
        telefono: '4444 - MAYOR ',
        direccion: 'Av. Cajas',
    }
}

direcciones['bolsas'] = { // Direcciones bolsas
    menor: {
        telefono: '333 - MENOR',
        direccion: 'Av. Bolsas',
    },
    mayor: {
        telefono: '4444 - MAYOR ',
        direccion: 'Av. Bolsas',
    }
}

var stepsManager = {
    currentStep: 1,

    next: function() {
        var $this = this
        $('[data-step='+ this.currentStep +']').fadeOut('slow', () => {
            $this.currentStep ++
            $('[data-step='+ $this.currentStep +']').fadeIn()
        })
    },
    goHome: function() {
        var $this = this
        $('[data-step='+ this.currentStep +']').fadeOut('slow', () => {
            $this.currentStep = 1
            $('[data-step='+ $this.currentStep +']').fadeIn()
        }) 
    }
}

$(document).ready(() => {
    var seleccion
    $('.js-btn-recicla').click(() => {
        stepsManager.next()
    })

    $('.js-seleccion').click(function() {
        seleccion = $(this).attr('data-item-seleccion')
        stepsManager.next()
    })

    $('.js-home').click(function() {
        stepsManager.goHome()
    })

    $('.js-finalizar').click(function() {
        var $direccion = $('#js-resultado');
        var direccion = direcciones[seleccion]
        var txtDireccion = ''
        var txtTelefono = ''

        if ($('#js-seleccion-cantidad').val() > 10) { // ES MAYOR A 10?
            txtDireccion = direccion.mayor.direccion
            txtTelefono = direccion.mayor.telefono
        } else {
            txtDireccion = direccion.menor.direccion
            txtTelefono = direccion.menor.telefono
        }

        $direccion.find('#direccion').text(txtDireccion)
        $direccion.find('#telefono').text(txtTelefono)
        $direccion.show()
    })
})