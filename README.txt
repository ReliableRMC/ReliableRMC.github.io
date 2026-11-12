RELIABLE RMC WEBSITE
====================
index.html        Home
about.html        About Us > Company Overview
why-us.html       About Us > Why Choose Us
clients.html      About Us > Our Clients
blog.html         About Us > Industry Blog
partners.html     About Us > Partners
products.html     Products (one section per product)
services.html     Services overview
service-rmc.html, service-transportation.html, service-pumping.html
                  One page per service
plants.html       Our Plants
calculator.html   Calculator
contact.html      Contact
config.js         Company details. Edit this file to change phone
                  numbers, address, delivery areas, clients and rates.
logo.jpg          Your logo, for use elsewhere.
images/           Plant photos, and the place for service photos (see below).

To view on your computer: double-click index.html.

To publish on GitHub Pages
--------------------------
1. Sign in at github.com and create a new PUBLIC repository.
2. Open it, choose "Add file" > "Upload files".
3. Drag in ALL the files from this folder (not the folder itself) and commit.
4. Go to Settings > Pages. Choose "Deploy from a branch", branch "main",
   folder "/ (root)", and save.
5. After a few minutes the site is live at
   https://YOUR-USERNAME.github.io/REPOSITORY-NAME/

Service photos
--------------
The Transportation and Pumping pages show a drawing until you add photos.
Put your photos in the images folder with exactly these names and they
appear automatically:
    images/service-transportation.jpg   (a transit mixer)
    images/service-pumping.jpg          (a concrete pump)

Google reCAPTCHA on the forms
-----------------------------
1. Go to https://www.google.com/recaptcha/admin/create (sign in with Google).
2. Label: Reliable RMC. Type: reCAPTCHA v2 > "I'm not a robot" Checkbox.
3. Domains: reliablermc.github.io (add localhost too if you test locally).
4. Submit, copy the SITE KEY (not the secret key) and paste it into
   config.js:   "recaptchaSiteKey": "PASTE-SITE-KEY-HERE",
5. Commit and push. The checkbox appears on the quote, contact and
   partner forms. The secret key is not used and must never go in this repo.
