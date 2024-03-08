import { Container, Content } from "./styles";
import { HomeHeader } from "../../components/HomeHeader";
import { CarStatus } from "../../components/CarStatus";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "../../libs/realm";
import { Historic } from "../../libs/realm/schemas/Historic";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function Home() {
  const { navigate } = useNavigation();
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);
  const historic = useQuery(Historic);

  function handleRegisterMoviment() {
    navigate("departure");
  }

  function fetchVehicle() {
    try {
      const vehicle = historic.filtered("status='departure'")[0];
      setVehicleInUse(vehicle);
    } catch (error) {
      Alert.alert(
        "Veículo em uso",
        "Não foi possível carregar o veículo em uso."
      );
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVehicle();
  }, []);

  return (
    <Container>
      <HomeHeader />
      <Content>
        <CarStatus
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMoviment}
        />
      </Content>
    </Container>
  );
}
