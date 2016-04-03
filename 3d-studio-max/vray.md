# VRay

## Indoor scene

### Steps
from: https://www.youtube.com/watch?v=q4Da6L8g3Uo
1. Render Setup->Common->Assign Renderer->Production, choose V-Ray

2. Render Setup->V-Ray->V-Ray: Frame Buffer, check "Enable built-in Frame Buffer"

3. Render Setup->V-Ray->V-Ray: Global switches, disable "Default Lights"

4. Render Setup->V-Ray->V-Ray: Image Sampler (Antialiasing) (Controls the quality of the image)
	Image Sampler type: 3 methods (he likes "Adaptive DMC")
	Antialiasing filter: switch on
		many options (he prefers "Catmull-Rom")

5. Render Setup->V-Ray->V-Ray: Environment (Controls the environment, reflections and refractions)
	(then turn on all 3 of them)

6. Add VRayLight
	Create->Lights->Vray->VRayLight (he placed it to the window) (the light mustn't overlap with geometry)
		fix the light intensity
		from options make it invisible

7. Render Setup->Indirect illumination->V-Ray: Indirect Illumination(GI)
	turn it on
	then choose:
		for "Primary bounces" => "Irradiance Map"
		for "Secondary bounces" => "Light Cache"

8. Render Setup->Indirect illumination->V-Ray: Irradiance Map
	for fast results choose
		"Current Preset" => Low
		Basic Parameters->HSph. subdivs: 40

9. Render Setup->V-Ray->V-Ray: Color mapping->Type, choose "Exponential"

10. Render Setup->Indirect illumination->V-Ray: Irradiance Map->Advanced Options->Sample Lookup, choose "Overlapping (very good/fast)"

11. Render Setup->Indirect illumination->V-Ray: Light Cache
	check "Show calc. phase"
	increase "Subdivs" from 1000 to 1200
12. Add a standard directional light (Target Direct) for direct light source
	Directional Parameters: Fix "Hotspot/Beam" and "Falloff/Field"
	Shadows: on with "VRayShadow"

### Final Image Settings
13. Render Setup->V-Ray->V-Ray: Adaptive DMC image sampler
	Min subdivs: 2

14. Render Setup->Indirect illumination->V-Ray: Irradiance Map
	"Current Preset" => Hight
	Basic Parameters->HSph. subdivs: 50

15. Render Setup->Indirect illumination->V-Ray: Light Cache
	Sample size: 0.006

16. Render Setup->Common->Common Parameters->Output Size
	Width 1000
	Height 750

## Metal Material
from: (https://www.youtube.com/watch?v=k0XMdwvsVpQ)
1. Create a VRayMtl

2. On Reflection
	Reflect: set color to white
	Refl. glossiness: controls the bluriness of the reflection
	Subdivs: increase it to reduce noise

3. On BRDF
	Anisotropy: 0.75
	Rotation

## Material round corners
1. Create VRayMtl
	on bump choose "VRayEdgesTex"
