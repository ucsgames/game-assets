# Lords of Sigurvia (**Sigurvia**) *Game Assets*

This repository hosts the internationalizable parts of **Sigurva**'s in game assets.

## How to translate
To participate in the translation process, please `fork` this repository. 
In your own fork make the [modifications and extensions](#translation-process) and `commit` the changes.
To finish the process create a `pull request`. Where we review your `commit`ed changes.

After the necessary modifications recommended at the `review` stage (if there were any), we will `merge` your `pull request`ed `branch` to the `master` branch making it live.

Thanks for your cooperation!

## Translation process
All the required files are inside the `i18n` folder.
Inside this folder there are `JSON` files named by their asset type.
To translate to a new language all `i18n/*.json` files should be extended with the following `JSON` syntax:

```
[
    {
    "$ASSET_KEY[0]":      "$ENGLISH TRANSLATION[0]",
    "$ASSET_KEY[1]":      "$VALUE[1]",
    "$ASSET_KEY[2]":      "$ENGLISH TRANSLATION[1]",
    "i18n": {
            "$LANG_TAG[-1]": {...},
            "$LANG_TAG": {
                "ASSET_KEY[0]":                 "$TRANSLATION",
                "ASSET_KEY[3]":                 "$TRANSLATION[1]"
            }
        }
    },
    {...}
]
```

Where:

* **`$ASSET_KEY[0...x]`** contains all the information required for that `asset`.
* **`$ENGLISH TRANSLATION[0..y]`** contains `String` type of english text.
Usually name and various information about the `asset`.
These should be translated below in the `i18n` key.
* **`$VALUE[0..z]`** contains various `Database` `Object` type information about the `asset`. 
Like it's requirements or costs.
These shouldn't be translated.
* **`$LANG_TAG[0..w]`** are [`tap:i18n language tags`](https://github.com/TAPevents/tap-i18n#languages-tags-and-translations-prioritization) representing languages.
* **`$TRANSLATION[0..y]`** are translations of the **`$ENGLISH TRANSLATION[0..y]`** to the selected **`$LANG_TAG`**.

**Note:** Everything is surrounded by curly brackets `{}` and separated by commas `,` **EXCEPT** the last item of the enumeration.

## Contributors
[@Szayet](http://github.com/Szayet) - English and Hungarian translation

## Currently supported languages

- [ ] Afrikaans
- [ ] Akan
- [ ] Albanian
- [ ] Amharic
- [ ] Arabic
- [ ] Armenian
- [ ] Aromanian
- [ ] Assamese
- [ ] Azerbaijani
- [ ] Azerbaijani (Turkey)
- [ ] Bashkir
- [ ] Basque
- [ ] Belarusian
- [ ] Bengali
- [ ] Bosnian
- [ ] Bulgarian
- [ ] Burmese
- [ ] Catalan
- [ ] Catalan (Balear)
- [ ] Chinese
- [ ] Chinese (China)
- [ ] Chinese (Hong Kong)
- [ ] Chinese (Taiwan)
- [ ] Corsican
- [ ] Croatian
- [ ] Czech
- [ ] Danish
- [ ] Dutch
- [ ] Dutch (Belgium)
- [x] English
- [ ] English (Australia)
- [ ] English (Canada)
- [ ] English (UK)
- [ ] Esperanto
- [ ] Estonian
- [ ] Faroese
- [ ] Finnish
- [ ] French (Belgium)
- [ ] French (France)
- [ ] Frisian
- [ ] Fulah
- [ ] Galician
- [ ] Georgian
- [ ] German
- [ ] Greek
- [ ] Guaraní
- [ ] Hawaiian
- [ ] Hazaragi
- [ ] Hebrew
- [ ] Hindi
- [x] Hungarian
- [ ] Icelandic
- [ ] Indonesian
- [ ] Irish
- [ ] Italian
- [ ] Japanese
- [ ] Javanese
- [ ] Kannada
- [ ] Kazakh
- [ ] Khmer
- [ ] Kinyarwanda
- [ ] Kirghiz
- [ ] Korean
- [ ] Kurdish (Sorani)
- [ ] Lao
- [ ] Latvian
- [ ] Limburgish
- [ ] Lithuanian
- [ ] Luxembourgish
- [ ] Macedonian
- [ ] Malagasy
- [ ] Malay
- [ ] Malayalam
- [ ] Marathi
- [ ] Mingrelian
- [ ] Mongolian
- [ ] Montenegrin
- [ ] Nepali
- [ ] Norwegian (Bokmål)
- [ ] Norwegian (Nynorsk)
- [ ] Ossetic
- [ ] Pashto
- [ ] Persian
- [ ] Persian (Afghanistan)
- [ ] Polish
- [ ] Portuguese (Brazil)
- [ ] Portuguese (Portugal)
- [ ] Punjabi
- [ ] Rohingya
- [ ] Romanian
- [ ] Russian
- [ ] Rusyn
- [ ] Sakha
- [ ] Sanskrit
- [ ] Sardinian
- [ ] Scottish Gaelic
- [ ] Serbian
- [ ] Sindhi
- [ ] Sinhala
- [ ] Slovak
- [ ] Slovenian
- [ ] Somali
- [ ] South Azerbaijani
- [ ] Spanish (Argentina)
- [ ] Spanish (Chile)
- [ ] Spanish (Colombia)
- [ ] Spanish (Mexico)
- [ ] Spanish (Peru)
- [ ] Spanish (Puerto Rico)
- [ ] Spanish (Spain)
- [ ] Spanish (Venezuela)
- [ ] Sundanese
- [ ] Swahili
- [ ] Swedish
- [ ] Swiss German
- [ ] Tagalog
- [ ] Tajik
- [ ] Tamil
- [ ] Tamil (Sri Lanka)
- [ ] Tatar
- [ ] Telugu
- [ ] Thai
- [ ] Tibetan
- [ ] Tigrinya
- [ ] Turkish
- [ ] Turkmen
- [ ] Ukrainian
- [ ] Uighur
- [ ] Ukrainian
- [ ] Urdu
- [ ] Uzbek
- [ ] Vietnamese
- [ ] Walloon
- [ ] Welsh

## Technologies

* JSON
* Javascript
