interface AreaMontañosa {
    codigo: string;
    areaMontaosa: string;
}

interface CodigoDia {
    codigo: string;
    dia: string;
}

// Define una interfaz para el tipo de los datos de sección
interface SeccionData {
    prediccion: {
        apartado: Apartado[];
    };
    atmosferalibre: {
        apartado: Apartado[];
    };
    sensacion_termica: {
        lugar: Lugar[];
    };
}

// Define una interfaz para el tipo de los datos de apartado
interface Apartado {
    cabecera: string;
    texto: string;
    nombre: string;
}

// Define una interfaz para el tipo de los datos de lugar
interface Lugar {
    minima: number;
    stminima: number;
    maxima: number;
    stmaxima: number;
    nombre: string;
}

interface Region {
    codigoProvince: string;
    nombre: string;
}

interface Province {
    codigo: string;
    provincia: string;
}

interface Option7 {
    codigo: string;
    dia: string;
}

interface UvData {
    Ciudad: string;
    'Radiación UV': string;
}

interface excelCod {
    CODAUTO: string;
    CPRO: string;
    CMUN: string;
    DC: string;
    NOMBRE: string;
}

interface DatosFormateados {
    provincia: string;
    nombre: string;
    elaborado: string;
    prediccion: { dia: any[] };
    origen: { productor: string; web: string; enlace: string; language: string; copyright: string };
    id: number;
}

interface DatosFormateados2 {
    elaborado: string;
    id: number;
    origen: { productor: string; web: string; enlace: string; language: string; copyright: string };
    prediccion: { dia: any[] };
    provincia: string;
    nombre: string;
}
