import { useDispatch, useSelector } from 'react-redux';
import { menuList } from '../../../constants/menuList';
import { setCategory } from '../../../redux/action';
import Paragraph from '../../common/Paragraph';
import './navbar.scss';
export default function NavBar() {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: any) => state.category.activeCategory,
  );

  const handleMenuClick = (category: number) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="navbar-section">
      {menuList.map(({ id, title }) => (
        <div
          key={id}
          onClick={() => handleMenuClick(id)}
          className={activeCategory === id ? 'active' : ''}
        >
          <Paragraph weight="extrabold">{title}</Paragraph>
        </div>
      ))}
    </div>
  );
}
