document.addEventListener('DOMContentLoaded', () => {
    const meddyImg = document.getElementById('meddy-img');
    const meddyEstado = document.getElementById('meddy-estado');
    const chuches = document.querySelectorAll('.chuche');

    const meddyReactions = {
        algodon_magico: {
            img: './imagenes/unicornio_algodon.jpg', 
            msg: '¡Ñam! ¡Las nubes de algodón me dan mucha energía!'
        },
        gominola_arcoiris: {
            img: './imagenes/unicornio_gominola_arcoíris.jpg', 
            msg: '¡Qué delicia! ¡La gominola arcoíris son mis favoritas!'
        },
        gominola_estrella: {
            img: './imagenes/unicornio_gominola_estrella.jpg', 
            msg: '¡Mmm, gominolas de estrella! ¡Pídele un deseo!'
        },

        carbon_azucar: {
            img: './imagenes/unicornio_carbón_azucar.jpg', 
            msg: '¡Puaj! ¡El carbón de azúcar es horrible!'
        },
        regaliz_negro: {
            img: './imagenes/unicornio_regaliz_negro.jpg', 
            msg: '¡Blarg! ¡El regaliz negro es demasiado amargo!'
        },
        cana_azucar: {
            img: './imagenes/unicornio_caramelo_cana.jpg', 
            msg: '¡Brrr! ¡Los caramelos de caña me congelan la boca!'
        }
    };

    chuches.forEach(chuche => {
        chuche.addEventListener('click', () => {
            const chucheKey = chuche.dataset.chuche; 
            const reaction = meddyReactions[chucheKey];

            if (reaction) {
                meddyImg.src = reaction.img;
                meddyImg.alt = `Meddy reaccionando`;
                meddyEstado.textContent = reaction.msg;
            }
        });
    });

    meddyImg.src = './imagenes/meddy.png'; 
    meddyEstado.textContent = '¡Haz clic en una chuche para ver la reacción de Meddy!';
});