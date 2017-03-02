
- How do we wrap a webapp?
- Naive implementation. We can use either:
  - BrowserWindow
  - <webview> (an embeddable BrowserWindow)
  And just load a url
- Let's see what happens in that case

- However, we are loading content from the internet, even if it's our own
  trusted content, how do we make this safe?
- Specifically, I want to talk about 2 specific options in electron that will
  help protect your electron app and reduce the atack surface, one of which
  recently landed in electron.

- So, let's say someone is able to inject a bad script into your app. Either
  because you forgot to sanitize user input, or you're not using https and are
  vulnerable to a MITM attack, or maybe social engineering.

- Node vulnerability example
  - Whatever the case, let's inject it
    <script type="text/javascript" src="bad-node.js"></script>
  - BOOM
  - Now turn nodeIntegration off
  - It's safe!

- But now, how do we use all of the cool electron features in our webapp to
  desktop integrate it.
- As was mentioned in a previous talk, we can use a a preload script and a well
  defined interface between the app we're loading and our electron environment.
  - Show preload.js and how it works to communicate an interface between the 2
  - Still, an injected script could do bad things:
    <script type="text/javascript" src="bad-context.js"></script>

- Security page
  - Load always with https
  - sanitize your scripts
  - nodeintegration
  - contextisolation

