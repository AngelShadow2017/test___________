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
                    let sizes = [1025,938,1050,1025,900,910,1125,900,560,790,1012,1100,1225,1125,1100,1050,1100,920,900,1000,1050,1370,1350,1070,1037,900];
                    let sizes_lower = [985,930,965,1005,870,800,1040,790,570,800,750,1020,1250,1025,1090,1000,1000,800,800,880,1010,1130,1130,970,950,887];
                    let arrNum = [985,930,965,1080,1100,630,1200,1150,900,1000];
                    if(i>="0"&&i<="9"){
                        size = arrNum[i.charCodeAt()-48]/2000;
                    }
                    if(i>='A'&&i<='Z'){
                        size = sizes[i.charCodeAt()-65]/2000;
                    }
                    if(i>="a"&&i<='z'){
                        size = sizes_lower[i.charCodeAt()-97]/2000;
                    }
                    return size;
                };
            }
            return shakeText.bind(oEffects.TextEffects)(json);
        };
        console.log(oEffects.TextEffects.ShakeText);
    }
};
