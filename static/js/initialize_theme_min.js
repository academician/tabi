!function(){const e=localStorage.getItem("theme");if(e)document.documentElement.setAttribute("data-theme",e);else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",t?"dark":"light")}}();