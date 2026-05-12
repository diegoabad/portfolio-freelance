import type { BlogPost } from "@/lib/blog-types";
import { whatsAppHref } from "@/lib/contact";

const WA_STOCK = whatsAppHref(
  "Hola Diego, leí el blog sobre stock en clínicas. Quiero consultar por sistema de inventario / control de insumos.",
);

/** Blog: control de stock e inventario en clínicas y salud. */
export const stockClinicasBlogArticles: BlogPost[] = [
  {
    slug: "sistema-control-stock-clinicas-insumos-medicos-perdidas",
    topicTrack: "stock-inventario",
    title: "Sistema de control de stock para clínicas: cómo organizar insumos médicos y reducir pérdidas",
    description:
      "Depósito que no sabía cuántos guantes quedaban por talle; número de mermas ‘sin explicación’; por qué el Excel explota antes que el software y qué modelo mínimo de movimientos alcanza.",
    metaTitle: "Control de stock para clínicas | Insumos médicos y software Argentina",
    metaDescription:
      "Control de stock para clínicas, software de inventario para clínicas y gestión de insumos médicos en Argentina: vencimientos, sectores, alertas y sistema de inventario para centros médicos.",
    publishedAt: "2026-04-25",
    category: "Stock, clínicas y salud",
    relatedPost: {
      slug: "automatizar-control-stock-clinicas-consultorios-medicos",
      title: "Cómo automatizar el control de stock en clínicas y consultorios médicos",
      description: "Enfoque en automatización, integraciones y software de inventario médico.",
    },
    resourceLinks: [
      { href: "/control-stock-clinicas", label: "Control de stock para clínicas" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_STOCK, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "En un consultorio odontológico de Rosario el depósito tenía tres cajas de guantes ‘M’ con etiquetas distintas y tres hojas de Excel que no coincidían. Cuando cerramos inventario físico vs planilla, faltaban ~180 cajas equivalentes en valor de un mes de alquiler del local. Nadie las había ‘robado’ de golpe: se habían ido en consumos sin registro y compras duplicadas por pánico.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Ese es el patrón que veo antes de hablar de software: el stock no es un número, es un flujo de movimientos con responsable. Un ",
          { href: "/control-stock-clinicas", label: "sistema de control de stock" },
          " serio empieza por definir ítem, ubicación y movimiento (entrada, salida, transferencia, ajuste) y quién puede confirmar cada uno — no por elegir el color del dashboard.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si querés el foco en alertas, umbrales e integración con compras, seguí en ",
          {
            href: "/blog/automatizar-control-stock-clinicas-consultorios-medicos",
            label: "cómo automatizar stock en clínicas",
          },
          ".",
        ],
      },
      { type: "h2", id: "importancia", text: "Por qué en salud el stock no es ‘administración’" },
      {
        type: "paragraph",
        segments: [
          "Un faltante no es solo un gasto: puede frenar una cirugía o forzar un reemplazo de último minuto con proveedor caro. Los vencimientos mal llevados son riesgo directo. Por eso el inventario va ligado a trazabilidad y permisos: descartables y kits con lote cuando corresponde, medicamentos según política interna de la institución (hablo de registro, no de consejo clínico), insumos separados por sector (quirófano vs gabinete vs recepción).",
        ],
      },
      { type: "h2", id: "problemas", text: "Señales de que el Excel ya no alcanza" },
      {
        type: "paragraph",
        segments: [
          "Dos personas actualizan la misma hoja y gana ‘el que guardó último’; comprás urgente porque ‘no hay’ y al mes aparecen tres cajas detrás de un estante; dirección no puede responder en cinco minutos cuánto gastaron por especialidad en insumos. Cuando aparecen juntas, el Excel dejó de ser herramienta y pasó a ser parche.",
        ],
      },
      { type: "h2", id: "que-hace", text: "Qué debe hacer el sistema (mínimo viable)" },
      {
        type: "paragraph",
        segments: [
          "Movimientos con auditoría, stock por ubicación, alertas de mínimo y de vencimiento con reglas distintas por rubro, reportes que salgan de esos movimientos y no de una pivot frágil. Si compras o facturación viven en otro sistema, los eventos aprobados pueden disparar el siguiente paso por API o jobs — pero solo después de que el movimiento de stock sea la verdad operativa.",
        ],
      },
      {
        type: "h2",
        id: "modelo-datos",
        text: "Modelo de datos mínimo (sin vender humo)",
      },
      {
        type: "paragraph",
        segments: [
          "Pensá tablas, no pantallas: producto con unidad de medida, stock por ubicación con cantidad disponible y reservada, movimiento con tipo y usuario. Desde ahí las pantallas son consecuencia. Si saltás este paso, terminás con un front lindo y números que nadie confía.",
        ],
      },
      { type: "h2", id: "a-medida", text: "¿Todo a medida?" },
      {
        type: "paragraph",
        segments: [
          "No siempre: a veces alcanza un núcleo estándar más reglas propias en la capa de integración cuando tus circuitos de consumo interno, kits o multi-sede no entran en plantillas. A medida tiene sentido cuando el genérico te obliga a mentir en el depósito.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Ordenar stock es ordenar responsabilidades. El software acelera lo que ya decidiste en papel; no reemplaza la conversación con depósito y gabinete. Para alcance usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles abajo.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué es un sistema de control de stock para clínicas?",
            answer:
              "Software para insumos y movimientos con reglas, alertas y reportes acordes a la operación — no un Excel con logo.",
          },
          {
            question: "¿Qué insumos se pueden controlar?",
            answer:
              "Los que la institución defina en catálogo: descartables, odontología, laboratorio, equipamiento, etc., con política interna para medicamentos.",
          },
          {
            question: "¿Se puede automatizar el inventario médico?",
            answer:
              "Sí: movimientos automáticos, alertas y conexión con compras cuando hay API o proceso claro. Sin movimiento auditado, no hay automatización real.",
          },
        ],
      },
    ],
  },
  {
    slug: "automatizar-control-stock-clinicas-consultorios-medicos",
    topicTrack: "stock-inventario",
    title: "Cómo automatizar el control de stock en clínicas y consultorios médicos",
    description:
      "Automatizar stock sin auditar físico primero es digitalizar el caos: caso Quilmes 42 cajas en sistema vs 6 reales, análisis ABC, modelo Producto/Lote/Movimiento y por qué el 80% del problema es disciplina antes que software.",
    metaTitle: "Automatizar stock en clínicas | Inventario médico Argentina",
    metaDescription:
      "Automatización de stock para clínicas, software de inventario médico y control de insumos en consultorios: alertas, sectores, integración y menos carga operativa.",
    publishedAt: "2026-05-06",
    category: "Stock y automatización",
    relatedPost: {
      slug: "sistema-control-stock-clinicas-insumos-medicos-perdidas",
      title: "Sistema de control de stock para clínicas: cómo organizar insumos médicos y reducir pérdidas",
      description: "Enfoque en organización, vencimientos, sectores y pérdidas.",
    },
    resourceLinks: [
      { href: "/control-stock-clinicas", label: "Control de stock para clínicas" },
      { href: "/automatizacion-procesos-clinicas", label: "Automatización de procesos" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_STOCK, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Automatizar el stock sin auditar físicamente primero es digitalizar el caos. El 80% de los problemas que veo en consultorios se resuelven con disciplina de registro, no con software más caro. No empieces automatizando: empezá contando. Hasta que cada salida tenga responsable y cada entrada tenga conteo, el sistema más caro va a registrar mentiras prolijas.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En una clínica de ginecología en Quilmes el sistema decía 42 cajas de un anticonceptivo específico; el conteo físico dio 6. La discrepancia era del orden del 86%: meses de salidas sin registro porque ‘lo cargo después’. Automatizar ese flujo sin corregir hábitos hubiera sido optimizar la mentira. Automatizar el caos es digitalizar la mentira.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El artículo hermano sobre pérdidas, vencimientos y operación diaria está en ",
          {
            href: "/blog/sistema-control-stock-clinicas-insumos-medicos-perdidas",
            label: "stock en clínicas e insumos médicos",
          },
          ". Acá el foco es auditoría, ABC y qué modelo de datos mínimo sostiene una automatización que no miente.",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-dicen",
        text: "Lo que no te dicen antes de comprar ‘módulo de inventario’",
      },
      {
        type: "ul",
        items: [
          "Los códigos de barra suman cuando hay alta rotación y muchas SKUs parecidas; sobran cuando tenés ~200 ítems estables y pocos movimientos: a veces checklist + responsable alcanza más que hardware.",
          "Stock por sector multiplica complejidad: si no hay disciplina de transferencia con firma o equivalente, solo tenés tres números en desacuerdo en lugar de uno.",
          "Análisis ABC: el 20% de los ítems suele representar el 80% del valor o del riesgo — ese 20% se cuenta semanalmente; el resto puede ir mensual. Mejor un sistema simple usado bien que un ERP usado mal.",
        ],
      },
      {
        type: "h2",
        id: "modelo-datos",
        text: "Modelo de datos mínimo y auditoría cíclica",
      },
      {
        type: "paragraph",
        segments: [
          "Antes del software: contar. Después, un modelo pequeño y honesto: producto, lote o equivalente cuando aplica vencimiento, movimiento (entrada / salida / ajuste) con usuario y motivo. La auditoría física debe preceder a la implementación o solo vas a conciliar fantasía.",
        ],
      },
      {
        type: "code",
        code: `-- Tablas mínimas (conceptual)
Producto(id, nombre, sku, umbral_abc, unidad)
Lote(id, producto_id, nro_lote, vencimiento, cantidad_inicial)
Movimiento(id, producto_id, lote_id nullable, tipo, cantidad, usuario_id, motivo, created_at)

-- Workflow ABC (ejemplo)
-- Semanal: todos los productos etiquetados A (alto impacto)
-- Mensual: B y C por muestreo o rotación
-- Ajuste: solo con rol autorizado + comentario obligatorio`,
      },
      { type: "h2", id: "problemas", text: "Qué pasa cuando el control es solo ‘la planilla’" },
      {
        type: "paragraph",
        segments: [
          "Aparecen mermas sin explicación que en realidad son consumos sin registro, faltantes críticos antes de agendas densas, compras duplicadas por pánico y peleas entre depósito y gabinete porque ‘el Excel decía otra cosa’. No es mala fe: es falta de movimiento atómico con usuario y motivo.",
        ],
      },
      { type: "h2", id: "funciones", text: "Qué tiene que hacer el software (después de la disciplina)" },
      {
        type: "paragraph",
        segments: [
          "Movimientos automáticos con permisos: al confirmar un consumo o una recepción de compra, que el stock se actualice solo y quede quién lo hizo. Sin eso, cualquier dashboard es maquillaje. El servicio de ",
          { href: "/control-stock-clinicas", label: "control de stock para clínicas" },
          " tiene que apoyarse en ese principio o los números no los va a defender nadie en una auditoría.",
        ],
      },
      { type: "h3", id: "sectores", text: "Control por sectores" },
      {
        type: "paragraph",
        segments: [
          "El mismo insumo vive en depósito, piso, gabinete o quirófano: necesitás ubicaciones o sectores, transferencias con responsable y stock por lugar — no un número global que nadie puede auditar cuando falta en un piso y sobra en otro.",
        ],
      },
      { type: "h3", id: "alertas", text: "Alertas inteligentes" },
      {
        type: "paragraph",
        segments: [
          "Umbrales por categoría y por sede (un guante no es igual que un reactivo que se usa una vez al mes). Vencimientos con reglas distintas por tipo de ítem y un dueño claro de quién actúa cuando salta la alerta.",
        ],
      },
      { type: "h3", id: "historial", text: "Historial de movimientos" },
      {
        type: "paragraph",
        segments: [
          "Cada entrada, salida, ajuste o transferencia con usuario, timestamp y motivo. Esa cola es la base para explicar mermas, preparar auditorías y dejar de pelear por ‘quién tocó el Excel’.",
        ],
      },
      { type: "h2", id: "integracion", text: "Integración con el resto de la operación" },
      {
        type: "paragraph",
        segments: [
          "Compras, facturación o solicitudes desde sectores pueden colgar de ",
          { href: "/automatizacion-procesos-clinicas", label: "APIs y automatización" },
          " cuando hay contrato claro de eventos. Si no hay API, al menos proceso escrito de qué dispara qué.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "El 80% de los problemas de stock se resuelven con disciplina, no con software. Antes del software: contar. Para ver tu caso, usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles más abajo.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué es un sistema de control de stock para clínicas?",
            answer:
              "Software para administrar insumos, materiales y movimientos de inventario en instituciones de salud, con reglas y reportes acordes a la operación.",
          },
          {
            question: "¿Qué insumos se pueden controlar?",
            answer:
              "Medicamentos según políticas internas, descartables, materiales médicos, insumos odontológicos, equipamiento y otros ítems definidos por la institución.",
          },
          {
            question: "¿Se puede automatizar el inventario médico?",
            answer:
              "Sí: muchos sistemas permiten registrar movimientos automáticamente, generar alertas y conectarse con compras u otros módulos.",
          },
          {
            question: "¿Conviene usar Excel para controlar stock?",
            answer:
              "Puede servir al inicio; a medida que crece la operación suelen aparecer errores, desorganización y falta de trazabilidad. Ahí conviene un sistema dedicado con reglas claras.",
          },
        ],
      },
    ],
  },
];
