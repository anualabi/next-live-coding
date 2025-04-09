type Props = {
  children?: React.ReactNode;
};

export default function ({ children }: Props) {
  return <div className="container mx-auto px-5">{children}</div>;
};
