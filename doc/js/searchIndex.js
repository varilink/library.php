Search.appendIndex(
    [
                {
            "fqsen": "\\Varilink\\SiteCrawler",
            "name": "SiteCrawler",
            "summary": "Crawls\u0020websites\u0020via\u0020HTTP\u0020and\u0020exposes\u0020the\u0020results.",
            "url": "classes/Varilink-SiteCrawler.html"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Constructor\u0020for\u0020the\u0020\\Varilink\\SiteCrawler\u0020class.",
            "url": "classes/Varilink-SiteCrawler.html#method___construct"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\u003A\u003Acrawl\u0028\u0029",
            "name": "crawl",
            "summary": "Crawls\u0020the\u0020website",
            "url": "classes/Varilink-SiteCrawler.html#method_crawl"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\u003A\u003A\u0024base",
            "name": "base",
            "summary": "The\u0020base\u0020URL\u0020of\u0020the\u0020site\u0020that\u0020is\u0020being\u0020crawled,\u0020e.g.\u0020http\u003A\/\/www.example.com.",
            "url": "classes/Varilink-SiteCrawler.html#property_base"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\u003A\u003A\u0024browser",
            "name": "browser",
            "summary": "The\u0020\\Symfony\\Component\\BrowserKit\\HttpBrowser\u0020instance\u0020being\u0020used\u0020by\u0020the\u0020\\Varilink\\SiteCrawler\u0020instance.",
            "url": "classes/Varilink-SiteCrawler.html#property_browser"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\u003A\u003A\u0024seeds",
            "name": "seeds",
            "summary": "An\u0020array\u0020of\u0020seed\u0020paths\u0020for\u0020the\u0020crawl,\u0020e.g.\u0020\/,\u0020\/admin,\u0020\/members",
            "url": "classes/Varilink-SiteCrawler.html#property_seeds"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\u003A\u003A\u0024link",
            "name": "link",
            "summary": "The\u0020\u0022link\u0022\u0020that\u0020is\u0020currently\u0020being\u0020processed\u0020by\u0020an\u0020instance\u0020of\nVarilink\\SiteCrawler.\u0020The\u0020term\u0020link\u0020is\u0020used\u0020here\u0020to\u0020refer\u0020instances\u0020of\n\u003Ca\u003E,\u0020\u003Clink\u003E\u0020or\u0020\u003Cscript\u003E\u0020tags,\u0020all\u0020of\u0020which\u0020can\u0020reference\u0020content\u0020that\u0020is\nexternal\u0020to\u0020the\u0020page\u0020that\u0020the\u0020instance\u0020of\u0020Varilink\\SiteCrawler\u0020is\nprocessing.\u0020This\u0020variable\u0020contains\u0020the\u0020absolute\u0020URI\u0020assocaited\u0020with\nthe\u0020href\u0020attribute\u0020of\u0020\u003Ca\u003E\u0020or\u0020\u003Clink\u003E\u0020tags\u0020or\u0020the\u0020src\u0020attribute\u0020of\u0020\u003Clink\u003E\ntags.\u0020Where\u0020those\u0020atributes\u0020contain\u0020URIs\u0020that\u0020aren\u0027t\u0020absolute,\u0020they\u0020will\nbe\u0020converted\u0020to\u0020absolute\u0020URIs\u0020using\u0020the\nSymfony\\Component\\DomCrawler\\UriResolver\u0020helper\u0020class\u0020to\u0020resolve\u0020them\nagainst\u0020the\u0020base\u0020URI\u0020of\u0020the\u0020page\u0020containing\u0020the\u0020link.",
            "url": "classes/Varilink-SiteCrawler.html#property_link"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed",
            "name": "Seed",
            "summary": "A\u0020section\u0020of\u0020a\u0020website\u0020crawled\u0020via\u0020a\u0020\\Varilink\\SiteCrawler\u0020instance.",
            "url": "classes/Varilink-SiteCrawler-Seed.html"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A__construct\u0028\u0029",
            "name": "__construct",
            "summary": "Constructor\u0020for\u0020Varilink\\SiteCrawler\\Seed.",
            "url": "classes/Varilink-SiteCrawler-Seed.html#method___construct"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A\u0024path",
            "name": "path",
            "summary": "",
            "url": "classes/Varilink-SiteCrawler-Seed.html#property_path"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A\u0024name",
            "name": "name",
            "summary": "",
            "url": "classes/Varilink-SiteCrawler-Seed.html#property_name"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A\u0024ignore",
            "name": "ignore",
            "summary": "",
            "url": "classes/Varilink-SiteCrawler-Seed.html#property_ignore"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A\u0024setup",
            "name": "setup",
            "summary": "",
            "url": "classes/Varilink-SiteCrawler-Seed.html#property_setup"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A\u0024teardown",
            "name": "teardown",
            "summary": "",
            "url": "classes/Varilink-SiteCrawler-Seed.html#property_teardown"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A\u0024links",
            "name": "links",
            "summary": "",
            "url": "classes/Varilink-SiteCrawler-Seed.html#property_links"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler\\Seed\u003A\u003A\u0024pages",
            "name": "pages",
            "summary": "",
            "url": "classes/Varilink-SiteCrawler-Seed.html#property_pages"
        },                {
            "fqsen": "\\",
            "name": "\\",
            "summary": "",
            "url": "namespaces/default.html"
        },                {
            "fqsen": "\\Varilink",
            "name": "Varilink",
            "summary": "",
            "url": "namespaces/varilink.html"
        },                {
            "fqsen": "\\Varilink\\SiteCrawler",
            "name": "SiteCrawler",
            "summary": "",
            "url": "namespaces/varilink-sitecrawler.html"
        }            ]
);
