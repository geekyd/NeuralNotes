require.config({
    baseUrl: 'src/',
    paths: {
        text: "../bower_components/text/text",
        d3: "../bower_components/d3/d3"
    }
});

define([
    'text!thought/create-thought/create-thought.html',
    'text!thought/view-thoughts/view-thoughts.html'
],
function(
    createThoughtTemplate,
    viewThoughtsTemplate
) {

    $(document).ready(function() {
        console.debug('app start');

        //$('.create-thought').append(createThoughtTemplate);
        $('.view-thoughts').append(viewThoughtsTemplate);

        require(['src/thought/view-thoughts/view-thoughts.js']);

    });
});
