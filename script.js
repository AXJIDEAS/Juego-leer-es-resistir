const preguntas = [
  {
    texto: "Según el resumen de la tesis, ¿qué busca la literatura al convencer al lector de una idea?",
    opciones: [
      "Sustituir por completo el estudio técnico de la ingeniería",
      "Llevarlo a vivir ciertas situaciones y dejarle nuevos aprendizajes, de forma parecida a un texto académico pero con lenguaje más accesible",
      "Enseñarle reglas de ortografía y gramática avanzada",
      "Reemplazar los manuales técnicos que usa el ingeniero"
    ],
    correcta: 1,
    feedback: {
      correcto: "Así es. El resumen plantea que la literatura funciona como un texto académico, solo que con un lenguaje más cercano y menos tecnicismos, llevando al lector a experimentar situaciones que dejan aprendizajes.",
      incorrecto: "La tesis explica que la literatura convence al lector llevándolo a experimentar situaciones e implantándole nuevos aprendizajes, de manera similar a un documento académico pero con un lenguaje más accesible y menos técnico."
    }
  },
  {
    texto: "Cuando el lector deja de ver un libro solo como un libro y empieza a analizar su profundidad, sus virtudes y sus falencias, ¿qué herramienta del ingeniero se fortalece según la tesis?",
    opciones: [
      "La memoria a corto plazo",
      "La velocidad de lectura",
      "La lógica",
      "El manejo de hojas de cálculo"
    ],
    correcta: 2,
    feedback: {
      correcto: "Exacto. El resumen es claro: ese análisis crítico desarrolla el espíritu crítico del lector y, al mismo tiempo, fortalece la lógica, una de las herramientas más poderosas del ingeniero.",
      incorrecto: "Según el resumen, analizar la profundidad de una obra desarrolla el espíritu crítico del lector y fortalece la lógica, descrita en la tesis como una de las herramientas más poderosas del ingeniero para resolver problemas reales."
    }
  },
  {
    texto: "¿Cuál de las siguientes NO aparece entre las palabras clave del documento?",
    opciones: [
      "Ciencia ficción",
      "Inteligencia artificial",
      "Pensamiento",
      "Desarrollo"
    ],
    correcta: 1,
    feedback: {
      correcto: "Correcto. Aunque la inteligencia artificial se menciona dentro del texto, las palabras clave oficiales son: literatura, tecnología, ingeniería, conocimiento, desarrollo, ciencia ficción, pensamiento y lógico.",
      incorrecto: "La inteligencia artificial se discute dentro del documento, pero no figura en la lista de palabras clave, que incluye: literatura, tecnología, ingeniería, conocimiento, desarrollo, ciencia ficción, pensamiento y lógico."
    }
  },
  {
    texto: "Según la introducción, ¿qué tipo de textos ayudan a fortalecer el pensamiento crítico, la creatividad y la capacidad de análisis del estudiante de ingeniería?",
    opciones: [
      "Los manuales técnicos de programación",
      "Las narrativas postglobal y de ciencia ficción",
      "Las biografías de empresarios tecnológicos",
      "Los reportes financieros de empresas de software"
    ],
    correcta: 1,
    feedback: {
      correcto: "Así es. La introducción señala que comprender textos sobre narrativas postglobal y ciencia ficción fortalece el pensamiento crítico, la creatividad y el pensamiento autónomo del estudiante.",
      incorrecto: "La introducción explica que la correcta lectura de narrativas postglobal y de ciencia ficción fortalece el pensamiento crítico, la creatividad, la capacidad de análisis y el pensamiento autónomo del estudiante."
    }
  },
  {
    texto: "¿Qué tipo de historias se mencionan en la introducción como reflejo de un mundo donde las personas deben adaptarse constantemente a nuevas realidades?",
    opciones: [
      "Historias de migración, pandemia y transformación social",
      "Cuentos de hadas tradicionales",
      "Relatos de viajes en el tiempo",
      "Sagas familiares del siglo XIX"
    ],
    correcta: 0,
    feedback: {
      correcto: "Correcto. La tesis vincula estas historias con los cambios tecnológicos continuos, la inteligencia artificial y los desafíos de la digitalización que enfrenta el ingeniero.",
      incorrecto: "El documento señala que las historias de migración, pandemia y transformación social muestran un contexto de adaptación constante, comparable a los cambios tecnológicos que enfrenta hoy un ingeniero en sistemas."
    }
  },
  {
    texto: "Para el ingeniero en sistemas, ¿qué representa la ciencia ficción según la tesis?",
    opciones: [
      "Un simple escape recreativo sin mayor utilidad",
      "Un laboratorio mental donde se ponen a prueba la lógica computacional, la arquitectura de sistemas y la ética tecnológica",
      "Un género reservado únicamente para el entretenimiento infantil",
      "Una distracción que aleja al estudiante de sus estudios técnicos"
    ],
    correcta: 1,
    feedback: {
      correcto: "¡Exacto! La tesis describe la ciencia ficción como un laboratorio mental, no como un escape, donde se prueban en escenarios extremos los principios de la lógica, la arquitectura de sistemas y la ética tecnológica.",
      incorrecto: "Según el documento, la ciencia ficción no es un simple escape recreativo: funciona como un laboratorio mental en el que la lógica computacional, la arquitectura de sistemas y la ética tecnológica son puestas a prueba."
    }
  },
  {
    texto: "Frente a una distopía gobernada por algoritmos de vigilancia masiva, ¿a qué obliga esta historia al lector-ingeniero según la tesis?",
    opciones: [
      "A memorizar las fechas de publicación de la obra",
      "A analizar las decisiones de diseño y las variables éticas que fueron ignoradas",
      "A comparar el precio de los equipos tecnológicos del relato",
      "A calificar la calidad literaria del estilo narrativo"
    ],
    correcta: 1,
    feedback: {
      correcto: "Correcto. La tesis explica que ese tipo de escenarios obliga a analizar qué parámetros fueron optimizados y qué variables éticas se ignoraron, activando un pensamiento sistémico en el lector.",
      incorrecto: "El documento plantea que una distopía de vigilancia algorítmica obliga al lector a analizar las decisiones de diseño detrás de ese estado: qué se optimizó y qué valores éticos quedaron de lado."
    }
  },
  {
    texto: "La tesis compara la lectura de ciencia ficción con una práctica habitual del ingeniero. ¿Cuál?",
    opciones: [
      "Modelar escenarios de fallo en una arquitectura de software",
      "Calcular el presupuesto de un proyecto",
      "Diseñar el logotipo de una empresa",
      "Redactar actas de reunión"
    ],
    correcta: 0,
    feedback: {
      correcto: "¡Bien! Así como el ingeniero modela escenarios de fallo en una arquitectura de software, el lector de ciencia ficción modela escenarios sociales donde la tecnología falla o triunfa de maneras inesperadas.",
      incorrecto: "Según la tesis, de manera similar a como un ingeniero modela escenarios de fallo en una arquitectura de software, el lector de ciencia ficción modela escenarios sociales en los que la tecnología ha fallado o triunfado."
    }
  },
  {
    texto: "¿Qué le permite al futuro ingeniero el simple acto de leer, según el apartado 'La literatura como pilar de la digitalización'?",
    opciones: [
      "Depender por completo de lo que dicta un sistema",
      "Cimentarse en ideales claros y desarrollar un pensamiento autónomo",
      "Evitar cualquier contacto con la tecnología",
      "Reemplazar la necesidad de formación técnica"
    ],
    correcta: 1,
    feedback: {
      correcto: "Exacto. El texto plantea la lectura como una herramienta esencial para cimentarse en ideales claros, en lugar de tomar decisiones guiadas únicamente por lo que dicta un sistema.",
      incorrecto: "La tesis señala que leer ayuda al futuro ingeniero a cimentarse en ideales propios y a desarrollar un pensamiento autónomo, en vez de decisiones guiadas solo por lo que un sistema suele dictar."
    }
  },
  {
    texto: "¿Qué autor citan los estudiantes para hablar de la lectura como una forma de pensamiento libre frente a la inmediatez digital?",
    opciones: [
      "Yuval Noah Harari",
      "Umberto Eco",
      "Mario Mendoza",
      "Sydney J. Harris"
    ],
    correcta: 2,
    feedback: {
      correcto: "Correcto. Mario Mendoza es citado por su idea de la lectura como acto de desobediencia frente a la productividad capitalista, vinculada a la emancipación y la resistencia.",
      incorrecto: "Es Mario Mendoza. Los autores de la tesis lo citan al hablar de la lectura como un acto de desobediencia frente a la productividad capitalista, asociado a la emancipación y la resistencia."
    }
  },
  {
    texto: "Según la tesis, ¿frente a qué resiste el ingeniero cuando aplica a su propio trabajo la idea de Mendoza de que leer es resistir?",
    opciones: [
      "Frente a la tentación de optimizar métricas sin preguntarse qué valores humanos se sacrifican",
      "Frente al uso de cualquier lenguaje de programación nuevo",
      "Frente a las exigencias de sus propios clientes",
      "Frente al avance de las matemáticas aplicadas"
    ],
    correcta: 0,
    feedback: {
      correcto: "Así es. El apartado de ética explica que el ingeniero resiste la inercia de crear tecnología por la tecnología misma y la tentación de optimizar sin pensar en los valores humanos en juego.",
      incorrecto: "La tesis plantea que esa resistencia consiste en cuestionar la inercia de crear tecnología por sí misma y la tentación de optimizar métricas sin detenerse a pensar qué valores humanos se sacrifican."
    }
  },
  {
    texto: "El informático Sydney J. Harris, citado en la tesis, advierte sobre un peligro real. ¿Cuál es, según el documento?",
    opciones: [
      "Que las máquinas se vuelvan más veloces que las personas",
      "Que las personas terminen razonando como máquinas, perdiendo su criterio propio",
      "Que los algoritmos reemplacen a los programadores",
      "Que la inteligencia artificial supere a la humana en creatividad"
    ],
    correcta: 1,
    feedback: {
      correcto: "Exacto. La advertencia de Harris que recoge la tesis es que el riesgo no está en que las máquinas piensen como personas, sino en que las personas terminen pensando como máquinas.",
      incorrecto: "Según Harris, citado en el documento, el verdadero riesgo no es que las computadoras imiten el pensamiento humano, sino que los seres humanos terminen razonando con la rigidez de una máquina."
    }
  },
  {
    texto: "La tesis abre con un epígrafe de Umberto Eco. Según esa idea, ¿para qué están hechos los libros?",
    opciones: [
      "Para que el lector les crea sin cuestionarlos",
      "Para ser sometidos a investigación, preguntándose qué significan y no solo qué dicen",
      "Para resumir la historia de una época",
      "Para entretenimiento exclusivamente"
    ],
    correcta: 1,
    feedback: {
      correcto: "Correcto. Eco plantea que un libro no busca ser creído, sino investigado: la pregunta clave no es qué dice, sino qué significa.",
      incorrecto: "El epígrafe de Eco propone que los libros existen para ser investigados, no para ser creídos sin más, y que la pregunta central frente a ellos es qué significan, no solo qué dicen."
    }
  },
  {
    texto: "En la conclusión, ¿cómo describen los autores al lector que deja de ser un simple lector para convertirse en parte de la historia?",
    opciones: [
      "Un crítico literario profesional",
      "Un espectador completamente pasivo",
      "Un mutante que entra en la historia, pero usando la lógica de un ingeniero de sistemas",
      "Un programador que solo lee documentación técnica"
    ],
    correcta: 2,
    feedback: {
      correcto: "¡Eso es! La conclusión retoma la idea de Mendoza del lector-mutante, pero la lleva al terreno de la ingeniería: alguien que se entraña en la historia usando la lógica necesaria de un ingeniero de sistemas.",
      incorrecto: "Según la conclusión, ese lector se convierte en un actor, en un mutante que entra en la historia, pero usando la lógica propia de un ingeniero de sistemas."
    }
  },
  {
    texto: "Entre las referencias del trabajo aparece un artículo de G. Müller. ¿Sobre qué tema trata?",
    opciones: [
      "Inteligencia artificial aplicada a la robótica industrial",
      "Pandemia y migración en las obras de Fernanda Trías y Yuri Herrera",
      "La historia de la informática en Latinoamérica",
      "Una biografía de Mario Mendoza"
    ],
    correcta: 1,
    feedback: {
      correcto: "Correcto. El artículo de Müller analiza variantes literarias postglobal centradas en la pandemia y la migración, a partir de las obras de Fernanda Trías y Yuri Herrera.",
      incorrecto: "Se trata del artículo de G. Müller sobre variantes literarias de una creación postglobal, enfocado en la pandemia y la migración presentes en las obras de Fernanda Trías y Yuri Herrera."
    }
  }
];

// Estado del juego
let estadoJuego = {
  preguntaActual: 0,
  puntaje: 0,
  correctas: 0,
  racha: 0,
  bonusRacha: 0,
  respondidas: [],
  preguntasMezcladas: []
};

function startGame() {
  estadoJuego = {
    preguntaActual: 0,
    puntaje: 0,
    correctas: 0,
    racha: 0,
    bonusRacha: 0,
    respondidas: [],
    preguntasMezcladas: mezclar([...preguntas])
  };
  document.getElementById('screen-intro').style.display = 'none';
  document.getElementById('screen-result').style.display = 'none';
  document.getElementById('screen-game').style.display = 'block';
  renderPregunta();
}

function mezclar(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderPregunta() {
  const total = estadoJuego.preguntasMezcladas.length;
  const idx   = estadoJuego.preguntaActual;
  const p     = estadoJuego.preguntasMezcladas[idx];
  const pct   = Math.round((idx / total) * 100);

  // Stats
  document.getElementById('score').textContent = estadoJuego.puntaje;
  document.getElementById('correct-count').textContent = estadoJuego.correctas;
  document.getElementById('streak-count').textContent = estadoJuego.racha;

  // Progreso
  document.getElementById('progress-text').textContent = `Pregunta ${idx + 1} de ${total}`;
  document.getElementById('progress-pct').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';

  // Pregunta
  document.getElementById('q-number').textContent = `Pregunta ${idx + 1}`;
  document.getElementById('q-text').textContent = p.texto;

  // Animación tarjeta
  const card = document.getElementById('question-card');
  card.classList.remove('slide-in');
  void card.offsetWidth;
  card.classList.add('slide-in');

  // Opciones — mezclamos también las opciones
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const letras = ['A', 'B', 'C', 'D'];
  const opcionesConIndice = p.opciones.map((op, i) => ({ texto: op, original: i }));
  const opcionesMezcladas = mezclar([...opcionesConIndice]);

  opcionesMezcladas.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letras[i]}</span><span>${op.texto}</span>`;
    btn.onclick = () => seleccionarRespuesta(op.original, p.correcta, p.feedback, btn, grid);
    grid.appendChild(btn);
  });

  // Ocultar feedback y next
  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className = 'feedback-box';
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('streak-banner').style.display = 'none';
}

function seleccionarRespuesta(indiceElegido, indiceCorrect, feedback, btnElegido, grid) {
  // Deshabilitar todos
  Array.from(grid.children).forEach(btn => btn.disabled = true);

  const esCorrecta = indiceElegido === indiceCorrect;

  // Marcar correcta e incorrecta visualmente
  Array.from(grid.children).forEach(btn => {
    const textoBtn = btn.querySelector('span:last-child').textContent;
    if (textoBtn === preguntas.find(q => q.opciones[indiceCorrect]).opciones[indiceCorrect] ||
        textoBtn === estadoJuego.preguntasMezcladas[estadoJuego.preguntaActual].opciones[indiceCorrect]) {
      btn.classList.add('correct');
    }
  });

  if (!esCorrecta) {
    btnElegido.classList.add('wrong');
    // Shake
    const card = document.getElementById('question-card');
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
  }

  // Actualizar estado
  if (esCorrecta) {
    estadoJuego.racha++;
    estadoJuego.correctas++;
    estadoJuego.puntaje += 10;
    document.getElementById('score').textContent = estadoJuego.puntaje;
    document.getElementById('correct-count').textContent = estadoJuego.correctas;
    document.getElementById('streak-count').textContent = estadoJuego.racha;

    // Bonus racha
    if (estadoJuego.racha > 0 && estadoJuego.racha % 3 === 0) {
      estadoJuego.puntaje += 5;
      estadoJuego.bonusRacha += 5;
      document.getElementById('score').textContent = estadoJuego.puntaje;
      const banner = document.getElementById('streak-banner');
      banner.style.display = 'block';
    }

    // Partículas
    spawnParticulas();
  } else {
    estadoJuego.racha = 0;
    document.getElementById('streak-count').textContent = 0;
  }

  estadoJuego.respondidas.push({
    pregunta: estadoJuego.preguntasMezcladas[estadoJuego.preguntaActual].texto,
    correcta: esCorrecta,
    respuestaCorrecta: estadoJuego.preguntasMezcladas[estadoJuego.preguntaActual].opciones[indiceCorrect]
  });

  // Feedback
  const fb = document.getElementById('feedback-box');
  fb.className = 'feedback-box ' + (esCorrecta ? 'correct' : 'wrong');
  document.getElementById('fb-emoji').textContent = esCorrecta ? '✅' : '📖';
  document.getElementById('fb-title').textContent = esCorrecta ? '¡Correcto!' : 'No era esa…';
  document.getElementById('fb-text').textContent = esCorrecta ? feedback.correcto : feedback.incorrecto;
  fb.style.display = 'block';

  document.getElementById('btn-next').style.display = 'block';
}

function nextQuestion() {
  estadoJuego.preguntaActual++;
  if (estadoJuego.preguntaActual >= estadoJuego.preguntasMezcladas.length) {
    mostrarResultado();
  } else {
    renderPregunta();
  }
}

function mostrarResultado() {
  document.getElementById('screen-game').style.display = 'none';
  const screenResult = document.getElementById('screen-result');
  screenResult.style.display = 'block';

  const puntaje = estadoJuego.puntaje;
  const total   = estadoJuego.preguntasMezcladas.length;
  const ratio   = estadoJuego.correctas / total;
  const gano    = ratio >= 0.7;

  document.getElementById('result-badge').textContent = gano ? '🏆' : '📚';
  document.getElementById('result-score').textContent = puntaje;

  const title = document.getElementById('result-title');
  if (estadoJuego.correctas === total) {
    title.textContent = '¡Mutante Lector-Ingeniero Absoluto!';
    title.className = 'result-title win';
  } else if (gano) {
    title.textContent = '¡Has resistido con la lectura crítica!';
    title.className = 'result-title win';
  } else {
    title.textContent = 'La tesis aún guarda ideas por descubrir';
    title.className = 'result-title lose';
  }

  const mensajes = {
    perfecto: "Dominas tanto las páginas de la literatura como la lógica del ingeniero: eres el lector-mutante que describe nuestra conclusión, alguien que se entraña en la historia sin dejar de pensar como un ingeniero de sistemas.",
    alto: "Tu lectura de la tesis es sólida. Entiendes cómo la literatura y la ingeniería se necesitan mutuamente para formar un pensamiento crítico y autónomo.",
    medio: "Vas por buen camino. Vuelve a los apartados sobre ciencia ficción, ética y digitalización: ahí quedan ideas clave por descubrir.",
    bajo: "El recorrido apenas comienza. Vuelve a leer la tesis con calma: cada sección, desde el resumen hasta la conclusión, esconde piezas importantes del argumento."
  };

  let msg;
  if (estadoJuego.correctas === total) msg = mensajes.perfecto;
  else if (ratio >= 0.7) msg = mensajes.alto;
  else if (ratio >= 0.4) msg = mensajes.medio;
  else msg = mensajes.bajo;

  document.getElementById('result-message').textContent = msg;

  // Resumen
  const lista = document.getElementById('summary-list');
  lista.innerHTML = '';
  estadoJuego.respondidas.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'summary-item ' + (r.correcta ? 'ok' : 'bad');
    div.innerHTML = `
      <span class="si">${r.correcta ? '✅' : '❌'}</span>
      <div>
        <span class="summary-q">P${i + 1}:</span>${r.pregunta.substring(0, 65)}…
        ${!r.correcta ? `<span class="summary-correct">Correcta: ${r.respuestaCorrecta}</span>` : ''}
      </div>
    `;
    lista.appendChild(div);
  });

  if (gano) setTimeout(() => confetti(), 300);
}

function restartGame() {
  document.getElementById('screen-result').style.display = 'none';
  startGame();
}

// Partículas de letras al acertar
function spawnParticulas() {
  const chars = 'LEEReSRST📖✨';
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'letter-particle';
      el.textContent = chars[Math.floor(Math.random() * chars.length)];
      el.style.left  = (Math.random() * 80 + 10) + 'vw';
      el.style.top   = (Math.random() * 40 + 40) + 'vh';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1400);
    }, i * 80);
  }
}

// Confetti simple al ganar
function confetti() {
  const colors = ['#d4a017','#8b3a1e','#c8a96e','#f5ead6','#2d4a2d'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed;
        width:${Math.random()*8+4}px;
        height:${Math.random()*8+4}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        left:${Math.random()*100}vw;
        top:-10px;
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        pointer-events:none;
        z-index:9999;
        animation:fall ${Math.random()*1.5+1}s ease-in forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }, i * 40);
  }

  if (!document.getElementById('fall-style')) {
    const style = document.createElement('style');
    style.id = 'fall-style';
    style.textContent = `
      @keyframes fall {
        to { transform: translateY(110vh) rotate(${Math.random()*360}deg); opacity:0; }
      }
    `;
    document.head.appendChild(style);
  }
}