console.log("Aca van a ir todos los tipos de datos");

export interface Questions {
  pregunta: string;
  respuesta: string;
}

export interface CardQuestion {
  pregunta: string;
  respuesta: string;
}

export interface ContacMeInterface {
  text: string;
  link: string;
  classname?: string;
}

export interface MenuItenrface {
  text: string;
  to: string;
}

export interface ServicesTypes {
  title: string;
  description: string;
  image: string;
  modal: ModalTypes;
}

export interface ModalTypes {
  service1?: {
    text: string,
    wppLink: string
  };
  service2?: {
    text: string,
    wppLink: string
  };
  service3?: {
    text: string,
    wppLink: string
  };
  service4?: {
    text: string,
    wppLink: string
  };
}
