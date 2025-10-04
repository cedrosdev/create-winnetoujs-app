import { $img, $welcome } from "./welcome/welcome.wcto";

(() => {
  new $welcome({
    titleStyle: "",
    logo: new $img({
      alt: "WinnetouJs Logo",
      src: "/templates/basic/dist/assets/official-logo.svg",
      class: "logo",
      height: "200",
      width: "200",
    }).constructoString(),
  }).create("#app", {
    clear: true,
  });
})();
