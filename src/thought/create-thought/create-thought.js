define([
    'thought/thought-storage/thought-storage',
    'router',
    'auth-service'
], function(
    thoughtStorage,
    router,
    authService
) {
    var controller = {
        init: init,
        templateData: {},
        onRender: onRender
    };

    var self = controller;

    return controller;

    function init(options) {
        if (!authService.authResult) {
            router.go('/');
            return;
        }

        self.templateData.parentThought = options.parentThought;

        console.log('create-thought.init(). options: ', options);
        self.options = options;
    }

    function onRender() {
        console.log('create-thought.onRender()');
        var $form = $('.create-thought-form');
        var $thoughtContent = $form.find('[name="thoughtContent"]');
        var $thoughtName = $form.find('[name="thoughtName"]');
        $form.on('submit', function(event) {
            event.preventDefault();
            var thoughtName = $thoughtName.val();
            var thoughtContent = $thoughtContent.val();
            console.debug('thoughtName: ', thoughtName);
            console.debug('thoughtContent: ', thoughtContent);

            var thought = {
                name: thoughtName,
                content: thoughtContent
            };

            thoughtStorage.create(thought, self.options.parentThought).then(function(newThought) {
                thought.id = newThought.id;
                goBack();
            });

            return false;
        });

        var $backButton = $('[data-action="goBack"]').on('click', function() {
            goBack();
        });
    }

    function goBack() {
        var thoughtId = self.options.parentThought.id;
        console.info('createThought.goBack(): Going back to view-thoughts, passing thought id: ', thoughtId);
        router.go('view-thoughts', { thoughtId: thoughtId});
    }

});
