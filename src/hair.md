# Hair Materials


## Hair SNN Blur (Xenoblade 3)
<div class="image-compare">
  <img src="images/hair/hair.jpg" alt="Eunie hair"/>
  <img src="images/hair/hair_blur.jpg" alt="Eunie hair blurred"/>
</div>

Xenoblade 3 uses special rendering techniques not present in the other games to define the unique look of its character hair materials. The hair textures in Xenoblade 3 contain much higher frequency detail than the other games. This helps give the illusion of the hair being made up of actual strands but would appear heavily aliased in game without any filtering. The game uses a special blur function in a postprocessing pass to reduce the aliasing and give the hair a more stylized look. The final effect gives the hair the appearance of brush strokes like the similar Kuwahara or "oil paint" filters found in some image editing programs.

The hair post processing pass uses a blur technique known as symmetric nearest neighbor (SNN) to blur the pixels on screen covered by hair materials. Blur functions work by averaging neighboring pixels for each pixel in the image using some sort of weighting scheme. An SNN blur function compares a pair of opposite pixels to the central pixel and picks the pixel with the most similar color to blur. This has the effect of blurring regions of similarly colored pixels but keeping most of the edges that define the hair strands. The in game blur code is modified from the standard formulation to only blur horizontally. This improve performance while still preserving the vertical hair strands as long as characters are standing upright.

The game masks the blur effect to only apply to hair materials using stencil testing values defined in the model's materials. This is separate from the hair material type that is defined by the model's material parameters. Most materials in Xenoblade 3 that use the hair material type also enable the SNN blur pass.