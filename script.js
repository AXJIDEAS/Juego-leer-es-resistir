const preguntas = [
  {
    texto: "Según Mario Mendoza, ¿por qué comenzó a leer de niño?",
    opciones: [
      "Por exigencia del colegio y sus maestros",
      "Durante una grave enfermedad en el hospital, los libros fueron sus primeros compañeros",
      "Su padre era escritor y lo obligó a leer desde pequeño",
      "Para aprender a escribir mejor la ortografía"
    ],
    correcta: 1,
    feedback: {
      correcto: "¡Exacto! A los siete años, Mendoza enfermó de peritonitis gangrenosa y fue en el hospital donde los primeros libros llegaron a sus manos. Los personajes de esos textos fueron sus compañeros en la tristeza.",
      incorrecto: "Mendoza relata que a los siete años sufrió una peritonitis gangrenosa y casi murió. Fue en ese período hospitalario que los libros llegaron a sus manos por primera vez, convirtiéndose en sus aliados y compañeros."
    }
  },
  {
    texto: "¿Qué personaje histórico menciona Mendoza como ejemplo de alguien que llevó libros a la cárcel como su bien más preciado?",
    opciones: [
      "Nelson Mandela",
      "Malcolm X",
      "Mahatma Gandhi",
      "Álvaro Mutis"
    ],
    correcta: 2,
    feedback: {
      correcto: "¡Brillante! Mendoza describe la famosa fotografía de Gandhi siendo conducido a la cárcel cargando una torre de libros. Una imagen que sintetiza la fe en la literatura como resistencia.",
      incorrecto: "La respuesta es Gandhi. Mendoza cita la impactante fotografía donde Gandhi, conducido a la cárcel en invierno con su escaso ropaje, lleva en sus brazos lo único que realmente le importa: una torre de libros."
    }
  },
  {
    texto: "Según Mendoza, ¿cuál fue el \"arma\" que permitió al Homo sapiens derrotar a los neandertales?",
    opciones: [
      "La fuerza física y el tamaño superior del cuerpo",
      "Las herramientas de piedra y las lanzas afiladas",
      "La imaginación, los mitos, el lenguaje y los universos paralelos",
      "La capacidad de cocinar alimentos con fuego"
    ],
    correcta: 2,
    feedback: {
      correcto: "¡Sí! Mendoza cita a Yuval Noah Harari en Sapiens para explicar que fue la imaginación común, el lenguaje y el mito lo que nos diferenció de los neandertales y nos permitió vencerlos.",
      incorrecto: "Mendoza cita a Yuval Noah Harari: el Homo sapiens venció a los neandertales no por fuerza, sino gracias a la imaginación, los universos paralelos, los mitos, los espíritus y el lenguaje compartido. Los rapsodas y chamanes iban en primera línea."
    }
  },
  {
    texto: "Mendoza dice que la literatura pertenece a las artes mágicas porque…",
    opciones: [
      "Mejora la ortografía y estimula el aprendizaje académico",
      "Nos permite encarnar otros individuos y salir de nosotros mismos en un proceso extático",
      "Es la única forma de entender la historia universal",
      "Nos da cultura general y nos hace más críticos con la sociedad"
    ],
    correcta: 1,
    feedback: {
      correcto: "¡Perfecto! Para Mendoza la literatura no es un argumento pedagógico sino magia dionisíaca: ingresamos en un libro para encarnar en otros, vivir sus vidas y regresar transformados.",
      incorrecto: "Mendoza rechaza los argumentos pedagógicos convencionales. Para él, leer es un proceso extático: «ingresamos en un libro para encarnar en otros individuos, para meternos dentro de ellos y vivir sus vidas. Salimos de nosotros mismos». Un lector es un vampiro que se alimenta de otros."
    }
  },
  {
    texto: "¿Quién es Malcolm X en el contexto que menciona el libro?",
    opciones: [
      "Un filósofo europeo que escribió sobre la libertad",
      "Un músico de jazz que inspiró el movimiento por los derechos civiles",
      "Un delincuente que se transformó en líder del Black Power gracias a la lectura en prisión",
      "Un poeta colombiano amigo personal de Mario Mendoza"
    ],
    correcta: 2,
    feedback: {
      correcto: "¡Correcto! Malcolm Little era un malandro hasta que lo encarcelaron. En la cárcel descubrió el poder de la lectura y los libros lo convirtieron en otro sujeto: Malcolm X, el líder del Black Power norteamericano.",
      incorrecto: "Mendoza cuenta que Malcolm Little era un delincuente común hasta que lo capturaron. En ese lugar lóbrego descubrió la lectura. Cuando lo liberaron, salió transformado en Malcolm X, el líder del Black Power. Los libros lo reinventaron."
    }
  },
  {
    texto: "¿Qué imagen fotográfica de la guerra en Ucrania menciona Mendoza como símbolo de la resistencia cultural?",
    opciones: [
      "Un niño leyendo en medio de escombros bombardeados",
      "El estudio del escritor Lev Shevchenko con libros tapiando la ventana para protegerla",
      "Una biblioteca pública destruida por misiles",
      "Un soldado que llevaba poemas en su mochila de guerra"
    ],
    correcta: 1,
    feedback: {
      correcto: "¡Excelente! La fotografía del estudio de Lev Shevchenko con volúmenes arrumados contra el vidrio es una de las imágenes más poderosas del libro: oponer la cultura a los tanques y misiles.",
      incorrecto: "Mendoza describe la foto del estudio del escritor Lev Shevchenko en Ucrania, con libros de antropología, filosofía y novelas apilados contra la ventana. No solo para evitar que los vidrios se rompan, sino para «oponerle la cultura a los tanques, los misiles y los aviones de combate»."
    }
  },
  {
    texto: "Mendoza afirma que leer es un acto de resistencia. ¿Frente a qué resiste principalmente según el libro?",
    opciones: [
      "Las políticas de productividad capitalista y la brutalidad del sistema",
      "Las matemáticas y las ciencias exactas",
      "La tradición oral de los pueblos indígenas",
      "La tecnología digital y las redes sociales"
    ],
    correcta: 0,
    feedback: {
      correcto: "¡Muy bien! Mendoza es claro: «Leer es ya en sí mismo un acto de desobediencia frente a las políticas de la productividad capitalista». El lector se convierte en alguien ingobernable e insumiso.",
      incorrecto: "Para Mendoza leer significa resistir al capitalismo depredador, a los analfabetas funcionales en el poder, a la brutalidad del sistema. «Leemos porque estamos hartos de un mundo agobiante que nos acorrala hasta asfixiarnos»."
    }
  },
  {
    texto: "Según Mendoza, ¿por qué se censuran, queman y prohíben los libros?",
    opciones: [
      "Porque contienen mentiras e información falsa",
      "Porque el papel de los libros es inflamable y representa un peligro",
      "Porque quienes tienen el poder temen lo que el lector puede hacer con ese poder transformador",
      "Porque los libros son caros y solo los ricos pueden acceder a ellos"
    ],
    correcta: 2,
    feedback: {
      correcto: "¡Brillante! Mendoza dice que «a uno le enseñan a leer con argumentos falaces: porque tienen miedo de lo que uno pueda hacer con ese poder». El lector se vuelve ingobernable para el establecimiento.",
      incorrecto: "Mendoza es contundente: los libros se censuran y queman porque generan lectores insubordinados. «Aprender a leer literatura es comenzar a reinventar la realidad». Eso convierte al lector en «un anarquista furibundo, en una amenaza para los poderes del establecimiento»."
    }
  },
  {
    texto: "¿Cómo describe Mendoza la relación de Borges con María Kodama?",
    opciones: [
      "Una discípula que le copiaba todos sus manuscritos",
      "Una editora que publicó sus obras más importantes",
      "Una lectora única que se convirtió en su amiga inseparable, con un amor que pasaba por la biblioteca",
      "Su secretaria personal durante sus últimos años de vida"
    ],
    correcta: 2,
    feedback: {
      correcto: "¡Correcto! Mendoza recuerda que Borges se enamoró de María Kodama, «una lectora única que poco a poco se convirtió en su amiga inseparable». El amor de ambos pasaba obligatoriamente por la biblioteca.",
      incorrecto: "Mendoza cuenta que Borges se enamoró de María Kodama, una lectora única que se volvió su amiga inseparable. El amor de ambos era libresco. Mendoza la conoció en Toledo y ella le dijo: «Los libros son espacios sagrados y la biblioteca una deidad multiforme»."
    }
  },
  {
    texto: "Mendoza escribió este libro en una circunstancia muy particular. ¿Cuál fue?",
    opciones: [
      "Durante un viaje en barco por el océano Pacífico",
      "En medio de la pandemia de covid-19, con el mundo en cuarentena",
      "Mientras cumplía una condena en la cárcel de Bogotá",
      "En un retiro espiritual en los Andes colombianos"
    ],
    correcta: 1,
    feedback: {
      correcto: "¡Exacto! Mendoza lo confiesa directamente: «escribo este libro en medio de la pandemia». El covid-19 se propagó por el planeta y él reflexiona sobre la lectura mientras ve entierros masivos en televisión.",
      incorrecto: "Mendoza lo dice sin rodeos: «como un dato curioso, escribo este libro en medio de la pandemia». El covid-19 paralizó el mundo y él encontró en la escritura sobre libros una forma de resistir la incertidumbre, igual que de niño leyó en el hospital mientras la muerte rondaba."
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
  const gano = puntaje >= 70;

  document.getElementById('result-badge').textContent = gano ? '🏆' : '📚';
  document.getElementById('result-score').textContent = puntaje;

  const title = document.getElementById('result-title');
  if (puntaje === 100 || (puntaje >= 100 && estadoJuego.bonusRacha > 0)) {
    title.textContent = '¡Mutante Lector Absoluto!';
    title.className = 'result-title win';
  } else if (gano) {
    title.textContent = '¡Has resistido con la lectura!';
    title.className = 'result-title win';
  } else {
    title.textContent = 'El libro aún guarda secretos';
    title.className = 'result-title lose';
  }

  const mensajes = {
    perfecto: "«Un lector es un ser anfibio, un vampiro que se alimenta de otros, un caníbal.» — Dominas cada página de este libro. Eres el mutante lector que Mendoza describe.",
    alto: "«Leemos para ser muchos, para multiplicarnos, para devenir multitud.» — Tu conocimiento del libro es sólido. Has entendido el llamado de Mario Mendoza.",
    medio: "«Los libros siempre han sido mis mejores aliados.» — Vas por buen camino. Vuelve a abrir el libro, hay más secretos entre sus páginas esperándote.",
    bajo: "«Entrar en la literatura es ver gigantes donde los demás solo ven molinos de viento.» — El viaje apenas comienza. Mendoza te invita a regresar al texto y resistir una vez más."
  };

  let msg;
  if (puntaje >= 95) msg = mensajes.perfecto;
  else if (puntaje >= 70) msg = mensajes.alto;
  else if (puntaje >= 40) msg = mensajes.medio;
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