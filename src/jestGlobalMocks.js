export const mockProductList = [
    {
        "_score": 56.467888,
        "thumbnail": {
            "alt_text": "A work made of color woodblock print; edition 73/200.",
            "width": 2077,
            "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAD45Mlk+Ml1AM1xXUWlnYX1qYHBwZ4JpW3qDg5mMgKeUhaqUg62Whq2Yha2upQAAACH5BAAAAAAALAAAAAADAAUAAAQL8JQUhhKEAbSMaxEAOw==",
            "height": 3000
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/16251",
        "id": 16251,
        "title": "Steady Gaze (Two Cats)",
        "timestamp": "2023-12-21T10:01:05-06:00"
    },
    {
        "_score": 56.222202,
        "thumbnail": {
            "alt_text": "A work made of gelatin silver print.",
            "width": 4872,
            "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAFBJPlFKPnpwX391ZYl9bJCEc5aKeZWKepmMepyQf6KVgqKVhNDArdPEsdXFsQAAACH5BAAAAAAALAAAAAADAAUAAAQLEClDRhEBpHWYaxEAOw==",
            "height": 7407
        },
        "api_model": "artworks",
        "is_boosted": false,
        "api_link": "https://api.artic.edu/api/v1/artworks/216548",
        "id": 216548,
        "title": "Studio Cat",
        "timestamp": "2023-12-21T10:40:39-06:00"
    },
]

export const mockProductResponse = {
    "preference": null,
    "pagination": {
        "total": 7358,
        "limit": 20,
        "offset": 0,
        "total_pages": 368,
        "current_page": 1
    },
    "data": mockProductList,
    "info": {
        "license_text": "The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
        "license_links": [
            "https://creativecommons.org/publicdomain/zero/1.0/",
            "https://www.artic.edu/terms"
        ],
        "version": "1.10"
    },
    "config": {
        "iiif_url": "https://www.artic.edu/iiif/2",
        "website_url": "http://www.artic.edu"
    }
}