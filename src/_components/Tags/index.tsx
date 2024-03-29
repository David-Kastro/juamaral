/* eslint-disable @next/next/no-img-element */
import Script from "next/script";

export default function TagScripts() {
  return (
    <>
      <Script
        id="gtag-import"
        async={true}
        src="https://www.googletagmanager.com/gtag/js?id=AW-674551587"
      />
      <Script
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'AW-674551587');
            `,
        }}
      />
      <Script
        id="fb-pixel"
        dangerouslySetInnerHTML={{
          __html: `
            !(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(
                window,
                document,
                "script",
                "https://connect.facebook.net/en_US/fbevents.js"
            );
            fbq("init", "575005950527206");
            fbq("track", "PageView");
            `,
        }}
      />
    </>
  );
}

export function NoScripts() {
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=575005950527206&ev=PageView&noscript=1"
        alt="pixel-img"
      />
    </noscript>
  );
}
