import PropTypes from 'prop-types';

const ActionButton = ({ href, children, className, external }) => {
  const props = {
    className: className || '',
    href: href || '#',
  };

  if (external) {
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
  }

  return (
    <a {...props}>
      <button className={className}>{children}</button>
    </a>
  );
};

ActionButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
};

export default ActionButton;
