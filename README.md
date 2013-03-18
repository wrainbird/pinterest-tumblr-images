# Tumblr + Pinterest #

Use this plugin if you want to have a Pinterest "Pin It" button appear when you hover over an image.

This plugin's structure based off the popular Fitvids.js plugin by Chris Coyier and Paravel.

## How Do I Use It?
Include jQuery 1.7+ and pinitimages.js in your layout and target your post container with `pinterestImageButton()`.

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.pinitimages.js"></script>
<script>
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $('post').pinterestImageButton();
  });
</script>
```

This wraps a container around each image with the link hidden until hovered over.

## Adding other image hosts

To avoid wrapping a Pin It button around every image - images only from media.tumblr.com will be wrapped. However if you host a lot of your images through another host you can add it as an option.

```javascript
  $('post').pinterestImageButton({ customSource: "img[src^='http://imgur.com']" });
```