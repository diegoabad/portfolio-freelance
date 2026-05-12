import Script from "next/script";

const GTM_ID = "GTM-MD2MFRLQ";

/**
 * Google Tag Manager — snippet oficial en root layout (todas las páginas).
 * `afterInteractive`: equilibrio entre no bloquear el primer paint y no aplazar tanto GTM que en móvil
 * termine solapándose con Pixel/otros scripts y empeore TBT (peor que `lazyOnload` en algunas corridas).
 * @see https://developers.google.com/tag-manager/quickstart
 */
export function GoogleTagManager() {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height={0}
          width={0}
          title="Google Tag Manager"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </>
  );
}
