/* ==========================================================================
 Lazyload

 Initialize:
 cargobay.lazyload();

 Support:
 Latest Chrome
 Latest FireFox
 Latest Safari
 IE10 and up
 ========================================================================== */

var cargobay = cargobay || {};

cargobay.lazyLoad = function(scroll) {

    var init;
    var _lazyloader, _isElementInViewport, _getNodes;

    // Config
    var datAttr = 'data-lazy',
        tagToLazyLoad = 'img';

    _lazyloader = function() {

        var data =  _getNodes(datAttr);

        // set the image src on each element that has the needed data-attribute
        data.forEach(function (item) {

            // if the scroll option is set to true, check if the element is in the viewport before loading
            if (scroll === true) {

                if (_isElementInViewport(item)) {

                    if (typeof item.nodeName !== 'undefined' && item.nodeName === 'IMG') {
                        item.addEventListener('load', function () {
                            item.removeAttribute(datAttr);
                        });

                        item.src = item.getAttribute(datAttr);
                    }
                }
            }

            // load all images after each other
            else {
                if (typeof item.nodeName !== 'undefined' && item.nodeName === 'IMG') {
                    item.addEventListener('load', function () {
                        item.removeAttribute(datAttr);
                    });

                    item.src = item.getAttribute(datAttr);
                }
            }

        });

        // if all the images are loaded, stop calling the handler
        if (data.length === 0) {
            window.removeEventListener('load', _lazyloader);

            if (scroll === true) {
                window.removeEventListener('scroll', 'resize', _lazyloader);
            }
        }
    };

    // Check if the element is in the viewport when scroll / resize is set to true
    _isElementInViewport = function(el) {

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // get all the images set with the data-attribute
    _getNodes = function(attribute) {

        var allElements = document.getElementsByTagName(tagToLazyLoad),
            allElementsLen = allElements.length,
            curElement,
            results = [];

        for (var i = 0; i < allElementsLen; i++) {
            curElement = allElements[i];

            if (curElement.getAttribute(attribute)) {
                results.push(curElement);
            }
        }

        return results;
    };


    // Init
    init = (function() {
        _lazyloader();

        if (scroll === true) {
            // add eventlisteners for actions on page
            window.addEventListener('resize', _lazyloader);
            window.addEventListener('scroll', _lazyloader);
        }

    })();
};
