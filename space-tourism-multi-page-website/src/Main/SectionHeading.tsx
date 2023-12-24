interface HeadingText {
  number: number;
  title: string;
}

export default function SectionHeading({ number, title }: HeadingText) {
  return (
    <h5 className="heading-5 text-white md:text-start">
      <span className="opacity-50 font-bold mr-4">0{number}</span>
      {title}
    </h5>
  );
}
