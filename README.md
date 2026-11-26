# Animal Battle with Lloyd — Telegram Mini App page

Static companion page for the Lloyd card game. It is **not** a game:
there is no playable simulation, no fake opponent, and no invented
match anywhere on the page. Games play in chat with the Telegram bot
(`@Rantirealbot`), where Lloyd's real engine, action memory, and +1s
live. This page only explains the game and opens the chat.

## Files

- `index.html` — the page: title, GIF, PLAY button, example board,
  how-to-play, exact rules, animal table.
- `styles.css` — board look reused from the Lloyd match videos
  (Biological Being red on top, Lloyd green below, cream cards,
  face-down traps as `?`), with Telegram theme colors when inside
  Telegram and dark fallbacks in a plain browser.
- `app.js` — minimal: `Telegram.WebApp.ready()` + `expand()`, theme
  params, and the PLAY button opening the bot chat inside Telegram.
  No backend calls, no fake data, no trackers.
- `assets/battle.gif` — the 320×180 robot-boy animal battle GIF.
- `assets/battle.webp` — the 640×360 robot-boy still.

## Rules (from `lloyd/card_game.py`, unchanged)

8 cards to start, draw 1 per turn. 37-card decks: 10 animals, 10
traps, 10 trap removers, 7 vets. Animals have ATK/HP; the attacked
animal loses HP equal to the attacker's ATK. Lose 5 animals, lose the
match. Traps (bear trap, pepper spray) sit face-down; when the enemy
attacks, a trap blocks the attack and kills the attacker, then is
gone. Trap removers destroy one hidden trap. Vets sit one full round,
then heal one animal by 4 (up to full health), then are gone. Rescue
rule: no animal on the field and none in hand means drawing until an
animal shows, placing it at once, and shuffling the rest back. One
card play per turn, then each field animal attacks once or holds back.

## Hosting

Built to work from `file://` and from a GitHub Pages site root with
relative paths only. Suggested repo: `animal-battle` under
`intoxicateddogwalker`, Pages from the `main` branch root, giving the
Web App URL `https://intoxicateddogwalker.github.io/animal-battle/`
for @BotFather. The bot itself still needs an always-on host and its
BotFather token — this page does not run the bot.

## Local test

Serve with `python3 -m http.server` in this directory and open
`http://localhost:8000/` — title, PLAY link, GIF, and rules must all
render. No Lloyd files are touched by this page.
