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
      { href: "/automatizacion-procesos-clinicas", label: "Automatización de procesos" },
      { href: "/desarrollo-software-medida", label: "Software a medida" },
      { href: "/blog/automatizar-control-stock-clinicas-consultorios-medicos", label: "Blog: automatizar stock" },
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
          " serio empieza por definir `Item`, `Ubicación`, `Movimiento` (entrada, salida, transferencia, ajuste) y quién puede confirmar cada uno — no por elegir el color del dashboard.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si querés el enfoque en automatizar alertas e integraciones, seguí en ",
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
          "Un faltante no es solo un gasto: puede frenar una cirugía o forzar un reemplazo de último minuto con proveedor caro. Los vencimientos mal llevados son riesgo directo. Por eso el inventario va ligado a trazabilidad y permisos, no a ‘cantidad aproximada en la heladera’.",
        ],
      },
      {
        type: "ul",
        items: [
          "Descartables y kits con lote cuando corresponde",
          "Medicamentos según política interna (no doy consejo clínico; hablo de registro)",
          "Insumos por sector (quirófano vs gabinete vs recepción)",
        ],
      },
      { type: "h2", id: "problemas", text: "Señales de que el Excel ya no alcanza" },
      {
        type: "ul",
        items: [
          "Dos personas actualizan la misma hoja y ‘el que guardó último gana’.",
          "Comprás urgente porque ‘no hay’ y al mes aparecen tres cajas detrás de un estante.",
          "No podés responder en cinco minutos cuánto gastaste por especialidad en insumos.",
        ],
      },
      { type: "h2", id: "que-hace", text: "Qué debe hacer el sistema (mínimo viable)" },
      {
        type: "paragraph",
        segments: [
          "Movimientos con auditoría, stock por ubicación, alertas de mínimo y alertas de vencimiento con reglas distintas por rubro. Reportes que dirección entienda sin pedirle a alguien que ‘arregle la pivot’. Si compras o facturación viven en otro sistema, ahí entra ",
          { href: "/automatizacion-procesos-clinicas", label: "automatización" },
          " para que un movimiento aprobado dispare lo que corresponda sin reescribir a mano.",
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
          "Pensá tablas, no pantallas: `Producto` con unidad de medida, `StockUbicacion` con cantidad disponible y reservada, `Movimiento` con tipo y usuario. Desde ahí las pantallas son consecuencia. Si saltás este paso, terminás con un front lindo y números que nadie confía.",
        ],
      },
      { type: "h2", id: "a-medida", text: "¿Todo a medida?" },
      {
        type: "paragraph",
        segments: [
          "No siempre: a veces un núcleo estándar + ",
          { href: "/desarrollo-software-medida", label: "reglas propias" },
          " en la capa de integración alcanza. A medida tiene sentido cuando tus circuitos de consumo interno, kits o multi-sede no entran en plantillas.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Ordenar stock es ordenar responsabilidades. El software acelera lo que ya decidiste en papel; no reemplaza la conversación con depósito y gabinete.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para alcance: ",
          { href: "/#contacto", label: "contacto" },
          " o ",
          { href: WA_STOCK, label: "WhatsApp", external: true },
          ".",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué es un sistema de control de stock para clínicas?",
            answer:
              "Es un software para administrar insumos, materiales y movimientos con reglas, alertas y reportes adaptados a instituciones de salud.",
          },
          {
            question: "¿Qué insumos se pueden controlar?",
            answer:
              "Medicamentos según política interna, descartables, materiales médicos, insumos odontológicos, laboratorio, equipamiento y otros rubros definidos por la institución.",
          },
          {
            question: "¿Se puede automatizar el inventario médico?",
            answer:
              "Sí: movimientos automáticos, alertas de mínimos y vencimientos, e integración con compras u otros sistemas cuando hay APIs o procesos claros.",
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
      "Regla de tres umbrales que sí disparan alerta, por qué la automatización sin movimientos auditables es humo, y cómo conectar compras sin duplicar el Excel.",
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
          "Una farmacia interna tenía alertas de ‘stock bajo’ todos los días a las 8:00 y las ignoraban: el 70% eran falsos positivos porque el umbral era el mismo para insumos de alto rotación y para ítems que se usaban una vez al mes. Al bajar mínimos por categoría y por sede, las alertas volvieron a significar algo y dejaron de ser ruido de fondo.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Automatizar inventario no es ‘mandar un mail’: es que un movimiento confirmado (consumo, compra recibida, transferencia) actualice stock y deje rastro auditable. Si eso no pasa, seguís con Excel con pasos extra. El servicio de ",
          { href: "/control-stock-clinicas", label: "control de stock para clínicas" },
          " tiene que apoyarse en ese principio o los números no los va a defender nadie en una auditoría.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El artículo hermano sobre pérdidas, vencimientos y modelo mínimo de tablas está en ",
          {
            href: "/blog/sistema-control-stock-clinicas-insumos-medicos-perdidas",
            label: "stock en clínicas e insumos médicos",
          },
          ".",
        ],
      },
      { type: "h2", id: "problemas", text: "Qué pasa cuando el control es solo ‘la planilla’" },
      {
        type: "paragraph",
        segments: [
          "Aparecen mermas sin explicación que en realidad son consumos sin registro, faltantes críticos antes de agendas densas, compras duplicadas por pánico y peleas entre depósito y gabinete porque ‘el Excel decía otra cosa’. No es mala fe: es falta de movimiento atómico con usuario y motivo.",
        ],
      },
      { type: "h2", id: "funciones", text: "Qué tiene que hacer el software (sin lista infinita)" },
      {
        type: "paragraph",
        segments: [
          "Movimientos automáticos con permisos: al confirmar un consumo o una recepción de compra, que el stock se actualice solo y quede quién lo hizo. Control por ubicación o sector (depósito vs piso vs gabinete) con transferencias trazables, no un número global que nadie puede auditar cuando falta algo en un lugar y sobra en otro.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Alertas con umbrales realistas por categoría y sede, vencimientos con reglas distintas por tipo de ítem, e historial de entradas, salidas y ajustes con motivo. Los reportes para dirección tienen que salir de esos movimientos, no de una pivot que se rompe cada vez que alguien inserta una fila.",
        ],
      },
      { type: "h2", id: "integracion", text: "Integración con el resto de la operación" },
      {
        type: "paragraph",
        segments: [
          "Compras, facturación o solicitudes desde sectores pueden colgar de ",
          { href: "/automatizacion-procesos-clinicas", label: "APIs y automatización" },
          " cuando hay contrato claro de eventos. Si no hay API, al menos proceso escrito de qué dispara qué; si no, la ‘integración’ es mail reenviado y volvés al caos.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El objetivo no es pantalla linda: es que dirección pueda responder en cinco minutos cuánto se gastó por especialidad o sector en un mes, y que depósito sepa qué vence primero sin depender de que alguien ‘pase’ la planilla.",
        ],
      },
      { type: "h2", id: "beneficios", text: "Qué ganás cuando deja de ser humo" },
      {
        type: "paragraph",
        segments: [
          "Menos horas reconciliando, menos compras de emergencia caras, menos cirugías o agendas frenadas por un ítem que ‘nadie sabía que no estaba’. La trazabilidad no es burocracia extra: es lo que te permite explicar mermas y dormir sin miedo a la auditoría interna.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Automatizar inventario prepara la operación para crecer sin que todo dependa de la memoria de dos personas. Para ver tu caso, usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles más abajo.",
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
