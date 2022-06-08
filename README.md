# Aller Media task

## Roadmap

Having more time I would have liked to:

- [ ] this being a production app, I probably would have separated the "rows" into their own Component, and probably the "failed fetching" too (and the "loading" UI too)
- [ ] have a good-looking loading UI, with animated "skeleton" to give user a perception that something is happening, using some CSS animation
- [ ] have a meaningful & good looking "failed" screen, giving user more exit ways instead of a basic fail message
- [ ] use postCSS to use nestedCSS to have cleaner CSS files
- [ ] improve the style of the "title edit UI"
- [ ] explore more the web-perf part: images are impacting the LCP. So far I had given the browser choice of picking the good version. But it's not fast enough and I think it's giving too high density for high-density screens for the weight of the images. Either limit pixel-ratio or improve image perf (modern image format i.e. ".avif", compression)
- [ ] probably more things that we could chat about ;-)

# Thoughts

- I did not understand if the whole cards should be a link to the corresponding articles. Since I was supposed to build a "title edit" functionality I assumed this was more of an editor mode. Hence why I did not made the whole cards "links", but just displayed the URLs.
- I could have used useContext instead of getting into some props drill, but I thought maybe useContext is a bit of an overkill for this so far?
- I started it on Stackblitz, which is the reason why I did not have meaningful commits at crucial moments, but only some big squashed commit
