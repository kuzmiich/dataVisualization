import {theme} from "./theme.js";

theme.coolUpdate();

window.addEventListener('storage', function (event){
    theme.coolUpdate();
})