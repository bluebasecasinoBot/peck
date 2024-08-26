import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'#25010e88',
                    flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'flex-start',
                    padding:'20px 10px',
                    minHeight:'unset'
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'3rem') === '3rem' ? '40%' : '100%'};background-image:url("./assets/a2.png");background-size:contain;border-radius:15px;`
                },
                [
                    
                ],
                {
                    genericStyle:['bg_cover'],
                }
            ),
            __c(
                'div',
                {
                    style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column'
                },
                [
                    __c('h1',{class:'rainbow__text',style:`font-family:sunrise;font-weight:900;font-weight:100;font-size:${__p(['_p3','__size'],'3rem')}`},['ABOUT']),
                    __SYD.about_text()
                ]
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'3rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'2rem',__flex:'column'}}],
                defState:{__size:'3rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;max-width:500px;text-align:center;font-weight:100;'},[
        `In the heart of ancient China, where emperors ruled and dynasties thrived, the Pekingese dog was a symbol of grandeur and prestige. Now, the spirit of this regal companion is making a triumphant return, but not in the imperial courts of old—this time, it's on the cutting edge of modern technology!
        Meet "The Imperial Pekingese $PEKE," the newest meme sensation taking the Tron blockchain by storm. Just as the Pekingese once held court in the Forbidden City, it now reigns supreme in the world of cryptocurrency and blockchain innovation.`
    ])
}
