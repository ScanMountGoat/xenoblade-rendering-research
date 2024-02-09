# Textures
The use of [deferred rendering](./deferred.md) in game has important implications for how texture types are defined. The games use fixed output texture types in the [G-Buffer](./gbuffer.md) but not fixed input texture types. The G-Buffer textures need to have a well defined layout to work properly as inputs for the final lighting and shading calculations.

This means the type of a texture has to be determined by its usage hardcoded in the shader rather than some flag or material parameter in the model file. A "normal map" is simply any texture that is assigned to the normal output by the model's shader. The temp textures are even more complex since each temp textures packs up to 4 grayscale textures like metalness or ambient occlusion into the RGBA color channels. This may even include textures from completely different models in the case of Xenoblade 3. The [xc3_lib releases](https://github.com/ScanMountGoat/xc3_lib/releases) include a pregenerated database of this assignment information to handle texture assignment and channel packing.

In practice, most non temp textures have all their color channels assigned to a single G-Buffer texture output and have a well defined texture type like color or normal. Some common texture types and naming conventions are summarized below.

## Color

## Normal

## Temp

## Specular

## Alpha Mask