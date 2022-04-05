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
                    let sizes = [1025,938,1050,1025,900,880,1125,950,550,750,1012,1100,1225,1125,1100,1000,1100,920,900,1000,1050,1350,1350,1087,1037,887];
                    let sizes_lower = [1025,938,1000,1025,900,775,1100,850,550,750,800,950,1325,1025,1150,1000,1080,880,720,900,1000,1200,1270,950,1037,887];
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
