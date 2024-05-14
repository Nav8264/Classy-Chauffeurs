const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const hostname = "https://blackgrandeurchauffeur.com/";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/blog/:blogId", changefreq: "monthly", priority: 0.8 },
  { url: "/ourfleet", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/australia", changefreq: "monthly", priority: 0.8 },
  { url: "/newzealand", changefreq: "monthly", priority: 0.8 },
  { url: "/booking", changefreq: "monthly", priority: 0.8 },
  { url: "/signup", changefreq: "monthly", priority: 0.8 },
  { url: "/continue-guest", changefreq: "monthly", priority: 0.8 },
  { url: "/login", changefreq: "monthly", priority: 0.8 },
  { url: "/ourlocation", changefreq: "monthly", priority: 0.8 },
  { url: "/privacypolicy", changefreq: "monthly", priority: 0.8 },
  { url: "/termsandcondition", changefreq: "monthly", priority: 0.8 },
  { url: "/vehicle", changefreq: "monthly", priority: 0.8 },
  { url: "/feedback", changefreq: "monthly", priority: 0.8 },
  { url: "/forgotpassword/forgotemail", changefreq: "monthly", priority: 0.8 },
  {
    url: "/forgotpassword/forgotemail/:email",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/forgotpassword/forgotemail/otp/:email",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/device", changefreq: "monthly", priority: 0.8 },
  { url: "/booking/myrides", changefreq: "monthly", priority: 0.8 },
  { url: "/loader", changefreq: "monthly", priority: 0.8 },
  { url: "booking/loading/:vehicle", changefreq: "monthly", priority: 0.8 },
  { url: "/otp", changefreq: "monthly", priority: 0.8 },
  { url: "/updateride/:id", changefreq: "monthly", priority: 0.8 },
  { url: "/checkout", changefreq: "monthly", priority: 0.8 },

  // Add additional pages here
];

// Create a stream to write to
const stream = new SitemapStream({ hostname });

const sitemapInstance = async () => {
  // Return a promise that resolves with your XML string
  return streamToPromise(Readable.from(urls).pipe(stream)).then(async (data) =>
    data.toString()
  );
};

module.exports = sitemapInstance;
