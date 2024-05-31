const cookieWarning = document.querySelector(".cookie");
const cookieButtons = document.querySelector(".cookie__buttons-wrapper");

if (!getCookie("cookiePermission")) {
  cookieWarning.classList.add("cookie--show");
  cookieWarning.classList.remove("cookie--initial-hide");

  cookieButtons.addEventListener("click", (e) => {
    const userChoice = e.target.dataset.permission;

    if (!["accept", "reject"].includes(userChoice)) return;

    hideCookieWarning();
    setCookie("cookiePermission", userChoice, { secure: true, "max-age": 2592000 });

    fetch("#", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: userChoice,
    });
  });
}

function hideCookieWarning() {
  cookieWarning.classList.remove("cookie--show");
  cookieWarning.classList.add("cookie--hidden");
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
