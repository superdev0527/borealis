import ToggleButton from "@material-ui/lab/ToggleButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as SunIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/settings.svg";
import { t } from "@lingui/macro";

function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <ToggleButton
      className="toggle-button"
      type="button"
      title={t`Change Theme`}
      value="check"
      onClick={e => toggleTheme(e)}
    >
      <SvgIcon component={SunIcon} style={{ color: "white" }} />
    </ToggleButton>
  );
}

export default ThemeSwitcher;
