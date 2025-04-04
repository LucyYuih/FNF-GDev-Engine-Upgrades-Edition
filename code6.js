gdjs.DifficultiesCode = {};
gdjs.DifficultiesCode.localVariables = [];
gdjs.DifficultiesCode.forEachIndex2 = 0;

gdjs.DifficultiesCode.forEachObjects2 = [];

gdjs.DifficultiesCode.forEachTemporary2 = null;

gdjs.DifficultiesCode.forEachTotalCount2 = 0;

gdjs.DifficultiesCode.GDBackObjects1= [];
gdjs.DifficultiesCode.GDBackObjects2= [];
gdjs.DifficultiesCode.GDdifficultiesTextObjects1= [];
gdjs.DifficultiesCode.GDdifficultiesTextObjects2= [];
gdjs.DifficultiesCode.GDdifficultiesText2Objects1= [];
gdjs.DifficultiesCode.GDdifficultiesText2Objects2= [];
gdjs.DifficultiesCode.GDBlackScreen2Objects1= [];
gdjs.DifficultiesCode.GDBlackScreen2Objects2= [];
gdjs.DifficultiesCode.GDStatisticsObjects1= [];
gdjs.DifficultiesCode.GDStatisticsObjects2= [];
gdjs.DifficultiesCode.GDComboNumbersObjects1= [];
gdjs.DifficultiesCode.GDComboNumbersObjects2= [];
gdjs.DifficultiesCode.GDNotesSplashObjects1= [];
gdjs.DifficultiesCode.GDNotesSplashObjects2= [];
gdjs.DifficultiesCode.GDfpsObjects1= [];
gdjs.DifficultiesCode.GDfpsObjects2= [];
gdjs.DifficultiesCode.GDEngineTextObjects1= [];
gdjs.DifficultiesCode.GDEngineTextObjects2= [];
gdjs.DifficultiesCode.GDLongUpscrollBFObjects1= [];
gdjs.DifficultiesCode.GDLongUpscrollBFObjects2= [];
gdjs.DifficultiesCode.GDLongUpscrollOPPObjects1= [];
gdjs.DifficultiesCode.GDLongUpscrollOPPObjects2= [];
gdjs.DifficultiesCode.GDHitboxLeftObjects1= [];
gdjs.DifficultiesCode.GDHitboxLeftObjects2= [];
gdjs.DifficultiesCode.GDHitboxDownObjects1= [];
gdjs.DifficultiesCode.GDHitboxDownObjects2= [];
gdjs.DifficultiesCode.GDHitboxUpObjects1= [];
gdjs.DifficultiesCode.GDHitboxUpObjects2= [];
gdjs.DifficultiesCode.GDhitrightObjects1= [];
gdjs.DifficultiesCode.GDhitrightObjects2= [];
gdjs.DifficultiesCode.GDBFIconObjects1= [];
gdjs.DifficultiesCode.GDBFIconObjects2= [];
gdjs.DifficultiesCode.GDOppIconObjects1= [];
gdjs.DifficultiesCode.GDOppIconObjects2= [];
gdjs.DifficultiesCode.GDPauseButtonObjects1= [];
gdjs.DifficultiesCode.GDPauseButtonObjects2= [];
gdjs.DifficultiesCode.GDPauseButton2Objects1= [];
gdjs.DifficultiesCode.GDPauseButton2Objects2= [];
gdjs.DifficultiesCode.GDBlackScreenObjects1= [];
gdjs.DifficultiesCode.GDBlackScreenObjects2= [];
gdjs.DifficultiesCode.GDPauseTextObjects1= [];
gdjs.DifficultiesCode.GDPauseTextObjects2= [];
gdjs.DifficultiesCode.GDExitTextObjects1= [];
gdjs.DifficultiesCode.GDExitTextObjects2= [];
gdjs.DifficultiesCode.GDRestartTextObjects1= [];
gdjs.DifficultiesCode.GDRestartTextObjects2= [];
gdjs.DifficultiesCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.DifficultiesCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.DifficultiesCode.GDBfRightNoteObjects1= [];
gdjs.DifficultiesCode.GDBfRightNoteObjects2= [];
gdjs.DifficultiesCode.GDBfUpNoteObjects1= [];
gdjs.DifficultiesCode.GDBfUpNoteObjects2= [];
gdjs.DifficultiesCode.GDBfDownNoteObjects1= [];
gdjs.DifficultiesCode.GDBfDownNoteObjects2= [];
gdjs.DifficultiesCode.GDBfLeftNoteObjects1= [];
gdjs.DifficultiesCode.GDBfLeftNoteObjects2= [];
gdjs.DifficultiesCode.GDBfLeftNote4Objects1= [];
gdjs.DifficultiesCode.GDBfLeftNote4Objects2= [];
gdjs.DifficultiesCode.GDBfDownNote5Objects1= [];
gdjs.DifficultiesCode.GDBfDownNote5Objects2= [];
gdjs.DifficultiesCode.GDBfUpNote6Objects1= [];
gdjs.DifficultiesCode.GDBfUpNote6Objects2= [];
gdjs.DifficultiesCode.GDBfRightNote7Objects1= [];
gdjs.DifficultiesCode.GDBfRightNote7Objects2= [];
gdjs.DifficultiesCode.GDArrowsIconObjects1= [];
gdjs.DifficultiesCode.GDArrowsIconObjects2= [];
gdjs.DifficultiesCode.GDArrowsContObjects1= [];
gdjs.DifficultiesCode.GDArrowsContObjects2= [];
gdjs.DifficultiesCode.GDArrowsEarnTextObjects1= [];
gdjs.DifficultiesCode.GDArrowsEarnTextObjects2= [];


gdjs.DifficultiesCode.mapOfGDgdjs_9546DifficultiesCode_9546GDBlackScreen2Objects2Objects = Hashtable.newFrom({"BlackScreen2": gdjs.DifficultiesCode.GDBlackScreen2Objects2});
gdjs.DifficultiesCode.eventsList0 = function(runtimeScene) {

};gdjs.DifficultiesCode.mapOfGDgdjs_9546DifficultiesCode_9546GDBlackScreen2Objects2Objects = Hashtable.newFrom({"BlackScreen2": gdjs.DifficultiesCode.GDBlackScreen2Objects2});
gdjs.DifficultiesCode.eventsList1 = function(runtimeScene) {

};gdjs.DifficultiesCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackScreen2"), gdjs.DifficultiesCode.GDBlackScreen2Objects1);

for (gdjs.DifficultiesCode.forEachIndex2 = 0;gdjs.DifficultiesCode.forEachIndex2 < gdjs.DifficultiesCode.GDBlackScreen2Objects1.length;++gdjs.DifficultiesCode.forEachIndex2) {
gdjs.DifficultiesCode.GDBlackScreen2Objects2.length = 0;


gdjs.DifficultiesCode.forEachTemporary2 = gdjs.DifficultiesCode.GDBlackScreen2Objects1[gdjs.DifficultiesCode.forEachIndex2];
gdjs.DifficultiesCode.GDBlackScreen2Objects2.push(gdjs.DifficultiesCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultiesCode.mapOfGDgdjs_9546DifficultiesCode_9546GDBlackScreen2Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.DifficultiesCode.GDBlackScreen2Objects2.length ;i < len;++i) {
    gdjs.DifficultiesCode.GDBlackScreen2Objects2[i].getBehavior("Opacity").setOpacity(200);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackScreen2"), gdjs.DifficultiesCode.GDBlackScreen2Objects1);

for (gdjs.DifficultiesCode.forEachIndex2 = 0;gdjs.DifficultiesCode.forEachIndex2 < gdjs.DifficultiesCode.GDBlackScreen2Objects1.length;++gdjs.DifficultiesCode.forEachIndex2) {
gdjs.DifficultiesCode.GDBlackScreen2Objects2.length = 0;


gdjs.DifficultiesCode.forEachTemporary2 = gdjs.DifficultiesCode.GDBlackScreen2Objects1[gdjs.DifficultiesCode.forEachIndex2];
gdjs.DifficultiesCode.GDBlackScreen2Objects2.push(gdjs.DifficultiesCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DifficultiesCode.mapOfGDgdjs_9546DifficultiesCode_9546GDBlackScreen2Objects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.DifficultiesCode.GDBlackScreen2Objects2.length ;i < len;++i) {
    gdjs.DifficultiesCode.GDBlackScreen2Objects2[i].getBehavior("Opacity").setOpacity(100);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackScreen2"), gdjs.DifficultiesCode.GDBlackScreen2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DifficultiesCode.GDBlackScreen2Objects1.length;i<l;++i) {
    if ( gdjs.DifficultiesCode.GDBlackScreen2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DifficultiesCode.GDBlackScreen2Objects1[k] = gdjs.DifficultiesCode.GDBlackScreen2Objects1[i];
        ++k;
    }
}
gdjs.DifficultiesCode.GDBlackScreen2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DifficultiesCode.GDBlackScreen2Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(60).getChild("Difficultie").setNumber(((gdjs.DifficultiesCode.GDBlackScreen2Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.DifficultiesCode.GDBlackScreen2Objects1[0].getVariables()).getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Player", "difficulty", runtimeScene.getGame().getVariables().getFromIndex(60).getChild("Difficultie").getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}

}


};

gdjs.DifficultiesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DifficultiesCode.GDBackObjects1.length = 0;
gdjs.DifficultiesCode.GDBackObjects2.length = 0;
gdjs.DifficultiesCode.GDdifficultiesTextObjects1.length = 0;
gdjs.DifficultiesCode.GDdifficultiesTextObjects2.length = 0;
gdjs.DifficultiesCode.GDdifficultiesText2Objects1.length = 0;
gdjs.DifficultiesCode.GDdifficultiesText2Objects2.length = 0;
gdjs.DifficultiesCode.GDBlackScreen2Objects1.length = 0;
gdjs.DifficultiesCode.GDBlackScreen2Objects2.length = 0;
gdjs.DifficultiesCode.GDStatisticsObjects1.length = 0;
gdjs.DifficultiesCode.GDStatisticsObjects2.length = 0;
gdjs.DifficultiesCode.GDComboNumbersObjects1.length = 0;
gdjs.DifficultiesCode.GDComboNumbersObjects2.length = 0;
gdjs.DifficultiesCode.GDNotesSplashObjects1.length = 0;
gdjs.DifficultiesCode.GDNotesSplashObjects2.length = 0;
gdjs.DifficultiesCode.GDfpsObjects1.length = 0;
gdjs.DifficultiesCode.GDfpsObjects2.length = 0;
gdjs.DifficultiesCode.GDEngineTextObjects1.length = 0;
gdjs.DifficultiesCode.GDEngineTextObjects2.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.DifficultiesCode.GDHitboxLeftObjects1.length = 0;
gdjs.DifficultiesCode.GDHitboxLeftObjects2.length = 0;
gdjs.DifficultiesCode.GDHitboxDownObjects1.length = 0;
gdjs.DifficultiesCode.GDHitboxDownObjects2.length = 0;
gdjs.DifficultiesCode.GDHitboxUpObjects1.length = 0;
gdjs.DifficultiesCode.GDHitboxUpObjects2.length = 0;
gdjs.DifficultiesCode.GDhitrightObjects1.length = 0;
gdjs.DifficultiesCode.GDhitrightObjects2.length = 0;
gdjs.DifficultiesCode.GDBFIconObjects1.length = 0;
gdjs.DifficultiesCode.GDBFIconObjects2.length = 0;
gdjs.DifficultiesCode.GDOppIconObjects1.length = 0;
gdjs.DifficultiesCode.GDOppIconObjects2.length = 0;
gdjs.DifficultiesCode.GDPauseButtonObjects1.length = 0;
gdjs.DifficultiesCode.GDPauseButtonObjects2.length = 0;
gdjs.DifficultiesCode.GDPauseButton2Objects1.length = 0;
gdjs.DifficultiesCode.GDPauseButton2Objects2.length = 0;
gdjs.DifficultiesCode.GDBlackScreenObjects1.length = 0;
gdjs.DifficultiesCode.GDBlackScreenObjects2.length = 0;
gdjs.DifficultiesCode.GDPauseTextObjects1.length = 0;
gdjs.DifficultiesCode.GDPauseTextObjects2.length = 0;
gdjs.DifficultiesCode.GDExitTextObjects1.length = 0;
gdjs.DifficultiesCode.GDExitTextObjects2.length = 0;
gdjs.DifficultiesCode.GDRestartTextObjects1.length = 0;
gdjs.DifficultiesCode.GDRestartTextObjects2.length = 0;
gdjs.DifficultiesCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.DifficultiesCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.DifficultiesCode.GDBfRightNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfRightNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfUpNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfUpNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfDownNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfDownNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfLeftNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfLeftNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfLeftNote4Objects1.length = 0;
gdjs.DifficultiesCode.GDBfLeftNote4Objects2.length = 0;
gdjs.DifficultiesCode.GDBfDownNote5Objects1.length = 0;
gdjs.DifficultiesCode.GDBfDownNote5Objects2.length = 0;
gdjs.DifficultiesCode.GDBfUpNote6Objects1.length = 0;
gdjs.DifficultiesCode.GDBfUpNote6Objects2.length = 0;
gdjs.DifficultiesCode.GDBfRightNote7Objects1.length = 0;
gdjs.DifficultiesCode.GDBfRightNote7Objects2.length = 0;
gdjs.DifficultiesCode.GDArrowsIconObjects1.length = 0;
gdjs.DifficultiesCode.GDArrowsIconObjects2.length = 0;
gdjs.DifficultiesCode.GDArrowsContObjects1.length = 0;
gdjs.DifficultiesCode.GDArrowsContObjects2.length = 0;
gdjs.DifficultiesCode.GDArrowsEarnTextObjects1.length = 0;
gdjs.DifficultiesCode.GDArrowsEarnTextObjects2.length = 0;

gdjs.DifficultiesCode.eventsList2(runtimeScene);
gdjs.DifficultiesCode.GDBackObjects1.length = 0;
gdjs.DifficultiesCode.GDBackObjects2.length = 0;
gdjs.DifficultiesCode.GDdifficultiesTextObjects1.length = 0;
gdjs.DifficultiesCode.GDdifficultiesTextObjects2.length = 0;
gdjs.DifficultiesCode.GDdifficultiesText2Objects1.length = 0;
gdjs.DifficultiesCode.GDdifficultiesText2Objects2.length = 0;
gdjs.DifficultiesCode.GDBlackScreen2Objects1.length = 0;
gdjs.DifficultiesCode.GDBlackScreen2Objects2.length = 0;
gdjs.DifficultiesCode.GDStatisticsObjects1.length = 0;
gdjs.DifficultiesCode.GDStatisticsObjects2.length = 0;
gdjs.DifficultiesCode.GDComboNumbersObjects1.length = 0;
gdjs.DifficultiesCode.GDComboNumbersObjects2.length = 0;
gdjs.DifficultiesCode.GDNotesSplashObjects1.length = 0;
gdjs.DifficultiesCode.GDNotesSplashObjects2.length = 0;
gdjs.DifficultiesCode.GDfpsObjects1.length = 0;
gdjs.DifficultiesCode.GDfpsObjects2.length = 0;
gdjs.DifficultiesCode.GDEngineTextObjects1.length = 0;
gdjs.DifficultiesCode.GDEngineTextObjects2.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.DifficultiesCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.DifficultiesCode.GDHitboxLeftObjects1.length = 0;
gdjs.DifficultiesCode.GDHitboxLeftObjects2.length = 0;
gdjs.DifficultiesCode.GDHitboxDownObjects1.length = 0;
gdjs.DifficultiesCode.GDHitboxDownObjects2.length = 0;
gdjs.DifficultiesCode.GDHitboxUpObjects1.length = 0;
gdjs.DifficultiesCode.GDHitboxUpObjects2.length = 0;
gdjs.DifficultiesCode.GDhitrightObjects1.length = 0;
gdjs.DifficultiesCode.GDhitrightObjects2.length = 0;
gdjs.DifficultiesCode.GDBFIconObjects1.length = 0;
gdjs.DifficultiesCode.GDBFIconObjects2.length = 0;
gdjs.DifficultiesCode.GDOppIconObjects1.length = 0;
gdjs.DifficultiesCode.GDOppIconObjects2.length = 0;
gdjs.DifficultiesCode.GDPauseButtonObjects1.length = 0;
gdjs.DifficultiesCode.GDPauseButtonObjects2.length = 0;
gdjs.DifficultiesCode.GDPauseButton2Objects1.length = 0;
gdjs.DifficultiesCode.GDPauseButton2Objects2.length = 0;
gdjs.DifficultiesCode.GDBlackScreenObjects1.length = 0;
gdjs.DifficultiesCode.GDBlackScreenObjects2.length = 0;
gdjs.DifficultiesCode.GDPauseTextObjects1.length = 0;
gdjs.DifficultiesCode.GDPauseTextObjects2.length = 0;
gdjs.DifficultiesCode.GDExitTextObjects1.length = 0;
gdjs.DifficultiesCode.GDExitTextObjects2.length = 0;
gdjs.DifficultiesCode.GDRestartTextObjects1.length = 0;
gdjs.DifficultiesCode.GDRestartTextObjects2.length = 0;
gdjs.DifficultiesCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.DifficultiesCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.DifficultiesCode.GDBfRightNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfRightNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfUpNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfUpNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfDownNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfDownNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfLeftNoteObjects1.length = 0;
gdjs.DifficultiesCode.GDBfLeftNoteObjects2.length = 0;
gdjs.DifficultiesCode.GDBfLeftNote4Objects1.length = 0;
gdjs.DifficultiesCode.GDBfLeftNote4Objects2.length = 0;
gdjs.DifficultiesCode.GDBfDownNote5Objects1.length = 0;
gdjs.DifficultiesCode.GDBfDownNote5Objects2.length = 0;
gdjs.DifficultiesCode.GDBfUpNote6Objects1.length = 0;
gdjs.DifficultiesCode.GDBfUpNote6Objects2.length = 0;
gdjs.DifficultiesCode.GDBfRightNote7Objects1.length = 0;
gdjs.DifficultiesCode.GDBfRightNote7Objects2.length = 0;
gdjs.DifficultiesCode.GDArrowsIconObjects1.length = 0;
gdjs.DifficultiesCode.GDArrowsIconObjects2.length = 0;
gdjs.DifficultiesCode.GDArrowsContObjects1.length = 0;
gdjs.DifficultiesCode.GDArrowsContObjects2.length = 0;
gdjs.DifficultiesCode.GDArrowsEarnTextObjects1.length = 0;
gdjs.DifficultiesCode.GDArrowsEarnTextObjects2.length = 0;


return;

}

gdjs['DifficultiesCode'] = gdjs.DifficultiesCode;
