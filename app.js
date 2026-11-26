// Animal Battle with Lloyd — Mini App companion page.
// No game logic here on purpose: games play in chat with the bot,
// where Lloyd's real engine, memory, and +1s live. This script only
// makes the page behave inside Telegram and applies theme colors.

(function () {
  var tg = window.Telegram && window.Telegram.WebApp;
  if (!tg) return; // plain browser or file:// — fallbacks in styles.css apply

  try { tg.ready(); } catch (e) { /* older clients */ }
  try { tg.expand(); } catch (e) { /* older clients */ }

  // Telegram theme params, with the same fallbacks as styles.css.
  var p = tg.themeParams || {};
  var root = document.documentElement;
  function setVar(name, value, fallback) {
    root.style.setProperty(name, value || fallback);
  }
  setVar('--bg', p.bg_color, '#0b0e14');
  setVar('--text', p.text_color, '#f2f2f2');
  setVar('--hint', p.hint_color, '#b8c0cc');

  // Open the bot chat inside Telegram when the PLAY button is tapped.
  var play = document.getElementById('playBtn');
  if (play && tg.openTelegramLink) {
    play.addEventListener('click', function (ev) {
      ev.preventDefault();
      tg.openTelegramLink('https://t.me/Rantirealbot');
    });
  }
})();
