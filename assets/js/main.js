'use strict';
const includeHTML = async () => {
  let s, a, e = []
  s = document.getElementsByTagName("sae-html")
  for (a = s.length - 1; a >= 0; a--) {
    if (s[a].getAttribute("src")) {
      const result = await axios.get(s[a].getAttribute("src"))
      if (result.status == 200) e[a] = result.data
    }
  }
  for (a = s.length - 1; a >= 0; a--) {
    s[a].removeAttribute('src')
    s[a].innerHTML = e[a]
  }
}

const main = async () => {
  await includeHTML()
}