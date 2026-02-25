# Material Types
Each model specific shader writes a hardcoded value to the EtcBuffer G-Buffer texture representing the material type for the shader. Each of the material types has its own shader and draw call in the deferred lighting render pass. The deferred lighting pass uses the material type to mask each shader to only affect the pixels with the appropriate material type like PBR or Toon. This means that each pixel on screen can only be assigned one of the material types below. Changing the material type for a material requires changing the assigned compiled shader code and is not configurable from material parameters.

## Type 0
## Type 1 (PBR)
Type 1 materials use standard PBR lighting and shading. PBR materials use a base color, glossiness, and metallic inputs.

## Type 2 (Toon)
Type 2 materials use color gradients for toon shading. See [toon](./toon.md) for details.

## Type 3
## Type 4

## Type 5 (Hair)
Xenoblade 3 defines a new material type used for hair with custom shading and a special blur filter a stylized appearance. See [hair](./hair.md) for details.
