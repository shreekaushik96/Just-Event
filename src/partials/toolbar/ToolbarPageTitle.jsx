import { useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/components/menu';
import { useMenus } from '@/providers';
const ToolbarPageTitle = ({
  text
}) => {
  const {
    pathname
  } = useLocation();
  const {
    getMenuConfig
  } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);
  return <h1 className="text-xl font-medium leading-none text-gray-900">{text ?? menuItem?.title}</h1>;
};
export { ToolbarPageTitle };