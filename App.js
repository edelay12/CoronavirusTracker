import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Stats from "./screens/stats-screen";
import Countries from "./screens/country-screen";
import News from "./screens/news-screen";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import CountryDetails from "./screens/CountryDetails";
import material from "./native-base-theme/variables/platform";
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Info from "./screens/info-screen";
import InfoSelect from "./screens/InfoSelect-screen";
import SymptomsPDF from "./components/symptoms/symptoms";

export default class App extends React.Component {
  render() {
    const CountryStack = createStackNavigator();

    function CountriesStack() {
      return (
        <CountryStack.Navigator>
          <CountryStack.Screen
            name="CountryStats"
            component={Countries}
            options={{ title: "Country Stats" }}
          />
          <CountryStack.Screen
            name="Country"
            component={CountryDetails}
            options={({ route }) => ({ title: route.params.name })}
          />
        </CountryStack.Navigator>
      );
    }
    const InfoStack = createStackNavigator();

    function InformationStack() {
      return (
        <InfoStack.Navigator>
          <InfoStack.Screen
            name="InfoSelect"
            component={InfoSelect}
            options={{ title: "COVID-19 Info" }}
          />

          <InfoStack.Screen
            name="CDCStatements"
            component={Info}
            options={{ title: "CDC Statements" }}
          />
          <InfoStack.Screen
            name="Symptoms"
            component={SymptomsPDF}
            options={{ title: "Symptoms" }}
          />
        </InfoStack.Navigator>
      );
    }
    const Tab = createBottomTabNavigator();

    return (
      <>
        <StyleProvider style={getTheme(material)}>
          <NavigationContainer>
            <Tab.Navigator tabBarOptions={{ style: styles.tab }}>
              <Tab.Screen name="Live Data" component={Stats} />
              <Tab.Screen name="Countries" component={CountriesStack} />
              <Tab.Screen name="News" component={News} />
              <Tab.Screen
                name="Information"
                component={InformationStack}
                options={{ title: "Information" }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </StyleProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  tab: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#fff",
    color: "#fff",
    fontSize: 22
  }
});
