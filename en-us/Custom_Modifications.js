"use strict";
{
    let FilePath = "./languages/UI_Language/en-us/";
    oLoadRes.loadImage({
        resourceArr: [
            FilePath+"uis/main.webp",
            FilePath+"uis/map.webp",
            FilePath+"uis/Fuben1.webp",
            FilePath+"uis/Introduction.webp",
            FilePath+"uis/panel.webp",
            FilePath+"uis/Almanac.webp",
            FilePath+"uis/GameOver.png",
        ],
    });
    jngTemplate.template.Writer = `<div id="wrap"><img src="${FilePath}uis/writers.webp"></div>`;
    jngTemplate.template.Diary = `<iframe id='DiaryIframe' class="NoBar" width="900" height="600" frameBorder='0' scrolling='auto' src='frame/Diary.html?folder=../${FilePath}/uis/diary/'></iframe>`;
    jngTemplate.template.labMap=`
        <div id="lab0" class="WindowFrame" data-jng-bg="${FilePath}uis/lab1.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left: 222px;top: 150px;" onclick="SelectModal('Lab1')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:650px;top:185px;" onclick="SelectModal('Lab2')"></button>
            <a class="jngButton ArrowMap ArrowNext" onclick="labMap.change(1)"></a>
        </div>
        <div id="lab1" class="WindowFrame noneLab" data-jng-bg="${FilePath}uis/lab2.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left:102px;top:180px;" onclick="SelectModal('Lab3')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:530px;top:38px;" onclick="SelectModal('Lab4')"></button>
            <a class="jngButton ArrowMap ArrowLast" onclick="labMap.change(-1)"></a>
            <a class="jngButton ArrowMap ArrowNext" onclick="labMap.change(1)"></a>
        </div>
        <div id="lab2" class="WindowFrame noneLab" data-jng-bg="${FilePath}uis/lab3.webp">
            <button class="VirtualButton" style="width:200px;height:325px;left: 180px;top: 50px;" onclick="SelectModal('Lab5')"></button>
            <button class="VirtualButton" style="width:200px;height:325px;left:550px;top:185px;" onclick="SelectModal('Lab6')"></button>
            <a class="jngButton ArrowMap ArrowLast" onclick="labMap.change(-1)"></a>
        </div>
        `;
};
