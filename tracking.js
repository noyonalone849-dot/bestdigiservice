// Google tag + conversion for bestdigisolution.site
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18490102687';
  document.head.appendChild(s);
})();
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18490102687');

// Conversion: fires once when any WhatsApp button is clicked
function gtag_report_conversion() {
  gtag('event', 'conversion', {
    'send_to': 'AW-18490102687/IORICJXgko4dEJ-n4vBE',
    'value': 1.0,
    'currency': 'INR'
  });
  return true;
}
