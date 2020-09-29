import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { MainContainer, Text } from "../../components";
import { useAuth } from "../../hooks/Auth";
import { ScreenRouteProps } from "../../routes/DrawerNavigator/types";
import api from "../../services/api";
import formatNumber from "../../utils/formatNumber";

import { SwitchBox, CardsBox, LineCardsBox, Card } from "./styles";

type CountryProps = {
  code: string;
  confirmed: number;
  country: string;
  critical: number;
  deaths: number;
  lastChange: string;
  lastUpdate: string;
  latitude: number;
  longitude: number;
  recovered: number;
  active?: number;
};

type StatisticsProps = ScreenRouteProps<"Statistics">;

const SwitchSelectorStyles = {
  initial: 0,
  textColor: "#fff",
  selectedColor: "#000",
  buttonColor: "#fff",
  borderColor: "transparent",
  backgroundColor: "#FFFFFF20",
  fontSize: 16,
  style: { marginTop: 24 },
  textStyle: { fontFamily: "Montserrat_400" },
  selectedTextStyle: { fontFamily: "Montserrat_500" },
  hasPadding: true,
};

type SelectorCountryValues = "byCountry" | "global";

type SelectorDateValues = "totals" | "daily";

type RoutePossibleTypes =
  | "globalTotals"
  | "dailyReportByCountry"
  | "reportByCountryName"
  | "dailyReportTotals";

type ParamsProps = {
  "date-format"?: string;
  date?: string;
  name?: string;
};

const possibleRoutes = {
  globalTotals: "/totals",
  dailyReportByCountry: "/report/country/name",
  reportByCountryName: "/country",
  dailyReportTotals: "/report/totals",
};

const Statistics = ({ ...rest }: StatisticsProps) => {
  const { user } = useAuth();

  const [selectorCountry, setSelectorCountry] = useState<SelectorCountryValues>(
    "byCountry"
  );

  const [selectorDate, setSelectorDate] = useState<SelectorDateValues>(
    "totals"
  );

  const [data, setData] = useState({} as CountryProps);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth().toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const dateToSendAsParam = "2020-05-10" || `${year}-${month}-${day}`;

  useEffect(() => {
    setLoading(true);

    let route: RoutePossibleTypes | null =
      selectorDate === "totals" && selectorCountry === "byCountry"
        ? "reportByCountryName"
        : null;

    if (!route)
      route =
        selectorDate === "totals" && selectorCountry === "global"
          ? "globalTotals"
          : null;

    if (!route)
      route =
        selectorDate === "daily" && selectorCountry === "byCountry"
          ? "dailyReportByCountry"
          : null;

    if (!route) route = "dailyReportTotals";

    let paramsToSend: ParamsProps | null =
      route === "dailyReportTotals"
        ? { "date-format": "YYYY-MM-DD", date: dateToSendAsParam }
        : null;

    if (!paramsToSend)
      paramsToSend =
        route === "dailyReportByCountry"
          ? {
              "date-format": "YYYY-MM-DD",
              date: dateToSendAsParam,
              name: user.country,
            }
          : null;

    if (!paramsToSend) paramsToSend = { name: user.country };

    api
      .get(possibleRoutes[route], {
        params: { ...paramsToSend },
      })
      .then((response) => {
        let responseData = response.data[0];

        if (route === "dailyReportByCountry") {
          const provinceData = response.data[0].provinces[0];
          delete responseData.provinces;

          responseData = {
            ...responseData,
            ...provinceData,
          };
        }

        setData(responseData);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 429") {
          Alert.alert(
            "Ocorreu um erro",
            "Tenha paciência depois de tocar os botões"
          );
          setLoading(false);
          return;
        }
        Alert.alert("Ocorreu um erro", err.message);
        setLoading(false);
      });
  }, [user.country, selectorCountry, selectorDate]);

  return (
    <MainContainer>
      <SwitchBox>
        <Text h3 regular>
          Estatísticas
        </Text>

        <SwitchSelector
          {...SwitchSelectorStyles}
          disabled={loading}
          onPress={(value) =>
            setSelectorCountry(value as SelectorCountryValues)
          }
          options={[
            { label: user.country, value: "byCountry" },
            { label: "Global", value: "global" },
          ]}
        />

        <SwitchSelector
          onPress={(value) => setSelectorDate(value as SelectorDateValues)}
          {...SwitchSelectorStyles}
          disabled={loading}
          textColor="#FFFFFF85"
          selectedColor="#FFF"
          buttonColor="#fff0"
          backgroundColor="#FFFFFF00"
          options={[
            {
              label: "Total",
              value: "totals",
            },
            {
              label: "Hoje",
              value: "daily",
            },
          ]}
        />
      </SwitchBox>

      {!!data.confirmed && (
        <CardsBox>
          <LineCardsBox>
            <Card>
              <Text>Contaminados</Text>
              <Text h3>{formatNumber(data.confirmed || 0)}</Text>
            </Card>

            <Card variant="red">
              <Text>Falecidos</Text>
              <Text h3>{formatNumber(data.deaths || 0)}</Text>
            </Card>
          </LineCardsBox>

          <LineCardsBox>
            <Card variant="green">
              <Text>Saudáveis</Text>
              <Text h4>{formatNumber(data.recovered || 0)}</Text>
            </Card>

            <Card variant="purple">
              <Text>Graves</Text>
              <Text h4>{formatNumber(data.critical || 0)}</Text>
            </Card>
          </LineCardsBox>

          {data.active && (
            <LineCardsBox>
              <Card variant="light-blue">
                <Text>Ainda ativos</Text>
                <Text h3>{formatNumber(data.active || 0)}</Text>
              </Card>
            </LineCardsBox>
          )}
        </CardsBox>
      )}
    </MainContainer>
  );
};

export default Statistics;
