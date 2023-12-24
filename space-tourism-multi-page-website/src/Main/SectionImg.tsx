interface ImgInf {
  src: string;
  name: string;
  specialClass: string;
}

export default function SectionImg({ src, name, specialClass }: ImgInf) {
  return <img className={`w-44 ${specialClass}`} src={src} alt={name} />;
}
