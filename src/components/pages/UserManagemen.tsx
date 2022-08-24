import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random/"
          userName="じゃけぇ"
          fullName="aaaa aaaa"
        />
      </WrapItem>
    </Wrap>
  );
});
