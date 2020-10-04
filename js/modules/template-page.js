import {theme} from "./theme.js";

theme.coolUpdate();

window.addEventListener('storage', function (event){
    theme.coolUpdate();
})

$(function(){
    let includes = $('[data-include]');

    jQuery.each(includes, function(){
        let file = '../components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});