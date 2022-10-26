import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { pro, catg } from "/service/service";

const HelloWorldApp = () => {
  const [tt, setTt] = useState("");
  const [ee, setEe] = useState(false);

  useEffect(() => {
    pro()
      .then((malik) => {
        setTt(malik[0]);
      })
      .catch((Error) => {
        setEe(Error);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Titel:{tt.title}</Text>
      <Text>Price:{tt.price}</Text>
      <Text>Description:{tt.description}</Text>
      <Text>CSategory:{tt.category}</Text>
      {ee && <Text>Error in the server</Text>}
    </View>
  );
};
export default HelloWorldApp;
