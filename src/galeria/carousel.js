const galeria = document.getElementById('galeria');
const carousel = (direccion) => {

    const opciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entradas)=>{

        const slideVisibles = entradas.filter((entrada) => {
            if(entrada.isIntersecting === true){
                return entrada;
            };
        });

        if(direccion === 'atras'){
            const primerSlideVisible = slideVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            if(entradas[indexPrimerSlideVisible - 1]){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            }
        }
        else if(direccion === 'adelante'){
            const ultimaSlideVisible = slideVisibles[slideVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);

            if(entradas[indexUltimoSlideVisible + 1]){
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            };
        };

        //dejar de observar
        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide)=>{
            observer.unobserve(slide); 
        });

    },opciones);


    //observar
    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide)=>{
        observer.observe(slide); 
    });
};


export default carousel;