
const mySlider = new Splide('#mySliderPr',
    {
        type   : 'loop',
        focus: 0,
        arrows: false,
        //autoplay: true,
            perPage: 4,
        gap: '18px',
        breakpoints: {
            1200:
            {
            fixedWidth: '270px'
            },
            768:
            {
            perPage: 1,
            fixedWidth: '335px'
            },
        },
    }
)




mySlider.mount()