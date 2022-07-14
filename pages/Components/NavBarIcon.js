const NavBarIcon = ({icon, text = 'tooltip default text 💡'}) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

export default NavBarIcon;