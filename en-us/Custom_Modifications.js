"use strict";
{
    let FilePath = "./languages/UI_Language/en-us/"
    loadRes({
        "js":[],
        "css":[],
        "img":[
            FilePath+"uis/main.webp",
            FilePath+"uis/map.webp",
            FilePath+"uis/Fuben1.webp",
            FilePath+"uis/Introduction.webp"
        ],
        "au":[]
    });
    jngTemplate.template.Writer = `<div id="wrap"><img src="${FilePath}uis/writers.webp"></div>`;
    
};