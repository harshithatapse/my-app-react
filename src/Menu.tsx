import MenuItem from "./MenuItem";

type MenuProps = {
  menuList: string[];
  menuTitle: string;
  selectedItem?: string;
  isSelected?: boolean;
  onLinkClick: (selectedTitle: string) => void;
  onToggleClick: (selectedMenu: string) => void;
};

function Menu(props: MenuProps) {
  return (
    <div onClick={() => props.onToggleClick(props.menuTitle)}>
      <h4>{props.menuTitle}</h4>
      <div className="list">
        {props.isSelected && (
          <ol>
            {props.menuList.map((options) => (
              <MenuItem
                isActive={options === props.selectedItem}
                onLinkClick={props.onLinkClick}
              >
                {options}
              </MenuItem>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default Menu;
