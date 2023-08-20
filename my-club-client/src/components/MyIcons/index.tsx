import { useTheme } from '@chakra-ui/react';
import {
  Home,
  Menu,
  Trash,
  Edit,
  Add,
  HambergerMenu,
  Game,
  ArrowRight2,
  ArrowLeft2,
  ProfileCircle,
  Category2,
  MoneyRecive,
  MoneySend,
  WalletMoney,
} from 'iconsax-react';
import { Suspense } from 'react';

const MyIcons = ({
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
    category2: (
      <Category2 size={size} color={_color} variant={variant} {...rest} />
    ),
    home: <Home size={size} color={_color} variant={variant} {...rest} />,
    moneyRecive: (
      <MoneyRecive size={size} color={_color} variant={variant} {...rest} />
    ),
    moneySend: (
      <MoneySend size={size} color={_color} variant={variant} {...rest} />
    ),
    trash: <Trash size={size} color={_color} variant={variant} {...rest} />,
    edit: <Edit size={size} color={_color} variant={variant} {...rest} />,
    add: <Add size={size} color={_color} variant={variant} {...rest} />,
    walletMoney: (
      <WalletMoney size={size} color={_color} variant={variant} {...rest} />
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

export default MyIcons;
