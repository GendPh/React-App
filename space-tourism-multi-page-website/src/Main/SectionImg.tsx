interface ImgInf {
  src: string;
  name: string;
  specialClass: string;
}

export default function SectionImg({ src, name, specialClass }: ImgInf) {
  return (
    <img
      className={`w-44 md:w-64 aspect-square mx-auto ${specialClass}`}
      src={src}
      alt={name}
    />
  );
}
