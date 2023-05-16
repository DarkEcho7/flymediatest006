import {proxy} from 'valtio';

const state= proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal: './nikeLogo.jpg',
    fullDecal: './nikeLogo.jpg',

})

export default state;