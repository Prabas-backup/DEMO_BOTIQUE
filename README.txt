ARUNA FABRIC & BOUTIQUE — WEBSITE FILES
========================================

WHAT'S INSIDE
-------------
index.html           Home page (with category boxes linking to each collection)
works.html            Works collection gallery
normal.html           Normal collection gallery
dresses.html          Dresses collection gallery
one-gram-gold.html    One Gram Gold collection gallery
contact.html          Contact Us page with an enquiry form
css/style.css         All styling (colors, fonts, layout)
js/script.js          Mobile menu, image lightbox, contact form validation
images/logo.png       Your uploaded logo (used in the header, hero and footer)
images/works/         Placeholder gallery images for the Works page
images/normal/        Placeholder gallery images for the Normal page
images/dresses/       Placeholder gallery images for the Dresses page
images/onegramgold/   Placeholder gallery images for the One Gram Gold page

HOW TO VIEW IT
--------------
Unzip everything into one folder, keeping the folder structure exactly as-is,
then double-click index.html to open it in your browser. Every page links to
the others through the navigation menu at the top.

REPLACING THE PLACEHOLDER IMAGES WITH YOUR OWN PHOTOS
------------------------------------------------------
Right now, each gallery page shows elegant placeholder tiles (maroon/gold
frames with a label) instead of real product photos, since none were
provided. To use your own photos:

1. Take/collect photos of your products for each category.
2. Rename them to match the existing placeholder files, e.g.:
     images/works/works-1.svg   ->  replace with works-1.jpg
     images/works/works-2.svg   ->  replace with works-2.jpg
   ...and so on for normal, dresses, and onegramgold.
3. If you use .jpg or .png instead of .svg, open the relevant .html file
   in a text editor and change the file extension in the <img src="..."> 
   and update the same reference on the Home page's category boxes
   (index.html) which currently point to the "-1" image of each folder.
4. You can add more or fewer images per page — just copy an existing
   <figure class="gallery-item">...</figure> block in works.html /
   normal.html / dresses.html / one-gram-gold.html and point it at your
   new image file.

CHANGING TEXT, PHONE NUMBER, ADDRESS
-------------------------------------
Open contact.html in a text editor and update the phone number, email,
address, and boutique hours in the "contact-info" section.

COLORS USED (matched to your logo)
-----------------------------------
Deep maroon:  #6E1E3A
Gold:         #C9A24B
Cream:        #FBF6EF
Ink (text):   #2B2320

These are defined once at the top of css/style.css under ":root" — change
them there to update the whole site's color scheme in one place.

NEED HOSTING?
-------------
These are plain HTML/CSS/JS files, so they can be hosted anywhere that
serves static files (e.g. Netlify, GitHub Pages, or your own web host) —
no server-side setup or build step required.
