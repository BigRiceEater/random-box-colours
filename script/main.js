requirejs.config({
    baseUrl: 'script',
    paths: {
        jquery: 'https://code.jquery.com/jquery-3.5.1.min',
        jqueryui : "https://code.jquery.com/ui/1.12.1/jquery-ui.min"
    }
});

requirejs(['controller'], function(controller){
    console.log('main started')
})