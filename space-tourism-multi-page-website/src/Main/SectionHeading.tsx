interface HeadingText {
  number: number;
  title: string;
}

export default function SectionHeading({ number, title }: HeadingText) {
  return (
    <h5 className="heading-5 md:text-3xl text-white md:text-start md:px-10">
      <span className="opacity-50 font-bold mr-4">0{number}</span>
      {title}
    </h5>
  );
}
