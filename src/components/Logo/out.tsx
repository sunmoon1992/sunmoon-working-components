import Logo from './Logo';
import Group from './Group';

type LogoComponentType = typeof Logo & {
  Group: typeof Group;
};

const LogoComponent = Logo as LogoComponentType;
LogoComponent.Group = Group;

export default LogoComponent;
