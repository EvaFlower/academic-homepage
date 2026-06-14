// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    function showPublicationCover($trigger) {
        var imageUrl = $trigger.data('full-image');
        if (!imageUrl) {
            return;
        }

        var title = $trigger.data('title') || '';
        var $modal = $('#publicationCoverModal');
        if (!$modal.length) {
            $('body').append(
                '<div class="modal fade publication-cover-modal" id="publicationCoverModal" tabindex="-1" role="dialog" aria-hidden="true">' +
                    '<div class="modal-dialog modal-dialog-centered" role="document">' +
                        '<div class="modal-content">' +
                            '<div class="modal-body">' +
                                '<button type="button" class="close position-absolute text-white pr-2" style="right: 0; top: -2rem;" data-dismiss="modal" aria-label="Close">' +
                                    '<span aria-hidden="true">&times;</span>' +
                                '</button>' +
                                '<img class="w-100 rounded-sm" src="" alt="">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
            $modal = $('#publicationCoverModal');
        }

        $modal.find('img').attr({
            src: imageUrl,
            alt: title
        });
        $modal.modal('show');
    }

    $(document).on('click', '.publication-cover-button', function () {
        showPublicationCover($(this));
    });

    $(document).on('click', '.publication-cover-mobile', function (event) {
        if ($(event.target).closest('a, button').length) {
            return;
        }
        showPublicationCover($(this));
    });

    $(document).on('keydown', '.publication-cover-mobile', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            showPublicationCover($(this));
        }
    });
})
