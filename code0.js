gdjs.WarningCode = {};
gdjs.WarningCode.localVariables = [];
gdjs.WarningCode.GDStatistics2Objects1= [];
gdjs.WarningCode.GDStatistics2Objects2= [];
gdjs.WarningCode.GDGithubObjects1= [];
gdjs.WarningCode.GDGithubObjects2= [];
gdjs.WarningCode.GDgd_9595gamesObjects1= [];
gdjs.WarningCode.GDgd_9595gamesObjects2= [];
gdjs.WarningCode.GDdeleteObjects1= [];
gdjs.WarningCode.GDdeleteObjects2= [];
gdjs.WarningCode.GDcontinueObjects1= [];
gdjs.WarningCode.GDcontinueObjects2= [];
gdjs.WarningCode.GDStatistics3Objects1= [];
gdjs.WarningCode.GDStatistics3Objects2= [];
gdjs.WarningCode.GDStatisticsObjects1= [];
gdjs.WarningCode.GDStatisticsObjects2= [];
gdjs.WarningCode.GDComboNumbersObjects1= [];
gdjs.WarningCode.GDComboNumbersObjects2= [];
gdjs.WarningCode.GDNotesSplashObjects1= [];
gdjs.WarningCode.GDNotesSplashObjects2= [];
gdjs.WarningCode.GDfpsObjects1= [];
gdjs.WarningCode.GDfpsObjects2= [];
gdjs.WarningCode.GDEngineTextObjects1= [];
gdjs.WarningCode.GDEngineTextObjects2= [];
gdjs.WarningCode.GDLongUpscrollBFObjects1= [];
gdjs.WarningCode.GDLongUpscrollBFObjects2= [];
gdjs.WarningCode.GDLongUpscrollOPPObjects1= [];
gdjs.WarningCode.GDLongUpscrollOPPObjects2= [];
gdjs.WarningCode.GDHitboxLeftObjects1= [];
gdjs.WarningCode.GDHitboxLeftObjects2= [];
gdjs.WarningCode.GDHitboxDownObjects1= [];
gdjs.WarningCode.GDHitboxDownObjects2= [];
gdjs.WarningCode.GDHitboxUpObjects1= [];
gdjs.WarningCode.GDHitboxUpObjects2= [];
gdjs.WarningCode.GDhitrightObjects1= [];
gdjs.WarningCode.GDhitrightObjects2= [];
gdjs.WarningCode.GDBFIconObjects1= [];
gdjs.WarningCode.GDBFIconObjects2= [];
gdjs.WarningCode.GDOppIconObjects1= [];
gdjs.WarningCode.GDOppIconObjects2= [];
gdjs.WarningCode.GDPauseButtonObjects1= [];
gdjs.WarningCode.GDPauseButtonObjects2= [];
gdjs.WarningCode.GDPauseButton2Objects1= [];
gdjs.WarningCode.GDPauseButton2Objects2= [];
gdjs.WarningCode.GDBlackScreenObjects1= [];
gdjs.WarningCode.GDBlackScreenObjects2= [];
gdjs.WarningCode.GDPauseTextObjects1= [];
gdjs.WarningCode.GDPauseTextObjects2= [];
gdjs.WarningCode.GDExitTextObjects1= [];
gdjs.WarningCode.GDExitTextObjects2= [];
gdjs.WarningCode.GDRestartTextObjects1= [];
gdjs.WarningCode.GDRestartTextObjects2= [];
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.WarningCode.GDBfRightNoteObjects1= [];
gdjs.WarningCode.GDBfRightNoteObjects2= [];
gdjs.WarningCode.GDBfUpNoteObjects1= [];
gdjs.WarningCode.GDBfUpNoteObjects2= [];
gdjs.WarningCode.GDBfDownNoteObjects1= [];
gdjs.WarningCode.GDBfDownNoteObjects2= [];
gdjs.WarningCode.GDBfLeftNoteObjects1= [];
gdjs.WarningCode.GDBfLeftNoteObjects2= [];
gdjs.WarningCode.GDBfLeftNote4Objects1= [];
gdjs.WarningCode.GDBfLeftNote4Objects2= [];
gdjs.WarningCode.GDBfDownNote5Objects1= [];
gdjs.WarningCode.GDBfDownNote5Objects2= [];
gdjs.WarningCode.GDBfUpNote6Objects1= [];
gdjs.WarningCode.GDBfUpNote6Objects2= [];
gdjs.WarningCode.GDBfRightNote7Objects1= [];
gdjs.WarningCode.GDBfRightNote7Objects2= [];
gdjs.WarningCode.GDArrowsIconObjects1= [];
gdjs.WarningCode.GDArrowsIconObjects2= [];
gdjs.WarningCode.GDArrowsContObjects1= [];
gdjs.WarningCode.GDArrowsContObjects2= [];
gdjs.WarningCode.GDArrowsEarnTextObjects1= [];
gdjs.WarningCode.GDArrowsEarnTextObjects2= [];
gdjs.WarningCode.GDOppSideLifeBarObjects1= [];
gdjs.WarningCode.GDOppSideLifeBarObjects2= [];
gdjs.WarningCode.GDLifeBarObjects1= [];
gdjs.WarningCode.GDLifeBarObjects2= [];
gdjs.WarningCode.GDHeathBarObjects1= [];
gdjs.WarningCode.GDHeathBarObjects2= [];


gdjs.WarningCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(44).getAsString() == "English");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(44).getAsString() == "PtBr");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 2880, "", 0);
}}

}


};gdjs.WarningCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Player", "Language", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(44));
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}
{ //Subevents
gdjs.WarningCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Github"), gdjs.WarningCode.GDGithubObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WarningCode.GDGithubObjects1.length;i<l;++i) {
    if ( gdjs.WarningCode.GDGithubObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WarningCode.GDGithubObjects1[k] = gdjs.WarningCode.GDGithubObjects1[i];
        ++k;
    }
}
gdjs.WarningCode.GDGithubObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(44).setString("PtBr");
}{gdjs.evtTools.storage.writeStringInJSONFile("Player", "Language", runtimeScene.getGame().getVariables().getFromIndex(44).getAsString());
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 2880, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gd_games"), gdjs.WarningCode.GDgd_9595gamesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WarningCode.GDgd_9595gamesObjects1.length;i<l;++i) {
    if ( gdjs.WarningCode.GDgd_9595gamesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WarningCode.GDgd_9595gamesObjects1[k] = gdjs.WarningCode.GDgd_9595gamesObjects1[i];
        ++k;
    }
}
gdjs.WarningCode.GDgd_9595gamesObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(44).setString("English");
}{gdjs.evtTools.storage.writeStringInJSONFile("Player", "Language", runtimeScene.getGame().getVariables().getFromIndex(44).getAsString());
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 2880, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("delete"), gdjs.WarningCode.GDdeleteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WarningCode.GDdeleteObjects1.length;i<l;++i) {
    if ( gdjs.WarningCode.GDdeleteObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WarningCode.GDdeleteObjects1[k] = gdjs.WarningCode.GDdeleteObjects1[i];
        ++k;
    }
}
gdjs.WarningCode.GDdeleteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.clearJSONFile("Player");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("continue"), gdjs.WarningCode.GDcontinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WarningCode.GDcontinueObjects1.length;i<l;++i) {
    if ( gdjs.WarningCode.GDcontinueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WarningCode.GDcontinueObjects1[k] = gdjs.WarningCode.GDcontinueObjects1[i];
        ++k;
    }
}
gdjs.WarningCode.GDcontinueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(44).getAsString() == "PtBr");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Statistics3"), gdjs.WarningCode.GDStatistics3Objects1);
{for(var i = 0, len = gdjs.WarningCode.GDStatistics3Objects1.length ;i < len;++i) {
    gdjs.WarningCode.GDStatistics3Objects1[i].setBBText("Se você já jogou antes, é recomendado excluir seu save devido a mudanças nos preços e valores");
}
}}

}


};

gdjs.WarningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WarningCode.GDStatistics2Objects1.length = 0;
gdjs.WarningCode.GDStatistics2Objects2.length = 0;
gdjs.WarningCode.GDGithubObjects1.length = 0;
gdjs.WarningCode.GDGithubObjects2.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects1.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects2.length = 0;
gdjs.WarningCode.GDdeleteObjects1.length = 0;
gdjs.WarningCode.GDdeleteObjects2.length = 0;
gdjs.WarningCode.GDcontinueObjects1.length = 0;
gdjs.WarningCode.GDcontinueObjects2.length = 0;
gdjs.WarningCode.GDStatistics3Objects1.length = 0;
gdjs.WarningCode.GDStatistics3Objects2.length = 0;
gdjs.WarningCode.GDStatisticsObjects1.length = 0;
gdjs.WarningCode.GDStatisticsObjects2.length = 0;
gdjs.WarningCode.GDComboNumbersObjects1.length = 0;
gdjs.WarningCode.GDComboNumbersObjects2.length = 0;
gdjs.WarningCode.GDNotesSplashObjects1.length = 0;
gdjs.WarningCode.GDNotesSplashObjects2.length = 0;
gdjs.WarningCode.GDfpsObjects1.length = 0;
gdjs.WarningCode.GDfpsObjects2.length = 0;
gdjs.WarningCode.GDEngineTextObjects1.length = 0;
gdjs.WarningCode.GDEngineTextObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects1.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects2.length = 0;
gdjs.WarningCode.GDHitboxDownObjects1.length = 0;
gdjs.WarningCode.GDHitboxDownObjects2.length = 0;
gdjs.WarningCode.GDHitboxUpObjects1.length = 0;
gdjs.WarningCode.GDHitboxUpObjects2.length = 0;
gdjs.WarningCode.GDhitrightObjects1.length = 0;
gdjs.WarningCode.GDhitrightObjects2.length = 0;
gdjs.WarningCode.GDBFIconObjects1.length = 0;
gdjs.WarningCode.GDBFIconObjects2.length = 0;
gdjs.WarningCode.GDOppIconObjects1.length = 0;
gdjs.WarningCode.GDOppIconObjects2.length = 0;
gdjs.WarningCode.GDPauseButtonObjects1.length = 0;
gdjs.WarningCode.GDPauseButtonObjects2.length = 0;
gdjs.WarningCode.GDPauseButton2Objects1.length = 0;
gdjs.WarningCode.GDPauseButton2Objects2.length = 0;
gdjs.WarningCode.GDBlackScreenObjects1.length = 0;
gdjs.WarningCode.GDBlackScreenObjects2.length = 0;
gdjs.WarningCode.GDPauseTextObjects1.length = 0;
gdjs.WarningCode.GDPauseTextObjects2.length = 0;
gdjs.WarningCode.GDExitTextObjects1.length = 0;
gdjs.WarningCode.GDExitTextObjects2.length = 0;
gdjs.WarningCode.GDRestartTextObjects1.length = 0;
gdjs.WarningCode.GDRestartTextObjects2.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects1.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects2.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects1.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects2.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects1.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects1.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects1.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects2.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects1.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects2.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects1.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects2.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects1.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects2.length = 0;
gdjs.WarningCode.GDArrowsIconObjects1.length = 0;
gdjs.WarningCode.GDArrowsIconObjects2.length = 0;
gdjs.WarningCode.GDArrowsContObjects1.length = 0;
gdjs.WarningCode.GDArrowsContObjects2.length = 0;
gdjs.WarningCode.GDArrowsEarnTextObjects1.length = 0;
gdjs.WarningCode.GDArrowsEarnTextObjects2.length = 0;
gdjs.WarningCode.GDOppSideLifeBarObjects1.length = 0;
gdjs.WarningCode.GDOppSideLifeBarObjects2.length = 0;
gdjs.WarningCode.GDLifeBarObjects1.length = 0;
gdjs.WarningCode.GDLifeBarObjects2.length = 0;
gdjs.WarningCode.GDHeathBarObjects1.length = 0;
gdjs.WarningCode.GDHeathBarObjects2.length = 0;

gdjs.WarningCode.eventsList1(runtimeScene);
gdjs.WarningCode.GDStatistics2Objects1.length = 0;
gdjs.WarningCode.GDStatistics2Objects2.length = 0;
gdjs.WarningCode.GDGithubObjects1.length = 0;
gdjs.WarningCode.GDGithubObjects2.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects1.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects2.length = 0;
gdjs.WarningCode.GDdeleteObjects1.length = 0;
gdjs.WarningCode.GDdeleteObjects2.length = 0;
gdjs.WarningCode.GDcontinueObjects1.length = 0;
gdjs.WarningCode.GDcontinueObjects2.length = 0;
gdjs.WarningCode.GDStatistics3Objects1.length = 0;
gdjs.WarningCode.GDStatistics3Objects2.length = 0;
gdjs.WarningCode.GDStatisticsObjects1.length = 0;
gdjs.WarningCode.GDStatisticsObjects2.length = 0;
gdjs.WarningCode.GDComboNumbersObjects1.length = 0;
gdjs.WarningCode.GDComboNumbersObjects2.length = 0;
gdjs.WarningCode.GDNotesSplashObjects1.length = 0;
gdjs.WarningCode.GDNotesSplashObjects2.length = 0;
gdjs.WarningCode.GDfpsObjects1.length = 0;
gdjs.WarningCode.GDfpsObjects2.length = 0;
gdjs.WarningCode.GDEngineTextObjects1.length = 0;
gdjs.WarningCode.GDEngineTextObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects1.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects2.length = 0;
gdjs.WarningCode.GDHitboxDownObjects1.length = 0;
gdjs.WarningCode.GDHitboxDownObjects2.length = 0;
gdjs.WarningCode.GDHitboxUpObjects1.length = 0;
gdjs.WarningCode.GDHitboxUpObjects2.length = 0;
gdjs.WarningCode.GDhitrightObjects1.length = 0;
gdjs.WarningCode.GDhitrightObjects2.length = 0;
gdjs.WarningCode.GDBFIconObjects1.length = 0;
gdjs.WarningCode.GDBFIconObjects2.length = 0;
gdjs.WarningCode.GDOppIconObjects1.length = 0;
gdjs.WarningCode.GDOppIconObjects2.length = 0;
gdjs.WarningCode.GDPauseButtonObjects1.length = 0;
gdjs.WarningCode.GDPauseButtonObjects2.length = 0;
gdjs.WarningCode.GDPauseButton2Objects1.length = 0;
gdjs.WarningCode.GDPauseButton2Objects2.length = 0;
gdjs.WarningCode.GDBlackScreenObjects1.length = 0;
gdjs.WarningCode.GDBlackScreenObjects2.length = 0;
gdjs.WarningCode.GDPauseTextObjects1.length = 0;
gdjs.WarningCode.GDPauseTextObjects2.length = 0;
gdjs.WarningCode.GDExitTextObjects1.length = 0;
gdjs.WarningCode.GDExitTextObjects2.length = 0;
gdjs.WarningCode.GDRestartTextObjects1.length = 0;
gdjs.WarningCode.GDRestartTextObjects2.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects1.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects2.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects1.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects2.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects1.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects1.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects1.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects2.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects1.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects2.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects1.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects2.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects1.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects2.length = 0;
gdjs.WarningCode.GDArrowsIconObjects1.length = 0;
gdjs.WarningCode.GDArrowsIconObjects2.length = 0;
gdjs.WarningCode.GDArrowsContObjects1.length = 0;
gdjs.WarningCode.GDArrowsContObjects2.length = 0;
gdjs.WarningCode.GDArrowsEarnTextObjects1.length = 0;
gdjs.WarningCode.GDArrowsEarnTextObjects2.length = 0;
gdjs.WarningCode.GDOppSideLifeBarObjects1.length = 0;
gdjs.WarningCode.GDOppSideLifeBarObjects2.length = 0;
gdjs.WarningCode.GDLifeBarObjects1.length = 0;
gdjs.WarningCode.GDLifeBarObjects2.length = 0;
gdjs.WarningCode.GDHeathBarObjects1.length = 0;
gdjs.WarningCode.GDHeathBarObjects2.length = 0;


return;

}

gdjs['WarningCode'] = gdjs.WarningCode;
