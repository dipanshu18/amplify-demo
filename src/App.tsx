import {
  Authenticator,
  Flex,
  Heading,
  Image,
  Menu,
  MenuItem,
  Text,
  View,
} from "@aws-amplify/ui-react";

import ValorantPic from "../public/valorant.jpg";

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <View>
          <Menu menuAlign="end">
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>

          <View margin={20} padding={20}>
            <Heading>{user && user.signInDetails?.loginId}</Heading>
          </View>

          <Flex gap={20} padding={50}>
            <View>
              <Flex direction={"column"} justifyContent={"center"}>
                <Heading>Hello, world!</Heading>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatum rerum amet iusto eos, quisquam tenetur maxime?
                  Veniam, consectetur cupiditate? Fugit ab assumenda soluta
                  quidem vitae tempore ipsum quis numquam blanditiis voluptate
                  placeat doloribus itaque ratione, porro, provident suscipit
                  cumque! Accusamus nemo atque officia modi distinctio enim
                  repellendus unde eligendi libero.
                </Text>
              </Flex>
            </View>
            <View>
              <Image src={ValorantPic} alt="Valorant game poster"></Image>
            </View>
          </Flex>
        </View>
      )}
    </Authenticator>
  );
}
