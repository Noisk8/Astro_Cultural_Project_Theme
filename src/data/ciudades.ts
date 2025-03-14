export interface Evento {
  titulo: string;
  fecha: string;
  descripcion: string;
  imagen?: string;
  video?: string;
  id?: string;
}

export interface Ciudad {
  nombre: string;
  descripcion: string;
  imagen: string;
  eventos: Evento[];
}

export interface Ciudades {
  [key: string]: Ciudad;
}

export const ciudades: Ciudades = {
  medellin: {
    nombre: 'Medellín',
    descripcion: 'Intercambio con en Medellín con el ecosistema de la acsa cultural',
    imagen: '/imagenes/mdmd.webp',
    eventos: [
      {
        id: 'actividad-en-plato',
        titulo: 'Actividad en plato',
        fecha: '15-20 Marzo, 2024',
        descripcion: 'Intervenciones artísticas en diferentes espacios de la ciudad',
        imagen: '/imagenes/enplato.jpg'
      },
      {
        id: 'visita-motivando-a-las-gyal',
        titulo: 'Visita Motivando a las Gyal',
        fecha: '5-8 Abril, 2024',
        descripcion: 'Exposición colectiva en la Galería de Arte Moderno',
        imagen: '/imagenes/motivando.jpg'
      },
      {
        id: 'visita-el-faro',
        titulo: 'Visita el Faro',
        fecha: '12 Abril, 2024',
        descripcion: 'Workshop sobre nuevas tecnologías en el arte',
        imagen: '/imagenes/Visita_Faro_Eleje_1.jpg'
      }
    ]
  },
  bogota: {
    nombre: 'Bogotá',
    descripcion: 'Capital cultural de Colombia, centro de convergencia artística y creativa.',
    imagen: '/imagenes/bogota.jpeg',
    eventos: [
      {
        id: 'taller-de-art-of-hosing',
        titulo: 'Taller de Art of hosing',
        fecha: '1-30 Mayo, 2024',
        descripcion: 'Muestra internacional en el Museo de Arte Moderno',
        imagen: '/imagenes/actividadcultural1.jpeg'
      },
      {
        id: 'taller-danzar-la-vida',
        titulo: 'Taller Danzar la vida',
        fecha: '10-15 Mayo, 2024',
        descripcion: 'Serie de presentaciones en espacios alternativos',
        imagen: '/imagenes/actividadcultural2.jpeg'
      },
      {
        id: 'visita-a-proyectos',
        titulo: 'Visita a proyectos',
        fecha: '20 Mayo, 2024',
        descripcion: 'Diálogo entre artistas locales e internacionales',
        imagen: '/imagenes/actividadcultural3.jpeg'
      }
    ]
  }
};
