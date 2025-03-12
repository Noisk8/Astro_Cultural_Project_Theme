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
    nombre: 'Platohedro - Medellín',
    descripcion: 'Ciudad de la eterna primavera, donde el arte y la cultura se fusionan con la innovación.',
    imagen: '/imagenes/FACHADA1.jpg',
    eventos: [
      {
        id: 'festival-arte-urbano',
        titulo: 'Actividad en plato 1',
        fecha: '15-20 Marzo, 2024',
        descripcion: 'Intervenciones artísticas en diferentes espacios de la ciudad',
        imagen: 'https://via.placeholder.com/400x300'
      },
      {
        id: 'encuentro-artistas-emergentes',
        titulo: 'Encuentro de Artistas Emergentes',
        fecha: '5-8 Abril, 2024',
        descripcion: 'Exposición colectiva en la Galería de Arte Moderno',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: 'Visita el Faro',
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
    imagen: '/imagenes/foto2.jpg',
    eventos: [
      {
        id: 'Taller de Art of hosing',
        titulo: 'Taller de Art of hosing',
        fecha: '1-30 Mayo, 2024',
        descripcion: 'Muestra internacional en el Museo de Arte Moderno',
        imagen: '/imagenes/foto3.jpg'
      },
      {
        id: 'Taller Danzar la vida',
        titulo: 'Taller Danzar la vida',
        fecha: '10-15 Mayo, 2024',
        descripcion: 'Serie de presentaciones en espacios alternativos',
        imagen: '/imagenes/foto3.jpg'
      },
      {
        id: 'Visita a proyectos',
        titulo: 'Visita a proyectos',
        fecha: '20 Mayo, 2024',
        descripcion: 'Diálogo entre artistas locales e internacionales',
        imagen: '/imagenes/foto2.jpg'
      }
    ]
  }
};
