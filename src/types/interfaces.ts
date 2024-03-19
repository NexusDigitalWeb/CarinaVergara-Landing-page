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
  important?: string;
  image: string;
  modal: ModalTypes[];
  is_a_unique_service: boolean;
}

export interface ModalTypes {
  text: string;
  wppLink: string;
  description: string;
}

export interface CarrouselTypes {
  classname?: string;
  isAnImage: boolean;
  imgSource?: string[];
  imgClassname?: string;
}

export interface ReviewsTypes {
  text: string;
  student: string;
}
