import "assets/styles";

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker.register("./serviceWorker.js", { scope: "/" }).then(
    function () {
      console.log("Service worker registration succeeded");
    },
    /*catch*/ function () {
      console.log("Service worker registration failed");
    }
  );
} else {
  console.log("Service workers are not supported.");
}

import("react-dom").then(({ render }) => {
  import("App").then(({ default: App }) => {
    render(App(), document.getElementById("root"), () => {
      let Preloader = document.getElementById("preloader");
      if (Preloader) Preloader.style.visibility = "hidden";
    });
  });
});
