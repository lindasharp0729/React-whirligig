

const Slide = ({
  basis = '100%',
  gutter = '1em',
  className = '',
  children,
  ...props
}) => (
  <div
    className={className}
    style={{
      flex: '0 0 auto',
      width: basis,
      marginLeft: gutter,
    }}

    
  >


  </div>
)

export default Slide
