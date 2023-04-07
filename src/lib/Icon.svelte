<script>
  export let name;
  export let width = "1rem";
  export let height = "1rem";

  let icons = [
    {
      box: 24,
      name: "mail",
      svg: `<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
>
<path d="M655 4440 c-242 -36 -453 -185 -564 -400 -33 -64 -76 -180 -68 -185
156 -101 2526 -1539 2537 -1539 11 0 2381 1438 2537 1539 8 5 -35 121 -68 185
-95 184 -258 317 -469 382 l-75 23 -1890 1 c-1039 1 -1913 -2 -1940 -6z"/>
<path d="M0 2370 c0 -881 2 -1021 16 -1088 32 -155 92 -268 204 -383 122 -124
269 -197 441 -218 116 -15 3682 -15 3798 0 270 33 505 214 606 466 56 139 56
131 53 1226 l-3 1007 -1200 -731 c-660 -403 -1220 -741 -1243 -751 -59 -27
-165 -27 -224 0 -23 10 -576 344 -1227 741 -650 397 -1192 726 -1202 732 -19
9 -19 -12 -19 -1001z"/>
</g>`,
    },
  ];
  let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
  class={$$props.class}
  {width}
  {height}
  viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg
>
