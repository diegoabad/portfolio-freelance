export type TestimonialProject =
  | { projectName: string }
  | { projectNames: readonly [string, ...string[]] };

export type Testimonial = TestimonialProject & {
  name: string;
  role: string;
  roleLine2?: string;
  imageSrc: string;
  linkedInUrl?: string;
  quote: string;
  /** Min-height = altura máxima medida de las demás tarjetas (sin valores fijos en rem). */
  syncMinHeightFromPeers?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcelo Solovey",
    role: "Director de TI en Grupo INECO",
    imageSrc: "/testimonials/testimonial-marcelo-solovey.png",
    linkedInUrl: "https://www.linkedin.com/in/msolovey",
    projectNames: ["App pacientes", "Informes con IA"],
    quote:
      "Tengo el placer de conocer a Diego por distintos proyectos en conjunto y, después de más de un año trabajando juntos, puedo decir que es una persona súper comprometida con los resultados. Se involucra de verdad en entender la dinámica y las necesidades del cliente para poder aportar soluciones creativas y bien ajustadas a lo que se busca.\n\nAdemás de cumplir con lo que se le pide, siempre suma ideas y propuestas que mejoran el resultado final. Da gusto trabajar con alguien así, porque se nota el compromiso y las ganas de que las cosas queden bien. La verdad, quedamos más que satisfechos con su trabajo!",
  },
  {
    name: "Matias Papasso",
    role: "Team leader de infraestructura en Charles Taylor Insurtech",
    imageSrc: "/testimonials/testimonial-matias-papasso.png",
    linkedInUrl: "https://www.linkedin.com/in/matias-papasso-37108b15/",
    projectName: "Cogniare",
    syncMinHeightFromPeers: true,
    quote:
      "Diego es un excelente profesional; realizó un proyecto desde cero tal como se le fue pidiendo: estética, funcionalidad y practicidad. Sin dudas alguien a quien recomendar: de confianza y comprometido.",
  },
  {
    name: "José Contreras Márquez",
    role: "Instructor certificado ASME",
    imageSrc: "/testimonials/testimonial-jose-contreras.png",
    linkedInUrl: "https://www.linkedin.com/in/jose-contreras-marquezuez",
    projectNames: ["Optim", "Remaint"],
    quote:
      "Desde principios de 2025 he tenido la oportunidad de trabajar con Diego Abad en el desarrollo de software. Afortunadamente he conseguido en Diego a un extraordinario profesional en el campo de la programación y de la informática en general. Sin lugar a dudas puedo dar fe de la responsabilidad y calidad del trabajo de Diego Abad.",
  },
];
