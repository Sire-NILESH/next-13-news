import useAuth from "@/hooks/useAuth";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

const NavbarAvatar = () => {
  const { user, logout } = useAuth();

  return (
    <Dropdown isDisabled placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          showFallback
          as="button"
          className="transition-transform"
          color="secondary"
          name={
            user?.displayName
              ? user?.displayName
              : user?.email
              ? user?.email
              : "unknown user"
          }
          size="sm"
          src={user?.photoURL ? user.photoURL : undefined}
        />
      </DropdownTrigger>

      <DropdownMenu closeOnSelect aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">{`Signed in as ${
            user?.displayName ? user?.displayName : ""
          }`}</p>
          <p className="font-semibold">{user?.email}</p>
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onPress={logout}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarAvatar;
