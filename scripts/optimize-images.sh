#!/usr/bin/env bash
# Converts phone photos of artwork into web-sized WebP files.
#   public/images/artworks/raw/portrait-01.jpg
#     -> public/images/artworks/portrait-01.webp        (max 1600px, for the lightbox)
#     -> public/images/artworks/portrait-01-thumb.webp  (max 600px,  for the grid)
# Safe to re-run: existing output is overwritten, raw files are never touched.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
raw="$root/public/images/artworks/raw"
out="$root/public/images/artworks"

# ImageMagick 7 renamed `convert` to `magick`; support both.
if command -v magick >/dev/null 2>&1; then im=(magick)
elif command -v convert >/dev/null 2>&1; then im=(convert)
else
  echo "ImageMagick is not installed. On Ubuntu: sudo apt install imagemagick" >&2
  exit 1
fi

shopt -s nullglob nocaseglob
photos=("$raw"/*.{jpg,jpeg,png,webp,heic,tif,tiff})
shopt -u nocaseglob

if [ ${#photos[@]} -eq 0 ]; then
  echo "No photos in $raw"
  echo "Drop your artwork photos there, then run this again."
  exit 0
fi

total_before=0
total_after=0

for photo in "${photos[@]}"; do
  name="$(basename "${photo%.*}")"
  # Spaces and capitals in filenames become awkward URLs.
  slug="$(echo "$name" | tr '[:upper:] ' '[:lower:]-' | tr -cd 'a-z0-9._-')"

  before=$(stat -c%s "$photo")

  # -auto-orient applies the EXIF rotation, which browsers ignore once stripped.
  # -strip removes EXIF, which on a phone photo includes GPS coordinates.
  "${im[@]}" "$photo" -auto-orient -strip -resize '1600x1600>' -quality 82 "$out/$slug.webp"
  "${im[@]}" "$photo" -auto-orient -strip -resize  '600x600>'  -quality 80 "$out/$slug-thumb.webp"

  after=$(( $(stat -c%s "$out/$slug.webp") + $(stat -c%s "$out/$slug-thumb.webp") ))
  total_before=$(( total_before + before ))
  total_after=$(( total_after + after ))

  printf '%-34s %6s KB  ->  %6s KB\n' "$slug" "$(( before / 1024 ))" "$(( after / 1024 ))"
done

echo
printf 'Done: %d image(s), %s KB -> %s KB\n' \
  "${#photos[@]}" "$(( total_before / 1024 ))" "$(( total_after / 1024 ))"
echo "Now add them to the gallery in index.html — see the EDIT comment there."
