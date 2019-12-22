# complex SVG adapted from Affinity Designer

exercise in refactoring a complex SVG export. Aims:

- [ ] re-position SVG elements CSS `@media` for mobile
- [ ] use CSS `transition` on SVG `hover`
- [ ] show/hide SVG elements
- [ ] replace `path` with `polygon` (partially complete)
- [x] simplify `radialGradient` and move to CSS
- [x] add .woff web font

## References

- [Gradients and Patterns (W3C Recommendation: SVG 1.1, 16 August 2011)](https://www.w3.org/TR/SVG11/pservers.html)
- [Using A Radial Gradient Fill in SVG](http://www.svgbasics.com/radial_gradients.html)
- [w3schools SVG radialGradient](https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_radial)
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio

https://svgontheweb.com
- [Sara Soueidan: SVG Coordinate Systems](https://www.sarasoueidan.com/blog/svg-coordinate-systems/)
https://www.sarasoueidan.com/blog/svg-transformations/
https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/
https://www.sarasoueidan.com/images/svg-nesting-chick.svg
https://www.sarasoueidan.com/blog/svg-coordinate-systems/
https://www.sarasoueidan.com/demos/interactive-svg-coordinate-system/



## Calculate polygon points
https://www.mathopenref.com/coordpolycalc.html


## Rotating SVG

**Rotating Text**

Make sure text element has a central pivot, either via CSS:

```
text {
  text-anchor: middle;          // horiz
  dominant-baseline: central;   // vert
}
```

or the SVG element directly:

```
<text x="0" y="0" text-anchor="middle" dominant-baseline="central">Hello</text>
```

Then, rotate the text in the SVG (this won't work via the CSS since you need to specify the x and y coordinates on top of the rotation degree) using `rotate(deg x y)`:  
- x = original x coordinate  
- y = original y coordinate  

```
<text x="0" y="0" 
      text-anchor="middle" dominant-baseline="central"
      transform="rotate(180 0 0)"
      >Hello</text>
```


**Rotating Shapes**

Rotate shape directly in SVG using `rotate(deg cx cy)`:  
- cx = x + width/2  
- cy = y + height/2  

```
<rect class="g" width="300" height="100" x="400" y="330"
      transform="rotate(90 550 380)" />
```




