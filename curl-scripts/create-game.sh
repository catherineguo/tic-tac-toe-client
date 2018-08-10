curl "https://aqueous-atoll-85096.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": "'"${XID}"'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": null
    }
  }'

echo
