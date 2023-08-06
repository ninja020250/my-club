import { useTheme } from '@chakra-ui/react';
import {
  Menu,
  HambergerMenu,
  Game,
  ArrowRight2,
  ArrowLeft2,
  ProfileCircle,
} from 'iconsax-react';
import { Suspense } from 'react';

const MyIcon = ({
  size = 32,
  color,
  name = '',
  variant = 'Outline',
  ...rest
}: {
  size?: number;
  color?: string;
  name?: string;
  variant?:
    | 'Outline'
    | 'Linear'
    | 'Broken'
    | 'Bold'
    | 'Bulk'
    | 'TwoTone'
    | undefined;
} & any) => {
  const theme = useTheme();

  const _color = color ?? theme.colors.teal[400];

  const listIcons: any = {
    hambergerMenu: (
      <HambergerMenu size={size} color={_color} variant={variant} {...rest} />
    ),
    menu: <Menu size={size} color={_color} variant={variant} {...rest} />,
    game: <Game size={size} color={_color} variant={variant} {...rest} />,
    arrowRight2: (
      <ArrowRight2 size={size} color={_color} variant={variant} {...rest} />
    ),
    arrowLeft2: (
      <ArrowLeft2 size={size} color={_color} variant={variant} {...rest} />
    ),
    profileCircle: (
      <ProfileCircle size={size} color={_color} variant={variant} {...rest} />
    ),
  };
  return (
    <>
      {listIcons[name] && (
        <Suspense fallback={null}>{listIcons[name]}</Suspense>
      )}
    </>
  );
};

export default MyIcon;
