# Drop your artwork photos here

Put the original photo straight from your phone in this folder, then run:

```bash
npm run images
```

That writes two web-sized copies into `public/images/artworks/` — a full-size one
for the lightbox and a small one for the grid — and strips the EXIF data, which on
a phone photo usually includes the GPS coordinates of where you took it.

Files in this folder are **not** uploaded to the website and are not committed to
git. They stay on your computer as your originals.

## Naming

Use the artwork's name in lowercase with hyphens: `girl-with-headphones.jpg`.
That name becomes part of the public URL. Spaces and capitals are converted
automatically, but it is tidier to name them properly to begin with.

## Taking a good photo of a drawing

1. **Daylight, not lamplight.** Near a window on an overcast day is ideal.
   Direct sun creates hard shadows and blows out the highlights.
2. **No flash.** It flattens the texture of the paper and leaves a bright spot.
3. **Hold the phone square-on**, directly above the centre of the paper, not at
   an angle. An angle makes a rectangle look like a trapezium.
4. **Tap the drawing on screen** before shooting. That sets focus, exposure and
   white balance on the artwork rather than on the background.
5. **Fill the frame** with the paper, then crop to the paper's edge afterwards.
6. **Watch your own shadow.** Stand so you are not between the window and the page.

If the whites come out grey or yellow, your phone's white balance has locked onto
the wrong thing — tap the white part of the paper and shoot again.
