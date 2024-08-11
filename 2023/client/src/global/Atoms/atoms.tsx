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
        year: "Ongoing",
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
        tags: ["web", "coding", "interactive", "data design"],
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
        tags: ["web", "interactive", "art direction"],
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
      ramphacks: {
        string: "ramphacks",
        year: "2023",
        title: "Ramp Hacks Mini-Identity",
        size: "",
        medium: "Figma, Adobe Illustrator",
        url: "",
        statement:
          "For Ramp’s 2023 annual company hackathon, I was tasked with creating a small brand capsule that encompassed the event’s identity, promotional assets, and swag that would be given out to participants. Employing the illustrations of a fellow designer, Emily Pratt, I wanted to bring a sense of joy and wonder with the designs, focusing on the elements that made hackathons what they are. The brand comes through in three logos, each for a particular purpose: the largest and most expressive takes center stage on clothing and larger promotional assets; the smallest glyph works in tighter settings on water bottles; and the horizontal logo carries through the brand in more straightforward applications. <br><br> The characters included in the most expressive version of the logo each represent different sides to a hackathon: the running girl does something daring, the man sending out a paper airplane ships something novel, and the wizard spells out the magic of creating something new. These assets were used to create t-shirts and thermos for the event’s participants, as well as advertise the event on TV screens and walls all over the New York office. Using Sunshine, an offshoot of Ramp’s iconic Solar yellow, the monochromatic color scheme of the identity represents the products of the hackathon as offshoots of Ramp’s very own ingenuity, soon to be new products in its software.",
        media: [
          "ramphacks1.jpg",
          "ramphacks2.jpg",
          "ramphacks3.jpg",
          "ramphacks4.jpg",
          "ramphacks5.jpg",
          "ramphacks6.jpg",
          "ramphacks7.jpg",
          "ramphacks8.jpg",
          "ramphacks9.jpg",
          "ramphacks10.jpg",
          "ramphacks11.jpg",
          "ramphacks12.jpg",
          "ramphacks13.jpg",
          "ramphacks14.jpg",
          "ramphacks15.jpg",
          "ramphacks16.jpg",
        ],
        previewDescription:
          "One-off brand capsule for Ramp's annual hackathon, including promotional assets and swag.",
        previewImage: "ramphacks10.jpg",
        tags: ["branding", "swag"],
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

      directionMagazine: {
        string: "directionMagazine",
        year: "2021",
        title: "Direction Magazine",
        size: '50 pages, 11" &times; 8.5"',
        medium: "Adobe InDesign, Adobe Illustrator, Adobe Photoshop",
        url: '<a href="https://indd.adobe.com/view/f7bb7d3e-6a9a-4f4f-bbc7-f7f7d64b50c1" target="_blank">FULL MAGAZINE</a>',
        statement:
          "Although many people think of their adolescent years as ones to forget or to erase due to their embarrassing memories, they often forget how important their childhood and teenage years were for their development. This magazine, which contains an assortment of photography and writing samples from the formative years of a collection of young adults, attempts to change the perspective of teens on the past.",
        media: [
          "directionmagazine1.jpg",
          "directionmagazine2.jpg",
          "directionmagazine3.jpg",
          "directionmagazine4.jpg",
          "directionmagazine5.jpg",
          "directionmagazine6.jpg",
        ],
        previewDescription:
          "A celebration of adolescence — and all the embarrassing moments that come with it.",
        previewImage: "directionmagazine2.jpg",
        tags: ["editorial", "print"],
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
      loveInAPuff: {
        string: "loveInAPuff",
        year: "2024",
        title: "Love in a Puff",
        size: '10" &times; 14" &times; 5"',
        medium: "Arduino, Cherry, Jointer, Planar, Screws, Drill Press, Hand Drill, Vellum, Biscuit Jointer, Table Saw, Aluminum Stock, Sandblaster, South Bend Metal Lathe, Bridgeport Mill, Radius Cutter, Horizontal Bandsaw, Tape, Hot Glue, Wire Cutter, Aluminum Rod, Aluminum Tube, White Glue, Tap, Solidworks, Adobe InDesign, Adobe Illustrator",
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
        previewImage: "loveinapuff.jpg",
        tags: ["product", "prototyping", "arduino", "machining"],
      },
      homebodyTable: {
        string: "homebodyTable",
        year: "2024",
        title: "Table for a Homebody",
        size: '11.66" &times; 30" &times; 12"',
        medium: "Cherry, Jointer, Planar, Router Table, Hand-Held Plunge Router, Table Saw, Wood Glue, Dowels, Canvas Fabric, Plywood, Bandsaw, Chisel, Mallet, Double-Sided Table, Thread, Tacky Glue, Orbital Sander, Drill Press, Biscuit Jointer",
        url: '',
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

      makitacultivator: {
        string: "makitacultivator",
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
        url: "",
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
          "drill9.jpg",
          "drill10.jpg",
          "drill11.jpg",
          "drill12.jpg",
          "drill13.jpg",
          "drill14.jpg",
          "drill15.jpg",
          "drill16.jpg",
          "drill17.jpg",
          "drill18.jpg",
          "drill19.jpg",
          "drill20.jpg",
        ],
        previewDescription:
          "Redesigning drills with more aesthetic considerations to make them both tool and decor.",
        previewImage: "drill20.jpg",
        tags: ["cad"],
      },

      mesh: {
        string: "mesh",
        year: "2022",
        title: "Mesh",
        size: "Variable",
        medium: "Aluminum, Rivets, Brass Tubing",
        url: "",
        statement:
          "Mesh employs repetition of a singular module in a linear pattern to create a surface that can be formed into a closed shape by connecting the two ends either forwards or backwards to create different silhouettes. The module is composed of a square that has been corner-notched and finger-braked to form a clover shape with four angled triangles on the corners; modules in the middle third of the mesh contain holes large enough for fingers to manipulate each subgroup within the pattern. Taking advantage of the rotation added in by hammered rivets, the pattern can lie flat and move flexibly as each module affects its connected siblings, allowing the entire piece to exist as both a three-dimensional object and a two-dimensional plane. As such, this gives rise to various possibilities of play in which the object can be interacted with as both a pliable flat material and a kaleidoscopic round form. The closure that connects the two ends of the mesh consists of two brass tubes that have been center-punched at their midpoints to allow the end modules to snap together at the narrower radii, which creates a visual detail to indicate the area of dis/connection while maintaining the same range of movement as the rivets.",
        media: [
          "mesh1.jpg",
          "mesh2.jpg",
          "mesh3.jpg",
          "mesh4.jpg",
          "mesh5.jpg",
          "mesh6.jpg",
          "mesh7.jpg",
          "mesh8.jpg",
          "mesh9.jpg",
          "mesh10.jpg",
          "mesh11.jpg",
          "mesh12.jpg",
          "mesh13.jpg",
          "mesh14.jpg",
          "mesh15.jpg",
          "mesh16.jpg",
          "mesh17.jpg",
          "mesh18.jpg",
        ],
        previewDescription:
          "Flexible surface composed of modular components repeated in a linear pattern.",
        previewImage: "mesh4.jpg",
        tags: ["metalworking"],
      },

      connection: {
        string: "connection",
        year: "2022",
        title: "Connection",
        size: '3" &times; 4.5" &times; 1.5"',
        medium: "Solidworks, PrusaSlicer, Prusa i3 MK3, PLE",
        url: "",
        statement:
          "Tasked with creating a connection that can only be taken apart in a meaningful way, I wanted to address the prompt both literally and figuratively; the connection imitates a hip socket joint that can be threaded through the larger hole on the sides of each of the two figures to fit in a tighter socket and allow the figures to rotate around each other. The rotation tells the story of every relationship as figures turn toward and away from each other, yet reminds users of the intangible network that connects us all.",
        media: [
          "connection1.jpg",
          "connection2.jpg",
          "connection3.jpg",
          "connection4.jpg",
          "connection5.jpg",
        ],
        previewDescription:
          "Hip-in-socket connection toy telling the tale of a short-lived relationship.",
        previewImage: "connection5.jpg",
        tags: ["cad", "3d printing"],
      },

      circleTriangleSquare: {
        string: "circleTriangleSquare",
        year: "2022",
        title: "Circle, Triangle, Square",
        size: '4" &times; 6" &times; 6"',
        medium: "Tinplate, Welding Wire",
        url: "",
        statement:
          "The object contains one dominant element and two subordinate elements, each repeated in a circular pattern. The dominant element consists of a square folded along diagonals to form a triangular module, which can be oriented in multiple ways along various axes of symmetry; these modules are linked together via the two subordinate elements, which are jump rings of two sizes. The composite object builds upon previous iterations, which all implemented different orientations of the dominant module, but also creates a more self-contained final product through radial symmetry, which is reflected in both the way everything is connected as well as in the subordinate elements themselves.  The interplay between the internal and external views also adds another aesthetic dimension, where viewers may have a certain expectation of how circular elements will interact with each other that can change depending on the angle from which they view the object. Additionally, the object also contains multiple degrees of movement, including rotation, opening/closing, and inward/outward tilting, which each come with their own unique sounds from contact between elements; this ultimately creates a more playful experience of messing with each individual piece to result in different ways of manipulating the object as a whole.",
        media: [
          "circletrianglesquare1.jpg",
          "circletrianglesquare2.jpg",
          "circletrianglesquare3.jpg",
          "circletrianglesquare4.jpg",
          "circletrianglesquare5.jpg",
          "circletrianglesquare6.jpg",
        ],
        previewDescription:
          "Handheld object composed of one dominant element and two subordinate elements.",
        previewImage: "circletrianglesquare4.jpg",
        tags: ["metalworking"],
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

    // WEARABLE
    WEARABLE: {
      goldenChild: {
        string: "goldenChild",
        year: "2022",
        title: "Golden Child",
        size: '20" &times; 24" &times; 8"',
        medium:
          "Bedsheet, Fabric, Thread, Sewing Machine, Organza, Chiffon, Tracing Paper, Embroidery Hoops, Air-Dry Clay, Wire",
        url: "",
        statement:
          "As an Asian American child, my relationship with my parents is often burdened by disconnects, not only in regards to the language barrier but also to cultural differences that dictate a child's duty and obligations to their parents. As a reversible jacket, the piece ponders children and parents as both containers and containees of each other, with both sides containing blank pieces of paper to represent both an inability for conversation and opportunities for communication.",
        media: [
          "goldenchild1.jpg",
          "goldenchild2.jpg",
          "goldenchild3.jpg",
          "goldenchild4.jpg",
          "goldenchild5.jpg",
          "goldenchild6.jpg",
          "goldenchild7.jpg",
          "goldenchild8.jpg",
          "goldenchild9.jpg",
          "goldenchild10.jpg",
          "goldenchild11.jpg",
          "goldenchild12.jpg",
          "goldenchild13.jpg",
        ],
        previewDescription:
          "Traversing the immigrant child narrative as reversible: both container and contained.",
        previewImage: "goldenchild14.jpg",
        tags: ["garment", "sculpture"],
      },

      passion: {
        string: "passion",
        year: "2020",
        title: "Passion",
        size: '4" &times; 10" &times; 7"',
        medium: "Nails, Pearls, Washers, Nuts, Wire, Seamstress Pins",
        url: "",
        statement:
          "Passion to me is to love something so much, that despite endless hours of mental or physical labor, I still feel nothing but exhilaration. Whether in my schoolwork, ballet training, piano practice, or artistic endeavors, my passion combines with my workaholism to form a creative process that balances both pain and beauty.",
        media: ["passion1.jpg", "passion2.jpg"],
        previewDescription:
          "The role passion has played in my life — one of balancing both pain and beauty.",
        previewImage: "passion2.jpg",
        tags: ["jewelry", "sculpture"],
      },

      pillJacket: {
        string: "pillJacket",
        year: "2020",
        title: '"Don\'t Forget To Take Your..." (Pharmaceutical Couture)',
        size: '25" &times; 20" &times; 17"',
        medium: "Bubble Wrap, Pills, Tape",
        url: "",
        statement:
          "When on antidepressants for treatment, patients often need reminders to take their medicine; in this way, similar to the role a jacket plays, mental illness is something people will always carry with them. Whereas my parents always tell me, &#34;Don't forget to take your jacket,&#34; oftentimes for people with mental illness the phrase becomes, &#34;Don't forget to take your meds.&#34; <br><br> Alternatively, the inelasticity of the demand for various medications necessary for survival becomes more and more concerning as pharmaceutical companies continue to introduce aspects of consumer culture into a market where doing so could be potentially life-threatening.",
        media: [
          "pilljacket1.gif",
          "pilljacket2.jpg",
          "pilljacket3.jpg",
          "pilljacket4.jpg",
        ],
        previewDescription:
          "The pharmaceutical industry as a puffer jacket made of bubble wrap and medication.",
        previewImage: "pilljacket2.jpg",
        tags: ["garment"],
      },
    },

    // MULTIMEDIA
    MULTIMEDIA: {
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
        tags: ["installation", "interactive"],
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
        tags: ["creative coding", "interactive"],
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
        tags: ["installation", "interactive"],
      },
    },

    // VIDEO
    VIDEO: {
      efflorescence: {
        string: "efflorescence",
        year: "2022",
        title: "Efflorescence",
        size: '01:38, 18" &times; 24"',
        medium: "Vine Charcoal, White Conte, Eraser, Premiere Pro",
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
          "efflorescence9.jpg",
          "efflorescence10.jpg",
        ],
        previewDescription:
          "An animation short on growing up, moving away, and drifting apart from childhood friends.",
        previewImage: "efflorescence9.jpg",
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

      belonging: {
        string: "belonging",
        year: "2020",
        title: "[Be]longing",
        size: "00:19",
        medium: "Paint, Black Morphsuit, Projection",
        url: "",
        statement:
          "Through this project, I wanted to imply that one's imperfections are opportunities for both self-improvement and individuality, bringing up a topic that is often undercovered, even as mental illness becomes decreasingly stigmatized in the 21st century. Because black surfaces absorb light, I repurposed a common projection hindrance as an alternative portrayal of suppressed identity. The white paint that I smear across my face — which reflects the projector's light and “reveals” a distorted self-portrait — represents the process of acknowledging an unrealistically-disfigured self-image conjured from self-loathing.",
        media: ["belonging.mp4"],
        previewDescription:
          "Experimental video on suppressed identity and the development of self-image.",
        previewImage: "belonging2.jpg",
        tags: ["experimental film"],
      },
    },
  },
});
