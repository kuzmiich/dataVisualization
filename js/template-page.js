import {theme} from "./theme";

theme.coolUpdate();

window.addEventListener('storage', function (event){
    theme.coolUpdate();
})