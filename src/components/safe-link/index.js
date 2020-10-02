function SafeLink(props) {
  const { href, children } = props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default SafeLink;
