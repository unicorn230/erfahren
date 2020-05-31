export default {
    mainText:{
        ua: `
        Сайт створено на XVIII Міжнародний конкурс із Web-дизайну та комп'ютерної графіки,
        сайт позиціонує себе, як інструмент, що полегшує вивчення німецької мови та створення подібних ресурсів,
        сайт надає доступ до бази даних німецьких слів та їх форм, міст та інформацію про них таку, 
        як населення, власне населення, федеральну столицю, координати міста, до сайту створено сервер,
        що надає API, що можна використовувати вільно, на сайті є 4 розділи: головна, слова, міста
        та API, що надають доступ відповідно до інформації про слова та міста, та розділ API, що кортко описує використання API.
        Автор сайту - Феджага Володимир сподівається, що сайт допоможе тим, хто вивчає німецьку мову, легко отримати потрібну
        їм інформацію та досягти висот у вивченні німецької мови    
        `,
        de: `
        Die Seite ist erstellt für XVIII Internationale Wettbewerb für Webßdesign und Computergrafik,
        die Seite stellt sich, als Werkzeug, dass das Lernen die deutsche Sprache und das Ersellen solchen 
        Ressourcen erleichtet, die Site bietet den Zugriff auf die Datenbak der Deutschen Wörter und ihrer Formen,
        Städte und solche Informationen über sie, wie Bevölkerung, eigene Bevölkerung, die Bundeshauptstadt,
        die Koordinaten, es ist ein Server für die Seite erstellt, der gibt API, die kann man frei benutzen,
        es gibt 4 Sektionen: Home, Wörter, Städte und API, die geben den Zugriff beziehungsweise zu Informationen über
        die Wörter und Städte und die Sektion API, die kurz das Benutzen die API beschreibt.
        Der Autor der Seite - Fedshaga Volodymyr hofft, dass die Seite deren damit hilft, die Deutsch lernen, leicht nötigen Informationen
        zu bekommen und die Meisterschaft in Deutsch zu erreichen.
  
        `,
        en: `
        Site is created, as work for XVIII International Competition of web-design und computer grafics,
        site establishes itself as a tool, that makes it easier to learn German language and to create such resources,
        site provides access to database of German words and their forms, cities and information about them, such as
        population, proper population, federal capital, city coordinates, there is a server created for a web-site, 
        that provides API, which can be used freely, there are 4 sections: Home, Words, Cities and API, which provides
        information about words and cities and section, that shortly describes the use of API.
        Autor of the site - Fedzhaga Volodymyr hopes, that site will help to the people, which are learning German language,
        to get information they need and to reach heights in the study of the German language
  
        `
    },
    wordsText:{
        text:{
            ua: 'слово з\'явиться тут',
            de: 'das Wort wird here entstehen',
            en: 'Word will appear here'
        },
        placeholder:{
            ua: 'введіть ваше слово',
            de: 'geben Sie ihr Wort ein',
            en: 'type your word'
        }
    },
    citiesText:{
        text:{
            ua: 'місто з\'явиться тут',
            de: 'die Stadt wird here entstehen',
            en: 'City will appear here'
        },
        placeholder:{
            ua: 'введіть назву міта',
            de: 'geben Sie die Name der Stadt ein',
            en: 'type name of the city'
        }
    },
    wordListingText:{
        verb:{
            en: 'Verb',
            de: 'Verb',
            ua: 'Дієслово'
        },
        noun:{
            en: 'Noun',
            de: 'Substantiv',
            ua: 'Іменник'
        }
    },
    headerText:{
        words:{
            ua: 'Слова',
            de: 'Wörter',
            en: 'Words'
        },
        cities:{
            ua: 'Міста',
            de: 'Städte',
            en: 'Cities'
        },
        home:{
          ua: 'Головна',
          de: 'Home',
          en: 'Home'
        }
    },
    cityText:{
            admin:{
        ua: `земля`,
        de: `land`,
        en: `admin`
    },
    prop_population:{
        ua: `власне населення`,
        de: `eigene Bewökerung`,
        en: `proper population`
    },
    population:{
        ua:`населення`,
        de:`Bewölkerung`,
        en:`population`
    },
    lat:{
        ua:`широта`,
        de:`Breitegrad`,
        en:`latitude`
    },
    lng:{
        ua:`довгота`,
        de:`Längengrad`,
        en:`longitude`
    }
    },
    apiText:{
        wordsApi:{
            ua:`Слова api`,
            de:`Wörter api`,
            en:`Words api`
        },
        explainW1:{
            ua:`для отримання інформації про німецькі слова (дієслова та іменники) з сервера потрібно відправити GET запит на адресу `,
            de:`um die Informationen über die deutsche Wörter bekommen (Verben und Substantive) aus dem Server, soll man GET Serveranforderung an diese Adresse senden`,
            en:`to get information about german words (verbs and substantives) from server, you need to send GET request to adress `
        },
        word:{
            ua:`слово`,
            de:`Wort`,
            en:`word`
        },
        example:{
            ua:`приклад`,
            de:`Beispiel`,
            en:`example`
        },
        explainW2:{
            ua:`запит повертає інформацію про про знайдені дієслова та іменники, 
                інколи одне слово може бути одночасно і іменником і дієсловом, 
                як у прикладі нижче, проте так буває не завжди, якщо знайдено тільки іменник 
                або тільки дієслово, то не знайдений параметр буде зазначено як false, 
                якщо не знайдено ні іменника ні діжслова сервер повертає стату 404`,

            de:`der Server gibt die Informationen über dir gefundene Verben und Sunbstantive zurück,
                manchmal kann ein Word sowohl ein Substantiv als auch ein Verb sein,
                wie im Beispliel unten, aber das kann auch nicht immer sein, 
                wenn nur ein Verb ader Substantiv gefunden ist, so wird der 
                ungefundene Parametr als false merkiert, wenn weder Verb noch Substantiv gefunden sind,
                so gibt der Server Status 404 zurück`,

            en:`server responses with information about found verbs and substantives,
                sometimes one word can be either verb and substantive,
                as it mentioned in example below, but that does not always happen,
                if only substantive or verb found, will the parametr, which is not found
                as false marked, if niether substantive niether verb are found, server will responde with status 404`
        },
        explainW3:{
            ua:`у цьому прикладі сервер повертає лише один із параметрів - іменник`,
            de:`In diesem Beispliel gibt der Server nur ein Parameter zurück - Substabtiv`,
            en:`in this example Server responses with only on of parametrs - Substantiv`
        },
        citiesApi:{
            ua:`Міста api`,
            de:`Städte api`,
            en:`Cities api`
        },
        explainC1:{
            ua:`для отримання інформації про місо потріюно відправити GET запит на `,
            de:`um Informationen über die Stadt zu bekommen, soll man GET Serveranforderung an die Adresse senden `,
            en:`to get information about the city, zou need to make GET request to `
        },
        city:{
            ua:`назва міста`,
            de:`der Name der Stadt`,
            en:`Name of the city`
        },
        explainC2:{
            ua:`запит повертає інформацію про це місто, якщо такого міста не знайдено сервер повертає статус 404`,
            de:`die Anforderung gibt die Informationen über diese Stadt zurück, wenn diese Stadt nicht gefunden ist, gibt der Server status 404 zurück`,
            en:`server responses with information about this city, if this city is not found server responses with status 404`
        },
    }
}