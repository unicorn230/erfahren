const sample ={
    s1: `
    {
        "verb":
            "{
            "Infinitive": "kommen",
            "Präsens_ich": "komme",
            "Präsens_du": "kommst",
            "Präsens_er, sie, es": "kommt",
            "Präteritum_ich": "kam",
            "Partizip II": "gekommen",
            "Konjunktiv II_ich": "käme",
            "Imperativ Singular": "komm",
            "Imperativ Plural": "kommt",
            "Hilfsverb": "sein"
            }",
        "noun":
            "{
                "DAT":
                    {"SIN":"Kommen"},
                "GEN":
                    {"SIN": "Kommens"},
                "AKK":
                    {"SIN":"Kommen"},
                "NOM":
                    {"SIN":"Kommen"W},
                "G":"N"
            }"
    }
    
    `,
    s2: `
    {
        "verb":false,
        "noun":
            {"DAT":
                {
                "SIN":"Gurke",
                "PLU":"Gurken"
                },
            "GEN":
                {
                "SIN":"Gurke",
                "PLU":"Gurken"
                },
            "AKK":
                {
                "SIN":"Gurke",
                "PLU":"Gurken"
                },
            "NOM":
                {
                "SIN":"Gurke","
                PLU":"Gurken"
                },
            "G":"F"
            }
    }
    
    `, 
    s3: `
    {
        "city":"Berlin",
        "admin":"Berlin",
        "country":"Germany",
        "population_proper":"3094014",
        "iso2":"DE",
        "capital":"primary",
        "lat":"52.516667",
        "lng":"13.4",
        "population":"3406000"
    }
    
    `
}



export default sample