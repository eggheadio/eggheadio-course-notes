# Format Numbers with Separators and Currency Symbols using react-intl FormattedNumber

**[📹 Video](https://egghead.io/lessons/react-format-numbers-with-separators-and-currency-symbols-using-react-intl-formattednumber)**

## Using the FormattedNumber Component ⚡
We'll start by importing `FormattedNumber` from react-intl in **src/components/BookDetail.js**

### BookDetail.js
```jsx
import { 
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelativeTime,
  FormattedNumber
} from 'react-intl' 
```

In this lesson, the instructor has gone ahead and changed the **books.json** file so that the `price` key of each book is an object containing a price for each supported locale. Therefore, we must also change our **src/books.json** to match the instructor's. 

<details>
<summary> books.json - time to paste a lot again. </summary>

```json
[
  {
    "id": 1,
    "title": "Dark Matter",
    "author": "Blake Crouch",
    "description": "“Are you happy with your life?”\n\nThose are the last words Jason Dessen hears before the masked abductor knocks him unconscious.\n\nBefore he awakens to find himself strapped to a gurney, surrounded by strangers in hazmat suits.\n\nBefore a man Jason’s never met smiles down at him and says, “Welcome back, my friend.”\n\nIn this world he’s woken up to, Jason’s life is not the one he knows. His wife is not his wife. His son was never born. And Jason is not an ordinary college physics professor, but a celebrated genius who has achieved something remarkable. Something impossible.\n\nIs it this world or the other that’s the dream? And even if the home he remembers is real, how can Jason possibly make it back to the family he loves? The answers lie in a journey more wondrous and horrifying than anything he could’ve imagined—one that will force him to confront the darkest parts of himself even as he battles a terrifying, seemingly unbeatable foe.\n\nFrom the author of the bestselling Wayward Pines trilogy, Dark Matter is a brilliantly plotted tale that is at once sweeping and intimate, mind-bendingly strange and profoundly human—a relentlessly surprising science-fiction thriller about choices, paths not taken, and how far we’ll go to claim the lives we dream of.",
    "image": "https://images.gr-assets.com/books/1472119680l/27833670.jpg",
    "reviews": [
      {
        "rating": 5,
        "name": "Gretchen Cannon",
        "body": "Occaecat ut ut mollit occaecat id fugiat velit est culpa. Nostrud incididunt commodo adipisicing duis cupidatat officia nisi cupidatat sit deserunt consectetur ex veniam. Pariatur qui in sit ut.",
        "date": 1491111687199,
        "avatar": "http://i.pravatar.cc/64?img=1"
      },
      {
        "rating": 1,
        "name": "Kirby Evans",
        "body": "Ut irure excepteur in culpa. Elit amet enim qui laboris do labore duis tempor exercitation quis voluptate officia enim proident. Et ex eu magna elit et culpa quis duis esse fugiat. Aliqua esse reprehenderit non adipisicing deserunt nostrud commodo tempor. Incididunt labore id anim aliqua sit qui. Ex ad est officia ea esse et. Consectetur tempor nostrud et ea culpa.",
        "date": 1492668996053,
        "avatar": "http://i.pravatar.cc/64?img=2"
      },
      {
        "rating": 4,
        "name": "Alicia Warner",
        "body": "Dolor fugiat mollit do occaecat mollit aute incididunt esse cillum dolore commodo qui do minim. Aliqua proident aliqua ullamco sunt fugiat duis et exercitation deserunt non exercitation cupidatat id minim. Exercitation voluptate elit consectetur consectetur qui exercitation reprehenderit ut. Commodo laborum eiusmod sit nostrud sunt ea dolor est consequat enim est occaecat officia qui. Dolore nisi nulla laborum consectetur.",
        "date": 1491743020373,
        "avatar": "http://i.pravatar.cc/64?img=3"
      },
      {
        "rating": 3,
        "name": "Pope Robbins",
        "body": "Esse consectetur exercitation sit qui minim commodo veniam tempor cupidatat qui fugiat occaecat sit. Magna fugiat non mollit commodo sit enim culpa. Pariatur reprehenderit est enim incididunt pariatur ullamco anim cupidatat labore. Duis magna id fugiat nulla exercitation ipsum.",
        "date": 1489702832337,
        "avatar": "http://i.pravatar.cc/64?img=4"
      }
    ],
    "merchants": [
      {
        "name": "Amazon",
        "price": {
          "en-US": "16.19",
          "es": "15.09",
          "fr": "15.09"
        },
        "link": "https://www.amazon.com/Dark-Matter-Novel-Blake-Crouch/dp/1101904224",
        "icon": "https://s-media-cache-ak0.pinimg.com/564x/cc/77/ef/cc77efac50fd7637763ba7115bc4f17a.jpg"
      },
      {
        "name": "Barnes & Noble",
        "price": {
          "en-US": "16.19",
          "es": "15.09",
          "fr": "15.09"
        },
        "link": "http://www.barnesandnoble.com/w/dark-matter-blake-crouch/1122954090",
        "icon": "http://www.barnesandnobleinc.com/wp-content/themes/bninc/assets/images/favicon.ico"
      },
      {
        "name": "Audible",
        "price": {
          "en-US": "16.19",
          "es": "15.09",
          "fr": "26.10"
        },
        "link": "http://www.audible.com/pd/Sci-Fi-Fantasy/Dark-Matter-Audiobook/B01CUKULGA",
        "icon": "http://logo.clearbit.com/audible.com"
      }
    ]
  },
  {
    "id": 2,
    "title": "When Breath Becomes Air",
    "author": "Paul Kalanithi",
    "description": "At the age of thirty-six, on the verge of completing a decade’s training as a neurosurgeon, Paul Kalanithi was diagnosed with inoperable lung cancer. One day he was a doctor treating the dying, the next he was a patient struggling to live.\n\nWhen Breath Becomes Air chronicles Kalanithi’s transformation from a medical student asking what makes a virtuous and meaningful life into a neurosurgeon working in the core of human identity – the brain – and finally into a patient and a new father.\n\nWhat makes life worth living in the face of death? What do you do when when life is catastrophically interrupted? What does it mean to have a child as your own life fades away?\n\nPaul Kalanithi died while working on this profoundly moving book, yet his words live on as a guide to us all. When Breath Becomes Air is a life-affirming reflection on facing our mortality and on the relationship between doctor and patient, from a gifted writer who became both. ",
    "image": "https://images.gr-assets.com/books/1488498350l/25614898.jpg",
    "reviews": [
      {
        "rating": 3,
        "name": "Margaret Owen",
        "body": "Eiusmod pariatur esse nisi est non non labore minim fugiat voluptate quis non. Exercitation do consectetur tempor mollit ad ad dolor fugiat aliqua consequat. Sunt excepteur sunt amet occaecat voluptate. Pariatur reprehenderit consectetur non et. Nulla magna ea esse minim cupidatat esse fugiat. Aliquip in ut laborum magna commodo culpa occaecat ad ad.",
        "date": 1491259081436,
        "avatar": "http://i.pravatar.cc/64?img=1"
      },
      {
        "rating": 5,
        "name": "Ophelia Cox",
        "body": "Esse irure laborum nostrud consectetur aute nulla elit. Elit veniam aliquip est minim officia voluptate est duis fugiat ipsum minim. Dolore ea aliquip sit nisi ipsum velit proident laborum quis culpa.",
        "date": 1491604702981,
        "avatar": "http://i.pravatar.cc/64?img=2"
      },
      {
        "rating": 5,
        "name": "Tamika Roman",
        "body": "Pariatur dolore cupidatat deserunt cupidatat proident qui adipisicing laboris et ullamco labore. Enim ea nulla sit occaecat. Lorem adipisicing ut dolor exercitation do enim amet do culpa amet aliqua. Cillum quis culpa amet enim proident qui irure nostrud. Dolor dolore officia fugiat consequat sit.",
        "date": 1491340609924,
        "avatar": "http://i.pravatar.cc/64?img=3"
      },
      {
        "rating": 4,
        "name": "Margret Gamble",
        "body": "Incididunt cillum consectetur cillum fugiat eiusmod proident esse reprehenderit laborum aliquip esse enim. Pariatur incididunt dolore est nostrud officia. In deserunt et culpa proident non dolor nulla ad sint.",
        "date": 1488092056702,
        "avatar": "http://i.pravatar.cc/64?img=4"
      },
      {
        "rating": 4,
        "name": "Lucille Livingston",
        "body": "Aliqua nulla Lorem incididunt minim ut irure eu dolor quis magna anim Lorem pariatur. Occaecat fugiat commodo adipisicing excepteur pariatur velit nisi. Nostrud consectetur reprehenderit nulla excepteur. Id anim proident ut ad occaecat dolor tempor magna exercitation qui ad consectetur.",
        "date": 1487262936149,
        "avatar": "http://i.pravatar.cc/64?img=5"
      },
      {
        "rating": 5,
        "name": "Reid Fuller",
        "body": "Deserunt ullamco anim eu aliqua laboris aliqua magna veniam. Eiusmod Lorem proident nostrud non sint elit ut in. Minim sit nisi et est. Cillum exercitation nisi irure nisi eu quis sint deserunt adipisicing elit ad exercitation aliquip non. Consectetur cupidatat velit magna excepteur dolore ex do deserunt enim non amet reprehenderit. Ipsum adipisicing dolor culpa sint velit irure pariatur excepteur officia id reprehenderit ullamco eu. Exercitation cillum dolore velit incididunt elit proident consequat incididunt qui officia mollit nostrud mollit.",
        "date": 1485458360394,
        "avatar": "http://i.pravatar.cc/64?img=6"
      }
    ],
    "merchants": [
      {
        "name": "Amazon",
        "price": {
          "en-US": "14.00",
          "es": "13.05",
          "fr": "13.05"
        },
        "link": "https://www.amazon.com/When-Breath-Becomes-Paul-Kalanithi/dp/081298840X",
        "icon": "https://s-media-cache-ak0.pinimg.com/564x/cc/77/ef/cc77efac50fd7637763ba7115bc4f17a.jpg"
      },
      {
        "name": "Barnes & Noble",
        "price": {
          "en-US": "14.88",
          "es": "13.87",
          "fr": "13.87"
        },
        "link": "http://www.barnesandnoble.com/w/dark-matter-blake-crouch/1122954090",
        "icon": "http://www.barnesandnobleinc.com/wp-content/themes/bninc/assets/images/favicon.ico"
      },
      {
        "name": "Audible",
        "price": {
          "en-US": "28.00",
          "es": "26.10",
          "fr": "26.10"
        },
        "link": "http://www.audible.com/pd/Bios-Memoirs/When-Breath-Becomes-Air-Audiobook/B0191YTGI2",
        "icon": "http://logo.clearbit.com/audible.com"
      }
    ]
  },
  {
    "id": 3,
    "title": "11/22/63",
    "author": "Stephen King",
    "description": "Life can turn on a dime—or stumble into the extraordinary, as it does for Jake Epping, a high school English teacher in Lisbon Falls, Maine. While grading essays by his GED students, Jake reads a gruesome, enthralling piece penned by janitor Harry Dunning: fifty years ago, Harry somehow survived his father’s sledgehammer slaughter of his entire family. Jake is blown away...but an even more bizarre secret comes to light when Jake’s friend Al, owner of the local diner, enlists Jake to take over the mission that has become his obsession—to prevent the Kennedy assassination.\n\nHow? By stepping through a portal in the diner’s storeroom, and into the era of Ike and Elvis, of big American cars, sock hops, and cigarette smoke... Finding himself in warmhearted Jodie, Texas, Jake begins a new life. But all turns in the road lead to a troubled loner named Lee Harvey Oswald. The course of history is about to be rewritten...and become heart-stoppingly suspenseful.",
    "image": "https://images.gr-assets.com/books/1327876792l/10644930.jpg",
    "reviews": [
      {
        "rating": 2,
        "name": "Lillian Norman",
        "body": "Irure enim cillum commodo officia et aliquip. Proident mollit occaecat do cillum laboris. Irure sint Lorem laborum laborum id. Do minim dolore non anim voluptate id pariatur eu est in laborum. Consequat anim veniam laboris eiusmod Lorem minim ea occaecat officia quis cupidatat. Qui enim in est ex dolore dolore consequat eiusmod. In dolore eiusmod mollit laborum officia.",
        "date": 1492426856173,
        "avatar": "http://i.pravatar.cc/64?img=1"
      },
      {
        "rating": 2,
        "name": "Hodges Wall",
        "body": "Sunt eu anim nulla consequat dolore esse ad. Voluptate do aute voluptate eiusmod ad cillum est consectetur ad in exercitation ipsum. Quis reprehenderit et sit officia ut ut. Ullamco anim irure enim aute do ex voluptate excepteur in deserunt in. Ut id pariatur amet cillum magna incididunt magna nisi dolore nostrud ut nisi. Dolor consectetur nulla enim incididunt occaecat commodo velit fugiat voluptate. Sint cupidatat et ullamco laboris in consequat voluptate non laboris.",
        "date": 1492033229319,
        "avatar": "http://i.pravatar.cc/64?img=2"
      },
      {
        "rating": 4,
        "name": "Laura Salinas",
        "body": "Aute non consectetur Lorem Lorem aliqua adipisicing elit exercitation officia exercitation magna ut adipisicing deserunt. Ipsum laboris do voluptate velit mollit ut amet adipisicing sunt. Amet id ullamco fugiat eu nisi proident ipsum voluptate minim velit. Irure minim dolor eiusmod non aliqua dolore irure incididunt ea ea do ex do. Nulla mollit eu enim anim quis labore esse amet voluptate anim exercitation est do eiusmod. Minim incididunt commodo dolor do culpa voluptate sunt elit cupidatat amet quis sint et in. Ullamco aute elit ex ut veniam deserunt irure eu adipisicing ea qui.",
        "date": 1492907266511,
        "avatar": "http://i.pravatar.cc/64?img=3"
      },
      {
        "rating": 3,
        "name": "Cruz Rocha",
        "body": "Cupidatat eu consectetur incididunt quis quis voluptate. Amet magna ipsum nulla Lorem occaecat veniam eiusmod deserunt excepteur exercitation eiusmod et do. Ullamco nisi cillum ex aute commodo adipisicing excepteur ipsum amet amet ut consequat aliqua. Dolor deserunt ipsum sint labore cillum cillum cupidatat irure. Magna do nostrud excepteur pariatur amet pariatur esse incididunt. Tempor deserunt consectetur quis officia anim exercitation sint. Magna aliqua est ea laboris.",
        "date": 1490086760217,
        "avatar": "http://i.pravatar.cc/64?img=4"
      },
      {
        "rating": 5,
        "name": "Erika Jordan",
        "body": "Dolor anim deserunt proident in id. Incididunt ad aute non do cupidatat mollit. Aliqua amet velit nostrud aliqua do nisi tempor. Eu ea esse consectetur deserunt dolore do in non incididunt esse. Commodo aute ullamco culpa deserunt eiusmod pariatur laboris nisi culpa sunt cupidatat aliquip nulla.",
        "date": 1490982409431,
        "avatar": "http://i.pravatar.cc/64?img=5"
      },
      {
        "rating": 5,
        "name": "Robertson Grimes",
        "body": "Culpa consequat non mollit ea minim veniam et. Commodo nulla ipsum aliquip veniam anim cupidatat ad irure fugiat labore consequat occaecat. In excepteur veniam minim sit aliqua amet irure excepteur Lorem id aliquip.",
        "date": 1490585392387,
        "avatar": "http://i.pravatar.cc/64?img=6"
      },
      {
        "rating": 2,
        "name": "Johnston Maynard",
        "body": "Qui culpa laborum velit aliqua velit laboris reprehenderit. Aute elit nulla sit incididunt adipisicing est adipisicing qui veniam occaecat Lorem enim amet nostrud. Amet et mollit ullamco do ad aliqua aute sit velit. Nisi quis commodo est consequat nulla duis sunt labore occaecat aliquip nisi anim irure aute. Qui ipsum dolore reprehenderit est magna aliqua eiusmod cupidatat cillum ipsum enim.",
        "date": 1487401303410,
        "avatar": "http://i.pravatar.cc/64?img=7"
      }
    ],
    "merchants": [
      {
        "name": "Amazon",
        "price": {
          "en-US": "20.56",
          "es": "19.34",
          "fr": "19.34"
        },
        "link": "https://www.amazon.com/11-22-63-Stephen-King/dp/1451627297",
        "icon": "https://s-media-cache-ak0.pinimg.com/564x/cc/77/ef/cc77efac50fd7637763ba7115bc4f17a.jpg"
      },
      {
        "name": "Barnes & Noble",
        "price": {
          "en-US": "22.43",
          "es": "21.09",
          "fr": "21.09"
        },
        "link": "http://www.barnesandnoble.com/w/11-22-63-stephen-king/1030438404",
        "icon": "http://www.barnesandnobleinc.com/wp-content/themes/bninc/assets/images/favicon.ico"
      },
      {
        "name": "Audible",
        "price": {
          "en-US": "31.84",
          "es": "29.94",
          "fr": "29.94"
        },
        "link": "http://www.audible.com/pd/Mysteries-Thrillers/22-11-63-Audiobook/B00TKGLBR6",
        "icon": "http://logo.clearbit.com/audible.com"
      }
    ]
  },
  {
    "id": 4,
    "title": "Jayber Crow",
    "author": "Wendell Berry",
    "description": "For thirty-nine years Wendell Berry has brought us stories from the fictional town of Port William, Kentucky. The latest, Jayber Crow, is the story of a man's love for his community and his abiding and unrequited love for Mattie Chatham, a good woman who had too early made one bad mistake. Sent to an orphanage at the age of ten, Jayber grows up knowing of loneliness and want, and learns how to be a watchful observer of human goodness and frailty. With the flood of 1937 he returns to his native Port William to become the town's barber. Slowly, patiently, the observer becomes participant.\n\nThis is a book about Heaven, writes Jayber, but I must say too that it has been a close call. For I have wondered sometimes if it would not finally turn out to be a book about Hell-where we fail to love one another, where we hate and destroy one another for reasons abundantly provided or for righteousness' sake or for pleasure, where we destroy the things we need the most, where we see no hope and have no faith...where we must lose everything to know what we have had.\n\nSounding themes of love and loss, despair and deepest joy, Berry's clear-sighted artistry in depicting the Port William membership will not soon be forgotten.",
    "image": "https://images.gr-assets.com/books/1433600577l/57460.jpg",
    "reviews": [
      {
        "rating": 1,
        "name": "Farrell Mckee",
        "body": "Cillum excepteur incididunt ipsum quis velit mollit exercitation veniam magna esse pariatur deserunt amet labore. Laboris aute nostrud ad dolor quis velit exercitation dolor ea sunt irure. Culpa enim enim magna sit culpa. Eiusmod aliquip sunt ad ullamco sint fugiat nostrud. Deserunt excepteur eiusmod irure tempor exercitation adipisicing. Irure elit ullamco fugiat magna aliqua exercitation ipsum nostrud consequat culpa consectetur consectetur laborum. Ad consequat do enim aliquip officia aute incididunt cillum mollit eu.",
        "date": 1491126291796,
        "avatar": "http://i.pravatar.cc/64?img=1"
      },
      {
        "rating": 4,
        "name": "Lewis Hendrix",
        "body": "Dolor est non id amet id ipsum laborum consectetur esse minim pariatur eiusmod. Voluptate reprehenderit sit tempor non ea pariatur do nisi nisi labore pariatur sit. In deserunt quis fugiat culpa deserunt pariatur enim non laborum irure mollit. Sunt cupidatat laborum deserunt reprehenderit sunt in ullamco culpa laborum. Mollit occaecat eiusmod ipsum exercitation eiusmod Lorem.",
        "date": 1491380004228,
        "avatar": "http://i.pravatar.cc/64?img=2"
      },
      {
        "rating": 2,
        "name": "Mcdaniel Talley",
        "body": "Aliquip eu deserunt elit dolor in do ex minim. Fugiat consectetur non qui laboris esse minim non ex exercitation elit. Enim non fugiat aliquip est est proident. Eu consectetur est proident aute veniam dolor fugiat irure occaecat. Aliqua velit dolor excepteur duis laboris do eiusmod et. Voluptate adipisicing cupidatat ex aliquip consequat fugiat officia exercitation enim cupidatat nulla et. Esse elit consectetur nisi consequat et dolore.",
        "date": 1491164873057,
        "avatar": "http://i.pravatar.cc/64?img=3"
      },
      {
        "rating": 4,
        "name": "Mccoy Massey",
        "body": "Aliqua adipisicing dolor culpa eu anim sint Lorem labore quis amet. Aute aliqua tempor aute proident cillum ex aute ut magna occaecat reprehenderit. Laboris laboris sit pariatur ipsum nulla. Officia enim nostrud proident culpa dolore incididunt.",
        "date": 1493512514703,
        "avatar": "http://i.pravatar.cc/64?img=4"
      },
      {
        "rating": 1,
        "name": "Austin Lamb",
        "body": "Ipsum occaecat ea cillum aute dolor velit in incididunt minim nulla. Aliquip ad reprehenderit dolor amet mollit dolor Lorem do nostrud quis esse. Amet fugiat sunt laborum irure veniam veniam. Nulla cillum aliquip sit cupidatat excepteur elit culpa tempor aute pariatur qui. Sit commodo incididunt id Lorem est reprehenderit laboris esse.",
        "date": 1490777394215,
        "avatar": "http://i.pravatar.cc/64?img=5"
      }
    ],
    "merchants": [
      {
        "name": "Amazon",
        "price": {
          "en-US": "9.74",
          "es": "9.08",
          "fr": "9.08"
        },
        "link": "https://www.amazon.com/Jayber-Crow-Wendell-Berry/dp/1582431604",
        "icon": "https://s-media-cache-ak0.pinimg.com/564x/cc/77/ef/cc77efac50fd7637763ba7115bc4f17a.jpg"
      },
      {
        "name": "Barnes & Noble",
        "price": {
          "en-US": "16.08",
          "es": "14.99",
          "fr": "14.99"
        },
        "link": "http://www.barnesandnoble.com/w/jayber-crow-wendell-berry/1003954494",
        "icon": "http://www.barnesandnobleinc.com/wp-content/themes/bninc/assets/images/favicon.ico"
      },
      {
        "name": "Audible",
        "price": {
          "en-US": "24.49",
          "es": "22.83",
          "fr": "22.83"
        },
        "link": "http://www.audible.com/pd/Religion-Spirituality/Jayber-Crow-Audiobook/B002VA3O7S",
        "icon": "http://logo.clearbit.com/audible.com"
      }
    ]
  },
  {
    "id": 5,
    "title": "Out of the Silent Planet",
    "author": "C.S. Lewis",
    "description": "In the first novel of C.S. Lewis's classic science fiction trilogy, Dr Ransom, a Cambridge academic, is abducted and taken on a spaceship to the red planet of Malacandra, which he knows as Mars. His captors are plotting to plunder the planet's treasures and plan to offer Ransom as a sacrifice to the creatures who live there. Ransom discovers he has come from the 'silent planet' – Earth – whose tragic story is known throughout the universe.",
    "image": "https://images.gr-assets.com/books/1388356615l/102549.jpg",
    "reviews": [
      {
        "rating": 5,
        "name": "Sears Collins",
        "body": "Exercitation deserunt do exercitation Lorem laboris. Occaecat labore dolore ullamco laboris nulla aute laborum laboris culpa elit sunt voluptate eiusmod tempor. Incididunt non deserunt ipsum aliqua minim adipisicing proident veniam.",
        "date": 1493612863234,
        "avatar": "http://i.pravatar.cc/64?img=1"
      },
      {
        "rating": 4,
        "name": "Louise Vang",
        "body": "Consequat ex cillum excepteur tempor nostrud adipisicing commodo. Quis elit ipsum duis dolore veniam deserunt et mollit laboris excepteur deserunt. Sint laboris ad tempor laboris ex ea. Tempor occaecat tempor veniam Lorem consectetur mollit nostrud veniam labore aliquip. Cupidatat nisi dolor magna ex ad proident anim veniam nulla magna.",
        "date": 1492580472046,
        "avatar": "http://i.pravatar.cc/64?img=2"
      },
      {
        "rating": 2,
        "name": "Albert Lott",
        "body": "In duis ipsum enim sunt deserunt ex voluptate reprehenderit ullamco occaecat ullamco excepteur anim. Consectetur ea nisi officia et. Laborum Lorem non aute duis cillum pariatur aliquip minim deserunt nulla. Consectetur nisi excepteur nisi est ut commodo deserunt anim proident cupidatat. Tempor nulla proident non esse consectetur id voluptate eiusmod occaecat dolore eu velit consectetur. Consequat enim dolore consequat ullamco sunt consectetur. Consequat proident excepteur sunt occaecat sunt occaecat.",
        "date": 1492121034587,
        "avatar": "http://i.pravatar.cc/64?img=3"
      },
      {
        "rating": 5,
        "name": "Haley Garrison",
        "body": "Culpa velit tempor ea duis exercitation nulla minim nostrud irure proident. Deserunt fugiat sint Lorem veniam adipisicing elit elit amet magna nisi. Ea duis magna commodo cupidatat laboris quis velit. Ea labore do non non eu tempor occaecat ex Lorem deserunt labore ut velit aliquip.",
        "date": 1491138696726,
        "avatar": "http://i.pravatar.cc/64?img=4"
      },
      {
        "rating": 2,
        "name": "Lizzie Hyde",
        "body": "Esse amet voluptate nulla et est eiusmod labore aliquip. Mollit officia est id consequat ea duis cillum amet veniam ullamco elit ut cupidatat. Mollit adipisicing cupidatat id eiusmod ea tempor occaecat sunt deserunt ullamco. Laboris consectetur adipisicing mollit eu laboris aute velit exercitation cillum nostrud commodo quis minim. Dolore sunt eu non proident duis. Nostrud sint consectetur excepteur consectetur voluptate dolore dolor ad aliqua esse ipsum ut id Lorem. Dolore Lorem amet laboris ut.",
        "date": 1492419120730,
        "avatar": "http://i.pravatar.cc/64?img=5"
      },
      {
        "rating": 5,
        "name": "Suzette Ortiz",
        "body": "Anim qui duis reprehenderit eiusmod culpa et id sunt incididunt deserunt. Ex sunt ex aliquip non ullamco in sit eiusmod velit mollit commodo reprehenderit ullamco ea. Commodo veniam reprehenderit magna aute veniam amet eiusmod excepteur.",
        "date": 1493278784085,
        "avatar": "http://i.pravatar.cc/64?img=6"
      },
      {
        "rating": 1,
        "name": "Kelley Orr",
        "body": "Veniam adipisicing do est nisi laboris cupidatat sint. Consequat dolor cillum minim amet ipsum reprehenderit voluptate proident ut. Minim magna culpa irure consequat id fugiat. Proident ea magna Lorem in culpa. Occaecat aliquip occaecat aliqua excepteur aute veniam cupidatat commodo mollit exercitation. Laboris quis laborum Lorem adipisicing ipsum nulla occaecat exercitation ut et nisi nisi aliqua consequat.",
        "date": 1492177649692,
        "avatar": "http://i.pravatar.cc/64?img=7"
      },
      {
        "rating": 5,
        "name": "Stewart Buckley",
        "body": "Irure irure quis veniam ullamco deserunt ad nisi culpa irure reprehenderit esse duis mollit officia. Anim occaecat occaecat officia enim duis Lorem eiusmod veniam mollit officia. Id dolore excepteur esse eu qui sunt aliquip eiusmod eu do aliqua sit. Consectetur deserunt laboris sint ad ipsum dolor. Nostrud id pariatur Lorem ipsum minim mollit ullamco anim sit nisi. Aliqua qui nostrud laborum proident eu consectetur qui quis excepteur voluptate officia laborum deserunt. Commodo ex cupidatat est tempor dolore mollit esse veniam cupidatat.",
        "date": 1492698942868,
        "avatar": "http://i.pravatar.cc/64?img=8"
      },
      {
        "rating": 5,
        "name": "Janis Freeman",
        "body": "Voluptate irure nisi eu amet incididunt amet exercitation fugiat elit sunt ea magna. Voluptate do aute tempor incididunt veniam adipisicing duis sint incididunt veniam pariatur occaecat. Laborum aliquip eiusmod fugiat cillum veniam veniam incididunt do ex et amet voluptate sunt. Amet sint veniam sunt adipisicing sit. Aliqua eu do ad tempor labore. Duis consectetur sunt qui aute ullamco sint ullamco.",
        "date": 1491085072788,
        "avatar": "http://i.pravatar.cc/64?img=9"
      },
      {
        "rating": 5,
        "name": "Luella Dominguez",
        "body": "Deserunt ea do non exercitation consectetur. Aute nisi non aliqua sit cupidatat do irure consectetur et mollit. Commodo quis anim enim adipisicing voluptate exercitation ad pariatur irure ut occaecat est velit. Mollit exercitation qui irure consequat ut esse culpa deserunt pariatur amet. Nulla sunt sint laborum qui pariatur elit. Ullamco occaecat ipsum consequat labore. Fugiat et ut cillum esse cupidatat pariatur enim culpa voluptate sint.",
        "date": 1490613437845,
        "avatar": "http://i.pravatar.cc/64?img=10"
      }
    ],
    "merchants": [
      {
        "name": "Amazon",
        "price": {
          "en-US": "23.95",
          "es": "22.33",
          "fr": "22.33"
        },
        "link": "https://www.amazon.com/Out-Silent-Planet-C-Lewis/dp/1567230717",
        "icon": "https://s-media-cache-ak0.pinimg.com/564x/cc/77/ef/cc77efac50fd7637763ba7115bc4f17a.jpg"
      },
      {
        "name": "Barnes & Noble",
        "price": {
          "en-US": "17.48",
          "es": "16.29",
          "fr": "16.29"
        },
        "link": "http://www.barnesandnoble.com/w/out-of-the-silent-planet-c-s-lewis/1100400761",
        "icon": "http://www.barnesandnobleinc.com/wp-content/themes/bninc/assets/images/favicon.ico"
      },
      {
        "name": "Audible",
        "price": {
          "en-US": "17.47",
          "es": "16.29",
          "fr": "16.29"
        },
        "link": "http://www.audible.com/pd/Sci-Fi-Fantasy/Out-of-the-Silent-Planet-Audiobook/B002VA9SHI",
        "icon": "http://logo.clearbit.com/audible.com"
      }
    ]
  },
  {
    "id": 6,
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "description": "Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden.\n\nMontag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television 'family'. But then he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people did not live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television.\n\nWhen Mildred attempts suicide and Clarisse suddenly disappears, Montag begins to question everything he has ever known.",
    "image": "https://images.gr-assets.com/books/1383718290l/13079982.jpg",
    "reviews": [
      {
        "rating": 3,
        "name": "Bettye Young",
        "body": "Dolor aliqua aliqua laboris est qui exercitation ipsum ut do in ullamco. Nulla consectetur ut magna eu reprehenderit. Cupidatat enim incididunt minim aliquip anim enim aliqua labore et. Laborum velit Lorem elit in ipsum ad in ullamco nostrud eu.",
        "date": 1492821225582,
        "avatar": "http://i.pravatar.cc/64?img=1"
      },
      {
        "rating": 3,
        "name": "Angelia Barrera",
        "body": "Ad enim occaecat ipsum irure qui aute incididunt culpa in. Elit nulla exercitation ullamco ea reprehenderit nostrud adipisicing fugiat. Veniam minim et exercitation amet sunt do nulla eiusmod ad minim aliquip. Sint cupidatat quis dolor consectetur aute. Adipisicing veniam aliquip in incididunt deserunt aliqua. Qui excepteur Lorem incididunt in laboris non ad voluptate. Aliqua in culpa in in voluptate commodo sunt commodo qui do culpa.",
        "date": 1491383818348,
        "avatar": "http://i.pravatar.cc/64?img=2"
      },
      {
        "rating": 4,
        "name": "Gray Key",
        "body": "Est quis deserunt quis in id sit magna est do irure cupidatat amet qui. Ipsum occaecat mollit quis eiusmod esse cupidatat laborum sint sit incididunt enim incididunt. Velit velit minim id sit commodo sint. Non nisi laborum exercitation sit excepteur anim ea tempor ad ex sunt elit. Lorem officia proident duis qui anim. Fugiat velit ipsum nostrud in. Qui ut nostrud ea consectetur adipisicing enim aute non exercitation.",
        "date": 1492872669133,
        "avatar": "http://i.pravatar.cc/64?img=3"
      },
      {
        "rating": 4,
        "name": "Judy Henderson",
        "body": "Proident ad excepteur minim cillum deserunt et incididunt velit eiusmod eiusmod amet. Eu reprehenderit incididunt aute magna aute excepteur laboris amet ipsum tempor amet. Ea et elit ullamco sint nisi officia pariatur deserunt fugiat fugiat dolor pariatur ipsum consectetur. Adipisicing est exercitation sint tempor tempor in aliqua deserunt nisi velit est enim magna. Minim deserunt cupidatat id id velit irure cillum ullamco officia et sint tempor.",
        "date": 1491166710636,
        "avatar": "http://i.pravatar.cc/64?img=4"
      },
      {
        "rating": 1,
        "name": "Atkinson Rodriguez",
        "body": "Duis cillum proident nulla commodo cillum sunt. Qui enim laboris ea consequat labore Lorem proident sunt. Pariatur irure veniam cupidatat in. Aute in eu irure nulla incididunt proident fugiat ullamco cillum duis. Aute occaecat non laboris dolore ipsum mollit dolore laboris quis id. Sint enim do Lorem non reprehenderit nostrud sit in in aute ipsum consequat. Ad sunt fugiat irure excepteur cupidatat consequat id magna consequat Lorem reprehenderit.",
        "date": 1492972938478,
        "avatar": "http://i.pravatar.cc/64?img=5"
      },
      {
        "rating": 5,
        "name": "Patrica Bowman",
        "body": "Quis id dolore officia ut magna non reprehenderit qui. Id est sunt eiusmod cupidatat dolor. Qui fugiat anim nisi veniam cillum Lorem elit veniam consequat deserunt in. Non cillum minim nulla deserunt adipisicing pariatur officia enim consequat eu voluptate ipsum eiusmod. Amet nulla Lorem occaecat nisi deserunt velit in do officia officia dolore labore id. Cillum minim cillum duis excepteur eiusmod occaecat quis occaecat officia ea mollit est laboris. Nulla quis laborum fugiat mollit cillum ex qui culpa ullamco dolor anim ad proident.",
        "date": 1492595578219,
        "avatar": "http://i.pravatar.cc/64?img=6"
      },
      {
        "rating": 5,
        "name": "Minerva Knapp",
        "body": "Nisi qui nostrud proident mollit aliqua qui reprehenderit. Sit duis ipsum dolore officia aliqua eiusmod commodo laborum consectetur cupidatat. Laboris in sint consectetur mollit commodo id commodo sint. Sit adipisicing labore reprehenderit duis culpa in. Cillum labore duis quis aliquip ipsum deserunt sint.",
        "date": 1491912568869,
        "avatar": "http://i.pravatar.cc/64?img=7"
      },
      {
        "rating": 1,
        "name": "White Talley",
        "body": "Ipsum proident quis proident Lorem aliqua anim magna ut dolor cillum et quis adipisicing. Id nisi eu laboris reprehenderit. Laboris minim non laborum veniam eiusmod quis eiusmod pariatur sunt officia minim sint. Tempor id laborum reprehenderit commodo minim duis in duis adipisicing aute adipisicing reprehenderit in irure. Esse quis veniam ex qui mollit dolor laboris esse.",
        "date": 1492468719427,
        "avatar": "http://i.pravatar.cc/64?img=8"
      },
      {
        "rating": 5,
        "name": "Monica Terry",
        "body": "Cillum sit consectetur duis do sit amet excepteur esse. Deserunt sunt nisi fugiat occaecat cillum enim excepteur voluptate culpa esse. Pariatur nostrud ipsum esse do tempor ex eiusmod proident. Irure proident occaecat aliquip ex occaecat elit. Velit consectetur labore et dolore nisi esse in nulla aliquip ut duis enim enim.",
        "date": 1492237797499,
        "avatar": "http://i.pravatar.cc/64?img=9"
      },
      {
        "rating": 3,
        "name": "Chan Wooten",
        "body": "Proident eiusmod culpa ullamco cupidatat nisi dolor cillum. Nulla veniam id sunt et et amet adipisicing ea. Elit occaecat officia sunt incididunt id quis in minim adipisicing culpa aute nulla. Incididunt officia exercitation tempor labore voluptate duis dolore ipsum exercitation reprehenderit reprehenderit ea occaecat fugiat.",
        "date": 1493386425569,
        "avatar": "http://i.pravatar.cc/64?img=10"
      }
    ],
    "merchants": [
      {
        "name": "Amazon",
        "price": {
          "en-US": "14.95",
          "es": "13.94",
          "fr": "13.94"
        },
        "link": "https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310",
        "icon": "https://s-media-cache-ak0.pinimg.com/564x/cc/77/ef/cc77efac50fd7637763ba7115bc4f17a.jpg"
      },
      {
        "name": "Barnes & Noble",
        "price": {
          "en-US": "14.88",
          "es": "13.87",
          "fr": "13.87"
        },
        "link": "http://www.barnesandnoble.com/w/fahrenheit-451-ray-bradbury/1100383286",
        "icon": "http://www.barnesandnobleinc.com/wp-content/themes/bninc/assets/images/favicon.ico"
      },
      {
        "name": "Audible",
        "price": {
          "en-US": "19.95",
          "es": "18.60",
          "fr": "18.60"
        },
        "link": "http://www.audible.com/pd/Classics/Fahrenheit-451-Audiobook/B00M4PXF6K",
        "icon": "http://logo.clearbit.com/audible.com"
      }
    ]
  }
]
```
</details>

Now, in our `BookDetail` component, we're going to use the same function to grab the user's locale that we used in our **src/index.js**.

### BookDetail.js
```jsx
const BookDetail = ({match}) => {
  const book = books.find(book => book.id === parseInt(match.params.bookId, 10));
  const sortedReviews = sortBy(book.reviews, 'date').reverse();
  const avgRating = round(meanBy(book.reviews, (r) => r.rating), 2)

  let locale = (navigator.languages && navigator.languages[0])
             || navigator.language
             || navigator.userLanguage
             || 'en-US';
...
```
We can now get rid of the `merchant.price` text in this component and replace it with a `FormattedNumber` component. Here we're going to pass in a `value` prop and provide it with `merchant.price[locale]` in order to display the correct price based on the user locale.

```jsx
...

<p>
  <FormattedNumber value={merchant.price[locale]} />
</p>

...
```

We can also pass in a `style` prop with value `currency` and a `currencyDisplay` prop with value `symbol` to display the correct currency symbol on our page. Finally we'll pass in a `currency` prop and have it conditionally be provided `'USD'` if `locale` is `'en-US'`, or `'EUR'` otherwise.

```jsx
<FormattedNumber
  value={merchant.price[intl.locale]}
  style="currency"
  currencyDisplay="symbol" 
  currency={intl.locale === 'en-US' ? 'USD' : 'EUR'}
/>
```

We can start our development server,
```bash
yarn start
```
And navigate to the localhost port to see that our price is displayed with the correct currency symbol for the locale.

![Currency](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1596732368/transcript-images/07-format-numbers-with-separators-and-currency-symbols-using-react-intl-formatted-number-currency.png)

## Resources 📖
- [FormattedNumber - react-intl](https://formatjs.io/docs/react-intl/components/#formattednumber)