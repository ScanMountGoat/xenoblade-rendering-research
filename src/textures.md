# Textures
The use of [deferred rendering](./deferred.md) in game has important implications for how texture types are defined. The games use fixed output texture types in the [G-Buffer](./gbuffer.md) but not fixed input texture types. The G-Buffer textures need to have a well defined layout to work properly as inputs for the final lighting and shading calculations.

This means the type of a texture has to be determined by its usage hardcoded in the shader rather than some flag or material parameter in the model file. A "normal map" is simply any texture that is assigned to the normal output by the model's shader. 

The temp textures are even more complex since each temp textures packs up to 4 grayscale textures like metalness or ambient occlusion into the RGBA color channels. This may even include textures from completely different models in the case of Xenoblade 3. In practice, most non temp textures have all their color channels assigned to a single G-Buffer texture output and have a well defined texture type like color or normal. 

Some common texture types and naming conventions are summarized below. These names are simply conventions and have no impact on how a texture is actually used. For accurate texture channel assignment, use an application or plugin that uses assignment information from the shader code like [xenoblade_blender](https://github.com/ScanMountGoat/xenoblade_blender).

| Type | Description | Names |
| --- | --- | --- |
| Color | RGBA color | _COL |
| Normal | XY tangent space normals | _NRM | 
| Temp | Channel packed parameters | temp0000, _RGB | 
| Specular | Specular color for toon materials | _SPM, _SPC, _MTL |
| Emission | Shadeless color that doesn't actually emit light | _GLO |
| Mask | Single channel mask for alpha or texture blending | _MSK, _ALP, _A |