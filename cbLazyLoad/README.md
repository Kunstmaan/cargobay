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

While initializing the cargobay.lazyload(); you can choose to set the option **scroll** on. Then the script will check if your image is in the viewport and only load it on scroll and resize when it appears in the viewport. 
You can do so by setting `cargobay.lazyload(true);` 
The default is set to *false*

#### lazy load normal setup
```html
<img    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D"
        data-lazy="http://placepenguin.com/g/400/300"/>                
```

#### lazy load fallback - no javascript
```html
<img    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D"
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
