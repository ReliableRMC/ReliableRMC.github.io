/* ================================================================
   RELIABLE RMC – SITE DETAILS
   Every page reads its company details from this one file.
   Change a value, save, and upload this file to GitHub again.

   whatsapp   country code + number, digits only.
   email      leave "" to keep email off the site.
   highlights the four short points under the home page headline.
   areas      places you deliver to.
   hours      add rows like ["Plant", "7 am to 9 pm"]. Leave [] to hide.
   plants     add another {...} block if you open a second plant.
              "capacity" (for example "60 m³ per hour") shows only if filled.
   clients    add {"name": "ABC Builders", "logo": "abc.png"} entries
              (logo optional). They replace the customer-type tiles.
   rates      price per cubic metre for each grade. Leave 0 to hide
              the cost estimate in the calculator.
   ================================================================ */
window.SITE = {
  "name": "Reliable RMC",
  "tagline": "Strong Foundations. Reliable Construction.",
  "contactName": "Sanskar Mittal",
  "phone1": "+91 95252 51291",
  "phone2": "+91 70197 85499",
  "whatsapp": "919525251291",
  "email": "",
  "address": "Opposite Indian Gas Godown, Mandir Hasaud, Chhattisgarh 492101",
  "mapUrl": "https://maps.app.goo.gl/jfCExDKu4RqgV4iR8",
  "instagram": "https://www.instagram.com/reliable.readymixconcrete",
  "areas": [
    "Mandir Hasaud",
    "Nava Raipur (Atal Nagar)",
    "Raipur",
    "Arang"
  ],
  "hours": [],
  "plants": [
    {
      "name": "Mandir Hasaud Plant",
      "status": "Operational",
      "address": "Opposite Indian Gas Godown, Mandir Hasaud, Chhattisgarh 492101",
      "map": "https://maps.app.goo.gl/jfCExDKu4RqgV4iR8",
      "phones": [
        "+91 95252 51291",
        "+91 70197 85499"
      ],
      "contact": "Sanskar Mittal",
      "capacity": "",
      "areas": [
        "Mandir Hasaud",
        "Nava Raipur (Atal Nagar)",
        "Raipur",
        "Arang"
      ]
    }
  ],
  "clients": [],
  "rates": {
    "M10": 0,
    "M15": 0,
    "M20": 0,
    "M25": 0,
    "M30": 0,
    "M35": 0,
    "M40": 0
  },
  "mixerCapacity": 6,
  "wastage": 0.05,
  "highlights": [
    "Batched by weight",
    "Slump and cube tested",
    "Transit mixer delivery",
    "Concrete pumping"
  ]
};
