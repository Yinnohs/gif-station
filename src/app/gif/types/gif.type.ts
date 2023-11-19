export type gifApplications = 'gifphy' | 'tenor'


export interface GifphyGifDataInterface{
    title:string
    images:GifPhyGifImageInterface
}


interface GifPhyGifImageInterface{
    original:gifphyGifImageLayoutInterface
}

interface gifphyGifImageLayoutInterface{
    webp:string,
    frames:string,
    mp4:string,
    height:string,
    width:string
}
