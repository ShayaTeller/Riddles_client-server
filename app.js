import Riddle from './clases/riddle.js';
import Player from './clases/player.js';
import PromptSync from 'prompt-sync';
import {readDB} from './Dal/read.js'
import {updateRiddleById} from './Dal/update.js'
import {deleteRiddleBiId} from './Dal/delete.js'
import {createNewRiddle,askForRiddle} from './Dal/create.js'
import { readFile } from 'fs';
import {mainMenu} from './servises/menu.js';
const prompt = PromptSync();
mainMenu();














