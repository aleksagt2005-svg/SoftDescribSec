/************* 
 * Chet *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'chet';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.9216, 1.0, 0.9608]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);





flowScheduler.add(thankstextRoutineBegin());
flowScheduler.add(thankstextRoutineEachFrame());
flowScheduler.add(thankstextRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'softdiscrib.xlsx', 'path': 'softdiscrib.xlsx'},
    {'name': 'ashoka.jpg', 'path': 'ashoka.jpg'},
    {'name': 'philippe.jpg', 'path': 'philippe.jpg'},
    {'name': 'mansamusa.jpg', 'path': 'mansamusa.jpg'},
    {'name': 'sultanmexmed.jpg', 'path': 'sultanmexmed.jpg'},
    {'name': 'henrih8.jpg', 'path': 'henrih8.jpg'},
    {'name': 'septimusseverus.jpg', 'path': 'septimusseverus.jpg'},
    {'name': 'karlsmelui.jpg', 'path': 'karlsmelui.jpg'},
    {'name': 'shahabbas.jpg', 'path': 'shahabbas.jpg'},
    {'name': 'ivaniii.jpg', 'path': 'ivaniii.jpg'},
    {'name': 'willgelmzavoev.jpg', 'path': 'willgelmzavoev.jpg'},
    {'name': 'cisi.jpg', 'path': 'cisi.jpg'},
    {'name': 'mariatudor.jpg', 'path': 'mariatudor.jpg'},
    {'name': 'lakshmibai.jpg', 'path': 'lakshmibai.jpg'},
    {'name': 'hatshepsut.jpg', 'path': 'hatshepsut.jpg'},
    {'name': 'theodora.jpg', 'path': 'theodora.jpg'},
    {'name': 'urraca.jpg', 'path': 'urraca.jpg'},
    {'name': 'eleonoraargonorskay.jpg', 'path': 'eleonoraargonorskay.jpg'},
    {'name': 'kristinashwedish.jpg', 'path': 'kristinashwedish.jpg'},
    {'name': 'nurdjuhan.jpg', 'path': 'nurdjuhan.jpg'},
    {'name': 'Tamara6.jpg', 'path': 'Tamara6.jpg'},
    {'name': 'questnika.xlsx', 'path': 'questnika.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var instr0;
var instr1;
var instr2;
var instr3;
var key_resp;
var softClock;
var theirphoto;
var theirname;
var theirdescribtion;
var instrmini;
var response;
var questsoftClock;
var text;
var slider;
var thankstextClock;
var thanks;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instr0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr0',
    text: 'Инструкция:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'Перед Вами на экране будут появляться правители различных времен с их именами и описаниями. Внимательно ознакомьтесь с каждым, после чего нажмите “пробел”, чтобы перейти к вопросам. Вам нужно будет ответить на 6 вопросов после каждой пробы. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  instr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr2',
    text: 'Важно: после того, как пробы закончатся, ничего не нажимайте, дайте эксперименту сохранить данные самостоятельно, пожалуйста. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  instr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr3',
    text: 'Если все понятно, нажмите “пробел”, чтобы приступить к прохождению эксперимента.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "soft"
  softClock = new util.Clock();
  theirphoto = new visual.ImageStim({
    win : psychoJS.window,
    name : 'theirphoto', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.1], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  theirname = new visual.TextStim({
    win: psychoJS.window,
    name: 'theirname',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  theirdescribtion = new visual.TextStim({
    win: psychoJS.window,
    name: 'theirdescribtion',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  instrmini = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrmini',
    text: 'нажмите "пробел", чтобы перейти к вопросам',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "questsoft"
  questsoftClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0442\u043e\u0447\u043d\u043e \u043d\u0435\u0442", "\u043d\u0435\u0442", "\u043d\u0435 \u0437\u043d\u0430\u044e", "\u0434\u0430", "\u0442\u043e\u0447\u043d\u043e \u0434\u0430"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([(- 0.2157), 0.1686, 0.8588]), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "thankstext"
  thankstextClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Эксперимент завершен, спасибо за участие!\n\nПодождите, данные сохраняются...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionMaxDurationReached;
var _key_resp_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instr0);
    instructionComponents.push(instr1);
    instructionComponents.push(instr2);
    instructionComponents.push(instr3);
    instructionComponents.push(key_resp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr0* updates
    if (t >= 0.0 && instr0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr0.tStart = t;  // (not accounting for frame time here)
      instr0.frameNStart = frameN;  // exact frame index
      
      instr0.setAutoDraw(true);
    }
    
    
    // if instr0 is active this frame...
    if (instr0.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr1* updates
    if (t >= 0.0 && instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1.tStart = t;  // (not accounting for frame time here)
      instr1.frameNStart = frameN;  // exact frame index
      
      instr1.setAutoDraw(true);
    }
    
    
    // if instr1 is active this frame...
    if (instr1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr2* updates
    if (t >= 0.0 && instr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr2.tStart = t;  // (not accounting for frame time here)
      instr2.frameNStart = frameN;  // exact frame index
      
      instr2.setAutoDraw(true);
    }
    
    
    // if instr2 is active this frame...
    if (instr2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr3* updates
    if (t >= 0.0 && instr3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr3.tStart = t;  // (not accounting for frame time here)
      instr3.frameNStart = frameN;  // exact frame index
      
      instr3.setAutoDraw(true);
    }
    
    
    // if instr3 is active this frame...
    if (instr3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'softdiscrib.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(softRoutineBegin(snapshot));
      trialsLoopScheduler.add(softRoutineEachFrame());
      trialsLoopScheduler.add(softRoutineEnd(snapshot));
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_4LoopScheduler);
      trialsLoopScheduler.add(trials_4LoopEnd);
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questnika.xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(questsoftRoutineBegin(snapshot));
      trials_4LoopScheduler.add(questsoftRoutineEachFrame());
      trials_4LoopScheduler.add(questsoftRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var softMaxDurationReached;
var _response_allKeys;
var softMaxDuration;
var softComponents;
function softRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'soft' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    softClock.reset();
    routineTimer.reset();
    softMaxDurationReached = false;
    // update component parameters for each repeat
    theirphoto.setImage(photo);
    theirname.setText(name);
    theirdescribtion.setText(describtion);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('soft.started', globalClock.getTime());
    softMaxDuration = null
    // keep track of which components have finished
    softComponents = [];
    softComponents.push(theirphoto);
    softComponents.push(theirname);
    softComponents.push(theirdescribtion);
    softComponents.push(instrmini);
    softComponents.push(response);
    
    for (const thisComponent of softComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function softRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'soft' ---
    // get current time
    t = softClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *theirphoto* updates
    if (t >= 0.0 && theirphoto.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      theirphoto.tStart = t;  // (not accounting for frame time here)
      theirphoto.frameNStart = frameN;  // exact frame index
      
      theirphoto.setAutoDraw(true);
    }
    
    
    // if theirphoto is active this frame...
    if (theirphoto.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *theirname* updates
    if (t >= 0.0 && theirname.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      theirname.tStart = t;  // (not accounting for frame time here)
      theirname.frameNStart = frameN;  // exact frame index
      
      theirname.setAutoDraw(true);
    }
    
    
    // if theirname is active this frame...
    if (theirname.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *theirdescribtion* updates
    if (t >= 0.0 && theirdescribtion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      theirdescribtion.tStart = t;  // (not accounting for frame time here)
      theirdescribtion.frameNStart = frameN;  // exact frame index
      
      theirdescribtion.setAutoDraw(true);
    }
    
    
    // if theirdescribtion is active this frame...
    if (theirdescribtion.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instrmini* updates
    if (t >= 0.0 && instrmini.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrmini.tStart = t;  // (not accounting for frame time here)
      instrmini.frameNStart = frameN;  // exact frame index
      
      instrmini.setAutoDraw(true);
    }
    
    
    // if instrmini is active this frame...
    if (instrmini.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    
    // if response is active this frame...
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: 'space', waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of softComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function softRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'soft' ---
    for (const thisComponent of softComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('soft.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        routineTimer.reset();
        }
    
    response.stop();
    // the Routine "soft" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var questsoftMaxDurationReached;
var questsoftMaxDuration;
var questsoftComponents;
function questsoftRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'questsoft' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    questsoftClock.reset();
    routineTimer.reset();
    questsoftMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(questions);
    slider.reset()
    psychoJS.experiment.addData('questsoft.started', globalClock.getTime());
    questsoftMaxDuration = null
    // keep track of which components have finished
    questsoftComponents = [];
    questsoftComponents.push(text);
    questsoftComponents.push(slider);
    
    for (const thisComponent of questsoftComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function questsoftRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'questsoft' ---
    // get current time
    t = questsoftClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // if slider is active this frame...
    if (slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check slider for response to end Routine
    if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of questsoftComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questsoftRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'questsoft' ---
    for (const thisComponent of questsoftComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('questsoft.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "questsoft" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thankstextMaxDurationReached;
var thankstextMaxDuration;
var thankstextComponents;
function thankstextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thankstext' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thankstextClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    thankstextMaxDurationReached = false;
    // update component parameters for each repeat
    // Отключаем скачивание через браузер
    psychoJS._saveResults = 0;
    
    // Именуем файлы
    let filename = psychoJS.experiment._participant +  '_' + psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    // Достаем дата обджект из эксперимента
    let dataObj = psychoJS._experiment._trialsData;
    // Конвертируем в csv
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    // Отправляем на OSF через DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
         },   
         body: JSON.stringify({
            experimentID: 'O7rkrzSZbVwm', // * DATAPIPE EXP ID*
            filename: filename, 
            data: data,
         }),
    }).then(response => response.json()).then(data => {
    // Кидаем в консоль результат и выходим из эксперимента
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('thankstext.started', globalClock.getTime());
    thankstextMaxDuration = null
    // keep track of which components have finished
    thankstextComponents = [];
    thankstextComponents.push(thanks);
    
    for (const thisComponent of thankstextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function thankstextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thankstext' ---
    // get current time
    t = thankstextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }
    
    
    // if thanks is active this frame...
    if (thanks.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      thanks.tStop = t;  // not accounting for scr refresh
      thanks.frameNStop = frameN;  // exact frame index
      // update status
      thanks.status = PsychoJS.Status.FINISHED;
      thanks.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thankstextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thankstextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thankstext' ---
    for (const thisComponent of thankstextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thankstext.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thankstextMaxDurationReached) {
        thankstextClock.add(thankstextMaxDuration);
    } else {
        thankstextClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
