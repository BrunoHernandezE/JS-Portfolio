const imgRoute = "../assets/img/skills/"
let nodos = [
  { id: 1, label: "Html", shape: "image", image: `${imgRoute}html.svg`, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
  { id: 2, label: "Css", shape: "image", image: `${imgRoute}css.svg`, url: "https://developer.mozilla.org/es/docs/Web/CSS" },
  { id: 3, label: "JavaScript", shape: "image", image: `${imgRoute}javaScript.svg`, url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
  { id: 4, label: "Express", shape: "image", image: `${imgRoute}express.svg`, url: "https://expressjs.com/" },
  { id: 5, label: "MongoDB", shape: "image", image: `${imgRoute}mongodb.svg`, url: "https://www.mongodb.com/" },
  { id: 6, label: "React", shape: "image", image: `${imgRoute}react.svg`, url: "https://es.react.dev/" },
  { id: 7, label: "Vue", shape: "image", image: `${imgRoute}vue.svg`, url: "https://vuejs.org/"},
  { id: 8, label: "GitHub", shape: "image", image: `${imgRoute}github.svg`, url: "https://github.com/BrunoHernandezE"},
  { id: 9, label: "Git", shape: "image", image: `${imgRoute}git.svg`, url: "https://git-scm.com/"},
  { id: 10, label: "Figma", shape: "image", image: `${imgRoute}figma.svg`, url: "https://www.figma.com/ui-design-tool/"},
  { id: 11, label: "BootStrap", shape: "image", image: `${imgRoute}bootstrap.svg`, url: "https://getbootstrap.com/"},
  { id: 12, label: "SQL", shape: "image", image: `${imgRoute}sql.svg`, url: "https://aws.amazon.com/es/what-is/sql/"},
  { id: 13, label: "Node", shape: "image", image: `${imgRoute}node.svg`, url: "https://nodejs.org/es"},
  { id: 14, label: "Tailwind", shape: "image", image: `${imgRoute}tailwind.svg`, url: "https://tailwindcss.com/"},
  { id: 15, label: "Sass", shape: "image", image: `${imgRoute}sass.svg`, url: "https://sass-lang.com/"},
  { id: 16, label: "Python", shape: "image", image: `${imgRoute}python.svg`, url: "https://www.python.org/"},
  { id: 17, label: "Django", shape: "image", image: `${imgRoute}django.svg`, url: "https://www.djangoproject.com/"}
];

let enlaces = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 3, to : 4},
  { from: 3, to: 5 },
  { from: 3, to: 6 },
  { from: 3, to : 7},
  { from: 3, to : 13},
  { from: 5, to : 12},
  { from: 8, to : 9},
  { from: 2, to : 11},
  { from: 2, to : 14},
  { from: 2, to : 15},
  { from: 16, to : 17},
];

// Configuración del contenedor y opciones del grafo
let contenedor = document.getElementById("skills-graph");
let opciones = {
  nodes: {
    shape: "image",
    size: 30,
    borderWidth: 2,
    color: {
      border: "#333",
      background: "#616161",
      highlight: {
        border: "#333333",
        background: "#616161"
      }
    },
    font: {
      color: "#343434",
      face: "Arial",
      size: 14
    }
  },
  edges: {
    color: "#848484",
    width: 2
  }
};
// Crear la red del grafo
let datos = {
  nodes: new vis.DataSet(nodos),
  edges: new vis.DataSet(enlaces)
};

let red = new vis.Network(contenedor, datos, opciones);

// Manejar el evento de clic en un nodo
red.on("click", function(event) {
  let nodoId = event.nodes[0];
  if (nodoId !== undefined) {
    let nodo = nodos.find(function(nodo) {
      return nodo.id === nodoId;
    });
    if (nodo !== undefined && nodo.url !== undefined) {
      window.open(nodo.url, "_blank")
    }
  }
});
