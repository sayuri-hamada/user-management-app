import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random/"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      {users.map((user) => (
        <UserDetailModal
          user={selectedUser}
          key={user.id}
          isOpen={isOpen}
          onClose={onClose}
        />
      ))}
    </>
  );
});
