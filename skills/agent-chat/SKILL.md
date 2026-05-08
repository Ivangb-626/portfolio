---
name: agent-chat
description: >
  Sistema de comunicación multi-agente heterogéneo vía archivo compartido (chat.md). 
  Úsalo para coordinar Gemini CLI, Copilot, Codex, OpenClaw, Claude y otros modelos/IDEs.
  Actívalo cuando un agente arranque una tarea, necesite leer estado de otros agentes,
  reportar progreso, detectar bloqueos, o dejar constancia de resultados. El protocolo
  abstraé diferencias entre modelos/ecosistemas y permite que cualquier agente comunique
  con cualquier otro sin acoplamiento. Aplícalo cuando haya múltiples agentes heterogéneos
  en el mismo proyecto colaborativo.
---

# Agent Chat — Sistema de Coordinación Multi-Agente Heterogéneo

Un protocolo agnóstico de comunicación entre agentes de distintos modelos y ecosistemas
(Gemini, Copilot, Codex, OpenClaw, Claude, etc.) basado en un único archivo Markdown
compartido (`chat.md`). Cada agente lo lee para situarse en el contexto global y lo 
escribe para comunicar su estado, resultados y recomendaciones sin acoplamiento.

**Soporta heterogeneidad total:** cada agente opera en su propio entorno (terminal, IDE,
API, web) pero se coordina vía este canal único y universal.

---

## Concepto central

El archivo `chat.md` es el **canal único de comunicación agnóstico**. Actúa como log 
colaborativo y tablero de estado. Los agentes pueden ser:
- **Gemini CLI** (terminal Google)
- **Copilot** (Microsoft, VS Code, web)
- **Codex** (OpenAI, editor/terminal)
- **OpenClaw** (custom, API/terminal)
- **Claude** (Claude.ai, Claude Code, API)
- **Otros** (LLaMA, Mistral, etc.)

Ningún agente necesita conocer la implementación de otro; solo lee y escribe este archivo
siguiendo un protocolo universal.

```
proyecto/
├── chat.md              ← único archivo compartido entre todos los agentes
├── .model_registry.md   ← (opcional) registro de capacidades por modelo
└── .agent_lock.tmp      ← (opcional) control de concurrencia
```

---

## Protocolo de mensajes

Cada mensaje sigue esta estructura exacta en Markdown:

```markdown
---
**[ESTADO]** · Agente: `<nombre-agente>` · Modelo: `<modelo>` · PID: `<id-proceso>` · `<timestamp ISO 8601>`

**Tarea:** <descripción de la tarea asignada>
**Estado:** INICIANDO | EN PROGRESO | BLOQUEADO | COMPLETADO | ERROR
**Hecho:** <qué se ha completado hasta ahora>
**Pendiente:** <qué queda por hacer>
**Bloqueos:** <dependencias, errores, esperas o incompatibilidades — "ninguno" si no aplica>
**Mejoras detectadas:** <observaciones para mejorar el proceso, el sistema o la coordinación>
**Para el siguiente agente:** <instrucciones, contexto, advertencias o requisitos de modelo>
**Salida esperada:** <formato del output, versión de dependencias, flags de compilación, etc.>
**Comentarios:** <cualquier información adicional útil; fallos de API, timeouts, etc.>
**@Menciones:** <referencias a otros agentes o PIDs que pueden estar bloqueados/interesados>

---
```

### Campo "Modelo" — Identificación del agente

Usar uno de estos identificadores estándar:

| Modelo | Identificador | Entorno típico |
|--------|---|---|
| Google Gemini | `gemini-cli` | Terminal / bash |
| Microsoft Copilot | `copilot` | VS Code / Web |
| OpenAI Codex | `codex` | Terminal / Editor |
| OpenClaw (custom) | `openclaw` | API / Terminal |
| Claude (Anthropic) | `claude` | Claude.ai / Claude Code / API |
| LLaMA | `llama` | Ollama / Local |
| Mistral | `mistral` | Local / API |
| GPT-4 (genérico) | `gpt4` | API / ChatGPT |
| Otro | `<nombre>` | Especificar en comentarios |

| Estado | Cuándo usarlo |
|--------|--------------|
| `INICIANDO` | El agente acaba de arrancar y registra su comienzo |
| `EN PROGRESO` | Actualización intermedia de una tarea larga |
| `BLOQUEADO` | El agente no puede continuar sin input externo |
| `COMPLETADO` | La tarea ha terminado con éxito |
| `ERROR` | La tarea ha terminado con fallo — incluir causa |

---

## Flujo de trabajo obligatorio

### 1. Al arrancar — mensaje INICIANDO

Antes de hacer cualquier trabajo real, el agente **debe** escribir en `chat.md`:

```markdown
---
**[INICIANDO]** · Agente: `refactor-agent` · Modelo: `copilot` · PID: `a3f9` · `2025-09-12T10:04:22Z`

**Tarea:** Refactorizar módulo de autenticación para eliminar dependencias circulares
**Estado:** INICIANDO
**Hecho:** Nada aún
**Pendiente:** Análisis de imports, refactor, tests
**Bloqueos:** ninguno
**Mejoras detectadas:** —
**Para el siguiente agente:** Esperaré a que `lint-agent` (gemini-cli) termine antes de hacer PR. Requiere Node.js 18+
**Salida esperada:** Branch `fix/auth-circular` con 7 tests verdes en Jest
**Comentarios:** Tomando como base el commit 4a2d1c3
**@Menciones:** @lint-agent, @test-runner

---
```

### 2. Durante la tarea — mensajes EN PROGRESO (opcional pero recomendado en tareas largas)

Para tareas que duran más de unos minutos, escribir actualizaciones intermedias:

```markdown
---
**[EN PROGRESO]** · Agente: `refactor-agent` · Modelo: `copilot` · PID: `a3f9` · `2025-09-12T10:22:10Z`

**Tarea:** Refactorizar módulo de autenticación
**Estado:** EN PROGRESO
**Hecho:** Eliminadas 4 de 7 dependencias circulares. Auth0 desacoplado.
**Pendiente:** Módulos session y token — estimado 15 min más
**Bloqueos:** ninguno
**Mejoras detectadas:** El módulo `token.js` puede simplificarse con una factory. Considerar uso de async/await en lugar de callbacks (compatible con OpenClaw pero no con versiones de Codex < 2024)
**Para el siguiente agente:** No tocar `auth/session.js` hasta que cierre este PID. El `test-runner` (codex) necesitará ejecutar `npm run test:auth` después
**Salida esperada:** 7 refactors completados, 0 breaking changes, linting con ESLint 8.5+
**Comentarios:** —
**@Menciones:** @test-runner — te pasaré el branch cuando termine

---
```

### 3. Al finalizar — mensaje COMPLETADO o ERROR

```markdown
---
**[COMPLETADO]** · Agente: `refactor-agent` · Modelo: `copilot` · PID: `a3f9` · `2025-09-12T10:41:55Z`

**Tarea:** Refactorizar módulo de autenticación
**Estado:** COMPLETADO
**Hecho:** 7 dependencias circulares eliminadas. Tests pasando. PR #214 abierto. Validado con ESLint y Prettier.
**Pendiente:** ninguno
**Bloqueos:** ninguno
**Mejoras detectadas:** Crear un helper `createAuthMiddleware()` para evitar repetición en routes. Considerar usar TypeScript para tipado estricto en futuras refactors
**Para el siguiente agente:** `test-runner` (codex) puede ejecutar suite completa. Branch: `fix/auth-circular`. Requiere Node 18+, npm 8+. Usa `npm run test:auth` para validar
**Salida esperada:** ✅ 7 tests verdes · ESLint OK · Sin warnings de deprecación · PR abierto
**Comentarios:** Cambio en `token.js` es retrocompatible con versiones de API anteriores. El agente de documentación (openclaw) debería actualizar AUTH.md con los nuevos patterns
**@Menciones:** @test-runner (listo para ti) · @doc-agent (actualizar AUTH.md)

---
```

---

## Compatibilidad y restricciones entre modelos

No todos los modelos pueden ejecutar todo el código. Documenta restricciones para que
los agentes posteriores lo sepan.

### Tabla de capacidades por modelo

| Capacidad | Gemini | Copilot | Codex | OpenClaw | Claude |
|-----------|--------|---------|-------|----------|--------|
| Python 3.11+ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TypeScript/Node 18+ | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| Bash scripting | ✅ | ⚠️ | ✅ | ✅ | ✅ |
| Docker/Containers | ⚠️ | ❌ | ⚠️ | ✅ | ⚠️ |
| GPU compute (CUDA) | ❌ | ❌ | ⚠️ | ✅ | ❌ |
| Web scraping | ⚠️ | ⚠️ | ✅ | ✅ | ⚠️ |
| File system access | ✅ | ✅ | ✅ | ✅ | ✅ |
| API calls (rate limits) | Standard | High | Standard | High | High |

**Leyenda:**
- ✅ = Soportado nativamente
- ⚠️ = Parcial o con limitaciones (detallar en comentarios)
- ❌ = No soportado

### Documentar incompatibilidades

Si tu agente realiza una tarea que otro modelo no puede hacer, **especifícalo explícitamente**:

```markdown
**Bloqueos:** ❌ OpenClaw no puede ejecutar Docker en este entorno. Gemini CLI tiene limite de rate en APIs externas.
```

---

## Resolución de bloqueos multi-modelo

Cuando un agente detecta que el siguiente no puede ejecutar su output, tiene opciones:

1. **Convertir el output a formato compatible:**
   ```
   Agente Codex genera Python 3.11 → Agente Gemini lo traduce a Python 3.8
   ```

2. **Delegar a un agente intermedio capacitado:**
   ```
   Agente Copilot (no puede Docker) → Delega a OpenClaw (sí puede)
   ```

3. **Marcar como BLOQUEADO y especificar qué agente puede desbloquear:**
   ```markdown
   **Estado:** BLOQUEADO
   **Bloqueos:** Requiere ejecución en contenedor Docker. Solo OpenClaw puede hacerlo.
   **Para el siguiente agente:** @openclaw-executor — necesito que ejecutes esto en un container
   ```

---

## Manejo de APIs y rate limits

Cada modelo tiene límites de API distintos. Documentar en cada mensaje:

```markdown
**Para el siguiente agente:** Copilot tiene rate limit de 10 req/min en OpenAI. Gemini está libre. Usa exponential backoff si hay 429s.
```

Almacenar últimas llamadas para evitar colisiones:

```markdown
**Comentarios:** Acabo de hacer 8 llamadas a OpenAI API. Quedan ~2 para este minuto. Siguiente agente espera 30s antes de continuar.
```

Antes de escribir el mensaje de INICIANDO, el agente **debe leer** el `chat.md` completo
para entender:

- Qué tareas están en curso (evitar colisiones)
- Qué han dejado pendiente agentes anteriores
- Qué advertencias o bloqueos existen
- Qué mejoras han sido sugeridas

**Pasos al arrancar:**
1. Leer `chat.md` de principio a fin
2. Identificar PIDs activos (INICIANDO o EN PROGRESO sin COMPLETADO/ERROR posterior)
3. Leer el campo "Para el siguiente agente" de los últimos mensajes COMPLETADO
4. Escribir el propio mensaje INICIANDO
5. Comenzar la tarea

---

## Generación del ID de proceso (PID)

El PID es un identificador corto y único por sesión de agente. No necesita ser
un PID real del sistema operativo. Recomendado: 4 caracteres alfanuméricos aleatorios.

Ejemplos válidos: `a3f9`, `x7k2`, `m001`, `zz42`

En terminal se puede generar con:
```bash
openssl rand -hex 2   # genera 4 caracteres hex, ej: "3fa8"
```

O simplemente un timestamp corto:
```bash
date +%H%M   # ej: "1042"
```

---

## Nombre de agente

Usar nombres descriptivos de la función del agente, no genéricos:

| ✅ Bueno | ❌ Evitar |
|---------|----------|
| `refactor-agent` | `agent-1` |
| `test-writer` | `claude` |
| `doc-agent` | `assistant` |
| `lint-checker` | `agente` |

Si hay múltiples instancias del mismo tipo, añadir sufijo: `test-writer-a`, `test-writer-b`

---

## Gestión de conflictos y colisiones

- **No sobrescribir nunca** — siempre añadir al final del archivo (`>>` en bash)
- Si dos agentes necesitan el mismo recurso, el segundo debe escribir estado BLOQUEADO
  y esperar a que el primero escriba COMPLETADO
- En caso de duda sobre si otro agente sigue activo: esperar 5 minutos y si no hay
  actualización, asumir que el PID quedó huérfano y anotarlo en comentarios

---

## Comandos de terminal para escribir en chat.md

### Bash (GeminiCLI, cualquier terminal)
```bash
# Añadir mensaje al chat (nunca sobrescribir)
cat >> chat.md << 'EOF'

---
**[INICIANDO]** · Agente: `mi-agente` · PID: `a1b2` · `$(date -u +%Y-%m-%dT%H:%M:%SZ)`
...
EOF
```

### Python (portable, recomendado para agentes programáticos)
```python
from datetime import datetime, timezone

def write_chat(agent, pid, estado, tarea, hecho, pendiente,
               bloqueos="ninguno", mejoras="—", para_siguiente="—", comentarios="—",
               filepath="chat.md"):
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    mensaje = f"""
---
**[{estado}]** · Agente: `{agent}` · PID: `{pid}` · `{timestamp}`

**Tarea:** {tarea}
**Estado:** {estado}
**Hecho:** {hecho}
**Pendiente:** {pendiente}
**Bloqueos:** {bloqueos}
**Mejoras detectadas:** {mejoras}
**Para el siguiente agente:** {para_siguiente}
**Comentarios:** {comentarios}

---
"""
    with open(filepath, "a", encoding="utf-8") as f:
        f.write(mensaje)
```

---

## Inicialización del chat.md

Si el archivo no existe, el primer agente debe crearlo con cabecera:

```markdown
# Agent Chat — Canal de Comunicación Multi-Agente

> Proyecto: <nombre-proyecto>
> Iniciado: <fecha>
> Protocolo: agent-chat v1.0

---
```

En bash:
```bash
if [ ! -f chat.md ]; then
  cat > chat.md << 'EOF'
# Agent Chat — Canal de Comunicación Multi-Agente

> Protocolo: agent-chat v1.0

---
EOF
fi
```

---

## Integración por tipo de agente

### GeminiCLI
Añadir al system prompt o contexto inicial:
```
Antes de empezar cualquier tarea, lee chat.md y escribe un mensaje INICIANDO.
Al terminar, escribe un mensaje COMPLETADO. Sigue el protocolo agent-chat.
Referencia: SKILL.md en este proyecto.
```

### Windsurf / Cursor (reglas del workspace)
Añadir a `.windsurf/rules.md` o `.cursorrules`:
```markdown
## Protocolo Agent Chat
- Leer chat.md al inicio de cada tarea
- Escribir mensaje INICIANDO antes de empezar
- Escribir mensaje COMPLETADO o ERROR al terminar
- Nunca sobrescribir chat.md, siempre append
- Seguir el formato definido en SKILL.md
```

### OpenClaw / agentes custom vía API
Incluir el contenido de este SKILL.md en el system prompt del agente, o referenciar
el archivo como contexto de inicio.

### Claude (claude.ai o Claude Code)
Este SKILL.md se activa automáticamente cuando la skill está instalada. Claude leerá
chat.md al inicio y escribirá los mensajes de estado según el protocolo.

---

## Resumen rápido (cheatsheet)

```
1. LEER chat.md completo
2. ESCRIBIR mensaje [INICIANDO] con PID único
3. Hacer la tarea
4. (Opcional) ESCRIBIR mensajes [EN PROGRESO] si la tarea es larga
5. ESCRIBIR mensaje [COMPLETADO] o [ERROR] al terminar
6. Nunca sobrescribir — siempre append
```