import { atom } from "recoil";

export interface piece {
  category: string;
  string: string;
  year: string;
  title: string;
  size: string;
  medium: string;
  url: string;
  role: string;
  statement: string;
  media: string[];
  previewDescription: string;
  tags: string[];
}

export const pieces = atom<{
  [categoryKey: string]: { [pieceKey: string]: piece };
}>({
  key: "pieces",
  default: {
    // 2D
    "2D": {
      billboards: {
        category: "2D",
        string: "billboards",
        year: "2024",
        title: "Ramp Times Square Billboards",
        size: "",
        medium: "Figma",
        url: "",
        role: "",
        statement:
          "During 2023 and 2024, Ramp launched an ongoing campaign to thank its customers for all of the world-changing accomplishments being performed at each company. Working closely with Growth and Marketing teams, I helped design and populate content for over 100 billboards every month starting in September based on existing templates designed by fellow Brand designer Shivani Soni",
        media: [
          "billboards1.jpg/1",
          "billboards2.jpg/2",
          "billboards3.jpg/3",
          "billboards4.jpg/4",
          "billboards5.jpg/5",
          "billboards6.jpg/6",
          "billboards7.jpg/7",
          "billboards8.jpg/8",
          "billboards9.jpg/9",
          "billboards10.jpg/10",
          "billboards11.jpg/11",
          "billboards12.jpg/12",
        ],
        previewDescription:
          "Times Square billboards showcasing Ramp's gratitude for its clients",
        tags: ["branding", "campaign"],
      },

      rampSwag: {
        category: "2D",
        string: "rampSwag",
        year: "2024",
        title: "Ramp Evergreen Collection",
        size: "",
        medium: "Figma",
        url: "",
        role: "",
        statement:
          "Working with fellow Brand designer Shivani Soni, I helped develop a small apparel collection — the first one designed in-house — for Ramp employees. Compared to the last collection made by design agency Fuzzco, we decided to skew slightly more conservative and cater to all kinds of fashion styles worn by people at Ramp offices. I designed a hat, two tees, and a crewneck, with the pine Element Tee being the most corporate, the black Modern Crew representing a mix of simple and bold graphics, and the off-white Bottom Line Tee being the most 'streetwear' styled of the three. <br><br> <em>Photos courtesy of Fuzzco</em>",
        media: [
          "rampswag1.jpg/1",
          "rampswag2.jpg/1",
          "rampswag3.jpg/2",
          "rampswag4.jpg/3",
          "rampswag5.jpg/3",
          "rampswag6.jpg/4",
          "rampswag7.jpg/5",
          "rampswag8.jpg/5",
          "rampswag9.jpg/6",
          "rampswag10.jpg/6",
        ],
        previewDescription:
          "Ramp's first evergreen apparel collection, designed in-house, for employees of all styles",
        tags: ["branding", "apparel"],
      },

      theArchiveAsFriendship: {
        category: "2D",
        string: "theArchiveAsFriendship",
        year: "2024",
        title: "The Archive as Friendship",
        size: '18" &times; 24" (poster form), 9" &times; 6" (booklet form)',
        medium:
          "Figma, Plotter, Adobe InDesign, Adobe Photoshop, VSCode, Javascript, Facebook Messenger, Facebook, Meta Spark Studio, Instagram",
        url: '<a href="https://www.figma.com/proto/mT9sUIMHNQBXX2wzMf9hKl/The-Archive-as-Friendship?page-id=0%3A1&node-id=1-24&viewport=494%2C385%2C0.06&t=jUfwFkGgsWxOYrTr-1&scaling=scale-down&content-scaling=fixed" target="_blank">PRESENTATION</a>',
        role: "",
        statement:
          "With most friendships taking both digital and physical forms, online chat logs can often be a way to trace the development of relationships. Containing both arguments and gratitude, both small talk and deep conversations, the online archive as we know it not only acts as a means of communication and connection, but as a pseudo record of an entire relationship. <br><br> With this thought in mind, I created a project that catalogued and analyzed data from six complete calendar years of friendship with a friend of mine from middle and high school. Although we attended school together before going to college, we communicated primarily through Gmail chats and, upon entering high school, Facebook Messenger (something that still holds true today). By downloading six years' worth of content and parsing it with a simple Javascript program to count the quantity of messages, along with reading every chat log manually to sort through the depth and topics of each conversation, I organized my data into three formats ranging from the most objective to the most subjective view of the data. The largest poster format acts as an overview, mapping interactions in a calendar view and sorting them by the depth of the conversation (light, medium, and deep talks). The medium-sized booklet format goes into more detail with the content, organizing it in a temporally nonlinear format through the alphabetical indexing of conversation topics, with red lines running throughout the pages to trace recurring threads of more interesting conversation topics. And lastly, the smallest AR format (accessed via mobile phone) encourages exploration of the text in a more intimate format, with the overlaying of actual transmitted images (ranging from cute GIFs and stupid memes to mundane homework snapshots and photos taken during in-person hangouts). <br><br> Using this mix of personal and objective data alongside a mix of analog and digital formats, I wanted to explore the nuance and subversion of conversation in the digital age: where phones can encourage vulnerability and connection, and where chat logs can act as a living, digital archive for friendship",
        media: [
          "thearchiveasfriendship1.jpg/1",
          "thearchiveasfriendship2.jpg/2",
          "thearchiveasfriendship3.jpg/3",
          "thearchiveasfriendship4.jpg/4",
          "thearchiveasfriendship5.jpg/5",
          "thearchiveasfriendship6.jpg/6",
          "thearchiveasfriendship7.jpg/6",
          "thearchiveasfriendship8.jpg/7",
          "thearchiveasfriendship9.jpg/8",
          "thearchiveasfriendship10.jpg/13",
          "thearchiveasfriendship11.jpg/-1",
          "thearchiveasfriendship12.jpg/9",
          "thearchiveasfriendship13.jpg/9",
          "thearchiveasfriendship14.jpg/10",
          "thearchiveasfriendship15.jpg/11",
          "thearchiveasfriendship16.jpg/12",
          "thearchiveasfriendship17.mp4/13",
          "thearchiveasfriendship18.mp4/14",
          "thearchiveasfriendship19.mp4/14",
          "thearchiveasfriendship20.mp4/15",
          "thearchiveasfriendship21.mp4/15",
        ],
        previewDescription:
          "Poster booklet documenting six years of friendship as recorded on Facebook Messenger",
        tags: ["poster", "AR", "book", "print", "data design"],
      },

      lapse: {
        category: "2D",
        string: "lapse",
        year: "2024",
        title: "Lapse",
        size: '112 pages, 8.5" &times; 5.5"',
        medium:
          "Figma, Paper, Aluminum Sheet, Drill Press, Metal Stamps, Center Punch, Scribe, Blue Ballpoint Pen, HTML, CSS, Javascript, VSCode",
        url: '<a href="https://indd.adobe.com/view/cbf24062-a9b4-469e-8c04-05db8f58c377" target="_blank">FULL BOOK</a>',
        role: "",
        statement:
          "By sequencing images taken from ten YouTube videos focusing on timelapses of singular objects, I created a book about shadows, inspired by the idea of shadows being alternative 'images' of a subject. By overlaying bitmap filters of decreasing strength on each image and asking five sources (one AI alt text generator and four humans of varying backgrounds) to identify the source of the shadow, the project questions the identity of images and the point at which an image crosses over from an objective depiction of a subject to a medium one assigns meaning to",
        media: [
          "lapse1.jpg/1",
          "lapse2.jpg/2",
          "lapse3.jpg/1",
          "lapse4.jpg/3",
          "lapse5.jpg/4",
          "lapse6.jpg/5",
          "lapse7.jpg/6",
          "lapse8.jpg/7",
        ],
        previewDescription:
          "Book containing sequenced images of shadows and their interpretations",
        tags: ["book", "print", "data design"],
      },

      peopleWatching: {
        category: "2D",
        string: "peopleWatching",
        year: "2024",
        title: "People(-)Watching",
        size: "",
        medium:
          "Figma, Paper, Blue Ballpoint Pen, HTML, CSS, Javascript, VSCode",
        url: '<a href="https://huang-tiffany.github.io/People-Watching/" target="_blank">LINK</a><br><a href="https://huang-tiffany.github.io/People-Watching/database" target="_blank">DATABASE</a><br><a href="https://www.figma.com/proto/oJQNcIkvmMtLpSFL23cU7E/People(-)Watching?page-id=0%3A1&node-id=1-9&viewport=490%2C382%2C0.07&t=MKJjKMqlnjGywHPp-1&scaling=contain&content-scaling=fixed" target="_blank">PRESENTATION</a>',
        role: "",
        statement:
          "Prompted with the theme of uncovering and analyzing personal data, I decided to focus on the theme of eye contact with strangers. Given that I'm always looking around and examining my surroundings, I tend to make eye contact with many people during my daily life; this project records my various experiences over five days in January. Each card represents an encounter I had with a complete stranger who I had never seen before, including my first impressions, assumptions, and notes. <br><br> In total, I encountered 341 people during the span of this project. The final deliverable, a single serving site (SSS), recreates the unexpected and serendipitous experience of making eye contact with those unfamiliar to us; at the time stamp listed on each card, the corresponding card will display for a random span of 20 seconds. Often, cards can appear simultaneously, and often, no cards may appear at all — and even when one appears, there may not be enough time to read the entire contents of an encounter, just as we may not get to know everything we wanted to know about someone we encountered so suddenly. The sides of the page track how many instances have already occurred in the day and the last time one encounter was made",
        media: [
          "people(-)watching1.gif/1",
          "people(-)watching2.gif/2",
          "people(-)watching3.jpg/3",
          "people(-)watching4.mp4/4",
        ],
        previewDescription:
          "Single serving site recreating the serendipity of eye contact with strangers",
        tags: ["web", "front-end", "data design"],
      },

      emt: {
        category: "2D",
        string: "emt",
        year: "2024",
        title: "Emerging Talent Webpage",
        size: "",
        medium: "Figma",
        url: '<a href="https://ramp.com/emerging-talent" target="_blank">LINK</a>',
        role: "",
        statement:
          "<em>Displayed: my prototype (first) and the first version launched in January 2024 (second).</em> <br><br> During my summer at Ramp, one of the projects I had the chance to work on was a webpage for our Emerging Talent program focusing on recruiting the best up-and-coming talent from universities. Thinking primarily about introducing elements of delight in user interactions — given the inspiring recent website rebrand and the potential of interns to bring refreshing perspectives to company environments — I wanted to follow the traditional layout of a university program page like that of other creative companies like Converse and Apple, going through dozens of iterations to arrive at a distinctly 'Ramp' look and feel. Working closely with fellow Brandtern Thandi Roe, we were able to art-direct a photoshoot featuring our class of interns, which brought a spirit of camaraderie and personality into the webpage. <br><br> Although my role in the project wrapped up after the summer, the final design kept the general structure and modules from my original design when it launched in January of 2024. Since then, it has been used to recruit future interns and has acted as the online presence for Ramp's Emerging Talent department and program",
        media: [
          "emt1.mp4/1",
          "emt2.mp4/2",
          "emt4.jpg/3",
          "emt5.jpg/4",
          "emt6.jpg/5",
          "emt7.jpg/6",
        ],
        previewDescription:
          "Inaugural webpage for Ramp's Emerging Talent program featuring interns and new grads",
        tags: ["web", "art direction"],
      },

      amplify: {
        category: "2D",
        string: "amplify",
        year: "2023",
        title: "Amplify",
        size: "",
        medium:
          "HTML, CSS, React.js, Express.js, Next.js, Vite, Typescript, Github, VSCode, Figma, Adobe Illustrator",
        url: '<a href="https://www.figma.com/proto/zJx5usW7UXk8lhYiDpjEBC/Amplify-%2F-CS0320-Final?page-id=27%3A2110&node-id=27-2230&viewport=348%2C205%2C0.04&t=54Q6NxFad2f0mCOa-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A2230&show-proto-sidebar=1" target="_blank">PROTOTYPE</a>',
        role: "",
        statement:
          "Working with Sean Yu (full-stack dev) and Elijah Whang (backend dev), I designed and prototyped the interface for a web-based app for playlist generation as a UI/UX designer and front-end dev. Although other Spotify playlist generators exist on the web, <em>Amplify</em> provides an experience in which users have more control over the content of the playlist, adding in key components from Spotify's API to sort through different song factors including energy, valence, popularity, and danceability. With a list of nine possible factors and three seeds (artist, genre, and tracks) to choose from, this app not only gives more power to the user to finetune the qualities of their playlists, but also allows them to be more informed about their listening preferences",
        media: [
          "amplify1.jpg/1",
          "amplify2.mp4/2",
          "amplify3.jpg/3",
          "amplify4.jpg/4",
          "amplify5.jpg/5",
          "amplify6.jpg/6",
          "amplify7.jpg/7",
        ],
        previewDescription:
          "Web-based app for generating new Spotify playlists with more nuance and control",
        tags: ["web", "front-end", "design engineering"],
      },

      sccParks: {
        category: "2D",
        string: "sccParks",
        year: "2022",
        title: "Santa Clara County Parks Interpretation Rebrand",
        size: '101 pages, 11" &times; 8.5"',
        medium: "Adobe InDesign, Adobe Illustrator, Adobe Photoshop, Canva",
        url: '<a href="https://indd.adobe.com/view/96b4a5b2-34c2-493b-afae-c11cf2f99e85" target="_blank">STYLE GUIDE</a>',
        role: "",
        statement:
          "During my internship at Santa Clara County Parks, I was tasked with creating branding guidelines and templates for the Interpretation team's program flyers. Starting with seven different sets of templates for categories including one-time and multisession events, I completely redesigned the visual identity of the flyers to be more visually cohesive and ADA-compliant. Along with the designs themselves, I also carried out training in Canva to teach the Interpretation team not only how to use my system, but also how to navigate Canva itself for future design needs. The end result culminated in a 100+ page style guide detailing the templates, elements used in the templates, spacing, typography, Canva best practices, and FAQ's, among other details, as a way of documenting the entirety of the redesign and to provide details for future possible redesigns",
        media: [
          "sccparks17.jpg/1",
          "sccparks9.jpg/2",
          "sccparks10.jpg/3",
          "sccparks11.jpg/4",
          "sccparks12.jpg/5",
        ],
        previewDescription:
          "Design system rebrand for local Parks & Rec department print marketing",
        tags: ["branding"],
      },

      rogueMagazine: {
        category: "2D",
        string: "rogueMagazine",
        year: "2022",
        title: "Rogue Magazine",
        size: '74 pages, 8.5" &times; 11"',
        medium: "Adobe InDesign, Adobe Photoshop, Adobe Illustrator",
        url: '<a href="https://indd.adobe.com/view/3a1257f9-d1bc-4a55-8cc3-ac0b2bfee11d" target="_blank">FULL MAGAZINE</a>',
        role: "",
        statement:
          "As the Creative Director for Brown's Rogue Fashion Magazine, I worked with other members of Rogue's executive board to gather content for the culminating publication of the year's activities and designed the magazine from scratch as the sole graphic designer. Collaborating with an editorial team to gather stories about up-and-coming student designers at RISD, I took charge of creating layouts and compositions to assemble a booklet, later printed as physical copies that the club distributed among staff members and the featured designers",
        media: [
          "roguemagazine1.jpg/1",
          "roguemagazine2.jpg/2",
          "roguemagazine3.jpg/3",
          "roguemagazine4.jpg/4",
          "roguemagazine5.jpg/5",
          "roguemagazine6.jpg/6",
          "roguemagazine7.jpg/7",
          "roguemagazine8.jpg/8",
        ],
        previewDescription:
          "Creative direction and design spotlighting up-and-coming designers at RISD",
        tags: ["editorial", "print", "creative direction"],
      },

      talisman61: {
        category: "2D",
        string: "talisman61",
        year: "2021",
        title: "Talisman 61",
        size: '281 pages, 9" &times; 12"',
        medium: "Adobe InDesign, Adobe Illustrator, Adobe Photoshop",
        url: "",
        role: "",
        statement:
          "Over the 2021-2022 school year, I acted as the Editor-in-Chief for the Saratoga High School yearbook, overseeing a staff of 22, creating style guides and templates, designing, and editing layouts. Our theme for the year, Still Life, speaks to the experiences we underwent as high school students in a year of COVID: whether through appreciating everyday objects more as if we were still life artists, realizing that life has frozen and become still, or discovering that no matter what happens it's 'still life.'",
        media: [
          "talisman611.jpg/1",
          "talisman612.jpg/2",
          "talisman613.jpg/3",
          "talisman614.jpg/4",
          "talisman615.jpg/5",
          "talisman616.jpg/6",
          "talisman617.jpg/7",
          "talisman618.jpg/8",
          "talisman619.jpg/9",
          "talisman6110.jpg/10",
          "talisman6111.jpg/11",
          "talisman6112.jpg/12",
          "talisman6113.jpg/13",
          "talisman6114.jpg/14",
          "talisman6115.jpg/15",
          "talisman6116.jpg/16",
        ],
        previewDescription:
          "Yearbook design during a year of COVID: a reminder to appreciate the mundane",
        tags: ["editorial", "print", "art direction"],
      },

      theDevelopmentOfTheHumanFigure: {
        category: "2D",
        string: "theDevelopmentOfTheHumanFigure",
        year: "2020",
        title: "The Development of the Human Figure",
        size: '18 pages, 11" &times; 8.5"',
        medium: "Adobe InDesign",
        url: '<a href="https://indd.adobe.com/view/de846442-b494-41d3-a74e-c76d7a1e8fdc" target="_blank">FULL MAGAZINE</a>',
        role: "",
        statement:
          "Combining my interest in the human form with the rich history associated with depictions of human figures throughout various artistic movements from prehistoric to Modern, I designed a magazine to synthesize my knowledge on one of the most important subjects in art history. Created in the span of about a week, I wrote essays, curated pieces, and designed layouts for the most iconic works I studied in AP Art History",
        media: [
          "thedevelopmentofthehumanfigure1.jpg/1",
          "thedevelopmentofthehumanfigure2.jpg/2",
          "thedevelopmentofthehumanfigure3.jpg/3",
          "thedevelopmentofthehumanfigure4.jpg/4",
          "thedevelopmentofthehumanfigure5.jpg/5",
        ],
        previewDescription:
          "A magazine focusing on how depiction of the human figure has evolved over the centuries",
        tags: ["editorial", "print"],
      },
    },

    // 3D
    "3D": {
      expandedGridLight: {
        category: "3D",
        string: "expandedGridLight",
        year: "2026",
        title: "Expanded Grid Light",
        size: '20" &times; 5" &times; 6"',
        medium:
          "Steel Sheet, Hydrostatic Test Pump, TIG Welder, Steel Tube, Steel Rod, Lighting Components",
        url: "",
        role: "",
        statement:
          "After a winter-long exploration of different ways of manipulating sheet steel with both manual and industrial machines across 36 prototypes, the <em>Expanded Grid Light</em> developed from a combination of alterations to the material using the hydroforming technique of expanding metal with water pressure. <br><br> The form evolved from experimentation with constraining the convex forms using a variety of methods, such as bead-rolling to work-harden the metal or puncturing and reinforcing the gap between two sheets before inflating. The resulting lighting object focuses on the unique pillow-like nature of the form, combined with the intersecting tubes that allow for light to filter through. <br><br> Designed for utiliarian, metropolitan settings such as subways and bus stops, the piece adopts the ubiquitous tube light as its main lighting fixture, which opens up possibilities for creating a modular system that can expand to different lengths and configurations",
        media: [
          "gridlight1.jpg/1",
          "gridlight2.jpg/2",
          "gridlight3.jpg/3",
          "gridlight4.jpg/2",
          "gridlight5.jpg/4",
          "gridlight6.jpg/5",
          "gridlight7.jpg/5",
          "gridlight8.jpg/6",
          "gridlight10.jpg/7",
          "gridlight11.jpg/8",
          "gridlight9.jpg/-1",
          "gridlight12.jpg/7",
        ],
        previewDescription:
          "Hydroformed modular lighting element for industrial settings",
        tags: ["lighting", "metalworking"],
      },

      locket: {
        category: "3D",
        string: "locket",
        year: "2026",
        title: "Separation and Reunion Locket Jacket Clasps",
        size: '1.125" &times; 0.75" &times; 0.25" per locket',
        medium:
          "Sterling Silver, Personal Artifacts, Jeweler's Saw, Torch, Files",
        url: "",
        role: "",
        statement:
          "Stemming from an interest in hardware of all kinds, these two jacket clasps investigate the intersection of jewelry and hardware through objects that are both sentimental and functional. The locket is repurposed as something that can hold the two sides of a jacket together: when closed, the locket dangles freely on one side of the jacket and leaves the garment unbuttoned, keeping what’s inside close to the wearer’s heart; when open, the locket brings the two sides of the jacket together and bares its contents for external viewers. <br><br> The face of each locket features a saw-pierced cutout of two silhouettes in a window pane. Depending on the ordering of the two lockets, the set shows two figures either uniting or separating, inspired by the idea of friends that come together and part ways over the years. In the same way that lockets, as vessels for memory and artifacts for emotion, bring together their wearer with loved ones that are framed inside with use, so do these clasps bring together the two sides of the jacket that share hellos and goodbyes, as friends do. <br><br> Each clasp’s frame displays a piece of paper: one a fortune cookie slip that reads, “Family is the heart of a loving home,” and the other an image of friends taken by a Poetry Camera, the poem separated. The lockets and adjoining hardware are sewn into the jacket, complete with mechanisms that allow each locket to be fixed in an open or closed state. <br><br> <em>Photos courtesy of Seunghye Kim</em>",
        media: [
          "locket1.jpg/1",
          "locket2.jpg/1",
          "locket3.jpg/4",
          "locket4.jpg/2",
          "locket5.jpg/3",
          "locket6.jpg/4",
          "locket7.jpg/5",
          "locket8.jpg/6",
          "locket9.jpg/6",
          "locket10.jpg/7",
          "locket11.jpg/7",
        ],
        previewDescription:
          "Functional keepsakes and vessels for sentimentality that, like friends, repeatedly say hello and goodbye",
        tags: ["jewelry", "wearable"],
      },

      pinkyRings: {
        category: "3D",
        string: "pinkyRings",
        year: "2026",
        title: "Pinky Promise Rings",
        size: "U.S. Ring Size 3.5",
        medium: "Brass, Torch, Jeweler's Saw, Mandrel, Hammers",
        url: "",
        role: "",
        statement:
          "After having created furniture and large-scale objects as explorations into creating shared experiences between pairs of people, the Pinky Promise Rings extend this practice into the smaller scale of jewelry. A ball-and-socket-adjacent mechanism connects two rings, allowing them to be worn only in configurations where the wearers’ pinkies are joined together. <br><br> The project explores the idea of skinship and intimacy, choosing this specific position of a pinky promise being both a symbolic gesture and a more subtle way of holding hands while staying physically conjoined. In constraining two people to be in a specific position, the rings ask wearers to become more aware of another person’s movements by also allowing some movement to allow for minor adjustments of the hands. The rings feature sweat-soldered foxes running toward each other, taken from the symbolism of a fox as a spiritual and transformative guide, and of a pair of foxes as figures of loyalty and balance",
        media: [
          "pinkyrings1.jpg/1",
          "pinkyrings2.jpg/1",
          "pinkyrings3.jpg/2",
          "pinkyrings4.jpg/3",
          "pinkyrings5.jpg/3",
          "pinkyrings6.jpg/4",
          "pinkyrings7.jpg/4",
          "pinkyrings8.jpg/5",
        ],
        previewDescription:
          "Couple rings that keep lovers linked together through an alternative way of holding hands",
        tags: ["jewelry", "wearable"],
      },

      confessional: {
        category: "3D",
        string: "confessional",
        year: "2025",
        title: "For All the Words I Can't Say Aloud",
        size: '23" &times; 44" &times; 45"',
        medium: "Steel, Upholstery Foam, Velvet, Plywood, Paper, Pens",
        url: '<a href="https://indd.adobe.com/view/c66e6e59-61f6-45ff-93e0-5ec92bf4d80a" target="_blank">FULL PRESENTATION</a>',
        role: "",
        statement:
          "<em>For All the Words I Can’t Say Aloud</em> reinterprets Catholic confession and kneeling benches into a structure meant for facilitating difficult conversations. Although not intended as a religious object, the structure invites participants to kneel and write letters to each other as a means of mediated, private conversation. By passing slips of paper back and forth through the mailbox, two people are able to converse in real-time, while feeling the weight of a physical presence across from them. <br><br> While Catholic confession requires verbal admissions of guilt from sinners to an anonymous, ordained listener, altering the format of the communication to a written one (inspired by love letters and pen pal friendships) allows participants to edit, reword, and process words that they might otherwise be unable to utter aloud. This mediated means of conversation reframes the act of exchanging dialogue as a ritual, encouraging intimacy, vulnerability, and more open communication. <br><br> The piece features welded tube, rod, and sheet metal, combined with machined feet and caps that evoke the ornamental motifs of Gothic architecture and combine the various ways of working with carbon steel",
        media: [
          "confessional1.jpg/1",
          "confessional2.jpg/2",
          "confessional3.jpg/1",
          "confessional4.jpg/3",
          "confessional5.jpg/3",
          "confessional6.jpg/4",
          "confessional7.jpg/4",
          "confessional8.jpg/5",
          "confessional9.jpg/6",
          "confessional10.jpg/7",
          "confessional11.jpg/7",
          "confessional12.jpg/8",
          "confessional13.jpg/5",
          "confessional14.jpg/9",
          "confessional15.jpg/9",
        ],
        previewDescription:
          "Catholic confession-inspired structure that mediates intimate conversation through written letters",
        tags: ["installation", "metalworking", "upholstery"],
      },

      commandChaise: {
        category: "3D",
        string: "commandChaise",
        year: "2025",
        title: "Command Chaise",
        size: '53" &times; 33" &times; 23"',
        medium: "Pleather, Steel Tube, Steel Rod, Brass Screws",
        url: "",
        role: "",
        statement:
          "Taking form inspiration from Marcel Breuer's tubular chairs and Apple's Command symbol (&#8984;), otherwise known as the Bowen knot, the <em>Command Chaise</em> reimagines the tablet-arm chair as a recliner, with a swiveling book stand and elevated armrests for propping up one's elbows when reading. <br><br> Designed for improved comfort during long stretches of reading, especially with larger books, the chaise features modified dimensions to support users in holding up books at a comfortable reading height and considers the integrated desk as an essential design feature, rather than an add-on",
        media: [
          "commandchaise1.jpg/1",
          "commandchaise2.jpg/2",
          "commandchaise3.jpg/2",
          "commandchaise4.jpg/3",
          "commandchaise5.jpg/4",
          "commandchaise6.jpg/5",
          "commandchaise7.jpg/6",
          "commandchaise8.jpg/7",
          "commandchaise9.jpg/7",
          "commandchaise10.jpg/8",
          "commandchaise11.jpg/9",
          "commandchaise12.jpg/9",
        ],
        previewDescription:
          "Welded reading chaise reimagining the tablet-arm chair, with an integrated swiveling desk and sling seat",
        tags: ["furniture", "metalworking", "soft goods"],
      },

      cruet: {
        category: "3D",
        string: "cruet",
        year: "2025",
        title: "Estuary Cruet",
        size: '5" &times; 3" &times; 2.25"',
        medium:
          "Ceramic Slip, Cone 5-6 Glazes, Clay, Plaster, Oxidation Firing Electric Kiln",
        url: "",
        role: "",
        statement:
          "Inspired by the forms liquids take, as well as the simple yet ritualistic act of pouring, the <em>Estuary Cruet</em> celebrates the humble soy sauce dispenser as an object for both storage and presentation. <br><br> Featuring a traditional single spout on one side and a unique double spout on the other, in which two streams join to form one while pouring, the cruet accommodates simple everyday use while drawing attention to the ritual of serving condiments. An organic pinch top lid allows for easy storage while completing the fluid form, accentuating the object's function when in use and alluding to it when not. <br><br> The design was created after multiple iterations of clay positives, of which the final was used to create a plaster mold for slip-casting. While abstract, the visual language draws reference from a variety of sources, from Eva Zeisel's collections to sparrow wings and flower petals",
        media: [
          "cruet1.jpg/1",
          "cruet2.jpg/2",
          "cruet3.jpg/2",
          "cruet4.jpg/4",
          "cruet5.jpg/4",
          "cruet6.jpg/6",
          "cruet7.jpg/6",
          "cruet8.jpg/5",
          "cruet9.jpg/3",
          "cruet10.jpg/8",
          "cruet11.jpg/8",
          "cruet12.jpg/10",
          "cruet13.jpg/10",
          "cruet14.jpg/9",
          "cruet15.jpg/11",
          "cruet16.jpg/12",
          "cruet17.jpg/7",
          "cruet18.jpg/13",
          "cruet19.jpg/14",
          "cruet20.jpg/14",
        ],
        previewDescription:
          "Slip-casted soy sauce cruet with dual pour mechanism for both serving and storage",
        tags: ["ceramics", "tableware"],
      },

      rectGarment: {
        category: "3D",
        string: "rectGarment",
        year: "2025",
        title: "Providence Modular Two-Piece Knit Set",
        size: "Women's Size Small",
        medium:
          "Silver Reed Single Bed Knitting Machine, Cotton, Wool, Tencel, Cashmere, Acrylic, Polyester",
        url: "",
        role: "",
        statement:
          "Over the course of five weeks in winter, while learning techniques on the single bed knitting machine, I explored my personal connection to Providence after having lived in the city for the past four years. Along with acting as a culmination of my explorations with the machine, the resulting two-piece knitted set formalizes the hidden moments of delight that I have documented in my camera roll throughout my years of college, drawing from both the colors I tend to associate most with Providence and from the patterns abstracted from landscape and architecture discovered while walking through city streets, whether in the way the holes in the outer layer draw patterns on skin like sunlight filtering through tree leaves, or in the way the inner dress draws a hazy path from sky to nature to brutalist buildings and industrial plants. <br><br> The piece also explores the possibility of modularity in knitwear, employing buttons as low-tech connecting hardware to allow for the rearrangement of the different fabric pieces into an assortment of clothing. A skirt can become a top; sweaters can be reversed or their sleeve lengths altered; straps can be detached and reattached to change the drape of the fabric.",
        media: [
          "rectgarment1.jpg/1",
          "rectgarment2.jpg/2",
          "rectgarment3.jpg/3",
          "rectgarment4.jpg/1",
          "rectgarment5.jpg/4",
          "rectgarment6.jpg/5",
          "rectgarment7.jpg/6",
          "rectgarment8.jpg/7",
          "rectgarment9.jpg/7",
          "rectgarment10.jpg/9",
          "rectgarment11.jpg/9",
          "rectgarment12.jpg/8",
        ],
        previewDescription:
          "Modular knitwear documenting four years of exploring the streets of a small city",
        tags: ["wearable", "soft goods"],
      },

      clickingBoots: {
        category: "3D",
        string: "clickingBoots",
        year: "2024",
        title: "Clicking Boots",
        size: "Size 7.5M Women's Dr. Scholl Last",
        medium:
          "Chrome Tan Leather, Pig Skin, Post Machine, Juki Sewing Machine, Veg Tan Leather, Crimp Boards, Aluminum Stock, Metal Lathe, Bridgeport Mill, Flycutter, Dividing Head, Steel Rod, Spring Steel Shanks, Drill Press, Tap, Machine Screws, Museum Wax, Rubber Cement, Contact Cement, Snaps, Snap Setter, Skiving Knife, 5-in-1 Machine, Hammer, Lasting Pincers, Lasting Stand, Heat Gun, Wood Glue, Wallpaper Adhesive, Shoe Last",
        url: '<a href="https://www.figma.com/proto/gAcazav9wcGDz6xuCJ1C7U/Clicking-Boots?node-id=2001-300&viewport=284%2C345%2C0.02&t=01F3yPZzFotojUTP-1&scaling=contain&content-scaling=fixed&page-id=2001%3A35" target="_blank">FULL PRESENTATION</a>',
        role: "",
        statement:
          "The <em>Clicking Boots</em> explore various ways of combining complicated fabrication methods for both shoe uppers and heels with the treatment of functional elements as simple stylistic features. <br><br> Inspired by pleats as understated design elements with functional components, the wholecut uppers highlight two simple folds down the side of each shoe, with snaps nestled in each pleat to allow for both an easy slip-on user flow when open and zipper-less, tight-fitting silhouettes once closed. The machined aluminum heel adds a mechanism-inspired aspect to the bottom of the shoe, which creates the illusion of the wearer's heel always touching the ground by dropping out to compensate for the height difference when the foot is lifted. <br><br> The boots are named for the sounds they make when being donned and while walking, which resemble the clip-clop of horse hooves",
        media: [
          "clickingboots1.jpg/1",
          "clickingboots2.jpg/4",
          "clickingboots3.jpg/1",
          "clickingboots4.jpg/2",
          "clickingboots5.jpg/3",
          "clickingboots6.jpg/3",
          "clickingboots7.jpg/5",
          "clickingboots8.jpg/6",
          "clickingboots9.jpg/5",
          "clickingboots10.jpg/7",
          "clickingboots11.jpg/7",
          "clickingboots12.jpg/4",
          "clickingboots13.jpg/8",
          "clickingboots14*.mp4/9",
        ],
        previewDescription:
          "Leather boots with single-piece pleated uppers, snap closures, and machined aluminum leveling heels",
        tags: ["shoemaking", "machining", "wearable"],
      },

      loveInAPuff: {
        category: "3D",
        string: "loveInAPuff",
        year: "2024",
        title: "Love in a Puff",
        size: '10" &times; 14" &times; 5"',
        medium:
          "Arduino, Cherry, Jointer, Planar, Screws, Drill Press, Hand Drill, Vellum, Biscuit Jointer, Table Saw, Aluminum Stock, Sandblaster, South Bend Metal Lathe, Bridgeport Mill, Radius Cutter, Horizontal Bandsaw, Tape, Hot Glue, Wire Cutter, Aluminum Rod, Aluminum Tube, White Glue, Tap, Solidworks, Adobe InDesign, Adobe Illustrator",
        url: '<a href="https://indd.adobe.com/view/fe56a380-fe08-420f-9779-6cd81f4132ba" target="_blank">FULL PRESENTATION</a>',
        role: "",
        statement:
          "After doing initial research on the pain points and experiences of both people in long-distance relationships and those who get homesick, I designed a product that engages with the intense, yet often indescribable, emotions that come with yearning for places and people. <br /><br /> <em>Love in a Puff</em> is a set of two devices, one for each person in the relationship, which contain indicator lights that turn on when both people are in the same room as their devices to symbolize connection, parallel play, and presence. A simple blow on the pinwheel-like shade (designed to evoke nostalgia and playfulness) causes the pinwheel on the other person's device to spin in response, mimicking the sense of shared space by allowing the individuals to effect a force on each others' environments. <br /><br /> The devices act as metaphors for human breath (something that can only be experienced in moments of intimacy), bringing together feelings of lightness and ephemerality. The devices come in desktop and wall-mounted variants and take inspiration from MUJI's soft-spoken design language",
        media: [
          "loveinapuff1.jpg/1",
          "loveinapuff2.jpg/3",
          "loveinapuff3.jpg/2",
          "loveinapuff4.jpg/2",
          "loveinapuff5.jpg/4",
          "loveinapuff6.jpg/6",
          "loveinapuff7.jpg/6",
          "loveinapuff8.jpg/4",
          "loveinapuff9.jpg/5",
          "loveinapuff10.mp4/7",
        ],
        previewDescription:
          "Bridging emotional distance between people with breath, light, and movement",
        tags: ["arduino", "machining"],
      },

      homebodyTable: {
        category: "3D",
        string: "homebodyTable",
        year: "2024",
        title: "Table for a Homebody",
        size: '11.66" &times; 30" &times; 12"',
        medium:
          "Cherry, Jointer, Planar, Router Table, Hand-Held Plunge Router, Table Saw, Wood Glue, Dowels, Canvas Fabric, Plywood, Bandsaw, Chisel, Mallet, Double-Sided Table, Thread, Tacky Glue, Orbital Sander, Drill Press, Biscuit Jointer",
        url: "",
        role: "",
        statement:
          "Tasked with creating a 'mechanism' that aids in the user experience of an object, I created a lap table with tambour-inspired drawers to reveal and conceal cubby spaces for easy storage. <br /><br /> In spite of its simple form factor, <em>Table for a Homebody</em> introduces a subtle moment of delight in its sliding cubby covers, eliciting surprise from its user at the satisfaction of every interaction with the storage space. The cherry finish and warm-toned canvas covers boasting delicate loops for easy pulling reference cozy and domestic aesthetics, recalling both the table's purpose of being a bed-top object and its invitation to stay home and under the covers",
        media: [
          "homebodytable1.mp4/1",
          "homebodytable2.jpg/2",
          "homebodytable3.jpg/2",
          "homebodytable4.jpg/3",
          "homebodytable5.jpg/4",
          "homebodytable6.jpg/5",
          "homebodytable7.jpg/6",
          "homebodytable8.jpg/7",
          "homebodytable9.jpg/8",
          "homebodytable10.jpg/8",
          "homebodytable11*.mp4/9",
        ],
        previewDescription:
          "Lap table with tambour-inspired mechanisms, for people who love staying at home (and in bed)",
        tags: ["woodworking", "furniture"],
      },

      daychair: {
        category: "3D",
        string: "daychair",
        year: "2023",
        title: "天椅 (Day Chair)",
        size: '27.23" &times; 20" &times; 20.92"',
        medium:
          "Poplar, Ash, Solidworks, Table Saw, Jointer, Planar, Horizontal Boring Machine, Orbital Disk Sander, Biscuit Joiner, Pin Router, OBS, Nail Gun, Screws, Drill Press, Bandsaw",
        url: "",
        role: "",
        statement:
          '天椅, translated directly as "Sky Chair" or "Day Chair," is a woodworking project I undertook as my first venture into real, everyday furniture. Aptly named due to its side profile, which resembles the Chinese character 天, the semi-cantilevered chair employs frame construction to lay out its sharp, angular components while inlaying steambent ash pieces, filleted with a pin router, to provide both support and an organic counterpoint. With 60 degree angles softened by curved radii as a motif throughout the chair, steambending provides a structural support to allow for more extreme angles of joinery. <br><br> The side profile 天, which turns into the character 人 once the chair is occupied, promotes the idea of the chair being both for everyday use ("天天" meaning "daily"), and of the chair being made for people ("人" meaning "person"). What\'s more, the phrase "天人合一" also resonates with the idea of the chair fitting well with people, just as humans ("人") should live in nature ("天")  together ("合一") in peace. Just as chairs are a unique subsection of furniture that must take careful account of the human body, the 天椅 focuses on the main purpose of chairs as beautiful objects made by people, for people.',
        media: [
          "daychair1.jpg/1",
          "daychair2.jpg/1",
          "daychair3.jpg/2",
          "daychair4.jpg/5",
          "daychair5.jpg/4",
          "daychair6.jpg/3",
          "daychair7.jpg/3",
          "daychair8.jpg/6",
          "daychair9.jpg/5",
          "daychair10.jpg/7",
          "daychair11.jpg/7",
          "daychair12.gif/-1",
          "daychair13*.mp4/8",
        ],
        previewDescription:
          "Chair for daily use, employing frame construction and steambending techniques",
        tags: ["woodworking", "furniture"],
      },

      makitaCultivator: {
        category: "3D",
        string: "makitaCultivator",
        year: "2023",
        title: "Makita Cultivator",
        size: '4.82" &times; 4" &times; 11.89"',
        medium:
          "Grey Foam, Steel Stock, South Bend Lathe, Plastidip, Acrylic Rod, Rock Hard Putty, Styrene, Spray Paint, JB Weld, Primer, Solidworks, Keyshot, Chipboard, Foamcore, Adobe InDesign, Adobe Illustrator",
        url: '<a href="https://indd.adobe.com/view/5eb6d8be-3ee2-4145-8935-5c1156ee0c13" target="_blank">FULL PRESENTATION</a>',
        role: "",
        statement:
          "Given the assignment of designing a gardening tool for a brand, I was given the tool of a hand cultivator, to be designed for Makita, a power tool company. After researching the company’s branding, product lines, and values, I moved into sketching and prototyping to identify the most suitable end design based on Makita’s reputation as a legacy brand known for its ergonomics and simple, but honest design. Focusing primarily on Makita’s target audience, largely composed of professionals using Makita’s tools on a regular basis for their work, I also wanted to make sure to design something that would be industrial and robust enough to endure regular use on the job. <br><br> Over the course of three iterations, I narrowed down the most comfortable handles for the cultivator based on the pulling motions users would employ repeatedly during the tool’s use. The end product, which features a dual-wield grip including a claw grip for tension and a fist grip for force, allows users to easily maneuver through dirt",
        media: [
          "makitacultivator6.jpg/4",
          "makitacultivator7.jpg/1",
          "makitacultivator8.jpg/2",
          "makitacultivator9.jpg/3",
          "makitacultivator1.jpg/4",
          "makitacultivator2.jpg/5",
          "makitacultivator3.jpg/6",
          "makitacultivator4.jpg/6",
          "makitacultivator5.jpg/7",
          "makitacultivator10.jpg/7",
          "makitacultivator11.jpg/8",
          "makitacultivator12.jpg/8",
        ],
        previewDescription:
          "Hand cultivator gardening tool designed to fit Makita's brand and product line",
        tags: ["machining", "cad"],
      },

      permutationJars: {
        category: "3D",
        string: "permutationJars",
        year: "2023",
        title: "Permutation Jars",
        size: '2.75" &times; 1.25" &times; 1.25" each',
        medium:
          "Aluminum Stock, Aluminum Tube, Brass Stock, Steel Stock, South Bend Lathe, Bridgeport Mill, Solidworks",
        url: "",
        role: "",
        statement:
          "Featuring lids and bottoms that can be screwed on and unscrewed, machined with an internal tap and external single point threading, the Permutation Jars offer a variety of nine different variations on a single design. With different kinds of shapes and silhouettes, augmented further by three different kinds of metals and colors, the jars evoke a sense of play and exploration to find different ways of mixing and matching each of the jars' parts to create a myriad of different iterations",
        media: [
          "permutationjars1.jpg/1",
          "permutationjars2.jpg/2",
          "permutationjars3.jpg/3",
          "permutationjars4.jpg/4",
          "permutationjars5.jpg/6",
          "permutationjars6.jpg/3",
          "permutationjars7.jpg/5",
          "permutationjars8.jpg/5",
          "permutationjars9.jpg/8",
          "permutationjars10.jpg/7",
          "permutationjars11.jpg/8",
          "permutationjars12.jpg/9",
          "permutationjars13.jpg/10",
          "permutationjars14.jpg/11",
        ],
        previewDescription:
          "A system of interchangeable parts made of brass, steel, and aluminum",
        tags: ["cad", "machining", "metalworking"],
      },

      synergySeats: {
        category: "3D",
        string: "synergySeats",
        year: "2022",
        title: "Synergy Seats",
        size: '30.25" &times; 48" &times; 22.5"',
        medium:
          "Poplar Plywood, Dowels, Wood Glue, Acrylic Plexiglass, Screws, Arduino, LED Light Strips, Portable Chargers, Light Sensors",
        url: "",
        role: "",
        statement:
          "Comprised of two stools that fit together to form a bench, the Synergy Seats bridge physical and emotional distances within a shared space to create connections between two seated individuals. As one person sits down, the other seat lights up so that when two people are seated, the entire bench is illuminated to visualize a connection and foster interaction and cohabitation of a space",
        media: [
          "synergyseats1.mp4/1",
          "synergyseats2*.mp4/2",
          "synergyseats3.jpg/3",
          "synergyseats4.jpg/4",
          "synergyseats5.jpg/3",
          "synergyseats6.jpg/5",
          "synergyseats7.jpg/6",
          "synergyseats8.jpg/5",
        ],
        previewDescription:
          "A pair of stools that bridges physical and emotional gaps to foster cohabitation of space",
        tags: ["arduino", "furniture", "woodworking"],
      },
    },

    // VIDEO
    "4D": {
      rememo: {
        category: "4D",
        string: "rememo",
        year: "2025",
        title: "Re:Memo",
        size: "",
        medium: "Maya, Adobe Illustrator, Adobe Premiere Pro",
        url: "",
        role: "",
        statement:
          "Created as an exploration of anime cel-style toon-shading and animation movement quality, I animated a series of three short, cyclical vignettes inspired by old video game loading screens using a character I modeled, shaded, and rigged. In the Re:Memo game, the character would act as the player's digital avatar, which travels through a found hard drive attempting to uncover mysteries about its previous owner before all of the data becomes corrupted. <br/><br/> Each of the loading screens, complete with loading state UI, would introduce a new phase of the game, which explores concepts relating to digital archives and their effect on grieving processes in the age of modern technology",
        media: [
          "rememo1*.mp4/1",
          "rememo2.mp4/2",
          "rememo3.mp4/3",
          "rememo4.mp4/4",
        ],
        previewDescription:
          "Toon-shaded loading screens for a video game about digital grief, memory, and rediscovery",
        tags: ["animation", "game", "art direction"],
      },

      liveLaughLoaf: {
        category: "4D",
        string: "liveLaughLoaf",
        year: "2025",
        title: "Procedural Bread Simulation",
        size: "",
        medium: "C++, Maya, Rhino, Blender",
        url: '<a href="https://github.com/smallwhale1/cs2240-bread/tree/main" target="_blank">GITHUB',
        role: "",
        statement:
          "Working with team members Grace Marshburn, Lana Yang-Maccini, and Sophie Zhang, I reimplemented and augmented the <em>Procedural bread making</em> paper by Rodrigo Baravalle, Gustavo Ariel Patow, and Claudio Delrieux. <br/><br/> In addition to the original implementation, which generates bread geometry procedurally and simulates the entire proofing and baking process, we added parallelization, which allowed us to render animations of the bread pipeline in addition to the paper's still images, as well as integrated low-res bread meshes into industry-standard workflows using surface meshes and current software like Maya and Blender. Additionally, we also added more parameter tuning to represent a wider variety of bread types than the original paper",
        media: [
          "livelaughloaf1.gif/1",
          "livelaughloaf2.gif/2",
          "livelaughloaf3.png/3",
          "livelaughloaf4.png/4",
          "livelaughloaf5.png/5",
        ],
        previewDescription:
          "Building upon an existing research paper about modeling baking processes",
        tags: ["computer graphics", "animation"],
      },

      efflorescence: {
        category: "4D",
        string: "efflorescence",
        year: "2022",
        title: "Efflorescence",
        size: '01:38, 18" &times; 24"',
        medium: "Vine Charcoal, White Conte, Eraser, Adobe Premiere Pro",
        url: "",
        role: "",
        statement:
          "As a collaboration with Astrid Schoenly, <em>Efflorescence</em> narrates the drifting apart of two childhood friends, reflecting upon a near-universal college experience of meeting, befriending, and losing contact with companions as time progresses",
        media: [
          "efflorescence1*.mp4/1",
          "efflorescence2.jpg/2",
          "efflorescence3.jpg/3",
          "efflorescence4.jpg/4",
          "efflorescence5.jpg/5",
          "efflorescence6.jpg/6",
          "efflorescence7.jpg/7",
          "efflorescence8.jpg/8",
        ],
        previewDescription:
          "An animation short on growing up, moving away, and drifting apart from childhood friends",
        tags: ["animation", "short film"],
      },
    },
  },
});
