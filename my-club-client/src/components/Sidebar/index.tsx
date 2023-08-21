import { useSideBar } from '@/hooks/useSidebar';
import { useResponsive } from 'ahooks';
import DesktopSidebar from './DesktopSidebar';
import { MobileSideBar } from './MobileSidebar';
import { useAppDispatch } from '@/hooks/useRedux';
import { logout } from '@/features/AuthSlice';
import { useNavigate } from 'react-router';
import { ROUTE_PATHS } from '@/config/route.config';

function ResponsiveSidebar({ appVersion }: any) {
  const { md } = useResponsive();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { expanded, selected, selectItem, toggle, open, close } = useSideBar();

  const useExpandedValue = (collapseValue: any, expandedValue: any) => {
    return expanded ? expandedValue : collapseValue;
  };

  const sidebarProps = {
    expanded,
    selected,
    appVersion,
    onOpen: open,
    onClose: close,
    onToggle: toggle,
    onSelectedItem: selectItem,
    useExpandedValue,
    onClickLogout: () => {
      dispatch(logout());
      navigate(ROUTE_PATHS.LOGIN);
    },
  };

  return md ? (
    <DesktopSidebar {...sidebarProps} />
  ) : (
    <MobileSideBar {...sidebarProps} />
  );
}
export default ResponsiveSidebar;
