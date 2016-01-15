## Cargobay Lazy Load

### General
- Lazy Load snippet

## Required includes
- **Javascript**
    - cargobay.general.min.js
    - cargobay.lazyload.min.js

### Initialise
```javascript
cargobay.general();
cargobay.lazyload();
```

### Usage

This snippet is intended to lazy load images when in the viewport. 

In the **data-lazy** attribute; the real source of the image gets specified, also it specifies if the element has to lazy load or not. 

In the src of the img; there is a spacer loaded. This is done with base64 *('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D')* 
When you want to have a non-javascript fallback, you can put **noscript** tags around the img. The advantage of this is that the brwoser doesn't need to load extra spacer-images.

To make the images viewable when there is no javascript enabled, it's important to also use a **noscript** tag with the image and src defined. This will then only show when there is no javascript available.

It is possible to put an effect on the loading of the images. In this component are two examples, you can add as you want. You need to specify the effect in the **data-effect** attribute.
 
- lazy-load__fade
- lazy-load__color

#### lazy load normal setup
```html
<img    data-effect="lazy-load__fade"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D"
        data-lazy="http://placepenguin.com/g/400/300"/>                
```

#### lazy load fallback - no javascript
```html
<img    data-effect="lazy-load__fade"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D"
        data-lazy="http://placepenguin.com/g/400/300"/>
<noscript>
    <img src="http://placepenguin.com/g/400/300"/>
</noscript>
```

### Support
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE10 and up
