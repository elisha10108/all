import {managerInit} from "./manageMov.js"
import { viewEventsInit } from "./viewEvents.js";
import DarkWindow from "../services/dark.js";


$(() => {
  init();
})

const init = () => {
  DarkWindow.createDarkWindow();
  viewEventsInit();
  managerInit();
}