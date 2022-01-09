"use strict";
{
    let FilePath = "./languages/UI_Language/en-us/";
    let buttonPath = './uis/Buttons/';
    let buttons = ["Start","Cancel","Continue","Menu","Mirror","OK","Reset","Speed"];
    for(let i in buttons){
        buttons[i] = FilePath+buttonPath+buttons[i]+".webp";
    }
    loadRes({
        "js":[],
        "css":[],
        "img":[
            FilePath+"uis/main.webp",
            FilePath+"uis/map.webp",
            FilePath+"uis/Fuben1.webp",
            FilePath+"uis/Introduction.webp",
        ].concat(buttons),
        "au":[]
    });
    jngTemplate.template.Writer = `<div id="wrap"><img src="${FilePath}uis/writers.webp"></div>`;
    
};