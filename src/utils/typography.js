import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';

// bootstrapTheme.baseFontSize = '16px';

// .overrideThemeStyles = ({ rhythm }, options) => ({
//     'h2,h3': {
//       marginBottom: rhythm(1/2),
//       marginTop: rhythm(2),
//     }
//   })

const typography = new Typography(bootstrapTheme);

export default typography;

