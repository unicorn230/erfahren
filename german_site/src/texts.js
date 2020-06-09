export default {
    mainText:{
        ua: `
        - веб додаток, орієнтований на використання на мобільних девайсах, створений для того, 
        щоб допомагати людям у вивченні німецької мови. Він надає можливість зручно отримати необхідну 
        інформацію про форми німецьких дієслів та іменників, а також інформацію про німецькі міста, 
        база даних налічує понад 8000 дієслів та 66000 іменників. Всі дані знаходяться у вільному доступі для 
        розробників, на сторінці API можна прочитати, як їх викоритовувати. Також на сайті є сторінка довідник, 
        що стисло дає інформацію ро німецьку граматику.
        Автор веб додатку - Феджага Володимир сподівається, що додаток допоможе всім користувачам досягти висот у вивченні німецької мови 

        
        `,
        de: `
        - eine Webanwendung für mobile Geräte, die dafür erstellt wurde,
        den Menschen zu helfen, Deutsch zu lernen. Es macht es einfach, die gebrauchte Informationen zu Formen deutscher Verben und Substantive sowie Informationen zu deutschen Städten zu bekommen,
        Die Datenbank enthält mehr als 8.000 Verben und 66.000 Substantive. Die Datei ist frei verfügbar für
        Entwickler. Können Sie auch auf der API-Seite lesen, wie Sie sie verwenden. Die Site hat auch eine Handbuch Seite,
        die kurz Informationen zur deutschen Grammatik liefert.
        Der Autor der Webanwendung - Volodymyr Fedzhaga - hofft, dass die Anwendung allen Benutzern hilft, Deutsch zu lernen
  
        `,
        en: `
        - a web application aimed at use on mobile devices, created to
        to help people learn German. It makes it easy to get
        information about forms of German verbs and nouns, as well as information on German cities,
        the database includes more than 8,000 verbs and 66,000 nouns. All data is freely available for
        developers, on the API page you can read how to use them. The site also has a Handbook page,
        which briefly provides information on German grammar.
        The author of the web application - Volodymyr Fedzhaga hopes that the application will help all users to reach heights in learning German
  
        `
    },
    wordsText:{
        text:{
            ua: 'слово з\'явиться тут',
            de: 'das Wort wird here entstehen',
            en: 'Word will appear here'
        },
        placeholder:{
            ua: 'введіть ваше слово (німецькою)',
            de: 'geben Sie ihr Wort ein ',
            en: 'type your word (in german)'
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
        },
        handbook:{
            ua: `Довідник`,
            de: `Handbuch`,
            en: `Handbook`
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
    },
    handBook: {
        geschlechter: {
            ua: `роди`,
            de: `geschlechter`,
            en: `genders `
        },
        faelle: {
            ua: `відмінки`,
            de: `fälle`,
            en: `cases`
        },
        adjektive: {
            ua: `прикметники`,
            de: `adjektive`,
            en: `adjectives`
        },
        praesens: {
            ua: `теперешній час`,
            de: `präsens`,
            en: `continious`
        },
        vergangen: {
            ua: `минулий час`,
            de: `vergangen`,
            en: `past`
        },
        futurum: {
            ua: `майбутній час`,
            de: `futurum`,
            en: `future`
        },
        plusquamperfekt: {
            ua: `плюсквамперфект`,
            de: `plusquamperfekt`,
            en: `plusquamperfekt`
        },
        konjunktiv1: {
            ua: `кон'юнктив 1`,
            de: `konjunktiv 1`,
            en: `konjunktiv 1`
        },
        konjunktiv2: {
            ua: `кон'юнктив 2`,
            de: `konjunktiv 2`,
            en: `konjunktiv 2`
        },
        passiv: {
            ua: `пасив`,
            de: `passiv`,
            en: `passive`
        }
    }
}

// todo const pathes = ['genders', 'cases', 'adjectives', 'continious', 'past', 'future', 'plusquamperfekt', 'konjunktiv1', 'konjunktiv2', 'passive']