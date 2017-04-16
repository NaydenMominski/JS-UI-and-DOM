function solve() {
    return function(selector) {
        var $dropdownDiv = $('<div />').addClass('dropdown-list');
        var $container = $('<div/>')
            .addClass('options-container')
            .css('position', 'absolute')
            .hide()
            .on('click', '.dropdown-item', buttonClicked)
            .appendTo($dropdownDiv);

        var $selector = $(selector)
            .appendTo($dropdownDiv)
            .hide()
            .find('option');

        for (var index = 0; index < $selector.length; index++) {

            $('<div/>')
                .addClass('dropdown-item')
                .attr('data-value', 'value-' + (index + 1))
                .attr('data-index', index)
                .text('Option ' + (index + 1))
                .appendTo($container);
        }
        // });;

        var $current = $('<div />')
            .addClass("current")
            .attr('data-value', "")
            .text('Select a value')
            .appendTo($dropdownDiv)
            .click(function() {
                $container.show();
            });


        function buttonClicked() {
            $current.text($(this).text());
            $selector.val($(this).attr('data-value'));
            $container.hide();
        }




        $('body').append($dropdownDiv);
    }

}

module.exports = solve;