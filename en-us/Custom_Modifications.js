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
            FilePath+"uis/panel.webp",
            FilePath+"uis/Almanac.webp",
        ].concat(buttons),
        "au":[]
    });
    jngTemplate.template.Writer = `<div id="wrap"><img src="${FilePath}uis/writers.webp"></div>`;
    
    {
        let shakeText = oEffects.TextEffects.ShakeText;
        oEffects.TextEffects.ShakeText = function(json){
            if(!json.customSize){
                json.customSize = function(i){
                    let size = -1;
                    let sizes = [1025,938,825+150,1025,900,775,1025,950,550,750,1012,900,1225,1125,1100,1000,1100,987,800,1000,1000,1230,1300,1087,1037,887];
                    let sizes_lower = [1025,938,825+125,1025,900,775,1025,950,550,750,1012,850,1225,1025,1100,900,1100,987,737,900,1000,1172,1300,1087,1037,887];
                    if(i>='A'&&i<='Z'){
                        size = sizes[i.charCodeAt()-65]/2000;
                    }
                    if(i>="a"&&i<='z'){
                        size = sizes_lower[i.charCodeAt()-97]/2000;
                    }
                    if(i=='1'){
                        size=0.4;
                    }
                    return size;
                };
            }
            return shakeText.bind(oEffects.TextEffects)(json);
        };
        console.log(oEffects.TextEffects.ShakeText);
    }
};
