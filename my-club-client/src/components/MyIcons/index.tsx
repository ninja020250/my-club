import { useTheme } from '@chakra-ui/react';
import { HambergerMenu, Game, ArrowRight2, ArrowLeft2 } from 'iconsax-react';
import { Suspense } from 'react';

const MyIcon = ({
  size = 32,
  color,
  name = '',
  variant = 'Outline',
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
}) => {
  const theme = useTheme();

  const _color = color ?? theme.colors.teal[400];

  const listIcons: any = {
    hambergerMenu: (
      <HambergerMenu size={size} color={_color} variant={variant} />
    ),
    game: <Game size={size} color={_color} variant={variant} />,
    arrowRight2: <ArrowRight2 size={size} color={_color} variant={variant} />,
    arrowLeft2: <ArrowLeft2 size={size} color={_color} variant={variant} />,
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
