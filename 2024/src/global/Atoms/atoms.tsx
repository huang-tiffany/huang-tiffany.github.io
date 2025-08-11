import { atom } from "recoil";

interface piece {
  string: string;
  year: string;
  title: string;
  size: string;
  medium: string;
  url: string;
  statement: string;
  media: string[];
  previewDescription: string;
  previewImage: string;
  tags: string[];
}

export const pieces = atom<{
  [categoryKey: string]: { [pieceKey: string]: piece };
}>({
  key: "pieces",
  default: {
    // 2D DESIGN
    "2D DESIGN": {
      billboards: {
        string: "billboards",
        year: "2023 - 2024",
        title: "Ramp Times Square Billboards",
        size: "",
        medium: "Figma",
        url: "",
        statement:
          "During 2023 and 2024, Ramp launched an ongoing campaign to thank its customers for all of the world-changing accomplishments being performed at each company. Working closely with Growth and Marketing teams, I helped design and populate content for over 100 billboards every month starting in September based on existing templates designed by fellow Brand designer Shivani Soni.",
        media: [
          "billboards1.jpg",
          "billboards2.jpg",
          "billboards3.jpg",
          "billboards4.jpg",
          "billboards5.jpg",
          "billboards6.jpg",
          "billboards7.jpg",
          "billboards8.jpg",
          "billboards9.jpg",
          "billboards10.jpg",
          "billboards11.jpg",
          "billboards12.jpg",
        ],
        previewDescription:
          "Times Square billboards showcasing Ramp's gratitude for its clients.",
        previewImage: "billboards3.jpg",
        tags: ["branding", "campaign"],
      },

      rampSwag: {
        string: "rampSwag",
        year: "2024",
        title: "Ramp Evergreen Collection",
        size: "",
        medium: "Figma",
        url: "",
        statement:
          "Working with fellow Brand designer Shivani Soni, I helped develop a small apparel collection — the first one designed in-house — for Ramp employees. Compared to the last collection made by design agency Fuzzco, we decided to skew slightly more conservative and cater to all kinds of fashion styles worn by people at Ramp offices. I designed a hat, two tees, and a crewneck, with the pine Element Tee being the most corporate, the black Modern Crew representing a mix of simple and bold graphics, and the off-white Bottom Line Tee being the most 'streetwear' styled of the three. Photos courtesy of Fuzzco.",
        media: [
          "rampswag1.jpg",
          "rampswag2.jpg",
          "rampswag3.jpg",
          "rampswag4.jpg",
          "rampswag5.jpg",
          "rampswag6.jpg",
          "rampswag7.jpg",
          "rampswag8.jpg",
          "rampswag9.jpg",
          "rampswag10.jpg",
        ],
        previewDescription:
          "Ramp's first evergreen apparel collection, designed in-house, for employees of all styles.",
        previewImage: "rampswag5.jpg",
        tags: ["branding", "apparel"],
      },

      theArchiveAsFriendship: {
        string: "theArchiveAsFriendship",
        year: "2024",
        title: "The Archive as Friendship",
        size: '18" &times; 24" (poster form), 9" &times; 6" (booklet form)',
        medium:
          "Figma, Plotter, Adobe InDesign, Adobe Photoshop, VSCode, Javascript, Facebook Messenger, Facebook, Meta Spark Studio, Instagram",
        url: '<a href="https://www.figma.com/proto/mT9sUIMHNQBXX2wzMf9hKl/The-Archive-as-Friendship?page-id=0%3A1&node-id=1-24&viewport=494%2C385%2C0.06&t=jUfwFkGgsWxOYrTr-1&scaling=scale-down&content-scaling=fixed" target="_blank">PRESENTATION</a>',
        statement:
          "With most friendships taking both digital and physical forms, online chat logs can often be a way to trace the development of relationships. Containing both arguments and gratitude, both small talk and deep conversations, the online archive as we know it not only acts as a means of communication and connection, but as a pseudo record of an entire relationship. <br><br> With this thought in mind, I created a project that catalogued and analyzed data from six complete calendar years of friendship with a friend of mine from middle and high school. Although we attended school together before going to college, we communicated primarily through Gmail chats and, upon entering high school, Facebook Messenger (something that still holds true today). By downloading six years' worth of content and parsing it with a simple Javascript program to count the quantity of messages, along with reading every chat log manually to sort through the depth and topics of each conversation, I organized my data into three formats ranging from the most objective to the most subjective view of the data. The largest poster format acts as an overview, mapping interactions in a calendar view and sorting them by the depth of the conversation (light, medium, and deep talks). The medium-sized booklet format goes into more detail with the content, organizing it in a temporally nonlinear format through the alphabetical indexing of conversation topics, with red lines running throughout the pages to trace recurring threads of more interesting conversation topics. And lastly, the smallest AR format (accessed via mobile phone) encourages exploration of the text in a more intimate format, with the overlaying of actual transmitted images (ranging from cute GIFs and stupid memes to mundane homework snapshots and photos taken during in-person hangouts). <br><br> Using this mix of personal and objective data alongside a mix of analog and digital formats, I wanted to explore the nuance and subversion of conversation in the digital age: where phones can encourage vulnerability and connection, and where chat logs can act as a living, digital archive for friendship.",
        media: [
          "thearchiveasfriendship1.jpg",
          "thearchiveasfriendship2.jpg",
          "thearchiveasfriendship3.jpg",
          "thearchiveasfriendship4.jpg",
          "thearchiveasfriendship5.jpg",
          "thearchiveasfriendship6.jpg",
          "thearchiveasfriendship7.jpg",
          "thearchiveasfriendship8.jpg",
          "thearchiveasfriendship9.jpg",
          "thearchiveasfriendship10.jpg",
          "thearchiveasfriendship11.jpg",
          "thearchiveasfriendship12.jpg",
          "thearchiveasfriendship13.jpg",
          "thearchiveasfriendship14.jpg",
          "thearchiveasfriendship15.jpg",
          "thearchiveasfriendship16.jpg",
          "thearchiveasfriendship17.mp4",
          "thearchiveasfriendship18.mp4",
          "thearchiveasfriendship19.mp4",
          "thearchiveasfriendship20.mp4",
          "thearchiveasfriendship21.mp4",
        ],
        previewDescription:
          "Poster booklet documenting six years of friendship as recorded on Facebook Messenger.",
        previewImage: "thearchiveasfriendship17.jpg",
        tags: ["poster", "AR", "book", "print", "data design"],
      },

      lapse: {
        string: "lapse",
        year: "2024",
        title: "Lapse",
        size: '112 pages, 8.5" &times; 5.5"',
        medium:
          "Figma, Paper, Aluminum Sheet, Drill Press, Metal Stamps, Center Punch, Scribe, Blue Ballpoint Pen, HTML, CSS, Javascript, VSCode",
        url: '<a href="https://indd.adobe.com/view/89af6ce0-fc9a-4858-962e-7b6e41a97f59" target="_blank">FULL BOOK</a>',
        statement:
          "By sequencing images taken from ten YouTube videos focusing on timelapses of singular objects, I created a book about shadows, inspired by the idea of shadows being alternative 'images' of a subject. By overlaying bitmap filters of decreasing strength on each image and asking five sources (one AI alt text generator and four humans of varying backgrounds) to identify the source of the shadow, the project questions the identity of images and the point at which an image crosses over from an objective depiction of a subject to a medium one assigns meaning to.",
        media: [
          "lapse1.jpg",
          "lapse2.jpg",
          "lapse3.jpg",
          "lapse4.jpg",
          "lapse5.jpg",
          "lapse6.jpg",
          "lapse7.jpg",
          "lapse8.jpg",
        ],
        previewDescription:
          "Book containing sequenced images of shadows and their interpretations.",
        previewImage: "lapse6.jpg",
        tags: ["book", "print", "data design"],
      },

      peopleWatching: {
        string: "peopleWatching",
        year: "2024",
        title: "People(-)Watching",
        size: "",
        medium:
          "Figma, Paper, Blue Ballpoint Pen, HTML, CSS, Javascript, VSCode",
        url: '<a href="https://huang-tiffany.github.io/People-Watching/" target="_blank">LINK</a><br><a href="https://huang-tiffany.github.io/People-Watching/database" target="_blank">DATABASE</a><br><a href="https://www.figma.com/proto/oJQNcIkvmMtLpSFL23cU7E/People(-)Watching?page-id=0%3A1&node-id=1-9&viewport=490%2C382%2C0.07&t=MKJjKMqlnjGywHPp-1&scaling=contain&content-scaling=fixed" target="_blank">PRESENTATION</a>',
        statement:
          "Prompted with the theme of uncovering and analyzing personal data, I decided to focus on the theme of eye contact with strangers. Given that I'm always looking around and examining my surroundings, I tend to make eye contact with many people during my daily life; this project records my various experiences over five days in January. Each card represents an encounter I had with a complete stranger who I had never seen before, including my first impressions, assumptions, and notes. <br><br> In total, I encountered 341 people during the span of this project. The final deliverable, a single serving site (SSS), recreates the unexpected and serendipitous experience of making eye contact with those unfamiliar to us; at the time stamp listed on each card, the corresponding card will display for a random span of 20 seconds. Often, cards can appear simultaneously, and often, no cards may appear at all — and even when one appears, there may not be enough time to read the entire contents of an encounter, just as we may not get to know everything we wanted to know about someone we encountered so suddenly. The sides of the page track how many instances have already occurred in the day and the last time one encounter was made.",
        media: [
          "people(-)watching1.gif",
          "people(-)watching2.gif",
          "people(-)watching3.jpg",
          "people(-)watching4.mp4",
        ],
        previewDescription:
          "Single serving site recreating the serendipity of eye contact with strangers.",
        previewImage: "people(-)watching3.jpg",
        tags: ["web", "coding", "data design"],
      },

      emt: {
        string: "emt",
        year: "2024",
        title: "Emerging Talent Webpage",
        size: "",
        medium: "Figma",
        url: '<a href="https://ramp.com/emerging-talent" target="_blank">LINK</a>',
        statement:
          "<em>Displayed: my prototype (first) and the first version launched in January 2024 (second).</em> <br><br> During my summer at Ramp, one of the projects I had the chance to work on was a webpage for our Emerging Talent program focusing on recruiting the best up-and-coming talent from universities. Thinking primarily about introducing elements of delight in user interactions — given the inspiring recent website rebrand and the potential of interns to bring refreshing perspectives to company environments — I wanted to follow the traditional layout of a university program page like that of other creative companies like Converse and Apple, going through dozens of iterations to arrive at a distinctly 'Ramp' look and feel. Working closely with fellow Brandtern Thandi Roe, we were able to art-direct a photoshoot featuring our class of interns, which brought a spirit of camaraderie and personality into the webpage. <br><br> Although my role in the project wrapped up after the summer, the final design kept the general structure and modules from my original design when it launched in January of 2024. Since then, it has been used to recruit future interns and has acted as the online presence for Ramp's Emerging Talent department and program.",
        media: [
          "emt1.mp4",
          "emt2.mp4",
          "emt3.mp4",
          "emt4.jpg",
          "emt5.jpg",
          "emt6.jpg",
          "emt7.jpg",
        ],
        previewDescription:
          "Inaugural webpage for Ramp's Emerging Talent program featuring interns and new grads.",
        previewImage: "emt8.jpg",
        tags: ["web", "art direction"],
      },

      amplify: {
        string: "amplify",
        year: "2023",
        title: "Amplify",
        size: "",
        medium:
          "HTML, CSS, React.js, Express.js, Next.js, Vite, Typescript, Github, VSCode, Figma, Adobe Illustrator",
        url: '<a href="https://www.figma.com/proto/zJx5usW7UXk8lhYiDpjEBC/Amplify-%2F-CS0320-Final?page-id=27%3A2110&node-id=27-2230&viewport=348%2C205%2C0.04&t=54Q6NxFad2f0mCOa-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A2230&show-proto-sidebar=1" target="_blank">PROTOTYPE (APP IN DEPLOYMENT PROCESS)</a>',
        statement:
          "Working with Sean Yu (full-stack dev) and Elijah Whang (backend dev), I designed and prototyped the interface for a web-based app for playlist generation as a UI/UX designer and front-end dev. Although other Spotify playlist generators exist on the web, <em>Amplify</em> provides an experience in which users have more control over the content of the playlist, adding in key components from Spotify's API to sort through different song factors including energy, valence, popularity, and danceability. With a list of nine possible factors and three seeds (artist, genre, and tracks) to choose from, this app not only gives more power to the user to finetune the qualities of their playlists, but also allows them to be more informed about their listening preferences.",
        media: [
          "amplify1.jpg",
          "amplify2.mp4",
          "amplify3.jpg",
          "amplify4.jpg",
          "amplify5.jpg",
          "amplify6.jpg",
          "amplify7.jpg",
        ],
        previewDescription:
          "Web-based app for generating new Spotify playlists with more nuance and control.",
        previewImage: "amplify1.jpg",
        tags: ["web", "coding", "front-end", "design engineering"],
      },

      sccParks: {
        string: "sccParks",
        year: "2022",
        title: "Santa Clara County Parks Interpretation Rebrand",
        size: '101 pages, 11" &times; 8.5"',
        medium: "Adobe InDesign, Adobe Illustrator, Adobe Photoshop, Canva",
        url: '<a href="https://indd.adobe.com/view/96b4a5b2-34c2-493b-afae-c11cf2f99e85" target="_blank">STYLE GUIDE</a>',
        statement:
          "During my internship at Santa Clara County Parks, I was tasked with creating branding guidelines and templates for the Interpretation team's program flyers. Starting with seven different sets of templates for categories including one-time and multisession events, I completely redesigned the visual identity of the flyers to be more visually cohesive and ADA-compliant. Along with the designs themselves, I also carried out training in Canva to teach the Interpretation team not only how to use my system, but also how to navigate Canva itself for future design needs. The end result culminated in a 100+ page style guide detailing the templates, elements used in the templates, spacing, typography, Canva best practices, and FAQ's, among other details, as a way of documenting the entirety of the redesign and to provide details for future possible redesigns.",
        media: [
          "sccparks1.jpg",
          "sccparks2.jpg",
          "sccparks3.jpg",
          "sccparks4.jpg",
          "sccparks5.jpg",
          "sccparks6.jpg",
          "sccparks7.jpg",
          "sccparks8.jpg",
          "sccparks9.jpg",
          "sccparks10.jpg",
          "sccparks11.jpg",
          "sccparks12.jpg",
          "sccparks13.jpg",
          "sccparks14.jpg",
          "sccparks15.jpg",
          "sccparks16.jpg",
        ],
        previewDescription:
          "Design system rebrand for local Parks & Rec department print marketing.",
        previewImage: "sccparks12.jpg",
        tags: ["branding"],
      },

      rogueMagazine: {
        string: "rogueMagazine",
        year: "2022",
        title: "Rogue Magazine",
        size: '74 pages, 8.5" &times; 11"',
        medium: "Adobe InDesign, Adobe Photoshop, Adobe Illustrator",
        url: '<a href="https://indd.adobe.com/view/3a1257f9-d1bc-4a55-8cc3-ac0b2bfee11d" target="_blank">FULL MAGAZINE</a>',
        statement:
          "As the Creative Director for Brown's Rogue Fashion Magazine, I worked with other members of Rogue's executive board to gather content for the culminating publication of the year's activities and designed the magazine from scratch as the sole graphic designer. Collaborating with an editorial team to gather stories about up-and-coming student designers at RISD, I took charge of creating layouts and compositions to assemble a booklet, later printed as physical copies that the club distributed among staff members and the featured designers.",
        media: [
          "roguemagazine1.jpg",
          "roguemagazine2.jpg",
          "roguemagazine3.jpg",
          "roguemagazine4.jpg",
          "roguemagazine5.jpg",
          "roguemagazine6.jpg",
          "roguemagazine7.jpg",
          "roguemagazine8.jpg",
        ],
        previewDescription:
          "Creative direction and design spotlighting up-and-coming designers at RISD.",
        previewImage: "roguemagazine6.jpg",
        tags: ["editorial", "print", "creative direction"],
      },

      talisman61: {
        string: "talisman61",
        year: "2021",
        title: "Talisman 61",
        size: '281 pages, 9" &times; 12"',
        medium: "Adobe InDesign, Adobe Illustrator, Adobe Photoshop",
        url: "",
        statement:
          "Over the 2021-2022 school year, I acted as the Editor-in-Chief for the Saratoga High School yearbook, overseeing a staff of 22, creating style guides and templates, designing, and editing layouts. Our theme for the year, Still Life, speaks to the experiences we underwent as high school students in a year of COVID: whether through appreciating everyday objects more as if we were still life artists, realizing that life has frozen and become still, or discovering that no matter what happens it's 'still life.'",
        media: [
          "talisman611.jpg",
          "talisman612.jpg",
          "talisman613.jpg",
          "talisman614.jpg",
          "talisman615.jpg",
          "talisman616.jpg",
          "talisman617.jpg",
          "talisman618.jpg",
          "talisman619.jpg",
          "talisman6110.jpg",
          "talisman6111.jpg",
          "talisman6112.jpg",
          "talisman6113.jpg",
          "talisman6114.jpg",
          "talisman6115.jpg",
          "talisman6116.jpg",
        ],
        previewDescription:
          "Yearbook design during a year of COVID: a reminder to appreciate the mundane.",
        previewImage: "talisman612.jpg",
        tags: ["editorial", "print", "art direction"],
      },

      theDevelopmentOfTheHumanFigure: {
        string: "theDevelopmentOfTheHumanFigure",
        year: "2020",
        title: "The Development of the Human Figure",
        size: '18 pages, 11" &times; 8.5"',
        medium: "Adobe InDesign",
        url: '<a href="https://indd.adobe.com/view/de846442-b494-41d3-a74e-c76d7a1e8fdc" target="_blank">FULL MAGAZINE</a>',
        statement:
          "Combining my interest in the human form with the rich history associated with depictions of human figures throughout various artistic movements from prehistoric to Modern, I designed a magazine to synthesize my knowledge on one of the most important subjects in art history. Created in the span of about a week, I wrote essays, curated pieces, and designed layouts for the most iconic works I studied in AP Art History.",
        media: [
          "thedevelopmentofthehumanfigure1.jpg",
          "thedevelopmentofthehumanfigure2.jpg",
          "thedevelopmentofthehumanfigure3.jpg",
          "thedevelopmentofthehumanfigure4.jpg",
          "thedevelopmentofthehumanfigure5.jpg",
        ],
        previewDescription:
          "A magazine focusing on how depiction of the human figure has evolved over the centuries.",
        previewImage: "thedevelopmentofthehumanfigure3.jpg",
        tags: ["editorial", "print"],
      },
    },

    // 3D DESIGN
    "3D DESIGN": {
      cruet: {
        string: "cruet",
        year: "2025",
        title: "Estuary Cruet",
        size: '5" &times; 3" &times; 2.25"',
        medium:
          "Ceramic Slip, Cone 5-6 Glazes, Clay, Plaster, Oxidation Firing Electric Kiln",
        url: "",
        statement:
          "Inspired by the forms liquids take, as well as the simple yet ritualistic act of pouring, the <em>Estuary Cruet</em> celebrates the humble soy sauce dispenser as an object for both storage and presentation. <br><br> Featuring a traditional single spout on one side and a unique double spout on the other, in which two streams join to form one while pouring, the cruet accommodates simple everyday use while drawing attention to the ritual of serving condiments. An organic pinch top lid allows for easy storage while completing the fluid form, accentuating the object's function when in use and alluding to it when not. <br><br> The design was created after multiple iterations of clay positives, of which the final was used to create a plaster mold for slip-casting. While abstract, the visual language draws reference from a variety of sources, from Eva Zeisel's collections to sparrow wings and flower petals.",
        media: [
          "cruet1.jpg",
          "cruet2.jpg",
          "cruet3.jpg",
          "cruet4.jpg",
          "cruet5.jpg",
          "cruet6.jpg",
          "cruet7.jpg",
          "cruet8.jpg",
          "cruet9.jpg",
          "cruet10.jpg",
          "cruet11.jpg",
          "cruet12.jpg",
          "cruet13.jpg",
          "cruet14.jpg",
          "cruet15.jpg",
          "cruet16.jpg",
          "cruet17.jpg",
          "cruet18.jpg",
          "cruet19.jpg",
          "cruet20.jpg",
        ],
        previewDescription:
          "Slip-casted soy sauce cruet with dual pour mechanism for both serving and storage.",
        previewImage: "cruet1.jpg",
        tags: ["ceramics", "production", "tableware", "product"],
      },

      rectGarment: {
        string: "rectGarment",
        year: "2025",
        title: "Providence Modular Two-Piece Knit Set",
        size: "Women's Size Small",
        medium:
          "Silver Reed Single Bed Knitting Machine, Cotton, Wool, Tencel, Cashmere, Acrylic, Polyester",
        url: "",
        statement:
          "Over the course of five weeks in winter, while learning techniques on the single bed knitting machine, I explored my personal connection to Providence after having lived in the city for the past four years. Along with acting as a culmination of my explorations with the machine, the resulting two-piece knitted set formalizes the hidden moments of delight that I have documented in my camera roll throughout my years of college, drawing from both the colors I tend to associate most with Providence and from the patterns abstracted from landscape and architecture discovered while walking through city streets, whether in the way the holes in the outer layer draw patterns on skin like sunlight filtering through tree leaves, or in the way the inner dress draws a hazy path from sky to nature to brutalist buildings and industrial plants. <br><br> The piece also explores the possibility of modularity in knitwear, employing buttons as low-tech connecting hardware to allow for the rearrangement of the different fabric pieces into an assortment of clothing. A skirt can become a top; sweaters can be reversed or their sleeve lengths altered; straps can be detached and reattached to change the drape of the fabric. ",
        media: [
          "rectgarment1.jpg",
          "rectgarment2.jpg",
          "rectgarment3.jpg",
          "rectgarment4.jpg",
          "rectgarment5.jpg",
          "rectgarment6.jpg",
          "rectgarment7.jpg",
          "rectgarment8.jpg",
          "rectgarment9.jpg",
          "rectgarment10.jpg",
          "rectgarment11.jpg",
          "rectgarment12.jpg",
        ],
        previewDescription:
          "Modular knitwear documenting four years of exploring the streets of a small city.",
        previewImage: "rectgarment0.jpg",
        tags: ["wearable", "product", "soft goods"],
      },

      clickingBoots: {
        string: "clickingBoots",
        year: "2024",
        title: "Clicking Boots",
        size: "Size 7.5M Women's Dr. Scholl Last",
        medium:
          "Chrome Tan Leather, Pig Skin, Post Machine, Juki Sewing Machine, Veg Tan Leather, Crimp Boards, Aluminum Stock, Metal Lathe, Bridgeport Mill, Flycutter, Dividing Head, Steel Rod, Spring Steel Shanks, Drill Press, Tap, Machine Screws, Museum Wax, Rubber Cement, Contact Cement, Snaps, Snap Setter, Skiving Knife, 5-in-1 Machine, Hammer, Lasting Pincers, Lasting Stand, Heat Gun, Wood Glue, Wallpaper Adhesive, Shoe Last",
        url: "",
        statement:
          "The <em>Clicking Boots</em> explore various ways of combining complicated fabrication methods for both shoe uppers and heels with the treatment of functional elements as simple stylistic features. <br><br> Inspired by pleats as understated design elements with functional components, the wholecut uppers highlight two simple folds down the side of each shoe, with snaps nestled in each pleat to allow for both an easy slip-on user flow when open and zipper-less, tight-fitting silhouettes once closed. The machined aluminum heel adds a mechanism-inspired aspect to the bottom of the shoe, which creates the illusion of the wearer's heel always touching the ground by dropping out to compensate for the height difference when the foot is lifted. <br><br> The boots are named for the sounds they make when being donned and while walking, which resemble the clip-clop of horse hooves.",
        media: [
          "clickingboots1.jpg",
          "clickingboots2.jpg",
          "clickingboots3.jpg",
          "clickingboots4.jpg",
          "clickingboots5.jpg",
          "clickingboots6.jpg",
          "clickingboots7.jpg",
          "clickingboots8.jpg",
          "clickingboots9.jpg",
          "clickingboots10.jpg",
          "clickingboots11.jpg",
          "clickingboots12.jpg",
          "clickingboots13.jpg",
          "clickingboots14*.mp4",
        ],
        previewDescription:
          "Leather boots with single-piece pleated uppers, snap closures, and machined aluminum leveling heels.",
        previewImage: "clickingboots5.jpg",
        tags: ["shoemaking", "machining", "prototyping", "product", "wearable"],
      },

      teaForThree: {
        string: "teaForThree",
        year: "2024",
        title: "Tea for Three",
        size: '1.325" &times; 4" &times; 4"',
        medium:
          "Wood Lathe, Sandpaper, Sculpey, Sterling Silver, Ash, Dowel, Jointer, Planar, Drill Press, Table Saw, Chisel, Oven, Scotch Brite, Bandsaw",
        url: '<a href="https://indd.adobe.com/view/54de1e97-6300-49ef-ab09-778f4ab6228b" target="_blank">FULL PRESENTATION</a>',
        statement:
          "When asked to design a gift for individual stakeholders using participatory and inclusive design research methods, I chose to investigate the communal habits and rituals of my two suitemates and I at the time. Over the span of two weeks, I observed our shared activities together and used the insights to create a set of tea bag holders, which come from our quality time activities of drinking tea together. <br><br> Because it was our last year together at school (though our first year living together), I chose to prototype and develop a set of ritual objects that can be easily integrated into our daily lives, while also choosing materials that age well over time and show signs of use so that they may grow together with us, both at school and beyond. <br><br> The design language of the holders, inspired by our common love for MUJI as well as MUJI's design philosophy of longevity and seamlessness, also allow for customization, with charms created by each individual to add touches of customization. While simple in aesthetics, the tea bag holders allow for individuals to linger longer at the table while drinking tea, putting off the act of getting up to discard used tea bags in favor of mindfully cohabitating shared spaces together.",
        media: [
          "teaforthree2.jpg",
          "teaforthree3.jpg",
          "teaforthree4.jpg",
          "teaforthree5.jpg",
          "teaforthree6.jpg",
          "teaforthree7.jpg",
          "teaforthree8.jpg",
          "teaforthree9.jpg",
          "teaforthree10.jpg",
          "teaforthree11.jpg",
          "teaforthree12.jpg",
          "teaforthree13.jpg",
        ],
        previewDescription:
          "Custom tea bag holders designed using inclusive and participatory design techniques.",
        previewImage: "teaforthree9.jpg",
        tags: ["product", "prototyping", "woodworking", "tableware"],
      },

      loveInAPuff: {
        string: "loveInAPuff",
        year: "2024",
        title: "Love in a Puff",
        size: '10" &times; 14" &times; 5"',
        medium:
          "Arduino, Cherry, Jointer, Planar, Screws, Drill Press, Hand Drill, Vellum, Biscuit Jointer, Table Saw, Aluminum Stock, Sandblaster, South Bend Metal Lathe, Bridgeport Mill, Radius Cutter, Horizontal Bandsaw, Tape, Hot Glue, Wire Cutter, Aluminum Rod, Aluminum Tube, White Glue, Tap, Solidworks, Adobe InDesign, Adobe Illustrator",
        url: '<a href="https://indd.adobe.com/view/700e05f6-3586-43a1-b008-01653bee494f" target="_blank">FULL PRESENTATION</a>',
        statement:
          "After doing initial research on the pain points and experiences of both people in long-distance relationships and those who get homesick, I designed a product that engages with the intense, yet often indescribable, emotions that come with yearning for places and people. <br /><br /> <em>Love in a Puff</em> is a set of two devices, one for each person in the relationship, which contain indicator lights that turn on when both people are in the same room as their devices to symbolize connection, parallel play, and presence. A simple blow on the pinwheel-like shade (designed to evoke nostalgia and playfulness) causes the pinwheel on the other person's device to spin in response, mimicking the sense of shared space by allowing the individuals to effect a force on each others' environments. <br /><br /> The devices act as metaphors for human breath (something that can only be experienced in moments of intimacy), bringing together feelings of lightness and ephemerality. The devices come in desktop and wall-mounted variants and take inspiration from MUJI's soft-spoken design language.",
        media: [
          "loveinapuff1.jpg",
          "loveinapuff2.jpg",
          "loveinapuff3.jpg",
          "loveinapuff4.jpg",
          "loveinapuff5.jpg",
          "loveinapuff6.jpg",
          "loveinapuff7.jpg",
          "loveinapuff8.jpg",
          "loveinapuff9.jpg",
          "loveinapuff10.mp4",
        ],
        previewDescription:
          "Bridging emotional distance between people with breath, light, and movement.",
        previewImage: "loveinapuff2.jpg",
        tags: ["product", "prototyping", "arduino", "machining"],
      },

      homebodyTable: {
        string: "homebodyTable",
        year: "2024",
        title: "Table for a Homebody",
        size: '11.66" &times; 30" &times; 12"',
        medium:
          "Cherry, Jointer, Planar, Router Table, Hand-Held Plunge Router, Table Saw, Wood Glue, Dowels, Canvas Fabric, Plywood, Bandsaw, Chisel, Mallet, Double-Sided Table, Thread, Tacky Glue, Orbital Sander, Drill Press, Biscuit Jointer",
        url: "",
        statement:
          "Tasked with creating a 'mechanism' that aids in the user experience of an object, I created a lap table with tambour-inspired drawers to reveal and conceal cubby spaces for easy storage. <br /><br /> In spite of its simple form factor, <em>Table for a Homebody</em> introduces a subtle moment of delight in its sliding cubby covers, eliciting surprise from its user at the satisfaction of every interaction with the storage space. The cherry finish and warm-toned canvas covers boasting delicate loops for easy pulling reference cozy and domestic aesthetics, recalling both the table's purpose of being a bed-top object and its invitation to stay home and under the covers.",
        media: [
          "homebodytable1.mp4",
          "homebodytable2.jpg",
          "homebodytable3.jpg",
          "homebodytable4.jpg",
          "homebodytable5.jpg",
          "homebodytable6.jpg",
          "homebodytable7.jpg",
          "homebodytable8.jpg",
          "homebodytable9.jpg",
          "homebodytable10.jpg",
          "homebodytable11*.mp4",
        ],
        previewDescription:
          "Lap table with tambour-inspired mechanisms, for people who love staying at home (and in bed).",
        previewImage: "homebodytable6.jpg",
        tags: ["woodworking", "furniture"],
      },

      daychair: {
        string: "daychair",
        year: "2023",
        title: "天椅 (Day Chair)",
        size: '27.23" &times; 20" &times; 20.92"',
        medium:
          "Poplar, Ash, Solidworks, Table Saw, Jointer, Planar, Horizontal Boring Machine, Orbital Disk Sander, Biscuit Joiner, Pin Router, OBS, Nail Gun, Screws, Drill Press, Bandsaw",
        url: "",
        statement:
          '天椅, translated directly as "Sky Chair" or "Day Chair," is a woodworking project I undertook as my first venture into real, everyday furniture. Aptly named due to its side profile, which resembles the Chinese character 天, the semi-cantilevered chair employs frame construction to lay out its sharp, angular components while inlaying steambent ash pieces, filleted with a pin router, to provide both support and an organic counterpoint. With 60 degree angles softened by curved radii as a motif throughout the chair, steambending provides a structural support to allow for more extreme angles of joinery. <br><br> The side profile 天, which turns into the character 人 once the chair is occupied, promotes the idea of the chair being both for everyday use ("天天" meaning "daily"), and of the chair being made for people ("人" meaning "person"). What\'s more, the phrase "天人合一" also resonates with the idea of the chair fitting well with people, just as humans ("人") should live in nature ("天")  together ("合一") in peace. Just as chairs are a unique subsection of furniture that must take careful account of the human body, the 天椅 focuses on the main purpose of chairs as beautiful objects made by people, for people.',
        media: [
          "daychair1.jpg",
          "daychair2.jpg",
          "daychair3.jpg",
          "daychair4.jpg",
          "daychair5.jpg",
          "daychair6.jpg",
          "daychair7.jpg",
          "daychair8.jpg",
          "daychair9.jpg",
          "daychair10.jpg",
          "daychair11.jpg",
          "daychair12.gif",
          "daychair13*.mp4",
        ],
        previewDescription:
          "Chair for daily use, employing frame construction and steambending techniques.",
        previewImage: "daychair3.jpg",
        tags: ["woodworking", "furniture"],
      },

      makitaCultivator: {
        string: "makitaCultivator",
        year: "2023",
        title: "Makita Cultivator",
        size: '4.82" &times; 4" &times; 11.89"',
        medium:
          "Grey Foam, Steel Stock, South Bend Lathe, Plastidip, Acrylic Rod, Rock Hard Putty, Styrene, Spray Paint, JB Weld, Primer, Solidworks, Keyshot, Chipboard, Foamcore, Adobe InDesign, Adobe Illustrator",
        url: '<a href="https://indd.adobe.com/view/9ac268f9-3ee4-478c-9a0d-fdd3cc162fa3" target="_blank">FULL PRESENTATION</a>',
        statement:
          "Given the assignment of designing a gardening tool for a brand, I was given the tool of a hand cultivator, to be designed for Makita, a power tool company. After researching the company’s branding, product lines, and values, I moved into sketching and prototyping to identify the most suitable end design based on Makita’s reputation as a legacy brand known for its ergonomics and simple, but honest design. Focusing primarily on Makita’s target audience, largely composed of professionals using Makita’s tools on a regular basis for their work, I also wanted to make sure to design something that would be industrial and robust enough to endure regular use on the job. <br><br> Over the course of three iterations, I narrowed down the most comfortable handles for the cultivator based on the pulling motions users would employ repeatedly during the tool’s use. The end product, which features a dual-wield grip including a claw grip for tension and a fist grip for force, allows users to easily maneuver through dirt.",
        media: [
          "makitacultivator1.jpg",
          "makitacultivator2.jpg",
          "makitacultivator3.jpg",
          "makitacultivator4.jpg",
          "makitacultivator5.jpg",
          "makitacultivator6.jpg",
          "makitacultivator7.jpg",
          "makitacultivator8.jpg",
          "makitacultivator9.jpg",
          "makitacultivator10.jpg",
          "makitacultivator11.jpg",
          "makitacultivator12.jpg",
        ],
        previewDescription:
          "Hand cultivator gardening tool designed to fit Makita's brand and product line.",
        previewImage: "makitacultivator6.jpg",
        tags: ["product", "prototyping", "machining", "cad"],
      },

      permutationJars: {
        string: "permutationJars",
        year: "2023",
        title: "Permutation Jars",
        size: '2.75" &times; 1.25" &times; 1.25" each',
        medium:
          "Aluminum Stock, Aluminum Tube, Brass Stock, Steel Stock, South Bend Lathe, Bridgeport Mill, Solidworks",
        url: "",
        statement:
          "Featuring lids and bottoms that can be screwed on and unscrewed, machined with an internal tap and external single point threading, the Permutation Jars offer a variety of nine different variations on a single design. With different kinds of shapes and silhouettes, augmented further by three different kinds of metals and colors, the jars evoke a sense of play and exploration to find different ways of mixing and matching each of the jars' parts to create a myriad of different iterations.",
        media: [
          "permutationjars1.jpg",
          "permutationjars2.jpg",
          "permutationjars3.jpg",
          "permutationjars4.jpg",
          "permutationjars5.jpg",
          "permutationjars6.jpg",
          "permutationjars7.jpg",
          "permutationjars8.jpg",
          "permutationjars9.jpg",
          "permutationjars10.jpg",
          "permutationjars11.jpg",
          "permutationjars12.jpg",
          "permutationjars13.jpg",
          "permutationjars14.jpg",
        ],
        previewDescription:
          "A system of interchangeable parts made of brass, steel, and aluminum.",
        previewImage: "permutationjars4.jpg",
        tags: ["cad", "machining", "metalworking"],
      },

      drillRedesign: {
        string: "drillRedesign",
        year: "2022",
        title: "Drill Redesign",
        size: "",
        medium: "Solidworks, KeyShot",
        url: '<a href="https://indd.adobe.com/view/020fd498-9b42-44da-adc6-15f2f42da705" target="_blank">FULL PRESENTATION</a>',
        statement:
          "In designing a drill from scratch, I sought to make the handheld, cordless drill a more approachable object, while deriving its visual language from the Streamline and Functionalist design movements. Since drills typically have less than five functions or settings, yet add extraneous rubber material to emanate masculinity and aggression, I wanted to design a drill that would testify candidly to the small number of operations that can be done on a drill without any unnecessary intimidating parts that would add confusion and deter users that may not fit a typical drill company's target user group.",
        media: [
          "drill1.jpg",
          "drill2.jpg",
          "drill3.jpg",
          "drill4.jpg",
          "drill5.jpg",
          "drill6.jpg",
          "drill7.jpg",
          "drill8.jpg",
        ],
        previewDescription:
          "Redesigning drills with more aesthetic considerations to make them both tool and decor.",
        previewImage: "drill6.jpg",
        tags: ["cad"],
      },

      synergySeats: {
        string: "synergySeats",
        year: "2022",
        title: "Synergy Seats",
        size: '30.25" &times; 48" &times; 22.5"',
        medium:
          "Poplar Plywood, Dowels, Wood Glue, Acrylic Plexiglass, Screws, Arduino, LED Light Strips, Portable Chargers, Light Sensors",
        url: "",
        statement:
          "Comprised of two stools that fit together to form a bench, the Synergy Seats bridge physical and emotional distances within a shared space to create connections between two seated individuals. As one person sits down, the other seat lights up so that when two people are seated, the entire bench is illuminated to visualize a connection and foster interaction and cohabitation of a space.",
        media: [
          "synergyseats1.mp4",
          "synergyseats2*.mp4",
          "synergyseats3.jpg",
          "synergyseats4.jpg",
          "synergyseats5.jpg",
          "synergyseats6.jpg",
          "synergyseats7.jpg",
          "synergyseats8.jpg",
        ],
        previewDescription:
          "A pair of stools that bridges physical and emotional gaps to foster cohabitation of space.",
        previewImage: "synergyseats5.jpg",
        tags: ["arduino", "furniture", "woodworking"],
      },
    },

    // MULTIMEDIA
    MULTIMEDIA: {
      liveLaughLoaf: {
        string: "liveLaughLoaf",
        year: "2025",
        title: "Procedural Bread Simulation",
        size: "",
        medium: "C++, Maya, Rhino, Blender",
        url: '<a href="https://github.com/smallwhale1/cs2240-bread/tree/main" target="_blank">GITHUB',
        statement:
          "Working with team members Grace Marshburn, Lana Yang-Maccini, and Sophie Zhang, I reimplemented and augmented the <em>Procedural bread making</em> paper by Rodrigo Baravalle, Gustavo Ariel Patow, and Claudio Delrieux. <br/><br/> In addition to the original implementation, which generates bread geometry procedurally and simulates the entire proofing and baking process, we added parallelization, which allowed us to render animations of the bread pipeline in addition to the paper's still images, as well as integrated low-res bread meshes into industry-standard workflows using surface meshes and current software like Maya and Blender. Additionally, we also added more parameter tuning to represent a wider variety of bread types than the original paper. ",
        media: [
          "livelaughloaf1.gif",
          "livelaughloaf2.gif",
          "livelaughloaf3.png",
          "livelaughloaf4.png",
          "livelaughloaf5.png",
        ],
        previewDescription:
          "Building upon an existing research paper about procedural bread generation and simulation.",
        previewImage: "livelaughloaf3.png",
        tags: ["computer graphics", "animation"],
      },

      tenPrinciplesOfGoodDesign: {
        string: "tenPrinciplesOfGoodDesign",
        year: "2024",
        title: "10 Principles of Good Design",
        size: "",
        medium: "Rhino, Three.js, HTML, CSS, React.js, VS Code, Github",
        url: '<a href="https://huang-tiffany.github.io/ten-principles-of-good-design" target="_blank">LINK',
        statement:
          "Inspired by Dieter Rams's <em>10 Principles of Good Design</em>, I created a simple website displaying 11 of his and Braun's products, pairing each with one of his ten principles to set an interactive and immersive scene. As the user scrolls through the page, the camera pans through a predetermined path to give a tour of both Rams's design ethos and the objects.<br><br>Over the course of three days, I modeled and shaded each of the objects in Rhino based on the actual dimensions and proportions of each preexisting product, then dressed the scene in Three.js in addition to tweaking material finish and camera paths.",
        media: [
          "tenprinciplesofgooddesign1.jpg",
          "tenprinciplesofgooddesign2.jpg",
          "tenprinciplesofgooddesign3.jpg",
          "tenprinciplesofgooddesign4.jpg",
          "tenprinciplesofgooddesign5.jpg",
          "tenprinciplesofgooddesign6.jpg",
          "tenprinciplesofgooddesign7.jpg",
          "tenprinciplesofgooddesign8.jpg",
          "tenprinciplesofgooddesign9.jpg",
          "tenprinciplesofgooddesign10.jpg",
        ],
        previewDescription:
          "Interactive 3D scene with modeled objects after Dieter Rams's designs and ethos.",
        previewImage: "tenprinciplesofgooddesign3.jpg",
        tags: ["CAD", "design engineering", "web", "coding", "front-end"],
      },

      sevenMinutesInHeaven: {
        string: "sevenMinutesInHeaven",
        year: "2022",
        title: "Seven Minutes in Heaven",
        size: '72" &times; 84" &times; 36"',
        medium:
          "Glass, Galaxy Projector Light, Closets, Found Glass, Thread, Butcher Paper, Wood",
        url: "",
        statement:
          "After reading Philip Fisher's <em>Wonder, the Rainbow, and the Aesthetics of Rare Experiences</em>, I was interested in creating wonder in a mundane space. By creating a site-specific installation in my dorm room closets, I asked pairs of people to sit together in the same space for seven minutes, referencing the popular adolescent game Seven Minutes in Heaven, after confiscating their phones in an attempt to promote interaction. <br><br> The shared space seats two people due to how it was created by rearranging the two closets; after hot-casting a glass arch and splitting it in half to act as a lens for a galaxy projector light, I filled the space with a deep blue color and green particles. In addition to the light, I also hung broken pieces of found glass from hooks on the closet walls to further reflect the light and add to the atmosphere. <br><br> By inhabiting a familiar — yet unfamiliar, due to the wondrous atmospheric presence of the glass and light — space together for seven minutes, visitors of the installation are invited to overcome the awkwardness of being alone together without any distractions, nurturing conversation and interaction in a modern era where humans prefer to avoid complete vulnerability via their phones.",
        media: [
          "sevenminutesinheaven1.mp4",
          "sevenminutesinheaven2.jpg",
          "sevenminutesinheaven3.jpg",
          "sevenminutesinheaven4.jpg",
          "sevenminutesinheaven5.jpg",
          "sevenminutesinheaven6.mp4",
        ],
        previewDescription:
          "Creating wonder in an everyday space through the cultivation of intimacy.",
        previewImage: "sevenminutesinheaven3.jpg",
        tags: ["installation"],
      },

      eyeTrails: {
        string: "eyeTrails",
        year: "2021",
        title: "Eye Trails",
        size: "",
        medium: "Webcam, p5.js, Adobe Dreamweaver",
        url: '<a href="https://huang-tiffany.github.io/Eye-Trail/" target="_blank">LINK',
        statement:
          "This computer program uses code to transform movement (recorded via the webcam) of one’s eyes into a visual record that allows people to draw with their eyes. Created in p5.js, I was primarily interested in how movement and movement tracking could be used to create visual art and was inspired by EUPHRATES's <em>Ballet Rotoscope.</em>",
        media: ["eyetrails1.mp4", "eyetrails2.jpg", "eyetrails3.jpg"],
        previewDescription:
          "Generative art that documents and visualizes movement using eye tracking.",
        previewImage: "eyetrails3.jpg",
        tags: ["creative coding"],
      },

      musicVisualizer: {
        string: "musicVisualizer",
        year: "2020",
        title: "Music Visualizer",
        size: "04:27",
        medium: "Processing, Adobe InDesign",
        url: "",
        statement:
          "While taking AP Computer Science this semester, our final open-ended project led me to write code that could create unique visual “fingerprints” for inputted music. By assigning specific colors — taken from composer Scriabin’s color keyboard — to set wavelengths and coordinating a growing set of rings to wrap around a shape created by the MP3's FFT (Fast Fourier Transform) frequency waves, I wanted to reinterpret music as a visual experience. <br><br> This poster contains fingerprints created by the Visualizer from music across various genres, the first being my own original composition. Based off of the selected pieces — such as Clair de Lune’s neat concentric circles or the unique coloration and chaotic shape of “Spring Day” due to the heavy use of synthesizers — <em>Music Visualizer</em> acts as a reflection not only of the music’s frequencies, but also of its texture and overarching characteristics in regards to shape and energy.",
        media: [
          "musicvisualizer1.jpg",
          "musicvisualizer2*.mp4",
          "musicvisualizer3.jpg",
          "musicvisualizer4.jpg",
          "musicvisualizer5.jpg",
          "musicvisualizer6.jpg",
          "musicvisualizer7.jpg",
          "musicvisualizer8.jpg",
          "musicvisualizer9.jpg",
          "musicvisualizer10.jpg",
          "musicvisualizer11.jpg",
        ],
        previewDescription:
          "A music visualizer that creates unique 'fingerprints' for inputted audio clips.",
        previewImage: "musicvisualizer1.jpg",
        tags: ["creative coding"],
      },

      toMyself: {
        string: "toMyself",
        year: "2020",
        title: "To Myself (The Magic Shop)",
        size: '60" &times; 80" &times; 70"',
        medium:
          "Blanket, Cassette Tapes, Found Cloth, Pole, Chairs, Table, Pen, Notebook, Tape Recorder, Adobe Premiere Pro, Adobe Audition, Adobe Illustrator",
        url: "",
        statement:
          "Through this interactive exhibition, inspired by the psychodramatic &#34;Magic Shop&#34; technique where participants exchange negativity for encouragement, I wanted to create a safe space for visitors to connect with both their inner selves and with other participants. In this installation, which I created by sewing handwritten letters into a bedsheet with found fabric and cassette tape &#34;thread,&#34; participants write letters to their past and future selves to send love and support, as well as to heal any past pains they may have inflicted on themselves. By exchanging their letters for another stranger’s, I hope to reveal to participants the universality in their struggles with self-love.",
        media: [
          "tomyself1*.mp4",
          "tomyself2.jpg",
          "tomyself3.jpg",
          "tomyself4.jpg",
          "tomyself5.jpg",
          "tomyself6.jpg",
          "tomyself7.jpg",
          "tomyself8.jpg",
        ],
        previewDescription:
          "Installation that repairs one's relationship with themselves through letter-writing.",
        previewImage: "tomyself2.jpg",
        tags: ["installation"],
      },
    },

    // VIDEO
    VIDEO: {
      rememo: {
        string: "rememo",
        year: "2025",
        title: "Re:Memo",
        size: "",
        medium: "Maya, Adobe Illustrator, Adobe Premiere Pro",
        url: "",
        statement:
          "Created as an exploration of anime cel-style toon-shading and animation movement quality, I animated a series of three short, cyclical vignettes inspired by old video game loading screens using a character I modeled, shaded, and rigged. In the Re:Memo game, the character would act as the player's digital avatar, which travels through a found hard drive attempting to uncover mysteries about its previous owner before all of the data becomes corrupted. <br/><br/> Each of the loading screens, complete with loading state UI, would introduce a new phase of the game, which explores concepts relating to digital archives and their effect on grieving processes in the age of modern technology.",
        media: ["rememo1*.mp4", "rememo2.mp4", "rememo3.mp4", "rememo4.mp4"],
        previewDescription:
          "Toon-shaded loading screens for a video game about digital grief, memory, and rediscovery.",
        previewImage: "rememo5.jpg",
        tags: ["animation", "game", "art direction"],
      },

      bearNecessiteas: {
        string: "bearNecessiteas",
        year: "2024",
        title: "Bear Necessiteas",
        size: "03:37",
        medium: "Maya, Adobe Premiere Pro",
        url: "",
        statement:
          "Under advisement from Barb Meier, <em>Bear Necessiteas</em> narrates the story of a young bear cub who gets separated from his mother while foraging for berries. Stumbling upon a little girl having a tea party in her family gazebo, he learns about proper tea etiquette, patience, friendship, and the delicious nature of raspberry thumbprint cookies. <br><br> In the making of the film, I took care of set dressing and design and modeling for the tea set, furniture, and gazebo; art direction, storyboarding, lighting, editing, sound design, animation were done in collaboration with Becca Waterson, Jess Wan, Hannah Zhang, Vivian Li, and Amelie Grosserichter.",
        media: [
          "bearnecessiteas1*.mp4",
          "bearnecessiteas2.jpg",
          "bearnecessiteas3.jpg",
          "bearnecessiteas4.jpg",
          "bearnecessiteas5.jpg",
        ],
        previewDescription:
          "A bear cub crashes a little girl's tea party, learning about table manners and friendship as a result.",
        previewImage: "bearnecessiteas3.jpg",
        tags: ["animation", "short film", "art direction", "set design"],
      },

      efflorescence: {
        string: "efflorescence",
        year: "2022",
        title: "Efflorescence",
        size: '01:38, 18" &times; 24"',
        medium: "Vine Charcoal, White Conte, Eraser, Adobe Premiere Pro",
        url: "",
        statement:
          "As a collaboration with Astrid Schoenly, <em>Efflorescence</em> narrates the drifting apart of two childhood friends, reflecting upon a near-universal college experience of meeting, befriending, and losing contact with companions as time progresses.",
        media: [
          "efflorescence1*.mp4",
          "efflorescence2.jpg",
          "efflorescence3.jpg",
          "efflorescence4.jpg",
          "efflorescence5.jpg",
          "efflorescence6.jpg",
          "efflorescence7.jpg",
          "efflorescence8.jpg",
        ],
        previewDescription:
          "An animation short on growing up, moving away, and drifting apart from childhood friends.",
        previewImage: "efflorescence7.jpg",
        tags: ["animation", "short film"],
      },

      losingContact: {
        string: "losingContact",
        year: "2021",
        title: "Losing Contact",
        size: "00:18",
        medium: "Contact Lens Cases, Ice, Paper Towel",
        url: "",
        statement:
          "This time lapse, which documents the melting process of ice in the shape of a pair of contact lenses, comments on the grief that accompanies losing touch with a close friend or relation. As one moves away from their original or previous home, they also tend to drift away from their old companions and ways of living; consequently, their unsuccessful attempts to reach out — as symbolized by the reaching and contracting tendrils of water in the napkin — ultimately lead to a sense of loss and impermanence as one loses loved ones that they may have had a special connection with. The ice especially creates a sense of loss of control, as one is unable to stop the melting and can only watch as it disappears, much like the gradual disconnect with others or the loss of a relationship. ",
        media: ["losingcontact.mp4"],
        previewDescription:
          "Grief, drifting apart, and growing up, as told by a pair of contact lenses.",
        previewImage: "losingcontact2.jpg",
        tags: ["experimental film"],
      },
    },
  },
});
