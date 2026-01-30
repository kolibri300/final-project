
const mySlider = new Splide('#mySliderPr',
    {
        type   : 'loop',
        focus: 0,
        arrows: false,
        autoplay: true,
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

const mySliderRe = new Splide('#mySliderRe',
    {
        type   : 'loop',
        focus: 0,
        arrows: false,
        autoplay: true,
        perPage: 3,
        gap: '28px',
        breakpoints: {
            1200:
            {
            perPage: 2,
            gap: '16px',
            },
            768:
            {
            perPage: 1,
            },
        },
    }
)


mySlider.mount()
mySliderRe.mount()