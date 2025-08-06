import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useAuthContext } from "@/auth";
import { useLanguage } from "@/i18n";
import { toAbsoluteUrl } from "@/utils";
import { DropdownUserLanguages } from "./DropdownUserLanguages";
import { useSettings } from "@/providers/SettingsProvider";
import { DefaultTooltip, KeenIcon } from "@/components";
import {
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuSeparator,
  MenuArrow,
  MenuIcon,
} from "@/components/menu";
const DropdownUser = ({ menuItemRef }) => {
  const { settings, storeSettings } = useSettings();
  const { logout } = useAuthContext();
  const { isRTL } = useLanguage();
  const handleThemeMode = (event) => {
    const newThemeMode = event.target.checked ? "dark" : "light";
    storeSettings({
      themeMode: newThemeMode,
    });
  };
  const buildHeader = () => {
    return (
      <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
        <div className="flex items-center gap-2">
          <img
            className="size-9 rounded-full"
            src={toAbsoluteUrl("/images/user_img.jpg")}
            alt=""
          />
          <div className="flex flex-col gap-1.5">
            <Link
              to="/account/hoteme/get-stard"
              className="text-sm text-gray-800 hover:text-primary font-semibold leading-none"
            >
              Ragnar Lothbrok
            </Link>
            <a
              href="mailto:c.fisher@gmail.com"
              className="text-xs text-gray-600 hover:text-primary font-medium leading-none"
            >
              ragnar.lothbrok@gmail.com
            </a>
          </div>
        </div>
        {/* <span className="badge badge-xs badge-primary badge-outline">Pro</span> */}
      </div>
    );
  };
  const buildMenu = () => {
    return (
      <Fragment>
        <MenuSeparator />
        <div className="flex flex-col">
          {/* <MenuItem>
            <MenuLink path="/public-profile/profiles/default">
              <MenuIcon className="menu-icon">
                <KeenIcon icon="badge" />
              </MenuIcon>
              <MenuTitle>
                <FormattedMessage id="USER.MENU.PUBLIC_PROFILE" />
              </MenuTitle>
            </MenuLink>
          </MenuItem> */}
          {/* my profile */}
          <MenuItem>
            <MenuLink path="/account/home/user-profile">
              <MenuIcon>
                <KeenIcon icon="profile-circle" />
              </MenuIcon>
              <MenuTitle>
                <FormattedMessage id="USER.MENU.MY_PROFILE" />
              </MenuTitle>
            </MenuLink>
          </MenuItem>

          {/* my leads */}
          <MenuItem>
            <MenuLink path="">
              <MenuIcon>
                <i className="ki-filled ki-ki-filled ki-abstract-18"></i>
              </MenuIcon>
              <MenuTitle>My Leads</MenuTitle>
            </MenuLink>
          </MenuItem>

          {/* billing */}
          <MenuItem>
            <MenuLink path="/account/billing/basic">
              <MenuIcon>
                <KeenIcon icon="icon" />
              </MenuIcon>
              <MenuTitle>
                <FormattedMessage id="USER.MENU.BILLING" />
              </MenuTitle>
            </MenuLink>
          </MenuItem>

          {/* settings */}
          <MenuItem>
            <MenuLink path="/account/billing/basic">
              <MenuIcon>
                <KeenIcon icon="setting-2" />
              </MenuIcon>
              <MenuTitle>Settings</MenuTitle>
            </MenuLink>
          </MenuItem>

          {/* activity */}
          <MenuItem>
            <MenuLink path="">
              <MenuIcon>
                <i className="ki-filled ki-calendar"></i>
              </MenuIcon>
              <MenuTitle>Activity</MenuTitle>
            </MenuLink>
          </MenuItem>

          <MenuSeparator />

          {/* language */}
          <DropdownUserLanguages menuItemRef={menuItemRef} />

          {/* 
          <MenuItem
            toggle="dropdown"
            trigger="hover"
            dropdownProps={{
              placement: isRTL() ? "left-start" : "right-start",
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: isRTL() ? [50, 0] : [-50, 0], // [skid, distance]
                  },
                },
              ],
            }}
          >
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="setting-2" />
              </MenuIcon>
              <MenuTitle>
                <FormattedMessage id="USER.MENU.MY_ACCOUNT" />
              </MenuTitle>
              <MenuArrow>
                <KeenIcon
                  icon="right"
                  className="text-3xs rtl:transform rtl:rotate-180"
                />
              </MenuArrow>
            </MenuLink>
            <MenuSub className="menu-default light:border-gray-300 w-[200px]] md:w-[220px]">
              <MenuItem>
                <MenuLink path="/account/home/get-started">
                  <MenuIcon>
                    <KeenIcon icon="coffee" />
                  </MenuIcon>
                  <MenuTitle>
                    <FormattedMessage id="USER.MENU.GET_STARTED" />
                  </MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink path="/account/home/user-profile">
                  <MenuIcon>
                    <KeenIcon icon="some-files" />
                  </MenuIcon>
                  <MenuTitle>
                    <FormattedMessage id="USER.MENU.MY_PROFILE" />
                  </MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink path="/account/billing/basic">
                  <MenuIcon>
                    <KeenIcon icon="icon" />
                  </MenuIcon>
                  <MenuTitle>
                    <FormattedMessage id="USER.MENU.BILLING" />
                  </MenuTitle>
                  <DefaultTooltip
                    title={
                      <FormattedMessage id="USER.MENU.PAYMENT_&_SUBSCRIPTION_INFO" />
                    }
                    placement="top"
                    className="max-w-48"
                  >
                    <KeenIcon
                      icon="information-2"
                      className="text-gray-500 text-md"
                    />
                  </DefaultTooltip>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink path="/account/security/overview">
                  <MenuIcon>
                    <KeenIcon icon="medal-star" />
                  </MenuIcon>
                  <MenuTitle>
                    <FormattedMessage id="USER.MENU.SECURITY" />
                  </MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink path="/account/members/teams">
                  <MenuIcon>
                    <KeenIcon icon="setting" />
                  </MenuIcon>
                  <MenuTitle>
                    <FormattedMessage id="USER.MENU.MEMBERS_&_ROLES" />
                  </MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink path="/account/integrations">
                  <MenuIcon>
                    <KeenIcon icon="switch" />
                  </MenuIcon>
                  <MenuTitle>
                    <FormattedMessage id="USER.MENU.INTEGRATIONS" />
                  </MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuSeparator />
              <MenuItem>
                <MenuLink path="/account/security/overview">
                  <MenuIcon>
                    <KeenIcon icon="shield-tick" />
                  </MenuIcon>
                  <MenuTitle>
                    <FormattedMessage id="USER.MENU.NOTIFICATIONS" />
                  </MenuTitle>
                  <label className="switch switch-sm">
                    <input
                      name="check"
                      type="checkbox"
                      checked
                      onChange={() => {}}
                      value="1"
                    />
                  </label>
                </MenuLink>
              </MenuItem>
            </MenuSub>
          </MenuItem>
          <MenuItem>
            <MenuLink path="https://devs.keenthemes.com">
              <MenuIcon>
                <KeenIcon icon="message-programming" />
              </MenuIcon>
              <MenuTitle>
                <FormattedMessage id="USER.MENU.DEV_FORUM" />
              </MenuTitle>
            </MenuLink>
          </MenuItem>
          */}
        </div>
      </Fragment>
    );
  };
  const buildFooter = () => {
    return (
      <div className="flex flex-col">
        {/* <div className="menu-item mb-0.5">
          <div className="menu-link">
            <span className="menu-icon">
              <KeenIcon icon="moon" />
            </span>
            <span className="menu-title">
              <FormattedMessage id="USER.MENU.DARK_MODE" />
            </span>
            <label className="switch switch-sm">
              <input
                name="theme"
                type="checkbox"
                checked={settings.themeMode === "dark"}
                onChange={handleThemeMode}
                value="1"
              />
            </label>
          </div>
        </div> */}

        <div className="menu-item mb-0.5">
          <div className="menu-link" onClick={logout}>
            <span className="menu-icon">
              <i className="ki-filled ki-exit-left"></i>
            </span>
            <span className="menu-title">
              <FormattedMessage id="USER.MENU.LOGOUT" />
            </span>
          </div>
        </div>

        <MenuSeparator />
        <div className="flex items-center gap-2 px-4.5 my-2">
          <a
            className="btn btn-sm btn-light w-full"
            href="#"
            title="Download App"
          >
            <img
              className="dark:hidden h-5"
              src={toAbsoluteUrl("/media/brand-logos/apple-black.svg")}
              alt="iOS app"
            />
            <img
              className="light:hidden h-5"
              src={toAbsoluteUrl("/media/brand-logos/apple-white.svg")}
              alt="iOS app"
            />{" "}
            iPhone
          </a>
          <a
            className="btn btn-sm btn-light w-full"
            href="#"
            title="Download App"
          >
            <img
              className="h-5"
              src={toAbsoluteUrl("/media/brand-logos/android.svg")}
              alt="Android app"
            />{" "}
            Android
          </a>
        </div>
        {/* <MenuSeparator />  */}

        {/* <div className="menu-item px-4 py-1.5">
          <a onClick={logout} className="btn btn-sm btn-light justify-center">
            <FormattedMessage id="USER.MENU.LOGOUT" />
          </a>
        </div> */}
      </div>
    );
  };
  return (
    <MenuSub
      className="menu-default light:border-gray-300 w-[200px] md:w-[250px]"
      rootClassName="p-0"
    >
      {buildHeader()}
      {buildMenu()}
      {buildFooter()}
    </MenuSub>
  );
};
export { DropdownUser };
